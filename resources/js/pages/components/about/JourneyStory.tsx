import { cn } from '@/lib/utils';
import {
    aboutBar,
    aboutBody,
    aboutHeading,
    aboutSubhead,
} from '@/config/theme';
import { IMAGES } from '@/config/images';
import { aboutPillars, aboutPlanTitle, aboutStoryIntro } from '@/config/about';

/** About story — journey heading, accent-bar pillars, plan image */
export default function JourneyStory() {
    return (
        <section className="flex w-full flex-col gap-6 px-6 py-10 md:gap-8 md:px-12 md:py-16 lg:px-24">
            <h2 className={aboutHeading}>
                Why JackYak Makes Every Journey Better ?
            </h2>
            <p className={aboutBody}>{aboutStoryIntro}</p>

            <div className="flex w-full flex-col gap-6 md:gap-8">
                {aboutPillars.map((pillar) => (
                    <div
                        key={pillar.title}
                        className="flex w-full flex-col gap-3 md:gap-4"
                    >
                        <div className="flex items-center gap-3 md:gap-4">
                            <span aria-hidden className={aboutBar} />
                            <h3 className={aboutSubhead}>{pillar.title}</h3>
                        </div>
                        <p className={aboutBody}>{pillar.body}</p>
                    </div>
                ))}
            </div>

            <h2 className={cn(aboutHeading, 'text-center')}>
                {aboutPlanTitle}
            </h2>
            <img
                src={IMAGES.destination.langtangMountain}
                alt="Trekker on a snowy Himalayan ridge"
                loading="lazy"
                className="aspect-square w-full object-cover md:aspect-video"
            />
        </section>
    );
}
