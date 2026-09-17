import { Clock, MapPin } from 'lucide-react';
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
import ViewAllLink from '@/components/ui/ViewAllLink';

interface DestinationCardProps {
    image: string;
    name: string;
    province: string;
    tagline: string;
    meta: string;
    href: string;
    /** Replaces the article class (e.g. guide carousel sizing). */
    className?: string;
    eager?: boolean;
}

/**
 * Image + province badge + name + tagline + duration + Explore link.
 * Unifies the view-all card and the guide's identical internal card —
 * callers map their own field names (`subtitle`/`duration`,
 * `tagline`/`days`) onto `tagline`/`meta`.
 */
export default function DestinationCard({
    image,
    name,
    province,
    tagline,
    meta,
    href,
    className,
    eager = false,
}: DestinationCardProps) {
    return (
        <article className={className ?? destCard}>
            <div className={destCardImage}>
                <a
                    href={href}
                    aria-label={`Explore ${name}`}
                    className="absolute inset-0"
                >
                    <img
                        src={image}
                        alt={name}
                        loading={eager ? 'eager' : 'lazy'}
                        className="h-full w-full object-cover"
                    />
                </a>
                <span className={destCardBadge}>
                    <MapPin className="text-ink size-3 shrink-0 md:size-4" />
                    <span className={cn(destCardBadgeText)}>{province}</span>
                </span>
            </div>

            <div className={destCardPanel}>
                <h3 className={cn(destCardName)}>{name}</h3>
                <p className={cn(destCardTagline)}>{tagline}</p>
                <div className={destCardMetaRow}>
                    <Clock
                        className="text-ink size-2.5 shrink-0 md:size-5.25"
                        strokeWidth={2}
                    />
                    <span className={cn(destCardMetaText)}>{meta}</span>
                    <ViewAllLink href={href} className={destCardExplore}>
                        Explore
                    </ViewAllLink>
                </div>
            </div>
        </article>
    );
}
