import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import RetryButton from '@/components/ui/RetryButton';

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
            {onRetry && <RetryButton onClick={onRetry} label={retryLabel} />}
        </div>
    );
}
