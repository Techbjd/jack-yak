import type { ReactNode } from 'react';
import Seo, { type SeoProps } from '@/components/seo/Seo';

interface AuthImagePageProps {
    seo: SeoProps;
    image: string;
    alt: string;
    children: ReactNode;
}

/**
 * Split auth page used by login and register: form column plus a
 * single photographic panel at `lg` and up.
 */
export default function AuthImagePage({
    seo,
    image,
    alt,
    children,
}: AuthImagePageProps) {
    return (
        <>
            <Seo {...seo} />
            <main className="bg-canvas min-h-screen w-full lg:grid lg:grid-cols-2 lg:bg-white">
                {children}
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:p-10 xl:p-14">
                    <img
                        src={image}
                        alt={alt}
                        className="rounded-image max-w-content-lg aspect-605/803 w-full object-cover"
                    />
                </div>
            </main>
        </>
    );
}
