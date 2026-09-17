import type { ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { CircleCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    fontPrimary,
    modalPrimary,
    modalSubtitle,
    modalTitle,
    quizButton,
    quizNote,
} from '@/config/theme';

export type FormSuccessTone = 'modal' | 'quiz';

interface FormSuccessProps {
    /** Visual language: modal dialogs or the quiz page. */
    tone: FormSuccessTone;
    title: string;
    message: ReactNode;
    /** Server flash line, rendered emphasized (modal only). */
    flash?: string | null;
    /** Modal variant: close button. */
    onPrimary?: () => void;
    /** Quiz variant: primary link. */
    primaryHref?: string;
    primaryLabel: string;
    linkHref: string;
    linkLabel: string;
}

/**
 * Post-submit success panel. Unifies the three identical
 * icon + title + message + primary-action + account-link blocks in the
 * availability modal, review modal, and quiz form.
 */
export default function FormSuccess({
    tone,
    title,
    message,
    flash,
    onPrimary,
    primaryHref,
    primaryLabel,
    linkHref,
    linkLabel,
}: FormSuccessProps) {
    return (
        <div className="flex flex-col items-center gap-4 py-10 text-center">
            <CircleCheck aria-hidden className="text-cta size-12 md:size-16" />
            <h2 className={tone === 'modal' ? modalTitle : 'text-2xl font-bold'}>
                {title}
            </h2>
            <p
                className={
                    tone === 'modal' ? modalSubtitle : cn(quizNote, 'max-w-md')
                }
            >
                {message}
            </p>
            {tone === 'modal' && flash && (
                <p className={cn(modalSubtitle, 'text-cta font-semibold')}>
                    {flash}
                </p>
            )}
            <div
                className={
                    tone === 'modal'
                        ? 'mt-2 flex flex-wrap justify-center gap-3'
                        : 'flex flex-wrap justify-center gap-3 pt-2'
                }
            >
                {onPrimary ? (
                    <button
                        type="button"
                        onClick={onPrimary}
                        className={cn(modalPrimary, 'cursor-pointer')}
                    >
                        {primaryLabel}
                    </button>
                ) : (
                    primaryHref && (
                        <Link href={primaryHref} className={quizButton}>
                            {primaryLabel}
                        </Link>
                    )
                )}
                <Link
                    href={linkHref}
                    className={cn(
                        tone === 'modal' ? fontPrimary : quizNote,
                        'text-cta-accent text-sm font-bold underline-offset-4 hover:underline',
                    )}
                >
                    {linkLabel}
                </Link>
            </div>
        </div>
    );
}
