import DestinationHero from './components/destination/DestinationHero';
import JourneyNepal from './components/destination/JourneyNepal';
import PopularDestinations from './components/destination/PopularDestinations';
import ImmersivePlan from './components/destination/ImmersivePlan';
import FeaturedGrid from './components/destination/FeaturedGrid';
import Section from '@/components/ui/Section';
import DiscoverNepal from './components/home/DiscoverNepal';
import AppLayout from '@/layouts/AppLayout';
import { pageSeo } from '@/config/seo';

export default function Destination() {
    return (
        <AppLayout seo={pageSeo.destinations}>
            <Section>
                <DestinationHero />
            </Section>
            <Section className="mx-auto flex w-full flex-col items-center justify-center">
                <JourneyNepal />
            </Section>
            <Section>
                <PopularDestinations />
            </Section>
            <Section>
                <ImmersivePlan />
            </Section>
            <Section>
                <FeaturedGrid />
            </Section>
            <Section>
                <DiscoverNepal />
            </Section>
        </AppLayout>
    );
}
