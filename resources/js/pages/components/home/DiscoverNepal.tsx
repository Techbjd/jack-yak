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

const STAGGERED_RATIO = '257 / 387';

const DiscoverNepal = () => {
    return (
        <section
            className={cn('relative w-full overflow-hidden', sectionPadding)}
        >
            <div className="max-w-container bg-surface-warm mx-auto flex flex-col items-center gap-5 px-8 md:flex-row md:gap-16 md:bg-transparent md:px-12 lg:px-24">
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

                    <button
                        className={cn(
                            ctaMobile,
                            'text-xs-md order-4 md:hidden',
                        )}
                    >
                        <span className="px-2">Start Your Journey</span>
                    </button>

                    <button
                        className={cn(
                            fontPrimary,
                            'bg-cta text-md-lg hidden h-10.5 w-52 items-center justify-center rounded-full font-bold text-white md:order-3 md:mt-5 md:flex',
                        )}
                    >
                        Start Your Journey
                    </button>
                </div>

                <div className="hidden w-full min-w-0 flex-1 items-start justify-center gap-5 md:flex lg:justify-end">
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
