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


    const hasAbsoluteUrl = siteUrl.length > 0;
    const canonical = hasAbsoluteUrl ? `${siteUrl}${path}` : undefined;
    const ogImage = hasAbsoluteUrl ? (image ?? siteSeo.defaultOgImage) : undefined;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical ? <link rel="canonical" href={canonical} /> : null}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : null}
            <meta property="og:type" content={siteSeo.type} />
            <meta property="og:site_name" content={siteSeo.siteName} />
            <meta property="og:locale" content={siteSeo.locale} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content={siteSeo.twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {canonical ? <meta property="og:url" content={canonical} /> : null}
            {ogImage ? <meta property="og:image" content={ogImage} /> : null}
            {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
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
