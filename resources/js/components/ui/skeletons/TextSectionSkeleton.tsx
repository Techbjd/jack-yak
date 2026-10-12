import { Skeleton, SkeletonText } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils';

interface TextSectionSkeletonProps {
    withRail?: boolean;
    lines?: number;
    className?: string;
}

export default function TextSectionSkeleton({
    withRail = false,
    lines = 4,
    className,
}: TextSectionSkeletonProps) {
    return (
        <div className={cn('flex w-full flex-col gap-4', className)} aria-hidden>
            <span className="flex items-center gap-3">
                {withRail && (
                    <span className="bg-cta h-7 w-3 shrink-0 rounded-full md:h-7 md:w-3" />
                )}
                <Skeleton className="h-6 w-48 rounded" />
            </span>
            <SkeletonText
                lines={lines}
                widths={
                    lines === 3
                        ? ['100%', '95%', '70%']
                        : ['100%', '100%', '92%', '68%']
                }
            />
            <span className="sr-only">Loading content</span>
        </div>
    );
}

export function AboutSectionSkeleton() {
    return (
        <div className="flex w-full flex-col gap-6 px-6 py-8 md:px-12 lg:px-24">
            <Skeleton className="h-7 w-52 rounded" />
            <div className="grid gap-6 md:grid-cols-2">
                <SkeletonText widths={['100%', '98%', '88%', '72%']} />
                <SkeletonText widths={['100%', '96%', '78%']} />
            </div>
            <Skeleton className="h-64 w-full rounded-2xl md:h-80" />
        </div>
    );
}
