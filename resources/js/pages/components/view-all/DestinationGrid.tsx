import type { ViewAllDestination } from '@/config/destination';
import DestinationCard from './DestinationCard';

interface DestinationGridProps {
    destinations: ViewAllDestination[];
}

/** View-all card grid — 3 cols mobile (Figma), more on larger screens */
export default function DestinationGrid({
    destinations,
}: DestinationGridProps) {
    return (
        <div className="grid grid-cols-3 gap-x-1.25 gap-y-4.75 sm:grid-cols-4 lg:grid-cols-5">
            {destinations.map((destination) => (
                <DestinationCard
                    key={destination.name}
                    destination={destination}
                />
            ))}
        </div>
    );
}
