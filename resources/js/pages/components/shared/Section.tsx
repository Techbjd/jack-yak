import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: ReactNode;
    className?: string;
}

/** Page-composition section wrapper — full-width shell shared by
 *  Home, Destination, About + Guide pages (single truth for `w-full`). */
export default function Section({ children, className }: SectionProps) {
    return <div className={cn('w-full', className)}>{children}</div>;
}
