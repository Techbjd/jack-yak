import React from 'react';

const DiscoverNepal = () => {

    return (
        <section className="relative w-full overflow-hidden py-16 md:py-24">
            {/* Decorative rotated patch, scoped behind the image cluster */}
            <img
                src="/patch3.png"
                alt=""
                aria-hidden="true"
                className="
          pointer-events-none select-none
          absolute right-0 top-1/2 -translate-y-1/2
          w-[280px] md:w-[420px] lg:w-[520px]
          rotate-[89.27deg]
          opacity-90
          -z-10
        "
            />

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* Left: heading, copy, CTA */}
                <div className="flex-1 flex flex-col gap-6 max-w-[605px]">
                    <h2 className="font-manrope font-bold text-[#334155] text-3xl md:text-4xl leading-[1.05]">
                        Discover the Beauty of Nepal
                    </h2>
                    <p className="font-manrope font-normal text-[#334155] text-lg md:text-2xl leading-[1.05]">
                        From snow-capped peaks and peaceful lakes to ancient heritage
                        sites and vibrant local communities, Nepal offers experiences
                        unlike anywhere else.
                    </p>

                    <button className="mt-2 w-fit h-[42px] px-3 rounded-full bg-[#2D8A8A] flex items-center gap-2 font-manrope font-bold text-white text-[16px] leading-[22px]">
                        <span className="px-2">Start Your Journey</span>
                        <span className="bg-[#F7F2EE] mr-1 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                            <span className="relative w-[10px] h-[10px]">
                                <span className="absolute top-1/2 left-0 w-full h-px bg-[#60A5FA] -translate-y-1/2" />
                                <span className="absolute left-1/2 top-0 h-full w-px bg-[#60A5FA] -translate-x-1/2" />
                            </span>
                        </span>
                    </button>
                </div>

                {/* Right: staggered image pair */}
                <div className="flex-1 w-full flex items-center justify-end md:justify-center gap-4 md:gap-6">
                    {/* Rectangle 37 — taller, sits higher (offset up) */}
                    <div
                        className="
              w-[38%] md:w-[257px]
              aspect-square
              rounded-2xl bg-[#D9D9D9] bg-cover bg-center
              -mt-10 md:-mt-14
            "
                        style={{ backgroundImage: "url('/discover-nepal-1.png')" }}
                    />

                    {/* Rectangle 36 — shorter, sits lower */}
                    <div
                        className="
              w-[48%] md:w-[386px]
              aspect-square
              rounded-2xl bg-[#D9D9D9] bg-cover bg-center
            "
                        style={{ backgroundImage: "url('/discover-nepal-2.png')" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default DiscoverNepal;
