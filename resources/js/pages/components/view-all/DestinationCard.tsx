import { Clock, MapPin } from 'lucide-react';
import type { ViewAllDestination } from '@/config/destination';
import {
    destCard,
    destCardBadge,
    destCardBadgeText,
    destCardExplore,
    destCardImage,
    destCardMetaRow,
    destCardMetaText,
    destCardName,
    destCardPanel,
    destCardTagline,
} from '@/config/theme';
import { cn } from '@/lib/utils';
import ViewAllLink from '../shared/ViewAllLink';

interface DestinationCardProps {
    destination: ViewAllDestination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
    const { name, tagline, province, days, image } = destination;

    return (
        <article className={destCard}>
            {/* Image — 396:306 every breakpoint, 7px radius on md+ */}
            <div className={destCardImage}>
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Province badge — compact on mobile, 184×40 on md+ */}
                <span className={destCardBadge}>
                    <MapPin className="text-ink size-3 shrink-0 md:size-4" />
                    <span className={cn(destCardBadgeText)}>{province}</span>
                </span>
            </div>

            {/* Info panel — joined box on mobile, overlapping panel on md+ */}
            <div className={destCardPanel}>
                <h3 className={cn(destCardName)}>{name}</h3>
                <p className={cn(destCardTagline)}>{tagline}</p>
                <div className={destCardMetaRow}>
                    <Clock
                        className="text-ink size-2.5 shrink-0 md:size-5.25"
                        strokeWidth={2}
                    />
                    <span className={cn(destCardMetaText)}>{days}</span>
                    <ViewAllLink className={destCardExplore}>
                        Explore
                    </ViewAllLink>
                </div>
            </div>
        </article>
    );
}
