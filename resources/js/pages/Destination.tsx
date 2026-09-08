import { Head } from '@inertiajs/react';
import DestinationHero from './components/destination/DestinationHero';
import JourneyNepal from './components/destination/JourneyNepal';
import PopularDestinations from './components/destination/PopularDestinations';
import ImmersivePlan from './components/destination/ImmersivePlan';
import FeaturedGrid from './components/destination/FeaturedGrid';
import DiscoverNepal from './components/home/DiscoverNepal';
import Footer from './components/shared/Footer';

export default function Destination() {
    return (
        <div className="mx-auto flex w-full max-w-360 flex-col items-center">
            <Head title="Destinations" />
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
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}
