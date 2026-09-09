import { fontPrimary, sectionPadding } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { useColors } from '@/config/colors';

// Image dimensions from Figma
const IMG = { x: 298, y: 1377, w: 872, h: 460 };

// Leader-line bounding box in Figma coordinates
const REF = { x: 240, y: 1377, w: 985, h: 566 };

// Offsets relative to the image (in Figma px)
const SVG_OFFSET = {
    left: (REF.x - IMG.x) / IMG.w,
    top: (REF.y - IMG.y) / IMG.h,
    width: REF.w / IMG.w,
    height: REF.h / IMG.h,
};

const NepalMap = () => {
    const colors = useColors();
    const MAP_BASE_COLOR = colors.navy_light;
    const MAP_ACTIVE_COLOR = colors.teal;

    return (
        <section className={`relative w-full px-6 md:px-12 lg:px-24 ${sectionPadding}`}>
            <div className="relative mx-auto w-full overflow-visible max-w-container">
                {/* CHINA label */}
                <p className={`${fontPrimary} absolute right-[5%] top-0 text-3xl font-bold text-teal md:text-4xl`}>
                    CHINA
                </p>

                {/* INDIA label */}
                <p className={`${fontPrimary} absolute bottom-0 left-[10%] text-3xl font-bold text-teal md:text-4xl`}>
                    INDIA
                </p>

                {/* Map wrapper */}
                <div className="relative mx-auto w-full max-w-map overflow-visible pt-10">
                    {/* Image container — sized to raster map aspect ratio */}
                    <div className="relative w-full" style={{ aspectRatio: `${IMG.w} / ${IMG.h}` }}>
                        {/* Vectorized map — behind, shifted up so top edge peeks out */}
                        <img
                            src={IMAGES.home.provincesMap}
                            alt="Nepal Map vectorized"
                            className="absolute left-4 z-0 hidden w-full object-contain object-top md:block"
                            style={{ height: 'calc(100% + 40px)', top: -55 }}
                        />


                    </div>

                    {/* SVG overlay — leader lines + labels, all in REF coordinate space */}
                    <div
                        className="pointer-events-none absolute hidden md:block"
                        style={{
                            left: `${SVG_OFFSET.left * 100}%`,
                            top: `${SVG_OFFSET.top * 100}%`,
                            width: `${SVG_OFFSET.width * 100}%`,
                            height: `${SVG_OFFSET.height * 100}%`,
                        }}
                    >


                    </div>
                </div>
            </div>
        </section>
    );
};

export default NepalMap;
