import React from 'react';
import { fontPrimary, cardMobileImage, cardMobileContent } from '@/config/theme';

const destinations = [
    {
        name: 'Mount Everest',
        subtitle: 'Highest Peak',
        image: '/Group_36.png',
        ratio: '258 / 391',
        raised: false,
        size: 'lg',
    },
    {
        name: 'Mount Everest',
        subtitle: 'Highest Peak',
        image: '/Group_36.png',
        ratio: '258 / 391',
        raised: false,
        size: 'lg',
    },
    {
        name: 'Mount Everest',
        subtitle: 'Highest Peak',
        image: '/Group_36.png',
        ratio: '258 / 391',
        raised: false,
        size: 'lg',
    },
    {
        name: 'Mount Everest',
        subtitle: 'Highest Peak',
        image: '/Group_36.png',
        ratio: '258 / 391',
        raised: false,
        size: 'lg',
    },
];

const TopDestinations = () => {
    return (
        <section
            className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24"
        >
            <div
                className="mx-auto flex flex-col items-center gap-16 md:gap-24 max-w-page"
            >
                <h2
                    className={`${fontPrimary} text-center font-bold text-text-primary text-xl-2xl md:text-3xl-4xl leading-[1.05] max-w-content`}
                >
                    Explore Nepal's Top Destinations
                </h2>

                {/* MOBILE: horizontal scroll cards */}
                <div className="w-full overflow-x-auto [scrollbar-none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:hidden">
                    <div className="flex w-max gap-5 pl-5 pr-5 snap-x snap-mandatory">
                        {destinations.map((dest, i) => (
                            <div
                                key={i}
                                className="flex shrink-0 snap-start flex-col"
                            >
                                <div
                                    className={`${cardMobileImage} rounded-t-card bg-bg-placeholder bg-cover bg-center`}
                                    style={{
                                        backgroundImage: `url(${dest.image})`,
                                    }}
                                />
                                <div className={`${cardMobileContent} flex flex-col items-center justify-center rounded-b-card bg-white shadow-card`}>
                                    <span
                                        className={`${fontPrimary} font-bold text-navy-light text-xs-sm leading-[14px] tracking-[0.03em]`}
                                    >
                                        {dest.name}
                                    </span>
                                    <span
                                        className={`${fontPrimary} text-navy-light text-2xs font-semibold leading-[11px] tracking-[0.03em]`}
                                    >
                                        {dest.subtitle}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DESKTOP: horizontal scroll-snap carousel */}
                <div
                    className="-mx-6 hidden w-full snap-x snap-mandatory [scrollbar-width:none] items-end gap-4 overflow-x-auto px-6 [-ms-overflow-style:none] md:flex md:snap-none md:gap-6 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
                    style={{
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(220px, 1fr))',
                    }}
                >
                    {destinations.map((dest) => (
                        <div
                            key={dest.name}
                            className={`relative shrink-0 snap-center overflow-hidden rounded-2xl bg-bg-placeholder bg-cover bg-center ${dest.size === 'lg' ? 'w-auto' : 'w-auto'} `}
                            style={{
                                aspectRatio: dest.ratio,
                                backgroundImage: `url(${dest.image})`,
                                transform: dest.raised
                                    ? 'translateY(clamp(-16px, -2vw, 0px))'
                                    : 'none',
                            }}
                        >
                            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/0 to-black/10" />
                            <span
                                className={`${fontPrimary} absolute right-0 left-0 text-center font-medium text-white text-base-md md:text-xl-2xl`}
                                style={{
                                    top: '6%',
                                }}
                            >
                                {dest.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopDestinations;
