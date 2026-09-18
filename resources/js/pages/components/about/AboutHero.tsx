import { IMAGES } from '@/config/images';
import HeroFrame, { HeroTitleSvg } from '@/components/ui/HeroFrame';


const VIEWBOX = '0 0 1440 814';
const TITLE = { x: 720, y: 252, fontSize: 200 };

function AboutHeroLayers() {
    return (
        <>
            <img
                src={IMAGES.about.hero}
                alt="Blue sky over forested Himalayan hills"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 top-[6%] aspect-1440/814 w-full">
                <HeroTitleSvg
                    viewBox={VIEWBOX}
                    x={TITLE.x}
                    y={TITLE.y}
                    fontSize={TITLE.fontSize}
                    title="ABOUT US"
                    colorClass="text-ink lg:text-white"
                    shadowClass="[text-shadow:0_4px_4px_rgb(0_0_0/0.25)]"
                />
            </div>
            <div className="absolute inset-x-0 top-[12.9%] aspect-1444/814 w-full">
                <img
                    src={IMAGES.about.heroSecond}
                    alt="Hazy Himalayan ranges over a green valley"
                    loading="eager"
                    className="absolute inset-0 h-full w-full"
                />
            </div>
        </>
    );
}

export default function AboutHero() {
    return (
        <HeroFrame
            liveText="About us"
            headerOverlay
            headerTone="onDark"
            frameClassName="lg:aspect-1440/1000"
        >
            <div className="absolute inset-0 lg:hidden">
                <AboutHeroLayers />
            </div>
            <div className="absolute inset-0 hidden lg:block">
                <AboutHeroLayers />
            </div>
            <div
                aria-hidden
                className="to-canvas absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent lg:h-40"
            />
        </HeroFrame>
    );
}
