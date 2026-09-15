import { useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    itinCard,
    itinUnitPillActive,
    itinUnitPillBase,
    itinUnitPillIdle,
} from '@/config/theme';
import { altitudeProfile, type AltitudeStop } from '@/config/itinerary';
import AltitudeChart, { type AltitudeUnit } from './AltitudeChart';
import SectionHeading from './SectionHeading';
import useDesktop from './useDesktop';

interface AltitudeProfileProps {
    title: string;
    stops?: AltitudeStop[];
}

export default function AltitudeProfile({
    title,
    stops,
}: AltitudeProfileProps) {
    const [unit, setUnit] = useState<AltitudeUnit>('m');
    const chartRef = useRef<HTMLDivElement>(null);
    const isDesktop = useDesktop();

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
            itinUnitPillBase,
            'leading-itinerary-19',
            size,
            active ? itinUnitPillActive : itinUnitPillIdle,
        );

    return (
        <section aria-label={title} className="flex w-full flex-col gap-2.5">
            <SectionHeading title={title} />
            <div
                className={cn(
                    itinCard,
                    'flex w-full flex-col gap-2 p-2.5 md:p-6',
                )}
            >
                <div className="flex w-full items-center gap-1.5">
                    <span className="font-manrope text-xs-sm tracking-itinerary-label text-pale md:text-xs-md leading-5 font-semibold uppercase">
                        Altitude in:
                    </span>
                    <button
                        type="button"
                        aria-pressed={unit === 'm'}
                        onClick={() => setUnit('m')}
                        className={pill(
                            unit === 'm',
                            'h-6.75 w-auto cursor-pointer px-3',
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
                            'h-6.5 w-auto cursor-pointer px-3',
                        )}
                    >
                        {altitudeProfile.unitFeet}
                    </button>
                    <button
                        type="button"
                        onClick={downloadSvg}
                        className="border-card-line ml-auto flex h-6.5 cursor-pointer items-center gap-1 rounded-full border bg-white px-2.5 md:h-9"
                    >
                        <Download
                            aria-hidden
                            className="text-ink size-4 md:size-5"
                        />
                        <span className="font-manrope text-xs-sm leading-itinerary-19 text-ink md:text-xs-md font-medium uppercase underline underline-offset-2">
                            {altitudeProfile.download}
                        </span>
                    </button>
                </div>
                {}
                <div ref={chartRef} className="md:h-graph-h h-60 w-full">
                    <AltitudeChart
                        unit={unit}
                        stops={stops}
                        height={isDesktop ? 400 : 240}
                        plotWidth={isDesktop ? 1080 : 342}
                    />
                </div>
            </div>
        </section>
    );
}
