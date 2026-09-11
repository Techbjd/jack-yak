import { IMAGES } from '@/config/images';
import CarouselDots from '../shared/CarouselDots';

/** Photo gallery — hero + 3 thumbs + dot nav (flow layout, no overlay arrow:
 *  a video thumb renders its own player play button automatically) */
export default function ItineraryGallery() {
    return (
        <section
            aria-label="Trek photos"
            className="flex w-full flex-col gap-2"
        >
            <div className="relative w-full">
                <img
                    src={IMAGES.itinerary.hero}
                    alt="Everest Base Camp trek panorama"
                    className="h-itinerary-hero-h rounded-dest-image w-full object-cover"
                />
                <CarouselDots
                    count={5}
                    activeIndex={0}
                    className="absolute right-4 bottom-2 justify-end gap-0.75"
                    dotClassName="h-1.5 w-1.5"
                />
            </div>
            <div className="grid w-full grid-cols-3 gap-1.5">
                {IMAGES.itinerary.galleryThumbs.map((src, i) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Trek gallery photo ${i + 1}`}
                        className="h-itinerary-thumb-h rounded-immersive w-full object-cover"
                    />
                ))}
            </div>
        </section>
    );
}
