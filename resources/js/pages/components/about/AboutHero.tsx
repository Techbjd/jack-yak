import { IMAGES } from '@/config/images';
import HeroFrame, { HeroTitleSvg } from '@/components/ui/HeroFrame';

/**
 * Two-layer desktop vs single-layer mobile.
 * On lg+ the valley back photo (about-hero.png) fills the whole frame and
 * stretches behind the overlaid nav (headerOverlay), while a bottom-anchored
 * 1440/814 box holds the mountain cutout (about-hero-second.png, 1440x814)
 * with its transparent sky revealing the valley. Frame lg:aspect-1464/1020
 * with a bottom-anchored 1440/814 box leaves a ~13%-of-frame valley band at
 * top for the overlaid nav. On mobile the cutout renders alone on the white
 * frame (approved white-sky mobile look).
 *
 * Slice-locked SVG title (cutout-pixel geometry, 1440x814) serves every
 * screen, so the title stays slice-locked to the cutout and can never drift.
 */
const VIEWBOX = '0 0 1440 814';
const TITLE = { x: 720, y: 150, fontSize: 200 };

export default function AboutHero() {
    return (
        <HeroFrame
            liveText="About us"
            headerOverlay
            headerTone="onDark"
            frameClassName="lg:aspect-1464/1020"
        >
            <div className="absolute inset-0 lg:hidden">
                <img
                    src={IMAGES.about.heroSecond}
                    alt="Hazy Himalayan ranges over a green valley"
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <HeroTitleSvg
                    viewBox={VIEWBOX}
                    x={TITLE.x}
                    y={TITLE.y}
                    fontSize={TITLE.fontSize}
                    title="ABOUT US"
                />
            </div>
            <div className="absolute inset-0 hidden lg:block">
                <img
                    src={IMAGES.about.hero}
                    alt="Blue sky over forested Himalayan hills"
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 aspect-1440/814 w-full">
                    <img
                        src={IMAGES.about.heroSecond}
                        alt=""
                        aria-hidden
                        loading="eager"
                        className="absolute inset-0 h-full w-full"
                    />
                    <HeroTitleSvg
                        viewBox={VIEWBOX}
                        x={TITLE.x}
                        y={TITLE.y}
                        fontSize={TITLE.fontSize}
                        title="ABOUT US"
                    />
                </div>
            </div>
            <div
                aria-hidden
                className="to-canvas absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent lg:h-40"
            />
        </HeroFrame>
    );
}
