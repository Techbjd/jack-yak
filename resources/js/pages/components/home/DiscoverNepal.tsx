import { cn } from '@/lib/utils';
import { IMAGES } from '@/config/images';
import {
    bodyTextSmall,
    ctaMobile,
    fontPrimary,
    headingSubsection,
    imagePlaceholder,
    imageRoundedXl,
    sectionPadding,
} from '@/config/theme';

// Staggered pair share one ratio (257 x 387 == 328 x 494)
const STAGGERED_RATIO = '257 / 387';

const DiscoverNepal = () => {
    return (
        <section
            className={cn('relative w-full overflow-hidden', sectionPadding)}
        >
            {/* Decorative patch3 — re-add <img src="/patch3.png" className="pointer-events-none absolute top-1/2 right-0 -z-10 w-70 -translate-y-1/2 rotate-[89.27deg] opacity-90 select-none md:w-105 lg:w-130"> once the asset lands in public/ */}

            <div className="max-w-container bg-surface-warm mx-auto flex flex-col items-center gap-5 px-8 md:flex-row md:gap-16 md:bg-transparent md:px-12 lg:px-24">
                {/* Mobile second: single image (336 x 229) */}
                <div className="order-2 w-full md:hidden">
                    <img
                        src={IMAGES.home.discoverNepal2}
                        alt="Himalayan peak at dusk"
                        loading="lazy"
                        className={cn(
                            imageRoundedXl,
                            'aspect-3/2 w-full object-cover',
                        )}
                    />
                </div>

                {/* Text — unwrapped on mobile via contents, column on desktop */}
                <div className="md:max-w-content-lg contents md:flex md:flex-1 md:flex-col md:items-start md:gap-6 md:text-left">
                    <h2
                        className={cn(
                            headingSubsection,
                            'order-1 text-center md:order-1 md:text-left',
                        )}
                    >
                        Discover the Beauty of Nepal
                    </h2>
                    <p
                        className={cn(
                            bodyTextSmall,
                            'md:text-xl-2xl order-3 text-center md:order-2 md:text-left',
                        )}
                    >
                        From snow-capped peaks and peaceful lakes to ancient
                        heritage sites and vibrant local communities, Nepal
                        offers experiences unlike anywhere else.
                    </p>

                    {/* Mobile CTA button — orange pill, 125 x 25 */}
                    <button
                        className={cn(
                            ctaMobile,
                            'text-xs-md order-4 md:hidden',
                        )}
                    >
                        <span className="px-2">Start Your Journey</span>
                    </button>

                    {/* Desktop CTA button — teal pill, 209 x 42 */}
                    <button
                        className={cn(
                            fontPrimary,
                            'bg-cta text-md-lg hidden h-10.5 w-52 items-center justify-center rounded-full font-bold text-white md:order-3 md:mt-5 md:flex',
                        )}
                    >
                        Start Your Journey
                    </button>
                </div>

                {/* Desktop: staggered image pair */}
                <div className="hidden w-full min-w-0 flex-1 items-start justify-center gap-5 md:flex lg:justify-end">
                    {/* Shorter image, sits lower */}
                    <img
                        src={IMAGES.home.discoverNepal1}
                        alt="Stone cairn before snowy peaks"
                        loading="lazy"
                        className={cn(
                            imagePlaceholder,
                            'mt-13 w-64.25 min-w-0 object-cover',
                        )}
                        style={{ aspectRatio: STAGGERED_RATIO }}
                    />

                    {/* Taller image, sits higher */}
                    <img
                        src={IMAGES.home.discoverNepal2}
                        alt="Himalayan peak at dusk"
                        loading="lazy"
                        className={cn(
                            imagePlaceholder,
                            'w-82 min-w-0 object-cover',
                        )}
                        style={{ aspectRatio: STAGGERED_RATIO }}
                    />
                </div>
            </div>
        </section>
    );
};

export default DiscoverNepal;
