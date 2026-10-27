import { RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RetryButtonProps {
    onClick: () => void;
    label: string;
    /** Compact variant used inside image placeholders. */
    size?: 'sm' | 'md';
}

/**
 * Retry action shared by the page-level and image-level error states.
 */
export default function RetryButton({
    onClick,
    label,
    size = 'md',
}: RetryButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                'font-manrope bg-ink inline-flex items-center rounded-full text-xs font-bold text-white transition-opacity hover:opacity-90',
                size === 'md' ? 'gap-2 px-4 py-2' : 'gap-1.5 px-3 py-1',
            )}
        >
            <RotateCcw
                aria-hidden
                className={size === 'md' ? 'size-4' : 'size-3.5'}
            />
            {label}
        </button>
    );
}
