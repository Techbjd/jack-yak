import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { modalDivider, modalSubtitle, modalTitle } from '@/config/theme';
import GuestNudge from './GuestNudge';

interface ModalFormHeaderProps {
    title: string;
    intro: string;
    /** Extra heading classes where a dialog uses a different type ramp. */
    titleClassName?: string;
    /** Renders the sign-in nudge for guests. */
    showGuest: boolean;
    guestSuffix: ReactNode;
}

/**
 * Title + intro + optional guest nudge + divider shared by modal forms.
 */
export default function ModalFormHeader({
    title,
    intro,
    titleClassName,
    showGuest,
    guestSuffix,
}: ModalFormHeaderProps) {
    return (
        <>
            <h2 className={cn(modalTitle, titleClassName)}>{title}</h2>
            <p className={cn(modalSubtitle, 'pt-2')}>{intro}</p>
            {showGuest && <GuestNudge tone="modal" suffix={guestSuffix} />}
            <hr className={modalDivider} />
        </>
    );
}
