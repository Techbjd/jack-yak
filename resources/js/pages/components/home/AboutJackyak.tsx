import {
    sectionPadding,
    sectionContainer,
    headingSection,
    headingSubsection,
    bodyText,
    imageRoundedLg,
} from '@/config/theme';
import { cn } from '@/lib/utils';
import { IMAGES } from '@/config/images';

const INFO_BLOCKS = [
    {
        title: 'Popular Destinations',
        body: 'Discover breathtaking mountains, serene lakes, ancient heritage sites, lush national parks, and vibrant cities across Nepal. Every destination offers a unique adventure waiting to be explored.',
    },
    {
        title: 'Travel Tips',
        body: 'Find essential information on the best seasons to visit, packing guides, permits, transportation, budgeting, and safety tips before you travel.',
    },
] as const;

const AboutJackyak = () => {
    return (
        <section
            className={cn('relative w-full overflow-hidden', sectionPadding)}
        >
            <div
                className={cn(sectionContainer, 'bg-surface-warm sm:bg-white')}
            >
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-16 md:text-left">
                    <div className="max-w-content-md flex flex-1 flex-col gap-6">
                        <h2 className={headingSection}>About Jackyak</h2>
                        <p className={bodyText}>
                            JackYak is your trusted travel companion for
                            exploring Nepal. Discover curated trekking
                            itineraries, hidden destinations, local culture, and
                            unforgettable adventures—from the Himalayas to the
                            Terai. From Everest to the Terai, experience Nepal
                            through carefully crafted journeys.
                        </p>
                    </div>

                    <div className="hidden w-full flex-1 justify-end md:block">
                        <div
                            className={cn(
                                'rounded-image mx-auto aspect-590/287 w-full max-w-147.5 md:mx-0 md:ml-auto',
                                imageRoundedLg,
                            )}
                            style={{
                                backgroundImage: `url('${IMAGES.home.aboutJackyak}')`,
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-10 md:hidden">
                    <div className="max-w-content-md flex flex-col gap-4 text-center">
                        <h3
                            className={cn(
                                headingSubsection,
                                'text-lg-xl md:text-3xl-4xl',
                            )}
                        >
                            {INFO_BLOCKS[0].title}
                        </h3>
                        <p className={bodyText}>{INFO_BLOCKS[0].body}</p>
                    </div>

                    <div
                        className={cn(
                            'rounded-image aspect-333/162 w-full max-w-83.25',
                            imageRoundedLg,
                        )}
                        style={{
                            backgroundImage: `url('${IMAGES.home.aboutJackyak}')`,
                        }}
                    />

                    <div className="max-w-content-md flex flex-col gap-4 text-center">
                        <h3 className={headingSubsection}>
                            {INFO_BLOCKS[1].title}
                        </h3>
                        <p className={bodyText}>{INFO_BLOCKS[1].body}</p>
                    </div>
                </div>

                <div className="hidden md:grid md:grid-cols-2 md:gap-16">
                    {INFO_BLOCKS.map((block) => (
                        <div
                            key={block.title}
                            className="max-w-content-md flex flex-col gap-4 text-left"
                        >
                            <h3 className={headingSubsection}>{block.title}</h3>
                            <p className={bodyText}>{block.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutJackyak;
