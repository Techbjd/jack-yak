import type { ReactNode } from 'react';
import PageShell from '@/components/ui/PageShell';
import Footer from '@/components/ui/Footer';
import Seo, { type SeoProps } from '@/components/seo/Seo';
import { a11yCopy } from '@/config/site';
import { cn } from '@/lib/utils';

export type PageBackground = 'white' | 'canvas' | 'warm';

interface AppLayoutProps {
    children: ReactNode;

    /** Full head tags for the page — pass a `pageSeo.*` preset. */
    seo: SeoProps;

    /** Page-level background, shared by every full-page route. */
    background?: PageBackground;

    shellClassName?: string;

    header?: ReactNode;
}

const backgrounds: Record<PageBackground, string> = {
    white: 'bg-white',
    canvas: 'bg-canvas',
    warm: 'bg-surface-warm',
};

export default function AppLayout({
    children,
    seo,
    background,
    shellClassName,
    header,
}: AppLayoutProps) {
    return (
        <PageShell
            className={cn(
                background && backgrounds[background],
                shellClassName,
            )}
        >
            <Seo {...seo} />
            <a
                href={`#${a11yCopy.mainContentId}`}
                className="focus:rounded-immersive focus:text-ink focus:z-modal sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:px-4 focus:py-2"
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
