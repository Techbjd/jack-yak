import { Link } from '@inertiajs/react';
import { ArrowLeft, KeyRound } from 'lucide-react';
import { cn } from '@/lib/utils';
import { authLabel, authTitle, fontPrimary } from '@/config/theme';

interface AuthPanelHeaderProps {
    backHref: string;
    title: string;
    subtitle: string;
}

/**
 * Recovery-card header: back link, key badge, heading, and intro.
 */
export default function AuthPanelHeader({
    backHref,
    title,
    subtitle,
}: AuthPanelHeaderProps) {
    return (
        <>
            <Link
                href={backHref}
                className={cn(
                    fontPrimary,
                    authLabel,
                    'inline-flex items-center gap-1.5 text-xs font-bold',
                )}
            >
                <ArrowLeft className="size-3.5" />
                Back to Sign In
            </Link>

            <div className="bg-cta/10 text-cta mt-6 flex size-10 items-center justify-center rounded-full">
                <KeyRound className="size-5" />
            </div>

            <h2 className={cn(authTitle, 'pt-4')}>{title}</h2>
            <p className={cn(authLabel, 'pt-2 font-normal')}>{subtitle}</p>
        </>
    );
}
