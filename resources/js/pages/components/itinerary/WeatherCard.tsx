import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { cn } from '@/lib/utils';
import {
    itinCard,
    itinUnitPillActive,
    itinUnitPillBase,
    itinUnitPillIdle,
} from '@/config/theme';
import { altitudeProfile, trekWeather } from '@/config/itinerary';
import AltitudeChart, { type AltitudeUnit } from './AltitudeChart';
import SectionHeading from './SectionHeading';
import useDesktop from './useDesktop';

type Tab = 'daily' | 'monthly';
type Unit = 'c' | 'f';

interface ChartRow {
    label: string;
    value: number;
    min: number;
    max: number;
}

const toFeet = (meters: number): string =>
    Math.round(meters * 3.28084).toLocaleString('en-US');

const toUnit = (celsius: number, unit: Unit): number =>
    unit === 'c' ? Math.round(celsius) : Math.round((celsius * 9) / 5 + 32);

const unitSuffix = (unit: Unit): string => (unit === 'c' ? '° C' : '° F');

/** Blue Min/Max bubble above each dot (matches Figma screenshot) */
function WeatherTooltip(props: {
    active?: boolean;
    payload?: Array<{ payload: ChartRow }>;
    unit: Unit;
}): React.JSX.Element | null {
    const { active, payload, unit } = props;
    const row = active === true ? payload?.[0]?.payload : undefined;
    if (row === undefined) {
        return null;
    }
    return (
        <div className="font-manrope shadow-card rounded-md bg-[#29a9e1] px-2.5 py-1.5 text-xs leading-5 font-semibold whitespace-nowrap text-white">
            <p>
                Min: {toUnit(row.min, unit)}
                {unitSuffix(unit)}
            </p>
            <p>
                Max: {toUnit(row.max, unit)}
                {unitSuffix(unit)}
            </p>
        </div>
    );
}

/** Angled day/altitude tick under each dot (matches Figma screenshot) */
function DayTick(props: {
    x?: number;
    y?: number;
    payload?: { value?: string };
}): React.JSX.Element {
    const { x = 0, y = 0, payload } = props;
    return (
        <text
            x={x}
            y={y + 12}
            textAnchor="end"
            fontSize={11}
            transform={`rotate(-18 ${x} ${y + 12})`}
            className="fill-slate-text font-manrope"
        >
            {payload?.value}
        </text>
    );
}

