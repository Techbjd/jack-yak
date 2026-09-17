import {
    sectionPadding,
    sectionContainer,
    headingSection,
    bodyText,
    imageRoundedLg,
} from '@/config/theme';
import { aboutJackyakInfoBlocks, aboutJackyakIntro } from '@/config/home';
import { cn } from '@/lib/utils';
import { IMAGES } from '@/config/images';
import HomeInfoBlock from './HomeInfoBlock';

const AboutJackyak = () => {
    return (
        <section
            className={cn('relative w-full overflow-hidden', sectionPadding)}
        >
            <div
                className={cn(sectionContainer, 'bg-surface-warm sm:bg-white')}
            >
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-16 md:text-left">
                    <div className="max-w-content-md flex flex-1 flex-col gap-6 py-4">
                        <h2 className={headingSection}>
                            {aboutJackyakIntro.heading}
                        </h2>
                        <p className={bodyText}>{aboutJackyakIntro.body}</p>
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
                    <HomeInfoBlock
                        title={aboutJackyakInfoBlocks[0].title}
                        body={aboutJackyakInfoBlocks[0].body}
                        align="center"
                        titleClassName="text-lg-xl md:text-3xl-4xl"
                    />

                    <div className="-mx-6 flex flex-col items-center gap-8 self-stretch bg-white px-6 py-8">
                        <div
                            className={cn(
                                'rounded-image aspect-333/162 w-full max-w-83.25',
                                imageRoundedLg,
                                'bg-white',
                            )}
                            style={{
                                backgroundImage: `url('${IMAGES.home.aboutJackyak}')`,
                            }}
                        />

                        <HomeInfoBlock
                            title={aboutJackyakInfoBlocks[1].title}
                            body={aboutJackyakInfoBlocks[1].body}
                            align="center"
                            titleClassName="text-lg-xl md:text-3xl-4xl"
                        />
                    </div>
                </div>

                <div className="hidden md:grid md:grid-cols-2 md:gap-16">
                    {aboutJackyakInfoBlocks.map((block) => (
                        <HomeInfoBlock
                            key={block.title}
                            title={block.title}
                            body={block.body}
                            align="left"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutJackyak;
