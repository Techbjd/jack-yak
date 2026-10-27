import { LayoutGrid, Play, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IMAGES } from '@/config/images';
import { galleryPhotoAlt, galleryTiles } from '@/config/itinerary';
import CarouselDots from '@/components/ui/CarouselDots';
import { SkeletonImage } from '@/components/ui/Skeleton';

const frostedPill =
    'flex items-center gap-1.5 rounded-full bg-white/95 shadow-card backdrop-blur-sm';

function TravellerBadge() {
    return (
        <span
            className={cn(frostedPill, 'absolute top-2.5 left-2.5 px-2.5 py-1')}
        >
            <Users aria-hidden className="text-review-ink size-3 shrink-0" />
            <span className="font-inter text-xs-sm text-review-ink leading-none font-bold">
                {galleryTiles.travellerPhoto}
            </span>
        </span>
    );
}

export default function ItineraryGallery() {
    const [cellA, cellB, cellC] = IMAGES.itinerary.galleryThumbs;

    return (
        <section
            aria-label={galleryTiles.sectionLabel}
            className="flex w-full flex-col gap-2 md:gap-3 px-2"
        >
            <div className="relative w-full lg:hidden">
                <SkeletonImage
                    src={IMAGES.itinerary.hero}
                    alt={galleryTiles.heroAlt}
                    wrapperClassName="h-itinerary-hero-h rounded-dest-image w-full md:aspect-video md:h-auto"
                    className="h-full w-full object-cover"
                />
                <CarouselDots
                    count={5}
                    activeIndex={0}
                    className="gap-hero-line absolute right-4 bottom-2"
                    dotClassName="h-1.5 w-1.5"
                />
            </div>
            <div className="grid w-full grid-cols-3 gap-1.5 md:gap-2.5 lg:hidden">
                {IMAGES.itinerary.galleryThumbs.map((src, i) => (
                    <SkeletonImage
                        key={src}
                        src={src}
                        alt={galleryPhotoAlt(i)}
                        wrapperClassName="h-itinerary-thumb-h rounded-immersive w-full md:aspect-square md:h-auto"
                        className="h-full w-full object-cover"
                    />
                ))}
            </div>

            <div className="hidden w-full grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-2.5 lg:grid">
                <figure className="rounded-gallery-tile relative row-span-2 overflow-hidden">
                    <SkeletonImage
                        src={IMAGES.itinerary.hero}
                        alt={galleryTiles.heroAlt}
                        wrapperClassName="absolute inset-0"
                        className="h-full w-full object-cover"
                    />
                    <figcaption className="absolute bottom-4 left-4">
                        <span className={cn(frostedPill, 'gap-2 px-4 py-2')}>
                            <LayoutGrid
                                aria-hidden
                                className="text-review-ink size-4 shrink-0"
                            />
                            <span className="font-inter text-sm-base text-review-ink leading-none font-semibold">
                                {galleryTiles.viewAllPhotos}
                            </span>
                        </span>
                    </figcaption>
                </figure>
                <figure className="rounded-gallery-tile relative aspect-square overflow-hidden">
                    <SkeletonImage
                        src={cellA}
                        alt={galleryPhotoAlt(0)}
                        wrapperClassName="absolute inset-0"
                        className="h-full w-full object-cover"
                    />
                    <TravellerBadge />
                </figure>
                <figure className="rounded-gallery-tile relative aspect-square overflow-hidden">
                    <SkeletonImage
                        src={cellB}
                        alt={galleryPhotoAlt(1)}
                        wrapperClassName="absolute inset-0"
                        className="h-full w-full object-cover"
                    />
                    <TravellerBadge />
                </figure>
                <figure className="rounded-gallery-tile relative aspect-square overflow-hidden">
                    <SkeletonImage
                        src={cellC}
                        alt={galleryPhotoAlt(2)}
                        wrapperClassName="absolute inset-0"
                        className="h-full w-full object-cover"
                    />
                    <span className="bg-gallery-shade absolute inset-0 flex flex-col items-center justify-center gap-1">
                        <span className="font-inter text-xl-2xl leading-6 font-extrabold text-white">
                            {galleryTiles.morePhotosCount}
                        </span>
                        <span className="font-inter text-sm-base leading-none font-semibold text-white/95">
                            {galleryTiles.morePhotosLabel}
                        </span>
                    </span>
                    <TravellerBadge />
                </figure>
                <button
                    type="button"
                    className="rounded-gallery-tile relative aspect-square cursor-pointer overflow-hidden transition-opacity hover:opacity-95"
                >
                    <SkeletonImage
                        src={IMAGES.itinerary.videoPoster}
                        alt={galleryTiles.videoAlt}
                        wrapperClassName="absolute inset-0"
                        className="h-full w-full object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                        <span className="shadow-card size-gallery-nav flex items-center justify-center rounded-full bg-white/95">
                            <Play
                                aria-hidden
                                className="text-review-ink size-day-meta-sm fill-current"
                            />
                        </span>
                    </span>
                    <span className="from-gallery-shade absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t to-transparent px-2 pt-8 pb-3">
                        <span className="font-inter text-sm-base leading-none font-bold text-white">
                            {galleryTiles.watchVideos}
                        </span>
                    </span>
                </button>
            </div>
        </section>
    );
}
