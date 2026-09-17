import type { ViewAllDestination } from '@/config/destination';
import UiDestinationCard from '@/components/ui/DestinationCard';

interface DestinationCardProps {
    destination: ViewAllDestination;
}

/**
 * View-all adapter: maps `tagline`/`days` onto the shared card's
 * `tagline`/`meta` so the grid keeps its own config type.
 */
export default function DestinationCard({ destination }: DestinationCardProps) {
    return (
        <UiDestinationCard
            image={destination.image}
            name={destination.name}
            province={destination.province}
            tagline={destination.tagline}
            meta={destination.days}
            href={destination.href}
        />
    );
}
