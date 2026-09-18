import {
    coverImageAbsolute,
    destCardTitle,
    fontPrimary,
    imagePlaceholder,
} from '@/config/theme';
import { popularDestinations, popularHeader, viewAllPageHref } from '@/config/destination';
import { cn } from '@/lib/utils';
import CarouselDots from '@/components/ui/CarouselDots';
import ViewAllLink from '@/components/ui/ViewAllLink';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PopularDestinations() {
    return (
        <section className="flex w-full flex-col gap-6 py-8 md:py-12">
            <div className="flex items-center justify-between px-6 md:px-12 lg:px-24">
                <SectionHeading
                    title={popularHeader.eyebrow}
                    className="contents"
                    titleClassName="text-black md:text-lg-xl md:text-text-primary"
                />
                <ViewAllLink
                    href={viewAllPageHref}
                    className="text-cta-accent md:text-text-primary gap-2"
                >
                    {popularHeader.link}
                </ViewAllLink>
            </div>

            <p
                className={cn(
                    fontPrimary,
                    'text-3xl-4xl text-text-primary hidden px-6 leading-snug font-bold md:block md:px-12 lg:px-24',
                )}
            >
                {popularHeader.question}
            </p>

            <div className="no-scrollbar w-full overflow-x-auto md:hidden">
                <div className="flex w-max snap-x gap-4 px-6">
                    {popularDestinations.map((dest, i) => (
                        <div
                            key={`${dest.name}-${i}`}
                            className="w-dest-card-w flex shrink-0 snap-start flex-col gap-2"
                        >
                            <a
                                href={dest.href}
                                aria-label={`Explore ${dest.name}`}
                                className="block w-full"
                            >
                                <img
                                    className={cn(
                                        imagePlaceholder,
                                        'rounded-dest-card aspect-[109/192] h-auto w-full object-cover',
                                    )}
                                    src={dest.image}
                                    alt={dest.name}
                                />
                            </a>

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
                            <div className="aspect-[260/374] relative w-full">
                                <a
                                    href={dest.href}
                                    aria-label={`Explore ${dest.name}`}
                                    className="absolute inset-0"
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
                                </a>
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
