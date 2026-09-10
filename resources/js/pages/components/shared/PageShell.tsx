import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { pageShell } from '@/config/theme';

interface PageShellProps {
    children: ReactNode;
    className?: string;
}

export default function PageShell({ children, className }: PageShellProps) {
    return <div className={cn(pageShell, className)}>{children}</div>;
}
