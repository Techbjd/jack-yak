import { Skeleton, SkeletonRect } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils';

interface CardGridSkeletonProps {
    count?: number;
    className?: string;
}

export default function CardGridSkeleton({
    count = 6,
    className,
}: CardGridSkeletonProps) {
    return (
        <div
            className={cn(
                'grid grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-12 md:gap-5',
                className,
            )}
            aria-hidden
        >
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className="relative aspect-square w-full md:[aspect-ratio:var(--card-ratio)] md:col-span-4"
                    style={{ ['--card-ratio' as string]: '1' }}
                >
                    <SkeletonRect className="rounded-card-sm absolute inset-0" />
                </div>
            ))}
            <span className="sr-only">Loading cards</span>
        </div>
    );
}

export function DestinationCardSkeleton() {
    return (
        <div
            className="mx-auto flex w-full max-w-dest-card flex-col items-center"
            aria-hidden
        >
            <SkeletonRect className="rounded-t-card md:rounded-dest-image aspect-dest-card w-full" />
            <div className="shadow-card rounded-b-card relative z-10 flex w-full flex-col gap-2 bg-white px-2 pt-1.5 pb-1.5 md:-mt-2 md:px-dest-panel md:pt-7 md:pb-5">
                <Skeleton className="h-4 w-3/4 rounded" />
                <Skeleton className="h-3 w-2/3 rounded" />
                <div className="mt-2 flex items-center gap-2">
                    <Skeleton className="h-3 w-20 rounded" />
                    <Skeleton className="ml-auto h-3 w-14 rounded" />
                </div>
            </div>
        </div>
    );
}
