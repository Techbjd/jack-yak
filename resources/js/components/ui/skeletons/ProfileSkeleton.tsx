import { Skeleton, SkeletonCircle } from '@/components/ui/Skeleton';

export default function ProfileSkeleton() {
    return (
        <div className="shadow-card flex w-full flex-col gap-4 rounded-xl bg-white p-5 md:p-10" aria-hidden>
            <span className="flex items-center gap-4">
                <SkeletonCircle className="size-16 md:size-20" />
                <span className="flex flex-col gap-2">
                    <Skeleton className="h-5 w-32 rounded" />
                    <Skeleton className="h-4 w-48 rounded" />
                </span>
            </span>
            <Skeleton className="mt-4 h-7 w-full rounded-md" />
            <Skeleton className="h-7 w-full rounded-md" />
            <span className="sr-only">Loading profile</span>
        </div>
    );
}

export function SavedCardSkeleton() {
    return (
        <div className="shadow-card w-full rounded-xl bg-white p-5 md:p-10" aria-hidden>
            <Skeleton className="h-5 w-40 rounded" />
            <Skeleton className="mt-2 h-4 w-64 rounded" />
            <span className="mt-6 flex flex-col gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <span key={i} className="flex items-center gap-3">
                        <SkeletonCircle className="size-9" />
                        <Skeleton className="h-4 flex-1 rounded" />
                        <Skeleton className="h-4 w-6 rounded" />
                    </span>
                ))}
            </span>
            <span className="sr-only">Loading saved items</span>
        </div>
    );
}
