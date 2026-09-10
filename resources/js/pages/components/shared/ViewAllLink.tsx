import { MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { viewAllLink } from '@/config/theme';

interface ViewAllLinkProps {
    children?: React.ReactNode;
    href?: string;
    className?: string;
}

export default function ViewAllLink({
    children = 'View all',
    href = '#',
    className,
}: ViewAllLinkProps) {
    return (
        <a href={href} className={cn(viewAllLink, className)}>
            {children}
            <MoveRight className="hidden h-5 w-5 md:block" />
        </a>
    );
}
