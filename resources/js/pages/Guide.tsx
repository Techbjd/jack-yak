import Header from './components/shared/Header';
import WhyExplore from './components/guide/WhyExplore';
import GuideTopDestinations from './components/guide/GuideTopDestinations';
import PlanTripSteps from './components/guide/PlanTripSteps';
import TravelStories from './components/guide/TravelStories';
import TrustStrip from './components/guide/TrustStrip';
import AppLayout from '@/layouts/AppLayout';

export default function Guide() {
    return (
        <AppLayout
            title="guide"
            shellClassName="bg-surface-warm"
            header={<Header tone="onLight" />}
        >
            <div className="w-full">
                <WhyExplore />
            </div>
            <div className="w-full">
                <GuideTopDestinations />
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
