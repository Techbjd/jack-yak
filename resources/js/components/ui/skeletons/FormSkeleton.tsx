import { Skeleton } from '@/components/ui/Skeleton';

export default function FormSkeleton() {
    return (
        <div className="flex w-full flex-col gap-4" aria-hidden>
            <Skeleton className="h-7 w-40 rounded" />
            <Skeleton className="h-4 w-64 rounded" />
            <span className="mt-2 flex flex-col gap-3">
                <Skeleton className="h-11 w-full rounded-md" />
                <Skeleton className="h-11 w-full rounded-md" />
                <Skeleton className="h-11 w-full rounded-md" />
            </span>
            <Skeleton className="mt-2 h-12 w-full rounded-md" />
            <span className="sr-only">Loading form</span>
        </div>
    );
}

export function AuthFormSkeleton() {
    return (
        <div className="flex w-full flex-col gap-4 p-6" aria-hidden>
            <Skeleton className="h-8 w-32 rounded" />
            <Skeleton className="h-4 w-56 rounded" />
            <Skeleton className="mt-4 h-9.5 w-full rounded-auth" />
            <Skeleton className="h-9.5 w-full rounded-auth" />
            <Skeleton className="mt-2 h-9.5 w-full rounded-auth" />
            <Skeleton className="h-px w-full" />
            <Skeleton className="h-9.5 w-full rounded-auth" />
            <span className="sr-only">Loading</span>
        </div>
    );
}
