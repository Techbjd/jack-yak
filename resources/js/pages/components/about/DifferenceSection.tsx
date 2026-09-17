import { cn } from '@/lib/utils';
import { aboutBody, aboutSectionTitle } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { aboutDifferenceCopy, aboutDifferenceParagraphs } from '@/config/about';

export default function DifferenceSection() {
    return (
        <section className="flex w-full flex-col items-center gap-6 px-6 py-10 md:gap-10 md:px-12 md:py-16 lg:px-24">
            <h2 className={cn(aboutSectionTitle, 'text-center')}>
                {aboutDifferenceCopy.heading}
            </h2>
            <img
                src={IMAGES.about.differenceMobile}
                alt={aboutDifferenceCopy.imageAltMobile}
                loading="lazy"
                className="aspect-square w-full object-cover md:hidden"
            />
            <img
                src={IMAGES.about.difference}
                alt={aboutDifferenceCopy.imageAltDesktop}
                loading="lazy"
                className="hidden aspect-video w-full object-cover md:block"
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
