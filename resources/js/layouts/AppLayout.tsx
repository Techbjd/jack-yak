import type { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import PageShell from '@/pages/components/shared/PageShell';
import Footer from '@/pages/components/shared/Footer';

interface AppLayoutProps {
    children: ReactNode;
    
    title?: string;
    
    shellClassName?: string;
    
    header?: ReactNode;
}

export default function AppLayout({
    children,
    title,
    shellClassName,
    header,
}: AppLayoutProps) {
    return (
        <PageShell className={shellClassName}>
            {title ? <Head title={title} /> : null}
            {header ? <div className="w-full">{header}</div> : null}
            {children}
            <div className="w-full">
                <Footer />
            </div>
        </PageShell>
    );
}
