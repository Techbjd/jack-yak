import type { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import PageShell from '@/components/ui/PageShell';
import Footer from '@/components/ui/Footer';
import { a11yCopy } from '@/config/site';

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
            <a
                href={`#${a11yCopy.mainContentId}`}
                className="focus:rounded-immersive focus:text-ink sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:bg-white focus:px-4 focus:py-2"
            >
                {a11yCopy.skipToContent}
            </a>
            {header ? <div className="w-full">{header}</div> : null}
            <main id={a11yCopy.mainContentId} className="w-full">
                {children}
            </main>
            <div className="w-full">
                <Footer />
            </div>
        </PageShell>
    );
}
