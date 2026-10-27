import type { ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

interface CtaButtonProps {
    children: ReactNode;
    /** Inertia link variant. */
    href?: string;
    onClick?: () => void;
    className?: string;
    ariaLabel?: string;
    /** Trailing icon (e.g. the plus-in-circle). */
    icon?: ReactNode;
    type?: 'button' | 'submit';
    /** Pill is the default; block squares the corners. */
    shape?: 'pill' | 'block';
}

const ctaBase =
    'inline-flex cursor-pointer items-center justify-center gap-2 font-bold text-white';

const ctaShapes = {
    pill: 'rounded-full',
    block: 'rounded-none',
} as const;

/**
 * Pill call-to-action. Unifies the home hero link, the DiscoverNepal
 * quiz buttons, and the immersive "Start Planning" button — one place
 * for the pill shape, Link-vs-button branching, and the icon slot.
 * Sizing/colors stay at the call site via `className`.
 */
export default function CtaButton({
    children,
    href,
    onClick,
    className,
    ariaLabel,
    icon,
    type = 'button',
    shape = 'pill',
}: CtaButtonProps) {
    const content = (
        <>
            {children}
            {icon}
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                aria-label={ariaLabel}
                onClick={onClick}
                className={cn(ctaBase, ctaShapes[shape], className)}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            aria-label={ariaLabel}
            className={cn(ctaBase, ctaShapes[shape], className)}
        >
            {content}
        </button>
    );
}
