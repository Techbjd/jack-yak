import { cn } from '@/lib/utils';
import { aboutHeroTitle } from '@/config/theme';
import { IMAGES } from '@/config/images';
import Header from '../shared/Header';

/** About hero — navy title above image on mobile; composite photo + title straddling its top edge on desktop */
export default function AboutHero() {
    return (
        <div className="w-full">
            {/* Mobile — navy header on canvas, overlay-only photo with navy title behind it */}
            <div className="bg-canvas flex flex-col items-center md:hidden">
                <div className="w-full">
                    <Header tone="onLight" />
                </div>
                <div className="relative mt-4 aspect-video w-full">
                    <h1
                        className={cn(
                            aboutHeroTitle,
                            'absolute inset-x-0 top-0 px-6 text-center drop-shadow-md',
                        )}
                    >
                        ABOUT US
                    </h1>
                    <img
                        src={IMAGES.about.heroSecond}
                        alt="Hazy Himalayan ranges over a green valley"
                        loading="eager"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div
                        aria-hidden
                        className="to-canvas absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent"
                    />
                </div>
            </div>

            {/* Desktop — full-bleed composite, white nav + title overlaid */}
            <div className="hidden w-full md:block">
                <div className="relative w-full">
                    {/* Base sky photo */}
                    <img
                        src={IMAGES.about.hero}
                        alt="Blue sky over forested Himalayan hills"
                        loading="eager"
                        className="h-auto w-full object-cover"
                    />
                    {/* Bottom fade into canvas */}
                    <div
                        aria-hidden
                        className="to-canvas absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent"
                    />
                    {/* Title between the layers, scaled like the overlay */}
                    <h1
                        className={cn(
                            aboutHeroTitle,
                            '-translate-y-hero-line absolute inset-x-0 top-10 px-12 text-center drop-shadow-md md:top-28 lg:top-40 lg:px-24',
                        )}
                    >
                        ABOUT US
                    </h1>
                    {/* Mountain cutout overlay, sky stays transparent */}
                    <img
                        src={IMAGES.about.heroSecond}
                        alt=""
                        aria-hidden
                        loading="eager"
                        className="absolute inset-x-0 top-9 h-auto w-full object-cover md:top-17 lg:top-32"
                    />
                    {/* White nav over the sky */}
                    <div className="absolute inset-x-0 top-0">
                        <Header tone="onDark" />
                    </div>
                </div>
            </div>
        </div>
    );
}
