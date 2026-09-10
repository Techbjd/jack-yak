import { cn } from '@/lib/utils';
import { aboutHeroTitle } from '@/config/theme';
import { IMAGES } from '@/config/images';
import Header from '../shared/Header';

/** About hero — navy title above image on mobile, giant serif over image on desktop */
export default function AboutHero() {
    return (
        <div className="w-full">
            {/* Mobile — title on canvas, image below with fade */}
            <div className="bg-canvas flex flex-col items-center md:hidden">
                <div className="w-full">
                    <Header tone="onLight" />
                </div>
                <h1 className={cn(aboutHeroTitle, 'px-6 pt-6 text-center')}>
                    ABOUT US
                </h1>
                <div className="relative mt-4 w-full">
                    <img
                        src={IMAGES.home.aboutJackyak}
                        alt="Terraced hills beneath snowy Himalayan peaks"
                        loading="eager"
                        className="h-56 w-full object-cover"
                    />
                    <div
                        aria-hidden
                        className="to-canvas absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent"
                    />
                </div>
            </div>

            {/* Desktop — header + giant title overlaid on panorama */}
            <div className="relative hidden w-full md:block">
                <img
                    src={IMAGES.home.aboutJackyak}
                    alt="Terraced hills beneath snowy Himalayan peaks"
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative z-10 flex h-250 flex-col">
                    <Header tone="onDark" />
                    <h1
                        className={cn(
                            aboutHeroTitle,
                            'px-12 pt-16 text-center drop-shadow-md lg:px-24 lg:pt-24',
                        )}
                    >
                        ABOUT US
                    </h1>
                </div>
            </div>
        </div>
    );
}
