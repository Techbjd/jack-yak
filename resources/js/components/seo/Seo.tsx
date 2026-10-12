import { Head } from '@inertiajs/react';
import { siteSeo, siteUrl, type PageSeo } from '@/config/seo';

export interface SeoProps extends Partial<PageSeo> {
    title: string;
    description: string;
}

/**
 * Renders every head tag a page needs for SEO/social sharing: title,
 * description, canonical, robots (when `noindex`), Open Graph, Twitter
 * card, and JSON-LD. The `<title>` suffix (` - JackYak`) is applied by the
 * title formatter in `app.tsx` / `ssr.tsx`.
 *
 * Pages pass a `pageSeo.*` preset (plus overrides); `AppLayout` renders
 * this for layout pages, standalone pages render it directly.
 */
export default function Seo({
    title,
    description,
    path = '/',
    image,
    noindex = false,
    jsonLd,
}: SeoProps) {
    const canonical = `${siteUrl}${path}`;
    const ogImage = image ?? siteSeo.defaultOgImage;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : null}
            <meta property="og:type" content={siteSeo.type} />
            <meta property="og:site_name" content={siteSeo.siteName} />
            <meta property="og:locale" content={siteSeo.locale} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={ogImage} />
            <meta name="twitter:card" content={siteSeo.twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            {jsonLd?.map((node, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
                />
            ))}
        </Head>
    );
}
