import AppLayout from '@/layouts/AppLayout';
import AboutHero from './components/about/AboutHero';
import Section from '@/components/ui/Section';
import DifferenceSection from './components/about/DifferenceSection';
import JourneyStory from './components/about/JourneyStory';
import NewsletterCta from './components/about/NewsletterCta';
import { pageTitles } from '@/config/site';

export default function About() {
    return (
        <AppLayout title={pageTitles.about} shellClassName="bg-canvas">
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
