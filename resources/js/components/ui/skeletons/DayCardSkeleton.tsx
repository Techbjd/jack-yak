import { Skeleton, SkeletonCircle } from '@/components/ui/Skeleton';
import { itinDayCard, itinDayThumb } from '@/config/theme';
import { cn } from '@/lib/utils';

export default function DayCardSkeleton() {
    return (
        <div className={cn(itinDayCard)} aria-hidden>
            <span
                className={cn(
                    itinDayThumb,
                    'block animate-pulse bg-bg-placeholder',
                )}
            />
            <span className="flex min-w-0 flex-1 flex-col gap-2.5 md:gap-5">
                <Skeleton className="h-4 w-14 rounded" />
                <Skeleton className="h-5 w-3/4 rounded" />
                <Skeleton className="h-3 w-2/3 rounded" />
            </span>
            <span className="ml-auto hidden shrink-0 flex-col gap-5 pr-5 md:flex">
                <span className="flex items-center gap-2.5">
                    <SkeletonCircle className="size-6.75" />
                    <Skeleton className="h-4 w-16 rounded" />
                </span>
                <span className="flex items-center gap-2.5">
                    <SkeletonCircle className="size-6.75" />
                    <Skeleton className="h-4 w-20 rounded" />
                </span>
            </span>
        </div>
    );
}

export function DayListSkeleton({ count = 4 }: { count?: number }) {
    return (
        <div className="flex w-full flex-col gap-4" aria-hidden>
            <span className="flex items-center gap-3">
                <span className="bg-cta h-1 w-12 rounded-full" />
                <Skeleton className="h-6 w-32 rounded" />
            </span>
            {Array.from({ length: count }).map((_, i) => (
                <DayCardSkeleton key={i} />
            ))}
            <span className="sr-only">Loading itinerary</span>
        </div>
    );
}
