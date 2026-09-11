import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { itinCard, itinH2, itinRailTeal } from '@/config/theme';
import { IMAGES } from '@/config/images';

interface AltitudeProfileProps {
    title: string;
}

/** Altitude profile — teal rail heading, unit pills + download, chart image */
export default function AltitudeProfile({ title }: AltitudeProfileProps) {
    return (
        <section aria-label={title} className="flex w-full flex-col gap-2.5">
            <div className="flex w-full items-stretch gap-2.5">
                <span aria-hidden className={itinRailTeal} />
                <h2 className={itinH2}>{title}</h2>
            </div>
            <div className={cn(itinCard, 'flex w-full flex-col gap-2 p-2.5')}>
                <div className="flex w-full items-center gap-1.5">
                    <span className="font-manrope text-xs-sm tracking-itinerary-label text-pale leading-5 font-semibold uppercase">
                        Altitude in:
                    </span>
                    <span
                        aria-current="true"
                        className="font-manrope border-sky-line bg-sky-tint text-xs-md leading-itinerary-19 text-slate-text flex h-6.75 w-15.25 items-center justify-center rounded-full border font-bold uppercase"
                    >
                        Meter
                    </span>
                    <span className="font-manrope border-ash text-xs-md leading-itinerary-19 text-slate-text flex h-6.5 w-11.75 items-center justify-center rounded-full border bg-white font-medium uppercase">
                        Feet
                    </span>
                    <a
                        href={IMAGES.itinerary.altitudeChart}
                        download
                        className="border-card-line ml-auto flex h-6.5 items-center gap-1 rounded-full border bg-white px-2.5"
                    >
                        <Download aria-hidden className="text-ink size-4" />
                        <span className="font-manrope text-xs-sm leading-itinerary-19 text-ink font-medium uppercase underline underline-offset-2">
                            Download
                        </span>
                    </a>
                </div>
                <div className="h-45.25 w-full overflow-auto">
                    <img
                        src={IMAGES.itinerary.altitudeChart}
                        alt="Everest Base Camp trek altitude chart"
                        loading="lazy"
                        className="h-full min-w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
