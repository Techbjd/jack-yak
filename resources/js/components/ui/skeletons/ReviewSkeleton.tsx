import { Skeleton, SkeletonCircle, SkeletonText } from '@/components/ui/Skeleton';

export default function ReviewSkeleton() {
    return (
        <div
            className="flex w-full flex-col gap-4 rounded-2xl border border-line-soft bg-white p-4 shadow-card"
            aria-hidden
        >
            <span className="flex items-center gap-3">
                <SkeletonCircle className="size-10" />
                <span className="flex flex-col gap-1.5">
                    <Skeleton className="h-4 w-24 rounded" />
                    <Skeleton className="h-3 w-20 rounded" />
                </span>
                <Skeleton className="ml-auto h-5 w-20 rounded-full" />
            </span>
            <Skeleton className="h-4 w-3/4 rounded" />
            <SkeletonText widths={['100%', '96%', '78%']} />
            <span className="flex gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                    <span
                        key={i}
                        className="block size-14 animate-pulse rounded-lg bg-bg-placeholder md:size-16"
                    />
                ))}
            </span>
            <span className="sr-only">Loading reviews</span>
        </div>
    );
}

export function ReviewListSkeleton({ count = 2 }: { count?: number }) {
    return (
        <div className="flex w-full flex-col gap-6" aria-hidden>
            <span className="flex items-center gap-3">
                <span className="bg-cta h-7 w-1.5 shrink-0 rounded-full" />
                <Skeleton className="h-6 w-32 rounded" />
            </span>
            <div className="no-scrollbar flex gap-4 overflow-x-auto">
                {Array.from({ length: count }).map((_, i) => (
                    <div key={i} className="w-80 shrink-0">
                        <ReviewSkeleton />
                    </div>
                ))}
            </div>
        </div>
    );
}
