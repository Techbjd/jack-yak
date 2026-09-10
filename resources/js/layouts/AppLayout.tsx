import type { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import PageShell from '@/pages/components/shared/PageShell';
import Footer from '@/pages/components/shared/Footer';

interface AppLayoutProps {
    children: ReactNode;
    /** Document title — rendered via Inertia <Head> when provided */
    title?: string;
    /** Extra classes for the page shell (e.g. page background) */
    shellClassName?: string;
    /**
     * Standalone header — for pages without a hero (e.g. About renders
     * `<Header tone="onLight" />`). Pages whose header is overlaid inside
     * their hero (Home, Destination) leave this empty and keep the header
     * embedded so it stays positioned over the hero background.
     */
    header?: ReactNode;
}

/**
 * Overall page layout — centered shell + footer shared by every page.
 * Pages only supply their content sections (and a header when they have
 * no hero to host it).
 */
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
