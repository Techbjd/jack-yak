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
        <>
            <Hero />
            <div className=" max-h-300 flex flex-col items-center gap-16 md:gap-65 mt-24 md:mt-39">
                <NepalMap />
                <MapQuote />
            </div>
            <AboutJackyak />
            <img src="/Mountain.png" alt="Mountain Image" className='w-full h-auto object-fit px-2 m-auto' />
            <DiscoverNepal />
            <TopDestinations />
            <Footer />
        </>
    );
}
