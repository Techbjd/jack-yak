import { fontPrimary, sectionPadding, sectionInner } from '@/config/theme';
import { cn } from '@/lib/utils';
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
        <section
            className={cn('relative w-full', sectionPadding, sectionInner)}
        >
            <div className="max-w-container relative mx-auto w-full overflow-visible">
                {/* CHINA label */}
                <p
                    className={cn(
                        fontPrimary,
                        'text-teal absolute top-0 right-[5%] text-3xl font-bold md:text-4xl',
                    )}
                >
                    CHINA
                </p>

                {/* INDIA label */}
                <p
                    className={cn(
                        fontPrimary,
                        'text-teal absolute bottom-0 left-[10%] text-3xl font-bold md:text-4xl',
                    )}
                >
                    INDIA
                </p>

                {/* Map wrapper */}
                <div className="max-w-map relative mx-auto w-full overflow-visible pt-10">
                    {/* Image container — sized to raster map aspect ratio */}
                    <div
                        className="relative w-full"
                        style={{ aspectRatio: `${IMG.w} / ${IMG.h}` }}
                    >
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
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default NepalMap;
