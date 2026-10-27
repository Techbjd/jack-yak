import { Link } from '@inertiajs/react';
import { destCardTitle, fontPrimary, sectionPadX } from '@/config/theme';
import CoverImage from '@/components/ui/CoverImage';
import {
    popularDestinations,
    popularHeader,
    viewAllPageHref,
} from '@/config/destination';
import { cn } from '@/lib/utils';
import CarouselDots from '@/components/ui/CarouselDots';
import ViewAllLink from '@/components/ui/ViewAllLink';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PopularDestinations({
    loading = false,
}: {
    loading?: boolean;
}) {
    if (loading) {
        return (
            <section
                className="flex w-full flex-col gap-6 py-8 md:py-12"
                aria-busy="true"
                aria-label="Loading destinations"
            >
                <div
                    className={cn(
                        'flex items-center justify-between',
                        sectionPadX,
                    )}
                >
                    <div className="flex flex-col gap-2">
                        <div className="bg-bg-placeholder h-3 w-24 animate-pulse rounded" />
                        <div className="bg-bg-placeholder h-5 w-48 animate-pulse rounded" />
                    </div>
                    <div className="bg-bg-placeholder h-4 w-20 animate-pulse rounded" />
                </div>
                <div className={cn('hidden md:block', sectionPadX)}>
                    <div className="bg-bg-placeholder h-8 w-2/3 animate-pulse rounded" />
                </div>
                <div className="no-scrollbar w-full overflow-x-auto md:hidden">
                    <div className="flex w-max snap-x gap-4 px-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-dest-card-w flex shrink-0 snap-start flex-col gap-2"
                            >
                                <div className="rounded-dest-card bg-bg-placeholder aspect-dest-mobile w-full animate-pulse" />
                                <div className="bg-bg-placeholder h-3 w-3/4 animate-pulse rounded" />
                                <div className="bg-bg-placeholder h-3 w-1/2 animate-pulse rounded" />
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className={cn(
                        'hidden md:grid md:grid-cols-5 md:gap-6',
                        sectionPadX,
                    )}
                >
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex flex-col gap-3">
                            <div className="rounded-dest-card bg-bg-placeholder aspect-260/374 w-full animate-pulse" />
                            <div className="bg-bg-placeholder h-3 w-3/4 animate-pulse rounded" />
                            <div className="bg-bg-placeholder h-3 w-1/2 animate-pulse rounded" />
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="flex w-full flex-col gap-6 py-8 md:py-12">
            <div
                className={cn('flex items-center justify-between', sectionPadX)}
            >
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
                    'text-3xl-4xl text-text-primary hidden leading-snug font-bold md:block',
                    sectionPadX,
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
                            <Link
                                href={dest.href}
                                aria-label={`Explore ${dest.name}`}
                                className="block w-full"
                            >
                                <CoverImage
                                    src={dest.image}
                                    alt={dest.name}
                                    fill={false}
                                    wrapperClassName="rounded-dest-card aspect-dest-mobile w-full"
                                    className="rounded-dest-card"
                                />
                            </Link>

                            <p className={destCardTitle}>{dest.name}</p>
                            <p className={destCardTitle}>{dest.province}</p>
                        </div>
                    ))}
                </div>
            </div>

            <CarouselDots className="md:hidden" />

            <div
                className={cn(
                    'hidden md:grid md:grid-cols-5 md:gap-6',
                    sectionPadX,
                )}
            >
                {popularDestinations
                    .filter((dest) => !dest.mobileOnly)
                    .map((dest, i) => (
                        <div
                            key={`${dest.image}-${i}`}
                            className="flex flex-col gap-3"
                        >
                            <div className="relative aspect-260/374 w-full">
                                <Link
                                    href={dest.href}
                                    aria-label={`Explore ${dest.name}`}
                                    className="absolute inset-0"
                                >
                                    <CoverImage
                                        src={dest.image}
                                        alt={dest.name}
                                        className="rounded-dest-card"
                                    />
                                </Link>
                                <div className="absolute bottom-0 left-0 flex flex-col gap-1 p-4">
                                    {[dest.name, dest.province].map((label) => (
                                        <p
                                            key={label}
                                            className={cn(
                                                fontPrimary,
                                                'text-md-lg leading-tight font-bold text-white',
                                            )}
                                        >
                                            {label}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
