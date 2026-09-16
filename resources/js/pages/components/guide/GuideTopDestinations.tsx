import { useRef } from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import {
    destCardBadge,
    destCardBadgeText,
    destCardExplore,
    destCardImage,
    destCardMetaRow,
    destCardMetaText,
    destCardPanel,
    destCardTagline,
    destCardName,
    fontPrimary,
} from '@/config/theme';
import { cn } from '@/lib/utils';
import {
    guideTopDestinations,
    type GuideTopDestination,
} from '@/config/destination';
import CarouselDots from '../shared/CarouselDots';
import ViewAllLink from '../shared/ViewAllLink';

const DestinationCard = ({ dest }: { dest: GuideTopDestination }) => {
    return (
        <article className="ms:basis-55 max-w-dest-card mx-auto flex w-full shrink-0 grow basis-27 snap-start flex-col items-center md:basis-65 lg:w-full lg:basis-auto">
            <div className={destCardImage}>
                <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <span className={destCardBadge}>
                    <MapPin className="text-ink size-3 shrink-0 md:size-4" />
                    <span className={cn(destCardBadgeText)}>
                        {dest.province}
                    </span>
                </span>
            </div>

            <div className={destCardPanel}>
                <h3 className={cn(destCardName)}>{dest.name}</h3>
                <p className={cn(destCardTagline)}>{dest.subtitle}</p>
                <div className={destCardMetaRow}>
                    <Clock
                        className="text-ink size-2.5 shrink-0 md:size-5.25"
                        strokeWidth={2}
                    />
                    <span className={cn(destCardMetaText)}>
                        {dest.duration}
                    </span>
                    <ViewAllLink className={destCardExplore}>
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
        <section className="w-full">
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
                            {guideTopDestinations.map((dest, i) => (
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
                        {guideTopDestinations.map((dest, i) => (
                            <DestinationCard
                                key={`${dest.name}-${i}`}
                                dest={dest}
                            />
                        ))}
                    </div>

                    <a
                        href="#"
                        aria-label="Next destinations"
                        className="bg-cta shadow-card absolute top-[33%] -right-14 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white lg:flex"
                    >
                        <ArrowRight className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GuideTopDestinations;
