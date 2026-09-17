import type { ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { modalSubtitle, quizNote } from '@/config/theme';

export type GuestNudgeTone = 'modal' | 'quiz';

interface GuestNudgeProps {
    /** Visual language: modal dialogs or the quiz page. */
    tone: GuestNudgeTone;
    /** Text after the "Sign in" link. */
    suffix: ReactNode;
    /** Text before the link (quiz "Tip: "). */
    prefix?: ReactNode;
    loginHref?: string;
}

/**
 * "Sign in to track … or continue as guest" nudge. Unifies the three
 * copies in the availability modal, review modal, and quiz form.
 */
export default function GuestNudge({
    tone,
    suffix,
    prefix,
    loginHref = '/login',
}: GuestNudgeProps) {
    return (
        <p className={cn(tone === 'modal' ? modalSubtitle : quizNote, tone === 'modal' ? 'pt-2' : 'pb-5')}>
            {prefix}
            <Link
                href={loginHref}
                className="text-cta-accent font-bold underline-offset-4 hover:underline"
            >
                Sign in
            </Link>{' '}
            {suffix}
        </p>
    );
}
