import Header from './components/shared/Header';
import WhyExplore from './components/about/WhyExplore';
import AboutTopDestinations from './components/about/AboutTopDestinations';
import PlanTripSteps from './components/about/PlanTripSteps';
import TravelStories from './components/about/TravelStories';
import TrustStrip from './components/about/TrustStrip';
import AppLayout from '@/layouts/AppLayout';

export default function About() {
    return (
        <AppLayout
            title="About"
            shellClassName="bg-surface-warm"
            header={<Header tone="onLight" />}
        >
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
            <div className="hidden w-full sm:block">
                <TrustStrip />
            </div>
        </AppLayout>
    );
}
