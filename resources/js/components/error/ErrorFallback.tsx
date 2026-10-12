import { AlertTriangle, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ErrorFallbackProps {
    message?: string;
    onRetry?: () => void;
    retryLabel?: string;
    className?: string;
}

export default function ErrorFallback({
    message = 'Something went wrong.',
    onRetry,
    retryLabel = 'Try again',
    className,
}: ErrorFallbackProps) {
    return (
        <div
            role="alert"
            className={cn(
                'border-frost-line shadow-card flex w-full flex-col items-center justify-center gap-3 rounded-2xl border bg-white px-6 py-8 text-center',
                className,
            )}
        >
            <span className="bg-bg-placeholder flex size-10 items-center justify-center rounded-full">
                <AlertTriangle aria-hidden className="text-ink size-5" />
            </span>
            <p className="font-manrope text-md-lg text-ink max-w-sm leading-snug font-semibold">
                {message}
            </p>
            {onRetry && (
                <button
                    type="button"
                    onClick={onRetry}
                    className="font-manrope bg-ink inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90"
                >
                    <RotateCcw aria-hidden className="size-4" />
                    {retryLabel}
                </button>
            )}
        </div>
    );
}
