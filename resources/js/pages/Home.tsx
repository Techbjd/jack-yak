import Hero from './components/home/Hero';
import NepalMap from './components/home/NepalMap';
import MapQuote from './components/home/MapQuote';
import AboutJackyak from './components/home/AboutJackyak';
import DiscoverNepal from './components/home/DiscoverNepal';
import TopDestinations from './components/home/TopDestination';
import AppLayout from '@/layouts/AppLayout';
import { IMAGES } from '@/config/images';

export default function Home() {
    return (
        <AppLayout title="Home">
            <Hero />
            <div className="relative z-20 flex w-full flex-col items-center gap-16 py-16 md:gap-20 md:py-70">
                <NepalMap />
                <MapQuote />
            </div>
            <div className="relative z-10 w-full">
                <AboutJackyak />
            </div>
            <div className="relative z-10 hidden w-full md:block">
                <img
                    src={IMAGES.home.mountainDivider}
                    alt="Mountain Image"
                    className="m-auto h-auto w-full object-cover px-2"
                />
            </div>
            <div className="relative z-10 w-full">
                <DiscoverNepal />
            </div>
            <div className="relative z-10 w-full">
                <TopDestinations />
            </div>
        </AppLayout>
    );
}
