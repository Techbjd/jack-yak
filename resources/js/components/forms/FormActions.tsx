import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { modalGhost, modalPrimary } from '@/config/theme';

interface FormActionsProps {
    onCancel: () => void;
    processing: boolean;
    /** Submit button label when idle. */
    submitLabel: string;
    /** Submit button label while submitting. */
    processingLabel?: string;
    cancelLabel?: string;
    /** Left-side content: the trust note (availability) or the guidelines
     * checkbox (review). */
    leading?: ReactNode;
    className?: string;
}

/**
 * Modal form footer: leading content on the left, Cancel + Submit on the
 * right. Unifies the availability and review modal footers.
 */
export default function FormActions({
    onCancel,
    processing,
    submitLabel,
    processingLabel = 'Sending…',
    cancelLabel = 'Cancel',
    leading,
    className = 'pt-5',
}: FormActionsProps) {
    return (
        <div
            className={cn(
                'flex flex-col gap-4 md:flex-row md:items-center md:justify-between',
                className,
            )}
        >
            {leading}
            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={onCancel}
                    className={cn(modalGhost, 'cursor-pointer')}
                >
                    {cancelLabel}
                </button>
                <button
                    type="submit"
                    disabled={processing}
                    className={cn(
                        modalPrimary,
                        'cursor-pointer disabled:opacity-60',
                    )}
                >
                    {processing ? processingLabel : submitLabel}
                </button>
            </div>
        </div>
    );
}
