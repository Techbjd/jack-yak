import { Link } from '@inertiajs/react';
import { MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { viewAllLink } from '@/config/theme';

interface ViewAllLinkProps {
    children?: React.ReactNode;
    href: string;
    className?: string;
}

export default function ViewAllLink({
    children = 'View all',
    href,
    className,
}: ViewAllLinkProps) {
    return (
        <Link href={href} className={cn(viewAllLink, className)}>
            {children}
            <MoveRight className="hidden h-5 w-5 md:block" />
        </Link>
    );
}
