import Hero from './components/home/Hero';
import NepalMap from './components/home/NepalMap';
import MapQuote from './components/home/MapQuote';
import AboutJackyak from './components/home/AboutJackyak';
import DiscoverNepal from './components/home/DiscoverNepal';
import TopDestinations from './components/home/TopDestination';
import Section from '@/components/ui/Section';
import AppLayout from '@/layouts/AppLayout';
import { IMAGES } from '@/config/images';
import { mountainDividerAlt } from '@/config/home';
import { pageTitles } from '@/config/site';

export default function Home() {
    return (
        <AppLayout title={pageTitles.home}>
            <Hero  />
            <div className="relative z-20 flex w-full flex-col items-center gap-16 py-16 md:gap-20 md:py-70">
                <NepalMap />
                <MapQuote />
            </div>
            <Section className="relative z-10 pb-3">
                <AboutJackyak />
            </Section>
            <div className="relative z-10 hidden w-full md:block ">
                <img
                    src={IMAGES.home.mountainDivider}
                    alt={mountainDividerAlt}
                    className="m-auto h-auto w-full object-cover p-12"
                />
            </div>
            <Section className="relative z-10">
                <DiscoverNepal />
            </Section>
            <Section className="relative z-10">
                <TopDestinations />
            </Section>
        </AppLayout>
    );
}
