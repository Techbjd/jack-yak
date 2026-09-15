import { useState } from 'react';
import { cn } from '@/lib/utils';
import { itinBody, itinH2, itinRailOrange } from '@/config/theme';
import { trekAbout } from '@/config/itinerary';

export default function TrekAbout() {
    const [expanded, setExpanded] = useState(false);
    const extra = expanded ? 'block' : 'hidden';

    return (
        <section
            aria-labelledby="trek-about-heading"
            className="md:max-w-content-lg flex w-full flex-col gap-2 md:gap-4 xl:max-w-none justify-center items-center"
        >
            <div className="flex w-full items-stretch gap-2.5">
                <span aria-hidden className={itinRailOrange} />
                <h2 id="trek-about-heading" className={itinH2}>
                    {trekAbout.title}
                </h2>
            </div>
            <p className={cn(itinBody, 'md:text-md-lg md:leading-about-30')}>
                {trekAbout.intro}
            </p>
            <p
                className={cn(
                    itinBody,
                    extra,
                    'md:text-md-lg md:leading-about-32 md:text-review-body md:block',
                )}
            >
                {trekAbout.belief}
            </p>
            <p
                className={cn(
                    itinBody,
                    'md:text-md-lg md:leading-about-32 md:text-review-body',
                )}
            >
                {trekAbout.body}
            </p>
            <p
                className={cn(
                    itinBody,
                    extra,
                    'md:text-about-highlight md:leading-about-32 md:text-review-body md:block md:font-bold',
                )}
            >
                {trekAbout.highlight}
            </p>
            <p
                className={cn(
                    itinBody,
                    extra,
                    'md:text-md-lg md:leading-about-32 md:text-review-body md:block',
                )}
            >
                {trekAbout.closing}
            </p>
            <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setExpanded((v) => !v)}
                className="font-manrope text-xs-md text-cta cursor-pointer self-start leading-8 font-bold md:hidden"
            >
                {expanded ? trekAbout.readLess : trekAbout.readMore}
            </button>
        </section>
    );
}
