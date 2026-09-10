import {
    fontPrimary,
    cardMobileImage,
    cardMobileContent,
} from '@/config/theme';
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
        <section className="w-full px-6 py-16 md:px-12 md:py-24 lg:px-24">
            <div className="max-w-page mx-auto flex flex-col items-center gap-16 md:gap-24">
                <h2
                    className={cn(
                        fontPrimary,
                        'text-text-primary text-center font-bold',
                        'text-3xl-4xl leading-tight',
                        'max-w-dest-title',
                    )}
                >
                    Explore Nepal's Top Destinations
                </h2>

                <div className="no-scrollbar w-full overflow-x-auto md:hidden">
                    <div className="flex w-max snap-x snap-mandatory gap-5 pr-5 pl-5">
                        {destinations.map((dest, i) => (
                            <div
                                key={i}
                                className="flex shrink-0 snap-start flex-col"
                            >
                                <div
                                    className={cn(
                                        cardMobileImage,
                                        'rounded-t-card bg-bg-placeholder bg-cover bg-center',
                                    )}
                                    style={{
                                        backgroundImage: `url(${dest.image})`,
                                    }}
                                />
                                <div
                                    className={cn(
                                        cardMobileContent,
                                        'rounded-b-card shadow-card flex flex-col items-center justify-center bg-white',
                                    )}
                                >
                                    <span
                                        className={cn(
                                            fontPrimary,
                                            'text-ink font-bold',
                                            'text-xs-sm leading-3 tracking-wide',
                                        )}
                                    >
                                        {dest.name}
                                    </span>
                                    <span
                                        className={cn(
                                            fontPrimary,
                                            'text-ink text-2xs font-semibold',
                                            'leading-2.5 tracking-wide',
                                        )}
                                    >
                                        {dest.subtitle}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden md:grid md:grid-cols-3 md:gap-6">
                    {destinations.map((dest) => {
                        const dims = cardDimensions[dest.variant];
                        return (
                            <div
                                key={dest.name}
                                className="rounded-image relative overflow-hidden bg-cover bg-center"
                                style={{
                                    aspectRatio: `${dims.width} / ${dims.height}`,
                                    backgroundImage: `url(${dest.image})`,
                                }}
                            >
                                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/0 to-black/10" />

                                <span
                                    className={cn(
                                        fontPrimary,
                                        'absolute right-0 left-0 text-center font-medium text-white',
                                        'text-xl-2xl top-6',
                                    )}
                                >
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
