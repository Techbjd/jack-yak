import { cn } from '@/lib/utils';
import { aboutHeroTitle } from '@/config/theme';
import { IMAGES } from '@/config/images';
import Header from '../shared/Header';

/** About hero — navy title above image on mobile; title straddling the image top edge on desktop */
export default function AboutHero() {
    return (
        <div className="w-full">
            {/* Mobile — navy title on canvas, image below with fade */}
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

            {/* Desktop — navy header on canvas, title straddling the image top edge */}
            <div className="bg-canvas hidden w-full flex-col md:flex">
                <Header tone="onLight" />
                <div className="relative w-full">
                    <img
                        src={IMAGES.about.hero}
                        alt="Terraced hills beneath snowy Himalayan peaks"
                        loading="eager"
                        className="h-auto w-full object-cover"
                    />
                    <h1
                        className={cn(
                            aboutHeroTitle,
                            'absolute inset-x-0 top-10 px-12 text-center drop-shadow-md lg:px-24',
                        )}
                    >
                        ABOUT US
                    </h1>
                </div>
            </div>
        </div>
    );
}
