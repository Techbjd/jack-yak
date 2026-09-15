import Header from './components/shared/Header';
import WhyExplore from './components/guide/WhyExplore';
import GuideTopDestinations from './components/guide/GuideTopDestinations';
import Section from './components/shared/Section';
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
