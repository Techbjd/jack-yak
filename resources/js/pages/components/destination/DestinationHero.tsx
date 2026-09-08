import Header from '../shared/Header';
import { fontDisplay, fontPrimary, imagePlaceholder } from '@/config/theme';
import { cn } from '@/lib/utils';

export default function DestinationHero() {
    return (
        <div className="flex w-full flex-col bg-white">
            <Header tone="onLight" />

            <div className="flex flex-col items-center px-6 pt-2 text-center md:px-12 lg:px-12">
                <h1
                    className={cn(
                        fontDisplay,
                        'text-display leading-tight font-medium text-text-primary lg:text-display-lg lg:leading-display-lg',
                    )}
                >
                    Ama Dablam
                </h1>

                {/* Panorama mask — swap with mountain asset later */}
                <div className={cn('relative mt-4 w-full', imagePlaceholder)}>
                    <div className="flex aspect-video w-full items-center justify-center lg:aspect-1464/958">
                        <span
                            className={cn(
                                fontPrimary,
                                'text-xs-sm font-medium text-white/80',
                            )}
                        >
                            Mountain.png
                        </span>
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-white via-white/50 to-transparent"
                    />
                </div>

                <p
                    className={cn(
                        fontPrimary,
                        'max-w-content-sm py-8 text-center text-sm-base leading-snug font-medium text-text-primary lg:max-w-content-xl lg:py-12 lg:text-2xl-3xl lg:leading-snug',
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
