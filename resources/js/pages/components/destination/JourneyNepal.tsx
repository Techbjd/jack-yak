import {
    coverImageAbsolute,
    eyebrow,
    fontPrimary,
    imagePlaceholder,
} from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

function MaskLabel({ name }: { name: string }) {
    return (
        <span
            className={cn(
                fontPrimary,
                'text-2xs px-2 text-center font-medium text-white/80',
            )}
        >
            {name}
        </span>
    );
}

export default function JourneyNepal() {
    return (
        <section className="flex w-full flex-col gap-0 px-6 py-8 md:px-12 md:py-12 lg:px-24">
            <div className="-mx-6 -my-0.5 grid grid-cols-2 items-stretch gap-0 md:mx-0 lg:-mx-24 lg:grid-cols-12">
                <div className="xs:pl-8 flex flex-col gap-4 pl-6 md:gap-6 md:pl-0 lg:col-span-5 lg:justify-center lg:pl-20">
                    <img
                        src={IMAGES.destination.yakMascot}
                        alt="JackYak mascot"
                        className="w-9 lg:w-28"
                    />

                    <p
                        className={cn(
                            eyebrow,
                            'md:text-2xl-3xl leading-snug lg:whitespace-nowrap',
                        )}
                    >
                        DISCOVER NEPAL
                    </p>
                    <h2
                        className={cn(
                            fontPrimary,
                            'text-2xl-3xl text-text-primary md:text-journey md:leading-journey md:text-teal leading-none font-bold tracking-wide xl:relative xl:whitespace-nowrap',
                        )}
                    >
                        Journey Beyond{' '}
                        <span
                            className={cn(
                                'xl:absolute xl:top-0 xl:left-130 xl:z-10 xl:text-white',
                            )}
                        >
                            Peaks
                        </span>
                    </h2>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-md text-text-primary md:max-w-content md:text-md-lg mt-4 max-w-40 leading-snug font-medium md:mt-0',
                        )}
                    >
                        JackYak is your gateway to Nepal&apos;s breathtaking
                        landscapes, timeless traditions, and unforgettable
                        adventures.
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
                        alt="Journey Nepal"
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
                        alt="Journey Nepal"
                        className={cn(coverImageAbsolute)}
                    />
                </div>
            </div>

            <div className="xs:grid-cols-2 -mx-6 grid grid-cols-3 items-stretch gap-0 md:mx-0 lg:-mx-24 lg:min-h-71.5 lg:grid-cols-12 lg:gap-0">
                <div className="bg-cta-ember xs:col-span-1 md:bg-cta col-span-2 flex flex-col justify-center gap-5 px-8 py-10 text-white md:gap-3 md:p-6 lg:col-span-3 lg:justify-start lg:px-16 lg:pt-12">
                    <h3
                        className={cn(
                            fontPrimary,
                            'text-lg-xl leading-snug font-bold tracking-wide',
                        )}
                    >
                        IMMERSIVE EXPERIENCES
                    </h3>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-sm md:text-md-lg leading-snug font-medium',
                        )}
                    >
                        Explore Nepal through cinematic destination stories,
                        travel guides, local insights, trekking routes, and
                        hidden gems designed to inspire your next adventure.
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
                        alt="Journey Nepal"
                        className={cn(coverImageAbsolute)}
                    />
                </div>
                <div
                    className={cn(
                        imagePlaceholder,
                        'relative hidden h-full w-full items-center justify-center overflow-hidden md:flex lg:col-span-5',
                    )}
                >
                    <img
                        src={IMAGES.destination.journeyMountain}
                        alt="Journey Nepal"
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
                        Meet the Yak
                    </h3>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-sm text-text-primary md:text-md-lg leading-snug font-medium lg:tracking-wide',
                        )}
                    >
                        For centuries, the Himalayan yak has been a symbol of
                        strength, resilience, and exploration. Inspired by this
                        remarkable companion of the mountains, JackYak invites
                        you to journey through Nepal&apos;s most extraordinary
                        landscapes and cultures.
                    </p>
                </div>
            </div>
        </section>
    );
}
