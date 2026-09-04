// components/home/MapQuote.jsx
import React from 'react';

export default function MapQuote() {
  return (
    <div className="w-full flex justify-center  px-6 md:px-0">
      <p
        className="
          max-w-[1011px] w-full
          text-center
          font-manrope font-medium
          text-xl sm:text-2xl md:text-3xl lg:text-[32px]
          leading-[1.3] md:leading-[44px]
          text-[#334155]
        "
      >
        "Between 80°E and 88°E longitude lies the world's most vertical
        country — a land containing everything from tiger-haunted jungle to
        the roof of the world, compressed into a strip of earth 800
        kilometres wide."
      </p>
    </div>
  );
}
