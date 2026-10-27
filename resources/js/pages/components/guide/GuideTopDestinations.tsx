import { useCallback, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { guideTopDestinations, viewAllPageHref } from '@/config/destination';
import { guideTopHeader } from '@/config/guide';
import { cn } from '@/lib/utils';
import { sectionInner } from '@/config/theme';
import CarouselDots from '@/components/ui/CarouselDots';
import ViewAllLink from '@/components/ui/ViewAllLink';
import SectionHeading from '@/components/ui/SectionHeading';
import DestinationCard from '@/components/ui/DestinationCard';

const GUIDE_CARD_LAYOUT =
    'ms:basis-guide-slide-md max-w-dest-card mx-auto flex w-full shrink-0 grow basis-guide-slide-sm snap-start flex-col items-center md:basis-guide-slide-lg lg:w-full lg:basis-auto';

type GuideTopDestination = (typeof guideTopDestinations)[number];

function GuideTopCard({ dest }: { dest: GuideTopDestination }) {
    return (
        <DestinationCard
            image={dest.image}
            name={dest.name}
            province={dest.province}
            tagline={dest.subtitle}
            meta={dest.duration}
            href={dest.href}
            className={GUIDE_CARD_LAYOUT}
        />
    );
}

const GuideTopDestinations = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const getStep = useCallback(() => {
        const el = carouselRef.current;
        const track = el?.firstElementChild as HTMLElement | null;
        const firstCard = track?.querySelector('article') as HTMLElement | null;
        const cardWidth =
            firstCard?.getBoundingClientRect().width ??
            (el?.clientWidth ?? 0) * 0.6;
        const gap = track
            ? parseFloat(getComputedStyle(track).columnGap || '8')
            : 8;
        return cardWidth + gap;
    }, []);

    const scrollToIndex = useCallback(
        (index: number) => {
            const el = carouselRef.current;
            if (!el) {
                return;
            }
            el.scrollTo({ left: index * getStep(), behavior: 'smooth' });
        },
        [getStep],
    );

    const scrollToNextImage = () => {
        const el = carouselRef.current;
        if (!el) {
            return;
        }
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 10) {
            el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            el.scrollBy({ left: getStep(), behavior: 'smooth' });
        }
    };

    const handleTrackScroll = () => {
        const el = carouselRef.current;
        if (!el) {
            return;
        }
        const step = getStep();
        if (step <= 0) {
            return;
        }
        const index = Math.min(
            guideTopDestinations.length - 1,
            Math.max(0, Math.round(el.scrollLeft / step)),
        );
        setActiveIndex((prev) => (prev === index ? prev : index));
    };

    const handleTrackKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            scrollToNextImage();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            carouselRef.current?.scrollBy({
                left: -getStep(),
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="w-full">
            <div
                className={cn(
                    sectionInner,
                    'flex flex-col gap-4 py-6 md:gap-8',
                )}
            >
                <div className="flex items-end justify-between gap-4">
                    <SectionHeading
                        eyebrow={guideTopHeader.eyebrow}
                        title={guideTopHeader.title}
                        eyebrowClassName="md:text-md-lg"
                        titleClassName="leading-tight md:text-3xl-4xl md:leading-snug md:text-ink"
                    />
                    <ViewAllLink href={viewAllPageHref}>
                        {guideTopHeader.link}
                    </ViewAllLink>
                </div>

                <div className="relative -mx-6 md:-mx-12 lg:hidden">
                    <div
                        ref={carouselRef}
                        role="region"
                        aria-roledescription="carousel"
                        aria-label={guideTopHeader.title}
                        tabIndex={0}
                        onScroll={handleTrackScroll}
                        onKeyDown={handleTrackKeyDown}
                        className="no-scrollbar focus-visible:ring-ink scroll-px-6 overflow-x-auto scroll-smooth focus-visible:ring-2 focus-visible:outline-none md:scroll-px-12"
                    >
                        <div className="flex w-full min-w-max snap-x snap-mandatory gap-2 px-6 md:gap-4 md:px-12">
                            {guideTopDestinations.map((dest, i) => (
                                <GuideTopCard
                                    key={`${dest.name}-${i}`}
                                    dest={dest}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={scrollToNextImage}
                        aria-label={guideTopHeader.nextLabel}
                        className="bg-ink shadow-card top-guide-card absolute right-3 z-10 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-white md:right-8 md:h-9 md:w-9"
                    >
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                </div>

                <CarouselDots
                    count={guideTopDestinations.length}
                    activeIndex={activeIndex}
                    onSelect={scrollToIndex}
                    className="lg:hidden"
                />

                <div className="relative hidden lg:block">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {guideTopDestinations.map((dest, i) => (
                            <GuideTopCard
                                key={`${dest.name}-${i}`}
                                dest={dest}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuideTopDestinations;
