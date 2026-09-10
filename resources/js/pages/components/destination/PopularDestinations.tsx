import {
    coverImageAbsolute,
    destCardTitle,
    fontPrimary,
    imagePlaceholder,
} from '@/config/theme';
import { popularDestinations } from '@/config/destination';
import { cn } from '@/lib/utils';
import CarouselDots from '../shared/CarouselDots';
import ViewAllLink from '../shared/ViewAllLink';

const DESKTOP_CARD_RATIO = '260 / 374';

export default function PopularDestinations() {
    return (
        <section className="flex w-full flex-col gap-6 py-8 md:py-12">
            <div className="flex items-center justify-between px-6 md:px-12 lg:px-24">
                <h2
                    className={cn(
                        fontPrimary,
                        'text-md-lg text-text-primary md:text-lg-xl font-bold tracking-wide',
                    )}
                >
                    POPULAR DESTINATIONS
                </h2>
                <ViewAllLink className="text-cta-accent md:text-text-primary gap-2">
                    VIEW ALL
                </ViewAllLink>
            </div>

            <p
                className={cn(
                    fontPrimary,
                    'text-3xl-4xl text-text-primary hidden px-6 leading-snug font-bold md:block md:px-12 lg:px-24',
                )}
            >
                Where will you go?
            </p>

            <div className="no-scrollbar w-full overflow-x-auto md:hidden">
                <div className="flex w-max snap-x gap-4 px-6">
                    {popularDestinations.map((dest, i) => (
                        <div
                            key={`${dest.name}-${i}`}
                            className="w-dest-card-w flex shrink-0 snap-start flex-col gap-2"
                        >
                            <img
                                className={cn(
                                    imagePlaceholder,
                                    'h-dest-card-h rounded-dest-card w-full object-cover',
                                )}
                                src={dest.image}
                                alt={dest.name}
                            />

                            <p className={destCardTitle}>{dest.name}</p>
                            <p className={destCardTitle}>{dest.province}</p>
                        </div>
                    ))}
                </div>
            </div>

            <CarouselDots className="md:hidden" />

            <div className="hidden px-6 md:grid md:grid-cols-5 md:gap-6 md:px-12 lg:px-24">
                {popularDestinations
                    .filter((dest) => !dest.mobileOnly)
                    .map((dest, i) => (
                        <div
                            key={`${dest.image}-${i}`}
                            className="flex flex-col gap-3"
                        >
                            <div
                                className="relative w-full"
                                style={{ aspectRatio: DESKTOP_CARD_RATIO }}
                            >
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className={cn(
                                        imagePlaceholder,
                                        coverImageAbsolute,
                                        'rounded-dest-card',
                                    )}
                                />
                                <div className="absolute bottom-0 left-0 flex flex-col gap-1 p-4">
                                    <p
                                        className={cn(
                                            fontPrimary,
                                            'text-md-lg leading-tight font-bold text-white',
                                        )}
                                    >
                                        {dest.name}
                                    </p>
                                    <p
                                        className={cn(
                                            fontPrimary,
                                            'text-md-lg leading-tight font-bold text-white',
                                        )}
                                    >
                                        {dest.province}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
