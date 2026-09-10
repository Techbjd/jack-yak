import AppLayout from '@/layouts/AppLayout';
import AboutHero from './components/about/AboutHero';
import DifferenceSection from './components/about/DifferenceSection';
import JourneyStory from './components/about/JourneyStory';
import NewsletterCta from './components/about/NewsletterCta';

/** About — hero hosts its own headers, sections stack on canvas */
export default function About() {
    return (
        <AppLayout title="About" shellClassName="bg-canvas">
            <div className="w-full">
                <AboutHero />
            </div>
            <div className="w-full">
                <DifferenceSection />
            </div>
            <div className="w-full">
                <JourneyStory />
            </div>
            <div className="w-full">
                <NewsletterCta />
            </div>
        </AppLayout>
    );
}
