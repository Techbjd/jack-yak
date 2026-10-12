import { SkeletonRect } from '@/components/ui/Skeleton';

export default function GallerySkeleton() {
    return (
        <div className="flex w-full flex-col gap-2 md:gap-3" aria-hidden>
            <SkeletonRect className="h-itinerary-hero-h rounded-dest-image w-full md:aspect-video md:h-auto" />
            <div className="grid w-full grid-cols-3 gap-1.5 md:gap-2.5 lg:hidden">
                {Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonRect
                        key={i}
                        className="h-itinerary-thumb-h rounded-immersive w-full md:aspect-square md:h-auto"
                    />
                ))}
            </div>
            <div className="hidden w-full grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-2.5 lg:grid">
                <SkeletonRect className="rounded-gallery-tile row-span-2" />
                <SkeletonRect className="rounded-gallery-tile aspect-square" />
                <SkeletonRect className="rounded-gallery-tile aspect-square" />
                <SkeletonRect className="rounded-gallery-tile aspect-square" />
                <SkeletonRect className="rounded-gallery-tile aspect-square" />
            </div>
            <span className="sr-only">Loading gallery</span>
        </div>
    );
}
