import Header from './Header';

/**
 * Responsive header — navy tone on mobile (light backgrounds),
 * white tone on desktop (photo backgrounds). Pages whose hero hosts
 * the header render this once instead of duplicating the pair.
 */
export default function ResponsiveHeader() {
    return (
        <>
            <div className="w-full md:hidden">
                <Header tone="onLight" />
            </div>
            <div className="hidden w-full md:block">
                <Header tone="onDark" />
            </div>
        </>
    );
}
