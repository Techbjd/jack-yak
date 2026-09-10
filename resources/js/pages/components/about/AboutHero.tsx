import { cn } from '@/lib/utils';
import { aboutHeroTitle } from '@/config/theme';
import { IMAGES } from '@/config/images';
import Header from '../shared/Header';

/** About hero — navy title above image on mobile; composite photo + title straddling its top edge on desktop */
export default function AboutHero() {
    return (
        <div className="w-full">
            {/* Mobile — navy header on canvas, composite photo with navy title overlaid */}
            <div className="bg-canvas flex flex-col items-center md:hidden">
                <div className="w-full">
                    <Header tone="onLight" />
                </div>
                <div className="relative mt-4 w-full">
                    <img
                        src={IMAGES.about.hero}
                        alt="Blue sky over forested Himalayan hills"
                        loading="eager"
                        className="h-auto w-full object-cover"
                    />
                    <img
                        src={IMAGES.about.heroSecond}
                        alt=""
                        aria-hidden
                        loading="eager"
                        className="absolute inset-x-0 top-9 h-auto w-full object-cover"
                    />
                    <h1
                        className={cn(
                            aboutHeroTitle,
                            'absolute inset-x-0 top-2 px-6 text-center drop-shadow-md',
                        )}
                    >
                        ABOUT US
                    </h1>
                    <div
                        aria-hidden
                        className="to-canvas absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent"
                    />
                </div>
            </div>

            {/* Desktop — Figma hero: full-bleed composite, white nav + title overlaid */}
            <div className="hidden w-full md:block">
                <div className="relative w-full">
                    {/* Base sky photo */}
                    <img
                        src={IMAGES.about.hero}
                        alt="Blue sky over forested Himalayan hills"
                        loading="eager"
                        className="h-auto w-full object-cover"
                    />
                    {/* Figma Rectangle 179 — bottom fade into canvas */}
                    <div
                        aria-hidden
                        className="to-canvas absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent"
                    />
                    {/* Title between the layers: base photo below, overlay above */}
                    <h1
                        className={cn(
                            aboutHeroTitle,
                            'top-feat-card-h absolute inset-x-0 -translate-y-3 px-12 text-center drop-shadow-md lg:px-24',
                        )}
                    >
                        ABOUT US
                    </h1>
                    {/* Figma Object at top:129 — mountain cutout, sky stays transparent */}
                    <img
                        src={IMAGES.about.heroSecond}
                        alt=""
                        aria-hidden
                        loading="eager"
                        className="absolute inset-x-0 top-32 h-auto w-full object-cover"
                    />
                    {/* Figma Group 23 at top:68 — white nav over the sky */}
                    <div className="absolute inset-x-0 top-0">
                        <Header tone="onDark" />
                    </div>
                </div>
            </div>
        </div>
    );
}
