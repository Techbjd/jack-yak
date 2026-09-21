import DestinationHero from './components/destination/DestinationHero';
import JourneyNepal from './components/destination/JourneyNepal';
import PopularDestinations from './components/destination/PopularDestinations';
import ImmersivePlan from './components/destination/ImmersivePlan';
import FeaturedGrid from './components/destination/FeaturedGrid';
import Section from '@/components/ui/Section';
import DiscoverNepal from './components/home/DiscoverNepal';
import AppLayout from '@/layouts/AppLayout';
import { pageTitles } from '@/config/site';

export default function Destination() {
    return (
        <AppLayout title={pageTitles.destinations}>
            <Section>
                <DestinationHero />
            </Section>
            <Section className='w-full mx-auto flex flex-col justify-center items-center'>
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
