import { useState } from 'react';
import { cn } from '@/lib/utils';
import { itinBody, itinH2, itinRailOrange } from '@/config/theme';
import { trekAbout } from '@/config/itinerary';

/** About section — orange rail beside heading, full Figma copy.
 *  Mobile (done): intro + body visible, rest behind Read More.
 *  Desktop (Figma 1440): all five paragraphs visible — 16px/30 abyss
 *  opener, 16px/32 review-body paragraphs, 18px/32 bold highlight. */
export default function TrekAbout() {
    const [expanded, setExpanded] = useState(false);
    const extra = expanded ? 'block' : 'hidden';

    return (
        <section
            aria-labelledby="trek-about-heading"
            className="flex w-full flex-col gap-2 md:gap-4"
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
