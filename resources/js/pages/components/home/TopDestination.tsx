import { fontPrimary, cardMobileImage, cardMobileContent } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

const destinations = [
    {
        name: 'Tilicho Lake',
        subtitle: 'Scenic Lake',
        image: IMAGES.featured.tilichoLake,
        variant: 'sm' as const,
    },
    {
        name: 'Mount Everest',
        subtitle: 'Highest Peak',
        image: IMAGES.featured.everestPrayerFlags,
        variant: 'lg' as const,
    },
    {
        name: 'Gokyo Lake',
        subtitle: 'Sacred Lake',
        image: IMAGES.featured.gokyoLake,
        variant: 'sm' as const,
    },
];

type CardVariant = 'sm' | 'lg';

const cardDimensions: Record<CardVariant, { width: number; height: number }> = {
    sm: { width: 258, height: 391 },
    lg: { width: 284, height: 424 },
};

const TopDestinations = () => {
    return (
        <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="mx-auto flex flex-col items-center gap-16 md:gap-24 max-w-page">

                {/* Title */}
                <h2 className={cn(
                    fontPrimary,
                    "text-center font-bold text-text-primary",
                    "text-3xl-4xl leading-tight",
                    "max-w-dest-title"
                )}>
                    Explore Nepal's Top Destinations
                </h2>

                {/* MOBILE: horizontal scroll cards */}
                <div className="w-full overflow-x-auto [scrollbar-none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:hidden">
                    <div className="flex w-max gap-5 pl-5 pr-5 snap-x snap-mandatory">
                        {destinations.map((dest, i) => (
                            <div
                                key={i}
                                className="flex shrink-0 snap-start flex-col"
                            >
                                {/* Mobile card image */}
                                <div
                                    className={cn(
                                        cardMobileImage,
                                        "rounded-t-card bg-bg-placeholder bg-cover bg-center"
                                    )}
                                    style={{
                                        backgroundImage: `url(${dest.image})`,
                                    }}
                                />
                                {/* Mobile card content */}
                                <div className={cn(
                                    cardMobileContent,
                                    "flex flex-col items-center justify-center rounded-b-card bg-white shadow-card"
                                )}>
                                    <span className={cn(
                                        fontPrimary,
                                        "font-bold text-ink",
                                        "text-xs-sm leading-3 tracking-wide"
                                    )}>
                                        {dest.name}
                                    </span>
                                    <span className={cn(
                                        fontPrimary,
                                        "text-ink text-2xs font-semibold",
                                        "leading-2.5 tracking-wide"
                                    )}>
                                        {dest.subtitle}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DESKTOP: grid carousel */}
                <div className="hidden md:grid md:grid-cols-3 md:gap-6">
                    {destinations.map((dest) => {
                        const dims = cardDimensions[dest.variant];
                        return (
                            <div
                                key={dest.name}
                                className="relative overflow-hidden rounded-2xl bg-cover bg-center"
                                style={{
                                    aspectRatio: `${dims.width} / ${dims.height}`,
                                    backgroundImage: `url(${dest.image})`,
                                }}
                            >
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/0 to-black/10" />

                                {/* Destination name */}
                                <span className={cn(
                                    fontPrimary,
                                    "absolute left-0 right-0 text-center font-medium text-white",
                                    "text-xl-2xl top-6"
                                )}>
                                    {dest.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TopDestinations;
