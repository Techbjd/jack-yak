import { useAutoRotate } from '@/lib/useAutoRotate';
import Header from '@/components/ui/Header';
import { aboutHeroTitle, fontPrimary } from '@/config/theme';
import CoverImage from '@/components/ui/CoverImage';
import {
    destinationHeroSlideIntervalMs,
    destinationHeroSlides,
    destinationHeroTagline,
} from '@/config/destination';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

export default function DestinationHero() {
    const [active] = useAutoRotate(
        destinationHeroSlides.length,
        destinationHeroSlideIntervalMs,
    );

    const current = destinationHeroSlides[active];

    return (
        <div className="flex w-full flex-col bg-white">
            <Header tone="onLight" className="max-w-full" />

            <div className="flex flex-col items-center px-0 pt-2 text-center">
                <div className="relative mt-4 w-full bg-white">
                    <div className="md:rounded-dest-card relative flex aspect-video w-full items-center justify-center overflow-hidden bg-white lg:aspect-1464/958">
                        <img
                            src={IMAGES.destination.hero.sun}
                            alt=""
                            aria-hidden="true"
                            loading="eager"
                            className="top-hero-deco absolute left-1/2 w-3/10 -translate-x-1/2 object-contain"
                        />
                        {destinationHeroSlides.map((slide, index) =>
                            slide.titleOverlay ? (
                                <svg
                                    key={slide.name}
                                    viewBox={slide.titleOverlay.viewBox}
                                    preserveAspectRatio="xMidYMid slice"
                                    aria-hidden={index !== active}
                                    className={cn(
                                        'pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-700 ease-out',
                                        index === active
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                    )}
                                >
                                    <text
                                        x={slide.titleOverlay.x}
                                        y={slide.titleOverlay.y}
                                        textAnchor="middle"
                                        fontSize={slide.titleOverlay.fontSize}
                                        fontFamily="'EB Garamond', Georgia, serif"
                                        fontWeight={500}
                                        fill={slide.titleOverlay.color}
                                        transform={`matrix(${slide.titleOverlay.scaleX} 0 0 1 ${slide.titleOverlay.x * (1 - slide.titleOverlay.scaleX)} 0)`}
                                    >
                                        {slide.name}
                                    </text>
                                </svg>
                            ) : null,
                        )}
                        {destinationHeroSlides.map((slide, index) => (
                            <div
                                key={slide.name}
                                aria-hidden={index !== active}
                                className={cn(
                                    'absolute inset-0 transition-opacity duration-700 ease-out',
                                    index === active
                                        ? 'opacity-100'
                                        : 'opacity-0',
                                )}
                            >
                                <CoverImage
                                    src={slide.image}
                                    alt={slide.name}
                                    eager={index === 0}
                                />
                            </div>
                        ))}

                        {!current.titleOverlay && (
                            <p
                                className={cn(
                                    aboutHeroTitle,

                                    'top-destination-deco lg:top-destination-deco-lg absolute inset-x-0 px-6 text-center drop-shadow-md',
                                )}
                            >
                                {current.name}
                            </p>
                        )}
                        <p aria-live="polite" className="sr-only">
                            {current.name}
                        </p>
                    </div>
                </div>

                <p
                    className={cn(
                        fontPrimary,
                        'text-xs-md text-text-primary md:text-2xl-3xl mt-6 w-full max-w-2xl px-6 text-center leading-snug font-medium md:mt-8 md:px-0',
                    )}
                >
                    {destinationHeroTagline}
                </p>
            </div>
        </div>
    );
}
