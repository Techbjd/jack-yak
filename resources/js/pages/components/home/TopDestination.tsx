import {
    fontPrimary,
    cardMobileImage,
    cardMobileContent,
} from '@/config/theme';
import {
    homeTopDestinations,
    topDestinationsHeading,
    type HomeTopDestination,
} from '@/config/destination';
import { cn } from '@/lib/utils';

const cardDimensions: Record<
    HomeTopDestination['variant'],
    { width: number; height: number }
> = {
    sm: { width: 258, height: 391 },
    lg: { width: 284, height: 424 },
};

const TopDestinations = () => {
    return (
        <section className="w-full px-6 py-16 md:px-12 md:py-24 lg:px-24">
            <div className="max-w-container mx-auto flex flex-col items-center gap-16 md:gap-24">
                <h2
                    className={cn(
                        fontPrimary,
                        'text-text-primary text-center font-bold',
                        'text-xl-2xl leading-tight md:text-3xl-4xl',
                        'max-w-dest-title',
                    )}
                >
                    {topDestinationsHeading}
                </h2>

                <div className="grid w-full grid-cols-3 gap-4 md:hidden">
                    {homeTopDestinations.map((dest, i) => (
                        <div
                            key={i}
                            className="flex min-w-0 flex-col transition-transform duration-200 ease-out active:scale-[0.98]"
                        >
                            <div
                                className={cn(
                                    cardMobileImage,
                                    'rounded-t-card bg-bg-placeholder aspect-117/97 h-auto w-full bg-cover bg-center',
                                )}
                                style={{
                                    backgroundImage: `url(${dest.image})`,
                                }}
                            />
                            <div
                                className={cn(
                                    cardMobileContent,
                                    'rounded-b-card shadow-card flex h-auto min-h-9.25 w-full flex-col items-center justify-center bg-white px-1 py-1.5',
                                )}
                            >
                                <span
                                    className={cn(
                                        fontPrimary,
                                        'text-ink warp-break-words w-full text-center font-bold',
                                        'text-xs-sm leading-tight tracking-wide',
                                    )}
                                >
                                    {dest.name}
                                </span>
                                <span
                                    className={cn(
                                        fontPrimary,
                                        'text-ink text-2xs warp-break-words w-full text-center font-semibold',
                                        'leading-tight tracking-wide',
                                    )}
                                >
                                    {dest.subtitle}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden md:mx-auto md:grid md:w-full md:max-w-240 md:grid-cols-[9fr_10fr_9fr] md:items-start md:gap-6">
                    {homeTopDestinations.map((dest) => {
                        const dims = cardDimensions[dest.variant];
                        return (
                            <div
                                key={dest.name}
                                className="rounded-image group relative overflow-hidden"
                                style={{
                                    aspectRatio: `${dims.width} / ${dims.height}`,
                                }}
                            >
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-150"
                                    style={{
                                        backgroundImage: `url(${dest.image})`,
                                    }}
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/0 to-black/10" />

                                <span
                                    className={cn(
                                        fontPrimary,
                                        'absolute right-0 left-0 text-center font-medium text-white',
                                        'text-xl-2xl leading-card-overlay top-6',
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
