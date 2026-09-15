import DestinationHero from './components/destination/DestinationHero';
import JourneyNepal from './components/destination/JourneyNepal';
import PopularDestinations from './components/destination/PopularDestinations';
import ImmersivePlan from './components/destination/ImmersivePlan';
import FeaturedGrid from './components/destination/FeaturedGrid';
import Section from './components/shared/Section';
import DiscoverNepal from './components/home/DiscoverNepal';
import AppLayout from '@/layouts/AppLayout';

export default function Destination() {
    return (
        <AppLayout title="Destinations">
            <Section>
                <DestinationHero />
            </Section>
            <Section>
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
