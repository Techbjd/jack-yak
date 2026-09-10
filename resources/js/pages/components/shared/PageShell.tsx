import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { pageShell } from '@/config/theme';

interface PageShellProps {
    children: ReactNode;
    className?: string;
}

/** Page shell — replaces `mx-auto flex w-full max-w-360 ...` repeated in Home/About/Destination */
export default function PageShell({ children, className }: PageShellProps) {
    return <div className={cn(pageShell, className)}>{children}</div>;
}
