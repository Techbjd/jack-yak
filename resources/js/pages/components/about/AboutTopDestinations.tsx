import { useRef } from 'react';
import { ArrowRight, Clock, MapPin, MoveRight } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

interface TopDestination {
    name: string;
    subtitle: string;
    province: string;
    duration: string;
    image: string;
}

const topDestinations: TopDestination[] = [
    {
        name: 'Mount Everest',
        subtitle: 'Highest Peak on Earth',
        province: 'Koshi Province',
        duration: '12–16 Days',
        image: IMAGES.about.mountEverest,
    },
    {
        name: 'Pokhara',
        subtitle: 'Lakeside Paradise',
        province: 'Gandaki Province',
        duration: '2–5 Days',
        image: IMAGES.about.pokharaLakeside,
    },
    {
        name: 'Chitwan',
        subtitle: 'Wildlife Safari',
        province: 'Bagmati Province',
        duration: '2–3 Days',
        image: IMAGES.about.chitwanSafari,
    },
];

// Desktop card image ratio from Figma (396 x 306)
const DESKTOP_IMAGE_RATIO = '396 / 306';

const DOT_COUNT = 5;

const DestinationCard = ({ dest }: { dest: TopDestination }) => {
    return (
        <article className="flex shrink-0 grow basis-card-w snap-start flex-col ms:basis-[220px] md:basis-[260px] lg:w-full lg:basis-auto">
            {/* Image with province badge */}
            <div
                className="relative h-card-h w-card-w overflow-hidden rounded-t-card bg-bg-placeholder ms:h-auto ms:w-full md:rounded-card-sm md:shadow-card"
                style={{ aspectRatio: DESKTOP_IMAGE_RATIO }}
            >
                <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full bg-bg-placeholder object-cover object-center text-2xs text-text-primary"
                />
                <span className="absolute top-2 left-2 flex max-w-full items-center gap-1 overflow-hidden rounded-full bg-slate-50 py-0.5 pr-2 pl-1.5 md:top-4 md:left-4 md:rounded-immersive md:px-4 md:py-2">
                    <MapPin className="h-2.5 w-2.5 shrink-0 text-ink md:h-4 md:w-4" />
                    <span
                        className={cn(
                            fontPrimary,
                            'truncate text-2xs font-bold tracking-wide text-ink md:text-md-lg',
                        )}
                    >
                        {dest.province}
                    </span>
                </span>
            </div>

            {/* Info card — overlaps image bottom on desktop */}
            <div className="flex w-card-w flex-col gap-1 rounded-b-card bg-white p-2 shadow-card ms:w-full md:-mt-2 md:gap-2 md:rounded-image md:p-4">
                <h3
                    className={cn(
                        fontPrimary,
                        'text-xs-sm leading-tight font-bold tracking-wide text-ink md:text-xl-2xl',
                    )}
                >
                    {dest.name}
                </h3>
                <p
                    className={cn(
                        fontPrimary,
                        'text-2xs leading-tight tracking-wide text-ink md:text-md-lg md:font-semibold',
                    )}
                >
                    {dest.subtitle}
                </p>
                <div className="flex items-center gap-1 md:gap-2">
                    <Clock className="h-2.5 w-2.5 text-ink md:h-5 md:w-5" />
                    <span
                        className={cn(
                            fontPrimary,
                            'text-2xs font-bold tracking-wide text-ink md:text-md-lg',
                        )}
                    >
                        {dest.duration}
                    </span>
                    <a
                        href="#"
                        className={cn(
                            fontPrimary,
                            'ml-auto flex items-center gap-1 text-2xs font-bold tracking-wide text-cta-accent md:text-md-lg md:text-cta',
                        )}
                    >
                        Explore
                        <MoveRight className="hidden h-4 w-4 md:block" />
                    </a>
                </div>
            </div>
        </article>
    );
};

const AboutTopDestinations = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollToNextImage = () => {
        const el = carouselRef.current;
        if (!el) {
            return;
        }
        const track = el.firstElementChild as HTMLElement | null;
        const firstCard = track?.querySelector('article') as HTMLElement | null;
        const cardWidth =
            firstCard?.getBoundingClientRect().width ?? el.clientWidth * 0.6;
        const gap = track
            ? parseFloat(getComputedStyle(track).columnGap || '8')
            : 8;
        const step = cardWidth + gap;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 10) {
            el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            el.scrollBy({ left: step, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full bg-slate-50">
            <div className="mx-auto flex w-full max-w-container flex-col gap-4 px-6 py-6 md:gap-8 md:px-12 lg:px-24">
                {/* Heading row */}
                <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <p
                            className={cn(
                                fontPrimary,
                                'text-xs-sm font-bold text-ink md:text-md-lg',
                            )}
                        >
                            Featured
                        </p>
                        <h2
                            className={cn(
                                fontPrimary,
                                'text-md-lg leading-tight font-bold tracking-wide text-text-primary md:text-3xl-4xl md:leading-snug',
                            )}
                        >
                            Top Destinations
                        </h2>
                    </div>
                    <a
                        href="#"
                        className={cn(
                            fontPrimary,
                            'flex items-center gap-1 text-2xs font-bold text-cta-accent md:text-md-lg md:text-ink',
                        )}
                    >
                        View all destinations
                        <MoveRight className="hidden h-5 w-5 md:block" />
                    </a>
                </div>

                {/* Mobile + Tablet: horizontal snap carousel with arrow on the image */}
                <div className="relative -mx-6 md:-mx-12 lg:hidden">
                    <div
                        ref={carouselRef}
                        className="no-scrollbar scroll-px-6 overflow-x-auto scroll-smooth md:scroll-px-12"
                    >
                        <div className="flex w-full min-w-max snap-x snap-mandatory gap-2 px-6 md:gap-4 md:px-12">
                            {topDestinations.map((dest, i) => (
                                <DestinationCard
                                    key={`${dest.name}-${i}`}
                                    dest={dest}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Carousel next — pinned to the image area, right side */}
                    <button
                        type="button"
                        onClick={scrollToNextImage}
                        aria-label="Next destinations"
                        className="absolute top-[30%] right-3 z-10 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-ink text-slate-50 shadow-card md:right-8 md:h-9 md:w-9"
                    >
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                </div>

                {/* Mobile + Tablet: dots */}
                <div className="flex items-center justify-center gap-2 lg:hidden">
                    {Array.from({ length: DOT_COUNT }).map((_, i) => (
                        <span
                            key={i}
                            className={cn(
                                'h-2 w-2 rounded-full',
                                i === 0
                                    ? 'bg-cta-accent'
                                    : 'bg-bg-placeholder',
                            )}
                        />
                    ))}
                </div>

                {/* Desktop: 3-col grid with arrow aligned to images on the right */}
                <div className="relative hidden lg:block">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {topDestinations.map((dest, i) => (
                            <DestinationCard
                                key={`${dest.name}-${i}`}
                                dest={dest}
                            />
                        ))}
                    </div>

                    {/* Desktop: teal circle next — vertically centered on image area, right edge */}
                    <a
                        href="#"
                        aria-label="Next destinations"
                        className="absolute top-[33%] right-4 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cta text-slate-50 shadow-card lg:flex"
                    >
                        <ArrowRight className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutTopDestinations;
