import { cn } from '@/lib/utils';
import { aboutBody, aboutSectionTitle } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { aboutDifferenceParagraphs } from '@/config/about';

/** About difference — centered title, wide lake image, two paragraphs */
export default function DifferenceSection() {
    return (
        <section className="flex w-full flex-col items-center gap-6 px-6 py-10 md:gap-10 md:px-12 md:py-16 lg:px-24">
            <h2 className={cn(aboutSectionTitle, 'text-center')}>
                Why Choosing JackYak makes all the Difference
            </h2>
            <img
                src={IMAGES.home.heroBg}
                alt="Turquoise alpine lake beneath Himalayan peaks"
                loading="lazy"
                className="aspect-square w-full object-cover md:aspect-video"
            />
            <div className="flex w-full flex-col gap-4 md:gap-6">
                {aboutDifferenceParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className={aboutBody}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
}
