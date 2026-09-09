import { MoveRight } from 'lucide-react';
import {
    destCardTitle,
    fontPrimary,
    imagePlaceholder,
} from '@/config/theme';
import { popularDestinations } from '@/config/destination';
import { cn } from '@/lib/utils';

const DOT_COUNT = 5;

// Desktop card portrait ratio from Figma (260 x 374)
const DESKTOP_CARD_RATIO = '260 / 374';

export default function PopularDestinations() {
    return (
        <section className="flex w-full flex-col gap-6 py-8 md:py-12">
            <div className="flex items-center justify-between px-6 md:px-12 lg:px-24">
                <h2
                    className={cn(
                        fontPrimary,
                        'text-md-lg font-bold tracking-wide text-text-primary md:text-lg-xl',
                    )}
                >
                    POPULAR DESTINATIONS
                </h2>
                <a
                    href="#"
                    className={cn(
                        fontPrimary,
                        'flex items-center gap-2 text-xs-sm font-bold text-orange md:text-md-lg md:text-text-primary',
                    )}
                >
                    VIEW ALL
                    <MoveRight className="hidden h-7 w-7 text-text-primary md:block" />
                </a>
            </div>

            {/* Desktop only — section subheading */}
            <p
                className={cn(
                    fontPrimary,
                    'hidden px-6 text-3xl-4xl leading-snug font-bold text-text-primary md:block md:px-12 lg:px-24',
                )}
            >
                Where will you go?
            </p>

            {/* MOBILE: horizontal snap carousel */}
            <div className="no-scrollbar w-full overflow-x-auto md:hidden">
                <div className="flex w-max snap-x gap-4 px-6">
                    {popularDestinations.map((dest, i) => (
                        <div
                            key={`${dest.name}-${i}`}
                            className="flex w-dest-card-w shrink-0 snap-start flex-col gap-2"
                        >
                            {/* Card image */}
                            <img
                                className={cn(
                                    imagePlaceholder,
                                    'h-dest-card-h w-full rounded-dest-card object-cover',
                                )}
                                src={dest.image} alt={dest.name} />

                            <p className={destCardTitle}>{dest.name}</p>
                            <p className={destCardTitle}>{dest.province}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* MOBILE: carousel dots */}
            <div className="flex items-center justify-center gap-2 md:hidden">
                {Array.from({ length: DOT_COUNT }).map((_, i) => (
                    <span
                        key={i}
                        className={cn(
                            'h-2.5 w-2.5 rounded-full',
                            i === 0 ? 'bg-orange' : 'bg-bg-placeholder',
                        )}
                    />
                ))}
            </div>

            {/* DESKTOP: 5-col grid, labels overlaid on the image (shared cards only — mobile extras excluded) */}
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
                                    'absolute inset-0 h-full w-full rounded-dest-card object-cover',
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
