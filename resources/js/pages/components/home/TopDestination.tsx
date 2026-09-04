import React from 'react';

const destinations = [
  { name: 'Tilicho Lake', image: '/Group_35.png', ratio: '258 / 391', raised: true, size: 'md' },
  { name: 'Everest', image: '/Group_36.png', ratio: '258 / 391', raised: false, size: 'lg' },
  { name: 'Gokyo Lake', image: '/Group_37.png', ratio: '258 / 391', raised: true, size: 'md' },
];

const TopDestinations = () => {
  return (
    <section className="w-full" style={{ padding: 'clamp(2rem, 6vw, 6rem) clamp(1rem, 5vw, 6rem)' }}>
      <div className="mx-auto flex flex-col items-center" style={{ maxWidth: 1200, gap: 'clamp(2rem, 5vw, 4rem)' }}>
        <h2
          className="font-manrope font-bold text-[#334155] text-center"
          style={{ fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.05, maxWidth: 342 }}
        >
          Explore Nepal's Top Destinations
        </h2>

        {/* MOBILE: horizontal scroll-snap carousel, center card shown larger.
            DESKTOP (md+): original CSS grid, unchanged. */}
        <div
          className="
            w-full
            flex md:grid
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            -mx-6 px-6 md:mx-0 md:px-0
            gap-4 md:gap-6
            items-end
            [scrollbar-width:none] [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          }}
        >
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className={`
                relative rounded-2xl overflow-hidden bg-[#D9D9D9] bg-cover bg-center
                shrink-0 snap-center
                ${dest.size === 'lg' ? 'w-[70%] md:w-auto' : 'w-[52%] md:w-auto'}
              `}
              style={{
                aspectRatio: dest.ratio,
                backgroundImage: `url(${dest.image})`,
                transform:
                  dest.raised
                    ? 'translateY(clamp(-16px, -2vw, 0px))'
                    : 'none',
              }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/0 to-black/10" />
              <span
                className="absolute left-0 right-0 text-center font-manrope font-medium text-white"
                style={{ top: '6%', fontSize: 'clamp(14px, 2vw, 24px)' }}
              >
                {dest.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile-only hint dots, purely visual — shows there's more to swipe */}
        <div className="flex md:hidden items-center gap-1.5 -mt-2">
          {destinations.map((dest) => (
            <span
              key={dest.name}
              className={`rounded-full ${
                dest.size === 'lg' ? 'w-4 h-1.5 bg-[#334155]/70' : 'w-1.5 h-1.5 bg-[#334155]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
