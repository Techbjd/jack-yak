import { LayoutGrid, Play, Users } from 'lucide-react';
import { IMAGES } from '@/config/images';
import { galleryTiles } from '@/config/itinerary';
import CarouselDots from '../shared/CarouselDots';

/** White frosted pill pinned to a tile corner (Figma desktop mosaic) */
const frostedPill =
    'flex items-center gap-1.5 rounded-full bg-white/95 shadow-card backdrop-blur-sm';

/** Photo gallery — mobile + tablet: hero + 3 thumbs stack (roomier at
 *  md via wider gaps + aspect-ratio tiles); desktop (lg+): 3-col mosaic
 *  (hero spans 2 rows, 2x2 cells right) with flow-layout overlay rows
 *  instead of Figma's absolute export positions */
export default function ItineraryGallery() {
    const [cellA, cellB, cellC] = IMAGES.itinerary.galleryThumbs;

    return (
        <section
            aria-label="Trek photos"
            className="flex w-full flex-col gap-2 md:gap-3"
        >
            {/* Mobile + tablet stack (lg:hidden keeps the roomy stacked
                layout through md; the mosaic below takes over at lg) */}
            <div className="relative w-full lg:hidden">
                <img
                    src={IMAGES.itinerary.hero}
                    alt="Everest Base Camp trek panorama"
                    className="h-itinerary-hero-h rounded-dest-image w-full object-cover md:aspect-video md:h-auto"
                />
                <CarouselDots
                    count={5}
                    activeIndex={0}
                    className="absolute right-4 bottom-2 justify-end gap-0.75"
                    dotClassName="h-1.5 w-1.5"
                />
            </div>
            <div className="grid w-full grid-cols-3 gap-1.5 md:gap-2.5 lg:hidden">
                {IMAGES.itinerary.galleryThumbs.map((src, i) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Trek gallery photo ${i + 1}`}
                        className="h-itinerary-thumb-h rounded-immersive w-full object-cover md:aspect-square md:h-auto"
                    />
                ))}
            </div>

            {/* Desktop mosaic (Figma 1440, lg+ only — cramped at md widths):
                wide hero tile left spanning both rows, 2x2 cells right.
                Columns follow Figma's 704 | 348 | 348 widths; tiles are
                ~square so rows size themselves — no fixed heights,
                no page absolute. */}
            <div className="hidden w-full grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-2.5 lg:grid">
                <figure className="rounded-gallery-tile relative row-span-2 overflow-hidden">
                    <img
                        src={IMAGES.itinerary.hero}
                        alt="Everest Base Camp trek panorama"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <figcaption className="absolute bottom-4 left-4">
                        <span className={frostedPill}>
                            <span className="flex items-center gap-2 px-4 py-2">
                                <LayoutGrid
                                    aria-hidden
                                    className="text-review-ink size-4 shrink-0"
                                />
                                <span className="font-manrope text-sm-base text-review-ink leading-none font-semibold">
                                    {galleryTiles.viewAllPhotos}
                                </span>
                            </span>
                        </span>
                    </figcaption>
                </figure>
                <figure className="rounded-gallery-tile relative aspect-square overflow-hidden">
                    <img
                        src={cellA}
                        alt="Trek gallery photo 1"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span
                        className={`${frostedPill} absolute top-2.5 left-2.5 px-2.5 py-1`}
                    >
                        <Users
                            aria-hidden
                            className="text-review-ink size-3 shrink-0"
                        />
                        <span className="font-manrope text-xs-sm text-review-ink leading-none font-bold">
                            {galleryTiles.travellerPhoto}
                        </span>
                    </span>
                </figure>
                <figure className="rounded-gallery-tile relative aspect-square overflow-hidden">
                    <img
                        src={cellB}
                        alt="Trek gallery photo 2"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span
                        className={`${frostedPill} absolute top-2.5 left-2.5 px-2.5 py-1`}
                    >
                        <Users
                            aria-hidden
                            className="text-review-ink size-3 shrink-0"
                        />
                        <span className="font-manrope text-xs-sm text-review-ink leading-none font-bold">
                            {galleryTiles.travellerPhoto}
                        </span>
                    </span>
                </figure>
                <figure className="rounded-gallery-tile relative aspect-square overflow-hidden">
                    <img
                        src={cellC}
                        alt="Trek gallery photo 3"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span className="bg-gallery-shade absolute inset-0 flex flex-col items-center justify-center gap-1">
                        <span className="font-manrope text-xl-2xl leading-6 font-extrabold text-white">
                            {galleryTiles.morePhotosCount}
                        </span>
                        <span className="font-manrope text-sm-base leading-none font-semibold text-white/95">
                            {galleryTiles.morePhotosLabel}
                        </span>
                    </span>
                    <span
                        className={`${frostedPill} absolute top-2.5 left-2.5 px-2.5 py-1`}
                    >
                        <Users
                            aria-hidden
                            className="text-review-ink size-3 shrink-0"
                        />
                        <span className="font-manrope text-xs-sm text-review-ink leading-none font-bold">
                            {galleryTiles.travellerPhoto}
                        </span>
                    </span>
                </figure>
                <button
                    type="button"
                    className="rounded-gallery-tile relative aspect-square cursor-pointer overflow-hidden transition-opacity hover:opacity-95"
                >
                    <img
                        src={IMAGES.itinerary.videoPoster}
                        alt="Traveller video from the Everest Base Camp Trek"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                        <span className="shadow-card flex size-13.5 items-center justify-center rounded-full bg-white/95">
                            <Play
                                aria-hidden
                                className="text-review-ink size-5.5 fill-current"
                            />
                        </span>
                    </span>
                    <span className="from-gallery-shade absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t to-transparent px-2 pt-8 pb-3">
                        <span className="font-manrope text-sm-base leading-none font-bold text-white">
                            {galleryTiles.watchVideos}
                        </span>
                    </span>
                </button>
            </div>
        </section>
    );
}
