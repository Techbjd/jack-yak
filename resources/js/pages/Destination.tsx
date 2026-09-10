import DestinationHero from './components/destination/DestinationHero';
import JourneyNepal from './components/destination/JourneyNepal';
import PopularDestinations from './components/destination/PopularDestinations';
import ImmersivePlan from './components/destination/ImmersivePlan';
import FeaturedGrid from './components/destination/FeaturedGrid';
import DiscoverNepal from './components/home/DiscoverNepal';
import AppLayout from '@/layouts/AppLayout';

export default function Destination() {
    return (
        <AppLayout title="Destinations">
            <div className="w-full">
                <DestinationHero />
            </div>
            <div className="w-full">
                <JourneyNepal />
            </div>
            <div className="w-full">
                <PopularDestinations />
            </div>
            <div className="w-full">
                <ImmersivePlan />
            </div>
            <div className="w-full">
                <FeaturedGrid />
            </div>
            <div className="w-full">
                <DiscoverNepal />
            </div>
        </AppLayout>
    );
}
