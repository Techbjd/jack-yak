import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { fontPrimary } from '@/config/theme';
import { siteLegal } from '@/config/site';

interface AuthFormShellProps {
    children: ReactNode;
}

/**
 * Shared login/register shell: centred column, stable form width,
 * and the legal line pinned below the form.
 */
export default function AuthFormShell({ children }: AuthFormShellProps) {
    return (
        <section className="flex min-h-screen w-full flex-col items-center px-6 pt-16 pb-8 lg:justify-center lg:pt-10">
            <div className="max-w-auth-form flex w-full flex-1 flex-col justify-center">
                {children}
            </div>

            <p
                className={cn(
                    fontPrimary,
                    'text-ink max-w-auth-form w-full pt-10 text-center text-xs font-medium',
                )}
            >
                {siteLegal.copyright}
            </p>
        </section>
    );
}
