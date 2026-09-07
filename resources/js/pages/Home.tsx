import { Head } from '@inertiajs/react';
import Hero from './components/home/Hero';
import NepalMap from './components/home/NepalMap';
import MapQuote from './components/home/MapQuote';
import AboutJackyak from './components/home/AboutJackyak';
import DiscoverNepal from './components/home/DiscoverNepal';
import TopDestinations from './components/home/TopDestination';
import Footer from './components/shared/Footer';


export default function Home() {
    return (
        <div className="mx-auto flex w-full max-w-360  flex-col items-center justify-center ">
            <Hero />
            <div className="relative z-20 w-full flex flex-col items-center gap-16 py-16 md:py-70 md:gap-20">
                <NepalMap />
                <MapQuote />
            </div>
            <div className="relative z-10 w-full">
                <AboutJackyak />
            </div>
            <div className="relative z-10 hidden w-full md:block">
                <img
                    src="/Mountain.png"
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
            <div className="relative z-10 w-full">
                <Footer />
            </div>
        </div>
    );
}
