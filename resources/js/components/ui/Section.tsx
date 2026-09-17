import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export default function Section({ children, className }: SectionProps) {
    return <div className={cn('w-full', className)}>{children}</div>;
}
