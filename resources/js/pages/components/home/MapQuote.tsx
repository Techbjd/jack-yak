import React from 'react';
import { fontPrimary } from '@/config/theme';

export default function MapQuote() {
    return (
        <div className="flex w-full justify-center px-6 md:px-0">
            <p className={`${fontPrimary} w-full max-w-quote text-center text-xl leading-[1.3] font-medium text-text-primary sm:text-2xl md:text-3xl md:leading-[44px] lg:text-2xl-3xl`}>
                "Between 80°E and 88°E longitude lies the world's most vertical
                country — a land containing everything from tiger-haunted jungle
                to the roof of the world, compressed into a strip of earth 800
                kilometres wide."
            </p>
        </div>
    );
}
