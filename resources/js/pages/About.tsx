import { Head } from '@inertiajs/react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import WhyExplore from './components/about/WhyExplore';
import AboutTopDestinations from './components/about/AboutTopDestinations';
import PlanTripSteps from './components/about/PlanTripSteps';
import TravelStories from './components/about/TravelStories';
import TrustStrip from './components/about/TrustStrip';

export default function About() {
    return (
        <div className="mx-auto flex w-full max-w-360 flex-col items-center bg-slate-50">
            <Head title="About" />
            <div className="w-full">
                <Header tone="onLight" />
            </div>
            <div className="w-full">
                <WhyExplore />
            </div>
            <div className="w-full">
                <AboutTopDestinations />
            </div>
            <div className="w-full">
                <PlanTripSteps />
            </div>
            <div className="w-full">
                <TravelStories />
            </div>
            <div className="w-full hidden sm:block">
                <TrustStrip />
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}
