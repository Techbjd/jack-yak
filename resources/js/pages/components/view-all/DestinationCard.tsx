import { Clock, MapPin } from 'lucide-react';
import type { ViewAllDestination } from '@/config/destination';
import { fontPrimary } from '@/config/theme';
import { cn } from '@/lib/utils';
import ViewAllLink from '../shared/ViewAllLink';

interface DestinationCardProps {
    destination: ViewAllDestination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
    const { name, tagline, province, days, image } = destination;

    return (
        <article className="mx-auto flex w-full max-w-[396px] flex-col items-center">
            {/* Image — 396×306, 7px radius */}
            <div className="bg-bg-placeholder rounded-t-card md:shadow-card relative aspect-396/306 w-full overflow-hidden md:rounded-[7px]">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Province badge — compact on mobile, 184×40 on md+ */}
                <span className="bg-canvas absolute top-1.5 left-1.5 flex h-6 w-auto max-w-[calc(100%-12px)] items-center gap-1 rounded-md px-1.5 md:top-[18px] md:left-[16px] md:h-[40px] md:w-[184px] md:max-w-[calc(100%-32px)] md:gap-[5px] md:rounded-[10px] md:px-[11px]">
                    <MapPin className="text-ink size-3 shrink-0 md:size-4" />
                    <span
                        className={cn(
                            fontPrimary,
                            'text-midnight truncate text-[10px] leading-tight font-bold tracking-[0.03em] md:text-[16px] md:leading-[22px]',
                        )}
                    >
                        {province}
                    </span>
                </span>
            </div>

            {/* Info panel — overlaps image, compact on mobile, 392-wide 18px radius on md+ */}
            <div className="shadow-card rounded-b-card relative z-10 w-full bg-white px-2 pt-1.5 pb-1.5 md:-mt-2 md:w-[calc(100%-4px)] md:rounded-[18px] md:px-[27px] md:pt-[28px] md:pb-5">
                <h3
                    className={cn(
                        fontPrimary,
                        'text-ink text-[10px] leading-[14px] font-bold tracking-[0.03em] md:text-[24px] md:leading-[33px]',
                    )}
                >
                    {name}
                </h3>
                <p
                    className={cn(
                        fontPrimary,
                        'text-ink mt-0.5 text-[8px] leading-[11px] font-normal tracking-[0.03em] md:mt-[10px] md:text-[16px] md:leading-[22px] md:font-semibold',
                    )}
                >
                    {tagline}
                </p>
                <div className="mt-1.5 flex items-center gap-1 md:mt-5 md:gap-1.5">
                    <Clock
                        className="text-ink size-2.5 shrink-0 md:size-[21px]"
                        strokeWidth={2}
                    />
                    <span
                        className={cn(
                            fontPrimary,
                            'text-ink text-[8px] leading-[11px] font-bold tracking-[0.03em] md:text-[16px] md:leading-[22px]',
                        )}
                    >
                        {days}
                    </span>
                    <ViewAllLink className="md:text-cta ml-auto leading-[11px] md:leading-[22px]">
                        Explore
                    </ViewAllLink>
                </div>
            </div>
        </article>
    );
}
