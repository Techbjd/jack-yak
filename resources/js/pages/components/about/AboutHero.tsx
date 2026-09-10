import { cn } from '@/lib/utils';
import { aboutHeroTitle } from '@/config/theme';
import { IMAGES } from '@/config/images';
import Header from '../shared/Header';

/** About hero — navy title above image on mobile; composite photo + title straddling its top edge on desktop */
export default function AboutHero() {
    return (
        <div className="w-full">
            {/* Mobile — navy title on canvas, base photo below with fade */}
            <div className="bg-canvas flex flex-col items-center md:hidden">
                <div className="w-full">
                    <Header tone="onLight" />
                </div>
                <h1 className={cn(aboutHeroTitle, 'px-6 pt-6 text-center')}>
                    ABOUT US
                </h1>
                <div className="relative mt-4 w-full">
                    <img
                        src={IMAGES.about.hero}
                        alt="Blue sky over forested Himalayan hills"
                        loading="eager"
                        className="h-56 w-full object-cover"
                    />
                    <div
                        aria-hidden
                        className="to-canvas absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent"
                    />
                </div>
            </div>

            {/* Desktop — navy header on canvas, composite photo, title straddling the photo top edge */}
            <div className="bg-canvas hidden w-full flex-col md:flex">
                <Header tone="onLight" />
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
                    {/* Figma Object at top:129 — mountain cutout, sky stays transparent */}
                    <img
                        src={IMAGES.about.heroSecond}
                        alt=""
                        aria-hidden
                        loading="eager"
                        className="absolute inset-x-0 top-32 h-auto w-full object-cover"
                    />
                    <h1
                        className={cn(
                            aboutHeroTitle,
                            'absolute inset-x-0 -top-8 px-12 text-center drop-shadow-md lg:px-24',
                        )}
                    >
                        ABOUT US
                    </h1>
                </div>
            </div>
        </div>
    );
}
