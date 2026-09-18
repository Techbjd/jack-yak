import { useAutoRotate } from '@/lib/useAutoRotate';
import Header from '@/components/ui/Header';
import {
    aboutHeroTitle,
    fontPrimary,
    coverImageAbsolute,
} from '@/config/theme';
import {
    destinationHeroSlideIntervalMs,
    destinationHeroSlides,
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
            <Header tone="onLight" />

            <div className="flex flex-col items-center px-0 pt-2 text-center md:px-12 lg:px-12">
                <div className="relative mt-4 w-full bg-white">
                    <div className="md:rounded-dest-card relative flex aspect-video w-full items-center justify-center overflow-hidden bg-white lg:aspect-1464/958">
                        <img
                            src={IMAGES.destination.hero.sun}
                            alt=""
                            aria-hidden="true"
                            loading="eager"
                            className="absolute top-[6%] left-1/2 w-[30%] -translate-x-1/2 object-contain"
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
                            <img
                                key={slide.name}
                                src={slide.image}
                                alt={slide.name}
                                loading={index === 0 ? 'eager' : 'lazy'}
                                aria-hidden={index !== active}
                                className={cn(
                                    coverImageAbsolute,
                                    'transition-opacity duration-700 ease-out',
                                    index === active
                                        ? 'opacity-100'
                                        : 'opacity-0',
                                )}
                            />
                        ))}

                        {!current.titleOverlay && (
                            <p
                                className={cn(
                                    aboutHeroTitle,

                                    'absolute inset-x-0 top-[12%] px-6 text-center drop-shadow-md lg:top-[17.5%]',
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
                        'text-xs-md text-text-primary md:text-2xl-3xl  mt-6 w-full  m-auto justify-center items-center px-6 text-center leading-snug font-medium md:mt-8  md max-w-2xl md:px-0',
                    )}
                >
                    Nepal is a land of extraordinary diversity where the
                    Himalayas, ancient heritage, vibrant cultures, and abundant
                    wildlife come together. From the world&apos;s highest peaks
                    to lush subtropical jungles, Nepal offers unforgettable
                    experiences for every traveler.
                </p>
            </div>
        </div>
    );
}
