import {
    fontPrimary,
    sectionPadding,
    sectionContainer,
    headingSection,
    bodyText,
    imageRoundedLg,
} from '@/config/theme';

const AboutJackyak = () => {
    return (
        <section className={`relative w-full overflow-hidden ${sectionPadding}`}>
            {/* Decorative patch2 — re-add <img src="/patch2.png"> once the asset lands in public/ */}

            <div className={`${sectionContainer} bg-bg-warm sm:bg-white`}>
                {/* About text */}
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-16 md:text-left">
                    <div className="flex max-w-content-md flex-1 flex-col gap-6">
                        <h2 className={headingSection}>
                            About Jackyak
                        </h2>
                        <p className={bodyText}>
                            JackYak is your trusted travel companion for
                            exploring Nepal. Discover curated trekking
                            itineraries, hidden destinations, local culture, and
                            unforgettable adventures—from the Himalayas to the
                            Terai. From Everest to the Terai, experience Nepal
                            through carefully crafted journeys.
                        </p>
                    </div>

                    {/* Desktop image */}
                    <div className="hidden w-full flex-1 justify-end md:block">
                        <div
                            className={`mx-auto aspect-590/287 w-full max-w-147.5 rounded-image ${imageRoundedLg} md:mx-0 md:ml-auto`}
                            style={{
                                backgroundImage: "url('/aboutJackyak.png')",
                            }}
                        />
                    </div>
                </div>

                {/* Mobile: Popular Destinations → Image → Travel Tips */}
                <div className="flex flex-col items-center gap-10 md:hidden">
                    <div className="flex max-w-content-md flex-col gap-4 text-center">
                        <h3 className={`${fontPrimary} text-lg-xl leading-[1.05] font-bold text-text-primary`}>
                            Popular Destinations
                        </h3>
                        <p className={bodyText}>
                            Discover breathtaking mountains, serene lakes,
                            ancient heritage sites, lush national parks, and
                            vibrant cities across Nepal. Every destination
                            offers a unique adventure waiting to be explored.
                        </p>
                    </div>

                    <div
                        className={`aspect-333/162 w-full max-w-83.25 rounded-image ${imageRoundedLg}`}
                        style={{
                            backgroundImage: "url('/aboutJackyak.png')",
                        }}
                    />

                    <div className="flex max-w-content-md flex-col gap-4 text-center">
                        <h3 className={`${fontPrimary} text-xl-2xl leading-[1.05] font-bold text-text-primary`}>
                            Travel Tips
                        </h3>
                        <p className={bodyText}>
                            Find essential information on the best seasons to
                            visit, packing guides, permits, transportation,
                            budgeting, and safety tips before you travel.
                        </p>
                    </div>
                </div>

                {/* Desktop: Popular Destinations + Travel Tips side by side */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-16">
                    <div className="flex max-w-content-md flex-col gap-4 text-left">
                        <h3 className={`${fontPrimary} text-3xl-4xl leading-[1.05] font-bold text-text-primary`}>
                            Popular Destinations
                        </h3>
                        <p className={`${fontPrimary} text-xl-2xl leading-[1.05] font-normal text-text-primary`}>
                            Discover breathtaking mountains, serene lakes,
                            ancient heritage sites, lush national parks, and
                            vibrant cities across Nepal. Every destination
                            offers a unique adventure waiting to be explored.
                        </p>
                    </div>

                    <div className="flex max-w-content-md flex-col gap-4 text-left bg-white">
                        <h3 className={`${fontPrimary} text-3xl-4xl leading-[1.05] font-bold text-text-primary`}>
                            Travel Tips
                        </h3>
                        <p className={`${fontPrimary} text-xl-2xl leading-[1.05] font-normal text-text-primary`}>
                            Find essential information on the best seasons to
                            visit, packing guides, permits, transportation,
                            budgeting, and safety tips before you travel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutJackyak;
