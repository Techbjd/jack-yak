import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import {
    guideTopDestinations,
    viewAllPageHref,
} from '@/config/destination';
import { guideTopHeader } from '@/config/guide';
import CarouselDots from '@/components/ui/CarouselDots';
import ViewAllLink from '@/components/ui/ViewAllLink';
import SectionHeading from '@/components/ui/SectionHeading';
import DestinationCard from '@/components/ui/DestinationCard';

const GUIDE_CARD_LAYOUT =
    'ms:basis-55 max-w-dest-card mx-auto flex w-full shrink-0 grow basis-27 snap-start flex-col items-center md:basis-65 lg:w-full lg:basis-auto';

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
                    <SectionHeading
                        eyebrow={guideTopHeader.eyebrow}
                        title={guideTopHeader.title}
                        eyebrowClassName="md:text-md-lg"
                        titleClassName="leading-tight md:text-3xl-4xl md:leading-snug"
                    />
                    <ViewAllLink href={viewAllPageHref}>
                        {guideTopHeader.link}
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
                                    image={dest.image}
                                    name={dest.name}
                                    province={dest.province}
                                    tagline={dest.subtitle}
                                    meta={dest.duration}
                                    href={dest.href}
                                    className={GUIDE_CARD_LAYOUT}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={scrollToNextImage}
                        aria-label={guideTopHeader.nextLabel}
                        className="bg-ink shadow-card absolute top-[30%] right-3 z-10 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-white md:right-8 md:h-9 md:w-9"
                    >
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                </div>

                <CarouselDots
                    count={guideTopDestinations.length}
                    className="lg:hidden"
                />

                <div className="relative hidden lg:block">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {guideTopDestinations.map((dest, i) => (
                            <DestinationCard
                                key={`${dest.name}-${i}`}
                                image={dest.image}
                                name={dest.name}
                                province={dest.province}
                                tagline={dest.subtitle}
                                meta={dest.duration}
                                href={dest.href}
                                className={GUIDE_CARD_LAYOUT}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuideTopDestinations;
