import { useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { itinAltTitle, itinCard, itinRailTeal } from '@/config/theme';
import { altitudeProfile } from '@/config/itinerary';
import AltitudeChart, { type AltitudeUnit } from './AltitudeChart';

interface AltitudeProfileProps {
    title: string;
}

/** Altitude profile — Figma 16px rail heading, working unit pills, live SVG chart */
export default function AltitudeProfile({ title }: AltitudeProfileProps) {
    const [unit, setUnit] = useState<AltitudeUnit>('m');
    const chartRef = useRef<HTMLDivElement>(null);

    const downloadSvg = (): void => {
        const node = chartRef.current?.querySelector('svg');
        if (!node) {
            return;
        }
        const url = URL.createObjectURL(
            new Blob([new XMLSerializer().serializeToString(node)], {
                type: 'image/svg+xml',
            }),
        );
        const a = document.createElement('a');
        a.href = url;
        a.download = altitudeProfile.downloadFile;
        a.click();
        URL.revokeObjectURL(url);
    };

    const pill = (active: boolean, size: string): string =>
        cn(
            'font-manrope text-xs-md leading-itinerary-19 flex items-center justify-center rounded-full border uppercase',
            size,
            active
                ? 'border-sky-line bg-sky-tint text-slate-text font-bold'
                : 'border-ash text-slate-text bg-white font-medium',
        );

    return (
        <section aria-label={title} className="flex w-full flex-col gap-2.5">
            <div className="flex w-full items-stretch gap-2.5">
                <span aria-hidden className={itinRailTeal} />
                <h2 className={itinAltTitle}>{title}</h2>
            </div>
            <div className={cn(itinCard, 'flex w-full flex-col gap-2 p-2.5')}>
                <div className="flex w-full items-center gap-1.5">
                    <span className="font-manrope text-xs-sm tracking-itinerary-label text-pale leading-5 font-semibold uppercase">
                        Altitude in:
                    </span>
                    <button
                        type="button"
                        aria-pressed={unit === 'm'}
                        onClick={() => setUnit('m')}
                        className={pill(
                            unit === 'm',
                            'h-6.75 w-15.25 cursor-pointer',
                        )}
                    >
                        {altitudeProfile.unitMeter}
                    </button>
                    <button
                        type="button"
                        aria-pressed={unit === 'ft'}
                        onClick={() => setUnit('ft')}
                        className={pill(
                            unit === 'ft',
                            'h-6.5 w-11.75 cursor-pointer',
                        )}
                    >
                        {altitudeProfile.unitFeet}
                    </button>
                    <button
                        type="button"
                        onClick={downloadSvg}
                        className="border-card-line ml-auto flex h-6.5 cursor-pointer items-center gap-1 rounded-full border bg-white px-2.5"
                    >
                        <Download aria-hidden className="text-ink size-4" />
                        <span className="font-manrope text-xs-sm leading-itinerary-19 text-ink font-medium uppercase underline underline-offset-2">
                            {altitudeProfile.download}
                        </span>
                    </button>
                </div>
                <div ref={chartRef} className="w-full">
                    <AltitudeChart unit={unit} />
                </div>
            </div>
        </section>
    );
}
