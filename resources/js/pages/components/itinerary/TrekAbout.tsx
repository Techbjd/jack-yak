import { useState } from 'react';
import { itinBody, itinH2, itinRailOrange } from '@/config/theme';
import { trekAbout } from '@/config/itinerary';

/** About section — orange rail beside heading, expandable copy */
export default function TrekAbout() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section
            aria-labelledby="trek-about-heading"
            className="flex w-full flex-col gap-2"
        >
            <div className="flex w-full items-stretch gap-2.5">
                <span aria-hidden className={itinRailOrange} />
                <h2 id="trek-about-heading" className={itinH2}>
                    {trekAbout.title}
                </h2>
            </div>
            <p className={itinBody}>{trekAbout.intro}</p>
            <p className={itinBody}>{trekAbout.body}</p>
            {expanded && <p className={itinBody}>{trekAbout.more}</p>}
            <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setExpanded((v) => !v)}
                className="font-manrope text-xs-md text-cta cursor-pointer self-start leading-8 font-bold"
            >
                {expanded ? trekAbout.readLess : trekAbout.readMore}
            </button>
        </section>
    );
}
