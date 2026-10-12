import { Skeleton, SkeletonRect, SkeletonText } from '@/components/ui/Skeleton';

export default function HeroSkeleton() {
    return (
        <div className="flex w-full flex-col">
            <div className="h-14 w-full bg-white" aria-hidden />
            <div className="flex flex-col items-center px-0 pt-2">
                <SkeletonRect className="aspect-video w-full md:rounded-dest-card lg:aspect-1464/958" />
                <div className="mt-6 flex w-full max-w-2xl flex-col items-center gap-3 px-6 md:mt-8">
                    <SkeletonText widths={['85%', '70%']} />
                </div>
            </div>
            <div className="mt-6 flex justify-center px-6">
                <Skeleton className="h-10 w-40 rounded-full" />
            </div>
        </div>
    );
}
