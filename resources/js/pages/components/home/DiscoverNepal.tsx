import {
    fontPrimary,
    sectionPadding,
    headingSubsection,
    bodyTextSmall,
    ctaMobile,
    ctaDesktop,
    imageRoundedXl,
} from '@/config/theme';

const DiscoverNepal = () => {
    return (
        <section className={`relative w-full overflow-hidden ${sectionPadding}`}>
            {/* Decorative rotated patch, scoped behind the image cluster */}
            <img
                src="/patch3.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-0 -z-10 w-70 -translate-y-1/2 rotate-[89.27deg] opacity-90 select-none md:w-105 lg:w-130"
            />

            <div className="mx-auto flex max-w-container flex-col items-center gap-12 px-6 md:flex-row md:gap-16 md:px-12 lg:px-24 bg-bg-warm md:bg-transparent">
                {/* Mobile: single image first */}
                <div className="w-[95%] md:hidden">
                    <div
                        className={`aspect-336/229 w-full rounded-2xl ${imageRoundedXl}`}
                        style={{
                            backgroundImage: "url('/discover-nepal-2.png')",
                        }}
                    />
                </div>

                {/* Left: heading, copy, CTA */}
                <div className="flex max-w-content-lg flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
                    <h2 className={headingSubsection}>
                        Discover the Beauty of Nepal
                    </h2>
                    <p className={`${bodyTextSmall} md:text-lg`}>
                        From snow-capped peaks and peaceful lakes to ancient
                        heritage sites and vibrant local communities, Nepal
                        offers experiences unlike anywhere else.
                    </p>

                    {/* Mobile CTA button */}
                    <button className={`${ctaMobile} mt-2 md:hidden`}>
                        <span className="px-2">Start Your Journey</span>
                    </button>

                    {/* Desktop CTA button */}
                    <button className={`${ctaDesktop} mt-2`}>
                        <span className="px-2">Start Your Journey</span>
                        <span className="mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg-cream">
                            <span className="relative h-2.5 w-2.5">
                                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-blue-icon" />
                                <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-blue-icon" />
                            </span>
                        </span>
                    </button>
                </div>

                {/* Desktop: staggered image pair */}
                <div className="hidden w-full flex-1 items-center justify-end gap-4 md:flex md:justify-center md:gap-6">
                    {/* Rectangle 37 — taller, sits higher (offset up) */}
                    <div
                        className={`-mt-14 aspect-square w-64.25 rounded-2xl ${imageRoundedXl}`}
                        style={{
                            backgroundImage: "url('/discover-nepal-1.png')",
                        }}
                    />

                    {/* Rectangle 36 — shorter, sits lower */}
                    <div
                        className={`aspect-square w-96.5 rounded-2xl ${imageRoundedXl}`}
                        style={{
                            backgroundImage: "url('/discover-nepal-2.png')",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default DiscoverNepal;
