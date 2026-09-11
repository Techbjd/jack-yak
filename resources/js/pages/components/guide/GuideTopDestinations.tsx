import { useRef } from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';
import CarouselDots from '../shared/CarouselDots';
import ViewAllLink from '../shared/ViewAllLink';

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

const DestinationCard = ({ dest }: { dest: TopDestination }) => {
    return (
        <article className="basis-card-w ms:basis-55 mx-auto flex w-full max-w-[396px] shrink-0 grow snap-start flex-col items-center md:basis-65 lg:w-full lg:basis-auto">
            {/* Image — 396×306, joined on mobile, 7px radius on md+ */}
            <div className="bg-bg-placeholder rounded-t-card md:shadow-card relative aspect-[396/306] w-full overflow-hidden md:rounded-[7px]">
                <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Province badge — compact on mobile, 184×40 on md+ */}
                <span className="bg-canvas absolute top-1.5 left-1.5 flex h-6 w-auto max-w-[calc(100%-12px)] items-center gap-1 rounded-md px-1.5 md:top-[18px] md:left-[16px] md:h-[40px] md:w-[184px] md:max-w-[calc(100%-32px)] md:gap-[5px] md:rounded-[10px] md:px-[11px]">
                    <MapPin className="text-ink size-3 shrink-0 md:size-4" />
                    <span
                        className={cn(
                            fontPrimary,
                            'text-midnight truncate text-[10px] leading-tight font-bold tracking-[0.03em] md:text-[16px] md:leading-[22px]',
                        )}
                    >
                        {dest.province}
                    </span>
                </span>
            </div>

            {/* Info panel — joined 5px box on mobile, overlapping 18px panel on md+ */}
            <div className="shadow-card rounded-b-card relative z-10 w-full bg-white px-2 pt-1.5 pb-1.5 md:-mt-2 md:w-[calc(100%-4px)] md:rounded-[18px] md:px-[27px] md:pt-[28px] md:pb-5">
                <h3
                    className={cn(
                        fontPrimary,
                        'text-ink text-[10px] leading-[14px] font-bold tracking-[0.03em] md:text-[24px] md:leading-[33px]',
                    )}
                >
                    {dest.name}
                </h3>
                <p
                    className={cn(
                        fontPrimary,
                        'text-ink mt-0.5 text-[8px] leading-[11px] font-normal tracking-[0.03em] md:mt-[10px] md:text-[16px] md:leading-[22px] md:font-semibold',
                    )}
                >
                    {dest.subtitle}
                </p>
                <div className="mt-1.5 flex items-center gap-1 md:mt-5 md:gap-1.5">
                    <Clock
                        className="text-ink size-2.5 shrink-0 md:size-[21px]"
                        strokeWidth={2}
                    />
                    <span
                        className={cn(
                            fontPrimary,
                            'text-ink text-[8px] leading-[11px] font-bold tracking-[0.03em] md:text-[16px] md:leading-[22px]',
                        )}
                    >
                        {dest.duration}
                    </span>
                    <ViewAllLink className="md:text-cta ml-auto leading-[11px] md:leading-[22px]">
                        Explore
                    </ViewAllLink>
                </div>
            </div>
        </article>
    );
};

const GuideTopDestinations = () => {
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
        <section className="bg-surface-warm w-full">
            <div className="max-w-container mx-auto flex w-full flex-col gap-4 px-6 py-6 md:gap-8 md:px-12 lg:px-24">
                <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <p
                            className={cn(
                                fontPrimary,
                                'text-xs-sm text-ink md:text-md-lg font-bold',
                            )}
                        >
                            Featured
                        </p>
                        <h2
                            className={cn(
                                fontPrimary,
                                'text-md-lg text-text-primary md:text-3xl-4xl leading-tight font-bold tracking-wide md:leading-snug',
                            )}
                        >
                            Top Destinations
                        </h2>
                    </div>
                    <ViewAllLink href="/view-all">
                        View all destinations
                    </ViewAllLink>
                </div>

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

                    <button
                        type="button"
                        onClick={scrollToNextImage}
                        aria-label="Next destinations"
                        className="bg-ink shadow-card absolute top-[30%] right-3 z-10 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-white md:right-8 md:h-9 md:w-9"
                    >
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                </div>

                <CarouselDots className="lg:hidden" />

                <div className="relative hidden lg:block">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {topDestinations.map((dest, i) => (
                            <DestinationCard
                                key={`${dest.name}-${i}`}
                                dest={dest}
                            />
                        ))}
                    </div>

                    <a
                        href="#"
                        aria-label="Next destinations"
                        className="bg-cta shadow-card absolute top-[33%] right-4 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white lg:flex"
                    >
                        <ArrowRight className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GuideTopDestinations;
