import Header from '../shared/Header';
import {
    fontPrimary,
    imagePlaceholder,
    coverImageAbsolute,
} from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

export default function DestinationHero() {
    return (
        <div className="flex w-full flex-col bg-white">
            <Header tone="onLight" />

            <div className="flex flex-col items-center px-0 pt-2 text-center md:px-12 lg:px-12">
                <div className={cn('relative mt-4 w-full', imagePlaceholder)}>
                    <div className="md:rounded-dest-card relative flex aspect-video w-full items-center justify-center overflow-hidden lg:aspect-1464/958">
                        <img
                            src={IMAGES.destination.amaDablam}
                            alt="Ama Dablam"
                            loading="lazy"
                            className={cn(coverImageAbsolute)}
                        />
                    </div>
                </div>

                <p
                    className={cn(
                        fontPrimary,
                        'text-sm-base text-text-primary md:text-md-lg mx-auto mt-6 w-full max-w-70 px-6 text-center leading-snug font-medium md:mt-8 md:max-w-md md:px-0',
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