/** Weather card — pill tabs + month heading + daily/monthly line chart (flow layout) */
export default function WeatherCard() {
    const [tab, setTab] = useState<Tab>('daily');
    const [unit, setUnit] = useState<Unit>('c');
    const [monthIndex, setMonthIndex] = useState(0);
    /** Mobile shows a copy of the elevation chart (the temperature plot
     *  is too cramped at 402px) with its own local m/ft toggle. */
    const [altUnit, setAltUnit] = useState<AltitudeUnit>('m');
    /** Desktop plot is 1100px wide inside the 1150px track card (the
     *  section row fixes cards at w-graph-card-w from md up, so tablet
     *  renders at full desktop width too) — track the md breakpoint so
     *  the chart gets a numeric pixel width instead of a nested
     *  min-width div (single graph div structure). Keep at md: the
     *  switch follows the track width, not sibling sections. */
    const isDesktop = useDesktop();

    const count = trekWeather.months.length;
    const prev = (): void => setMonthIndex((i) => (i - 1 + count) % count);
    const next = (): void => setMonthIndex((i) => (i + 1) % count);

    /** January is the base daily profile; other months shift it by their
     *  average-temperature delta so the heading month visibly moves the line. */
    const dailyRows: ChartRow[] = useMemo(() => {
        const avg = (m: { high: number; low: number }): number =>
            (m.high + m.low) / 2;
        const offset =
            avg(trekWeather.months[monthIndex]) - avg(trekWeather.months[0]);
        return trekWeather.daily.map((d) => {
            const min = d.min + offset;
            const max = d.max + offset;
            return {
                label: `${d.day} (${d.meters.toLocaleString('en-US')} m / ${toFeet(d.meters)} ft)`,
                min: toUnit(min, unit),
                max: toUnit(max, unit),
                value: toUnit(max, unit),
            };
        });
    }, [monthIndex, unit]);

    const monthlyRows: ChartRow[] = useMemo(
        () =>
            trekWeather.months.map((m) => ({
                label: m.month.slice(0, 3),
                min: toUnit(m.low, unit),
                max: toUnit(m.high, unit),
                value: toUnit((m.high + m.low) / 2, unit),
            })),
        [unit],
    );

    const rows = tab === 'daily' ? dailyRows : monthlyRows;
    const heading =
        tab === 'daily'
            ? trekWeather.months[monthIndex].month
            : 'January – December';

    const tabPill = (activeTab: Tab): string =>
        cn(
            'font-manrope text-base-md flex h-11 shrink-0 cursor-pointer items-center justify-center rounded-full border px-5 font-bold whitespace-nowrap md:h-9.5 md:font-semibold',
            activeTab === tab
                ? 'border-cta bg-cta text-white'
                : 'border-card-line text-slate-text md:text-slate-mute bg-white',
        );

    const unitPill = (active: boolean): string =>
        cn(
            itinUnitPillBase,
            'h-6.75 cursor-pointer px-3',
            active ? itinUnitPillActive : itinUnitPillIdle,
        );

    return (
        <section
            aria-label={trekWeather.title}
            className="flex w-full flex-col gap-2.5"
        >
            <SectionHeading title={trekWeather.title} />
            <div
                className={cn(
                    itinCard,
                    'flex w-full flex-col gap-4 p-4 md:p-6',
                )}
            >
                <div
                    role="tablist"
                    aria-label={trekWeather.title}
                    className="no-scrollbar hidden w-full gap-3 overflow-x-auto md:flex"
                >
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 'daily'}
                        onClick={() => setTab('daily')}
                        className={tabPill('daily')}
                    >
                        {trekWeather.dailyTab}
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 'monthly'}
                        onClick={() => setTab('monthly')}
                        className={tabPill('monthly')}
                    >
                        {trekWeather.monthlyTab}
                    </button>
                </div>

                <div className="bg-line-soft h-px w-full" />

                <div className="hidden w-full flex-wrap items-center gap-2 md:flex">
                    <h3 className="font-manrope text-lg-xl text-ink md:text-md-xl md:text-graph-title md:tracking-review font-medium">
                        {heading}
                    </h3>
                    <span className="ml-auto flex items-center gap-2">
                        <span className="font-manrope text-xs-sm tracking-itinerary-label text-pale md:text-xs-md font-semibold uppercase">
                            {trekWeather.tempIn}
                        </span>
                        <button
                            type="button"
                            aria-pressed={unit === 'c'}
                            onClick={() => setUnit('c')}
                            className={unitPill(unit === 'c')}
                        >
                            {trekWeather.unitCelsius}
                        </button>
                        <button
                            type="button"
                            aria-pressed={unit === 'f'}
                            onClick={() => setUnit('f')}
                            className={unitPill(unit === 'f')}
                        >
                            {trekWeather.unitFahrenheit}
                        </button>
                    </span>
                </div>

                {/* Single graph div (Figma Container): 400px tall on desktop,
                    plot renders full-size with no inner scroller — the whole
                    card scrolls in the section snap row instead. Square
                    prev/next buttons overlay bottom-right; mobile keeps the
                    full-width fixed chart with no buttons. */}
                <div className="md:h-graph-h relative hidden h-[300px] w-full md:block">
                    <ResponsiveContainer
                        width={isDesktop ? 1100 : '100%'}
                        height="100%"
                    >
                        <LineChart
                            data={rows}
                            margin={{
                                top: 44,
                                right: 12,
                                bottom: 0,
                                left: 0,
                            }}
                        >
                            <CartesianGrid
                                vertical={false}
                                stroke="var(--color-line-soft)"
                            />
                            <XAxis
                                dataKey="label"
                                interval={0}
                                tickLine={false}
                                axisLine={{
                                    stroke: 'var(--color-line-soft)',
                                }}
                                height={64}
                                tick={<DayTick />}
                            />
                            <YAxis
                                width={36}
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fontSize: 12,
                                    fill: 'var(--color-pale)',
                                }}
                                domain={['auto', 'auto']}
                            />
                            <Tooltip
                                content={<WeatherTooltip unit={unit} />}
                                cursor={{
                                    stroke: 'var(--color-chart-line)',
                                    strokeOpacity: 0.3,
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="var(--color-chart-line)"
                                strokeWidth={2.5}
                                dot={{
                                    r: 4,
                                    fill: 'var(--color-chart-line)',
                                    strokeWidth: 0,
                                }}
                                activeDot={{
                                    r: 5,
                                    fill: 'var(--color-chart-line)',
                                    strokeWidth: 0,
                                }}
                                isAnimationActive={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    {tab === 'daily' && (
                        <span className="absolute right-3.5 bottom-3.5 gap-2.5 md:flex">
                            <button
                                type="button"
                                onClick={prev}
                                disabled={monthIndex === 0}
                                aria-label={trekWeather.prevSlide}
                                className="bg-hairline flex size-10 cursor-pointer items-center justify-center rounded-lg transition-opacity hover:opacity-80 disabled:cursor-default disabled:opacity-35 disabled:hover:opacity-35"
                            >
                                <ChevronLeft
                                    aria-hidden
                                    className="text-ink size-4"
                                />
                            </button>
                            <button
                                type="button"
                                onClick={next}
                                aria-label={trekWeather.nextSlide}
                                className="bg-hairline flex size-10 cursor-pointer items-center justify-center rounded-lg transition-opacity hover:opacity-80"
                            >
                                <ChevronRight
                                    aria-hidden
                                    className="text-ink size-4"
                                />
                            </button>
                        </span>
                    )}
                </div>
                {/* Mobile-only elevation copy — same AltitudeChart as the
                    altitude card (single graph div, no new logic). Desktop
                    keeps the temperature chart above. */}
                <div className="flex w-full flex-col gap-2 md:hidden">
                    <div className="flex w-full flex-wrap items-center gap-2">
                        <span className="font-manrope text-xs-sm tracking-itinerary-label text-pale font-semibold uppercase">
                            Altitude in:
                        </span>
                        <span className="ml-auto flex items-center gap-2">
                            <button
                                type="button"
                                aria-pressed={altUnit === 'm'}
                                onClick={() => setAltUnit('m')}
                                className={unitPill(altUnit === 'm')}
                            >
                                {altitudeProfile.unitMeter}
                            </button>
                            <button
                                type="button"
                                aria-pressed={altUnit === 'ft'}
                                onClick={() => setAltUnit('ft')}
                                className={unitPill(altUnit === 'ft')}
                            >
                                {altitudeProfile.unitFeet}
                            </button>
                        </span>
                    </div>
                    <div className="relative h-75 w-full">
                        <AltitudeChart unit={altUnit} height={300} />
                    </div>
                </div>
            </div>
        </section>
    );
}
