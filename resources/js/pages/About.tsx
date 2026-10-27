import AppLayout from '@/layouts/AppLayout';
import AboutHero from './components/about/AboutHero';
import Section from '@/components/ui/Section';
import DifferenceSection from './components/about/DifferenceSection';
import JourneyStory from './components/about/JourneyStory';
import NewsletterCta from './components/about/NewsletterCta';
import { pageSeo } from '@/config/seo';

export default function About() {
    return (
        <AppLayout seo={pageSeo.about} background="canvas">
            <Section>
                <AboutHero />
            </Section>
            <Section>
                <DifferenceSection />
            </Section>
            <Section>
                <JourneyStory />
            </Section>
            <Section>
                <NewsletterCta />
            </Section>
        </AppLayout>
    );
}
