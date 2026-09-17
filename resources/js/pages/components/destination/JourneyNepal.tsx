import {
    coverImageAbsolute,
    eyebrow,
    fontPrimary,
    imagePlaceholder,
} from '@/config/theme';
import { IMAGES } from '@/config/images';
import { immersiveExperiences, journeyImageAlt, journeyNepalCopy } from '@/config/destination';
import { cn } from '@/lib/utils';

export default function JourneyNepal() {
    return (
        <section className="flex w-full flex-col gap-0 px-6 py-8 md:px-12 md:py-12 lg:px-24">
            <div className="-mx-6 -my-0.5 grid grid-cols-2 items-stretch gap-0 md:mx-0 lg:-mx-24 lg:grid-cols-12">
                <div className="xs:pl-8 flex flex-col gap-4 pl-6 md:gap-6 md:pl-0 lg:col-span-5 lg:justify-center lg:pl-20">
                    <img
                        src={IMAGES.destination.yakMascot}
                        alt={journeyNepalCopy.mascotAlt}
                        className="w-9 lg:w-28"
                    />

                    <p
                        className={cn(
                            eyebrow,
                            'md:text-2xl-3xl leading-snug lg:whitespace-nowrap',
                        )}
                    >
                        {journeyNepalCopy.eyebrow}
                    </p>
                    <h2
                        className={cn(
                            fontPrimary,
                            'text-2xl-3xl text-text-primary md:text-journey md:leading-journey md:text-teal leading-none font-bold tracking-wide xl:relative xl:whitespace-nowrap',
                        )}
                    >
                        {journeyNepalCopy.titleLead}{' '}
                        <span
                            className={cn(
                                'xl:absolute xl:top-0 xl:left-130 xl:z-10 xl:text-white',
                            )}
                        >
                            {journeyNepalCopy.titleAccent}
                        </span>
                    </h2>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-md text-text-primary md:max-w-dest-title md:text-md-lg mt-4 max-w-xs leading-snug font-medium md:mt-0',
                        )}
                    >
                        {journeyNepalCopy.body}
                    </p>
                </div>
                <div
                    className={cn(
                        imagePlaceholder,
                        'relative flex h-full w-full items-center justify-center overflow-hidden md:hidden',
                    )}
                >
                    <img
                        src={IMAGES.destination.journeyMobile}
                        alt={journeyImageAlt}
                        className={cn(coverImageAbsolute)}
                    />
                </div>
                <div
                    className={cn(
                        imagePlaceholder,
                        'relative hidden h-full w-full items-center justify-center overflow-hidden md:flex md:aspect-893/548 md:h-auto lg:col-span-7',
                    )}
                >
                    <img
                        src={IMAGES.destination.journey}
                        alt={journeyImageAlt}
                        className={cn(coverImageAbsolute)}
                    />
                </div>
            </div>

            <div className="xs:grid-cols-2 -mx-6 grid grid-cols-2 items-stretch gap-0 md:mx-0 lg:-mx-24 lg:min-h-71.5 lg:grid-cols-12 lg:gap-0">
                <div className="bg-cta-ember xs:col-span-1 md:bg-cta col-span-1 flex flex-col justify-center gap-5 px-8 py-10 text-white md:gap-3 md:p-6 lg:col-span-3 lg:justify-start lg:px-16 lg:pt-12">
                    <h3
                        className={cn(
                            fontPrimary,
                            'text-lg-xl leading-snug font-bold tracking-wide',
                        )}
                    >
                        {immersiveExperiences.heading}
                    </h3>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-sm md:text-md-lg leading-snug font-medium',
                        )}
                    >
                        {immersiveExperiences.body}
                    </p>
                </div>
                <div
                    className={cn(
                        imagePlaceholder,
                        'relative flex h-full w-full items-center justify-center overflow-hidden md:hidden',
                    )}
                >
                    <img
                        src={IMAGES.destination.journeyMobileMountain}
                        alt={journeyImageAlt}
                        className={cn(coverImageAbsolute)}
                    />
                </div>
                <div
                    className={cn(
                        imagePlaceholder,
                        'relative hidden h-full w-full items-center justify-center overflow-hidden md:flex md:aspect-893/548 md:h-auto lg:col-span-5',
                    )}
                >
                    <img
                        src={IMAGES.destination.journeyMountain}
                        alt={journeyImageAlt}
                        className={cn(coverImageAbsolute)}
                    />
                </div>
                <div className="hidden flex-col justify-center gap-3 bg-white p-6 md:col-span-2 md:flex lg:col-span-4 lg:justify-start lg:pt-12">
                    <h3
                        className={cn(
                            fontPrimary,
                            'text-lg-xl text-text-primary leading-snug font-bold lg:tracking-wide',
                        )}
                    >
                        {journeyNepalCopy.meetHeading}
                    </h3>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-sm text-text-primary md:text-md-lg leading-snug font-medium lg:tracking-wide',
                        )}
                    >
                        {journeyNepalCopy.meetBody}
                    </p>
                </div>
            </div>
        </section>
    );
}
