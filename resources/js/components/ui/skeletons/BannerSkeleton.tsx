import { Skeleton } from '@/components/ui/Skeleton';

export default function BannerSkeleton() {
    return (
        <div
            className="flex w-full items-center gap-4 rounded-2xl bg-white p-4 shadow-card md:gap-6 md:p-6"
            aria-hidden
        >
            <span className="block h-16 w-24 shrink-0 animate-pulse rounded-xl bg-bg-placeholder md:h-20 md:w-28" />
            <span className="flex flex-1 flex-col gap-2">
                <span className="block h-5 w-48 animate-pulse rounded bg-bg-placeholder" />
                <span className="block h-3 w-64 animate-pulse rounded bg-bg-placeholder" />
            </span>
            <Skeleton className="hidden h-10 w-32 shrink-0 rounded-full md:block" />
            <span className="sr-only">Loading banner</span>
        </div>
    );
}
