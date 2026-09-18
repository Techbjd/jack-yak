import { useMemo } from 'react';
import {
    Area,
    AreaChart,
    LabelList,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { altitudeProfile, type AltitudeStop } from '@/config/itinerary';

export type AltitudeUnit = 'm' | 'ft';

const MARGIN_TOP = 16;
const XAXIS_H = 62;

const toFeet = (meters: number): number => Math.round(meters * 3.28084);

const formatValue = (value: number, unit: AltitudeUnit): string =>
    unit === 'm'
        ? `${value.toLocaleString('en-US')}${altitudeProfile.unitMeterShort}`
        : `${value.toLocaleString('en-US')}${altitudeProfile.unitFeetShort}`;

interface ChartRow {
    place: string;
    value: number;
}

function labelPositions(
    values: number[],
    d0: number,
    d1: number,
    height: number,
    plotWidth: number,
): number[] {
    const plotH = height - MARGIN_TOP - XAXIS_H;
    const y = (v: number): number =>
        MARGIN_TOP + (1 - (v - d0) / (d1 - d0)) * plotH;
    const gapX = plotWidth / Math.max(values.length - 1, 1);
    const out: number[] = [];
    values.forEach((v, i) => {
        let ly = y(v) - 10;
        if (i > 0 && gapX < 40 && Math.abs(ly - out[i - 1]) < 12) {
            ly = v > values[i - 1] ? out[i - 1] - 12 : out[i - 1] + 12;
        }
        out.push(Math.min(Math.max(ly, 4), height - XAXIS_H - 6));
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
            className="fill-ash font-inter"
        >
            {payload?.value}
        </text>
    );
}

function AltitudeTooltip({
    active = false,
    payload,
    unit,
}: {
    active?: boolean;
    payload?: Array<{ payload: ChartRow }>;
    unit: AltitudeUnit;
}): React.JSX.Element | null {
    const row = active === true ? payload?.[0]?.payload : undefined;
    if (row === undefined) {
        return null;
    }
    return (
        <div className="font-inter shadow-card bg-bubble rounded-md px-2.5 py-1.5 text-xs leading-5 font-semibold whitespace-nowrap text-white">
            <p>{row.place}</p>
            <p>{formatValue(row.value, unit)}</p>
        </div>
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
            className="fill-abyss font-inter"
        >
            {formatValue(Number(value), unit)}
        </text>
    );
}

interface AltitudeChartProps {
    unit: AltitudeUnit;
    stops?: AltitudeStop[];
    height?: number;
    plotWidth?: number;
}

export default function AltitudeChart({
    unit,
    stops = altitudeProfile.stops,
    height = 240,
    plotWidth = 342,
}: AltitudeChartProps) {
    const rows: ChartRow[] = useMemo(
        () =>
            stops.map((s) => ({
                place: s.place,
                value: unit === 'm' ? s.meters : toFeet(s.meters),
            })),
        [unit, stops],
    );

    const { d0, d1, positions } = useMemo(() => {
        const values = rows.map((r) => r.value);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const range = Math.max(max - min, 1);
        const lo = min - range * 0.1;
        const hi = max + range * 0.15;
        return {
            d0: lo,
            d1: hi,
            positions: labelPositions(values, lo, hi, height, plotWidth),
        };
    }, [rows, height, plotWidth]);

    return (
        <ResponsiveContainer width="100%" height="100%">
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
                <Tooltip
                    content={<AltitudeTooltip unit={unit} />}
                    cursor={{
                        stroke: 'var(--color-chart-line)',
                        strokeOpacity: 0.3,
                    }}
                />
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
