import type { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import PageShell from '@/components/ui/PageShell';
import Footer from '@/components/ui/Footer';

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
            {header ? <div className="w-full ">{header}</div> : null}
            {children}
            <div className="w-full">
                <Footer />
            </div>
        </PageShell>
    );
}
