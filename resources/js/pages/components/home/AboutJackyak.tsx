import React from 'react';

const AboutJackyak = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Decorative background patch — same rotated-strip motif as Hero's patches,
          scoped to this section only so it doesn't leak into layout height */}
      <img
        src="/patch2.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute -left-32 -top-10 md:-left-24 md:-top-16
          w-[280px] md:w-[420px] lg:w-[520px]
          opacity-90
          -z-10
        "
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-16 md:gap-24">
        {/* Row 1: About text + image */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          <div className="flex-1 flex flex-col gap-6 max-w-[575px]">
            <h2 className="font-manrope font-bold text-[#334155] text-3xl md:text-4xl leading-[1.05] uppercase">
              About Jackyak
            </h2>
            <p className="font-manrope font-normal text-[#334155] text-lg md:text-2xl leading-[1.05]">
              JackYak is your trusted travel companion for exploring Nepal.
              Discover curated trekking itineraries, hidden destinations,
              local culture, and unforgettable adventures—from the Himalayas
              to the Terai. From Everest to the Terai, experience Nepal
              through carefully crafted journeys.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div
              className="
                w-full max-w-[590px] aspect-[590/287]
                rounded-[17px] bg-[#D9D9D9]
                bg-cover bg-center
                mx-auto md:mx-0 md:ml-auto
              "
              style={{ backgroundImage: "url('/aboutJackyak.png')" }}
            />
          </div>
        </div>

        {/* Row 2: Popular Destinations + Travel Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex flex-col gap-4 max-w-[575px]">
            <h3 className="font-manrope font-bold text-[#334155] text-3xl md:text-4xl leading-[1.05]">
              Popular Destinations
            </h3>
            <p className="font-manrope font-normal text-[#334155] text-lg md:text-2xl leading-[1.05]">
              Discover breathtaking mountains, serene lakes, ancient heritage
              sites, lush national parks, and vibrant cities across Nepal.
              Every destination offers a unique adventure waiting to be
              explored.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-[575px]">
            <h3 className="font-manrope font-bold text-[#334155] text-3xl md:text-4xl leading-[1.05]">
              Travel Tips
            </h3>
            <p className="font-manrope font-normal text-[#334155] text-lg md:text-2xl leading-[1.05]">
              Find essential information on the best seasons to visit,
              packing guides, permits, transportation, budgeting, and safety
              tips before you travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJackyak;
