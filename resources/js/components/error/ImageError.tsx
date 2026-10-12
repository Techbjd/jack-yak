import { ImageOff, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageErrorProps {
    onRetry?: () => void;
    message?: string;
    retryLabel?: string;
    className?: string;
}

export default function ImageError({
    onRetry,
    message = 'Image failed to load',
    retryLabel = 'Retry',
    className,
}: ImageErrorProps) {
    return (
        <span
            role="alert"
            className={cn(
                'bg-bg-placeholder flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-center',
                className,
            )}
        >
            <ImageOff aria-hidden className="text-ink size-6 opacity-60" />
            <span className="font-manrope text-ink text-xs-sm leading-tight font-semibold">
                {message}
            </span>
            {onRetry && (
                <button
                    type="button"
                    onClick={onRetry}
                    className="font-manrope bg-ink inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white transition-opacity hover:opacity-90"
                >
                    <RotateCcw aria-hidden className="size-3.5" />
                    {retryLabel}
                </button>
            )}
        </span>
    );
}
