import Header from '@/components/ui/Header';
import WhyExplore from './components/guide/WhyExplore';
import GuideTopDestinations from './components/guide/GuideTopDestinations';
import Section from '@/components/ui/Section';
import PlanTripSteps from './components/guide/PlanTripSteps';
import TravelStories from './components/guide/TravelStories';
import TrustStrip from './components/guide/TrustStrip';
import AppLayout from '@/layouts/AppLayout';
import { pageTitles } from '@/config/site';

export default function Guide() {
    return (
        <AppLayout
            title={pageTitles.guide}
            shellClassName="bg-white"
            header={<Header tone="onLight" />}
        >
            <Section>
                <WhyExplore />
            </Section>
            <Section>
                <GuideTopDestinations />
            </Section>
            <Section>
                <PlanTripSteps />
            </Section>
            <Section>
                <TravelStories />
            </Section>
            <Section className="hidden sm:block">
                <TrustStrip />
            </Section>
        </AppLayout>
    );
}
