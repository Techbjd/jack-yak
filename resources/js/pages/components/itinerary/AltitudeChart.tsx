import { useMemo } from 'react';
import {
    Area,
    AreaChart,
    LabelList,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts';
import { altitudeProfile } from '@/config/itinerary';

export type AltitudeUnit = 'm' | 'ft';

/** Fixed chart frame — matches the h-60 wrapper + axis sizes below */
const CHART_H = 240;
const MARGIN_TOP = 16;
const XAXIS_H = 62;
/** Inner card width estimate for the label stagger (page caps at 402px) */
const EST_PLOT_W = 342;

const toFeet = (meters: number): number => Math.round(meters * 3.28084);

const formatValue = (value: number, unit: AltitudeUnit): string =>
    unit === 'm'
        ? `${value.toLocaleString('en-US')}m`
        : `${value.toLocaleString('en-US')}ft`;

interface ChartRow {
    place: string;
    value: number;
}

/**
 * Absolute y for each value label, staggered so adjacent labels never
 * collide (up on the ascent, down onto the fill on the descent).
 * Pure function of the data — works for any stops array from the backend.
 */
function labelPositions(values: number[], d0: number, d1: number): number[] {
    const plotH = CHART_H - MARGIN_TOP - XAXIS_H;
    const y = (v: number): number =>
        MARGIN_TOP + (1 - (v - d0) / (d1 - d0)) * plotH;
    const gapX = EST_PLOT_W / Math.max(values.length - 1, 1);
    const out: number[] = [];
    values.forEach((v, i) => {
        let ly = y(v) - 10;
        if (i > 0 && gapX < 40 && Math.abs(ly - out[i - 1]) < 12) {
            ly = v > values[i - 1] ? out[i - 1] - 12 : out[i - 1] + 12;
        }
        out.push(Math.min(Math.max(ly, 4), CHART_H - XAXIS_H - 6));
    });
    return out;
}

function PlaceTick({
    x = 0,
    y = 0,
    payload,
}: {
    x?: number;
    y?: number;
    payload?: { value?: string };
}): React.JSX.Element {
    const ly = y + 6;
    return (
        <text
            x={x}
            y={ly}
            textAnchor="middle"
            fontSize={9}
            transform={`rotate(-45 ${x} ${ly})`}
            className="fill-ash font-manrope"
        >
            {payload?.value}
        </text>
    );
}

function ChartDot({
    cx = 0,
    cy = 0,
}: {
    cx?: number;
    cy?: number;
}): React.JSX.Element {
    return <circle cx={cx} cy={cy} r={3.5} fill="var(--color-chart-line)" />;
}

function ValueLabel({
    x = 0,
    index = 0,
    value = 0,
    unit,
    positions,
}: {
    x?: number;
    index?: number;
    value?: number | string;
    unit: AltitudeUnit;
    positions: number[];
}): React.JSX.Element {
    return (
        <text
            x={x}
            y={positions[index] ?? 0}
            textAnchor="middle"
            fontSize={9}
            fontWeight={600}
            className="fill-abyss font-manrope"
        >
            {formatValue(Number(value), unit)}
        </text>
    );
}

interface AltitudeChartProps {
    unit: AltitudeUnit;
}

/**
 * Altitude area chart (Recharts SVG) — feed it ANY {place, meters}[]
 * from the backend; scales, dots and staggered labels adapt automatically.
 */
export default function AltitudeChart({ unit }: AltitudeChartProps) {
    const rows: ChartRow[] = useMemo(
        () =>
            altitudeProfile.stops.map((s) => ({
                place: s.place,
                value: unit === 'm' ? s.meters : toFeet(s.meters),
            })),
        [unit],
    );

    const { d0, d1, positions } = useMemo(() => {
        const values = rows.map((r) => r.value);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const range = Math.max(max - min, 1);
        const lo = min - range * 0.1;
        const hi = max + range * 0.15;
        return { d0: lo, d1: hi, positions: labelPositions(values, lo, hi) };
    }, [rows]);

    return (
        <ResponsiveContainer width="100%" height={CHART_H}>
            <AreaChart
                data={rows}
                margin={{ top: MARGIN_TOP, right: 10, bottom: 0, left: 10 }}
            >
                <XAxis
                    dataKey="place"
                    interval={0}
                    tickLine={false}
                    axisLine={false}
                    height={XAXIS_H}
                    padding={{ left: 24, right: 24 }}
                    tick={<PlaceTick />}
                />
                <YAxis hide domain={[d0, d1]} />
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="var(--color-chart-line)"
                    strokeWidth={2}
                    fill="var(--color-chart-fill)"
                    dot={<ChartDot />}
                    isAnimationActive={false}
                >
                    <LabelList
                        dataKey="value"
                        content={
                            <ValueLabel unit={unit} positions={positions} />
                        }
                    />
                </Area>
            </AreaChart>
        </ResponsiveContainer>
    );
}
