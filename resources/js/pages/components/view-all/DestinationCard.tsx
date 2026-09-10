import { Clock } from 'lucide-react';
import type { ViewAllDestination } from '@/config/destination';
import { fontPrimary } from '@/config/theme';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
    destination: ViewAllDestination;
}

/** View-all destination card — Figma 117×134 mobile card, pure Tailwind */
export default function DestinationCard({ destination }: DestinationCardProps) {
    const { name, tagline, province, days, image } = destination;

    return (
        <article className="rounded-card shadow-card overflow-hidden bg-white">
            <div className="bg-bg-placeholder relative aspect-[117/97]">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <span
                    className={cn(
                        fontPrimary,
                        'bg-canvas text-ink absolute top-2 left-1.25 flex h-2.75 items-center rounded-full px-1.5 text-[6px] font-bold tracking-[0.03em]',
                    )}
                >
                    {province}
                </span>
            </div>

            <div className="flex flex-col px-1.75 pt-2.75 pb-1.75">
                <h3
                    className={cn(
                        fontPrimary,
                        'text-xs-sm text-ink font-bold tracking-[0.03em]',
                    )}
                >
                    {name}
                </h3>
                <p
                    className={cn(
                        fontPrimary,
                        'text-2xs text-ink font-normal tracking-[0.03em]',
                    )}
                >
                    {tagline}
                </p>
                <div className="mt-1 flex items-center gap-1">
                    <Clock className="text-ink size-2.5 shrink-0" />
                    <span
                        className={cn(
                            fontPrimary,
                            'text-2xs text-ink font-bold',
                        )}
                    >
                        {days}
                    </span>
                    <a
                        href="#"
                        className={cn(
                            fontPrimary,
                            'text-2xs text-cta-accent ml-auto font-bold',
                        )}
                    >
                        Explore
                    </a>
                </div>
            </div>
        </article>
    );
}
