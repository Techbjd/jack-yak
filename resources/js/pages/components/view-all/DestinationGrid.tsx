import type { ViewAllDestination } from '@/config/destination';
import DestinationCard from './DestinationCard';

interface DestinationGridProps {
    destinations: ViewAllDestination[];
}

export default function DestinationGrid({
    destinations,
}: DestinationGridProps) {
    return (
        <div className="mx-auto grid w-full max-w-full grid-cols-3 gap-x-2 gap-y-4 md:gap-x-6 md:gap-y-8">
            {destinations.map((destination) => (
                <DestinationCard
                    key={destination.name}
                    destination={destination}
                />
            ))}
        </div>
    );
}
