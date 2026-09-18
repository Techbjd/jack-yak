import { useState } from 'react';
import { cn } from '@/lib/utils';
import { itinBody, itinH2, itinRailOrange } from '@/config/theme';
import { trekAbout } from '@/config/itinerary';

const desktopPara = 'md:leading-about-32 md:text-review-body  md:block';

export default function TrekAbout() {
    const [expanded, setExpanded] = useState(false);
    const extra = expanded ? 'block' : 'hidden';

    return (
        <section
            aria-labelledby="trek-about-heading "
            className="md:max-w-content-lg mx-auto flex w-full flex-col gap-2 md:gap-4 xl:max-w-none"
        >
            <div className="flex w-full items-stretch gap-2.5">
                <span aria-hidden className={itinRailOrange} />
                <h2 id="trek-about-heading" className={itinH2}>
                    {trekAbout.title}
                </h2>
            </div>
            <p className={cn(itinBody, 'md:leading-about-30  ')}>
                {trekAbout.intro}
            </p>
            <p className={cn(itinBody, extra, desktopPara)}>
                {trekAbout.belief}
            </p>
            <p className={cn(itinBody, desktopPara)}>{trekAbout.body}</p>
            <p className={cn(itinBody, extra, desktopPara, 'md:font-bold text-md-lg ')}>
                {trekAbout.highlight}
            </p>
            <p className={cn(itinBody, extra, desktopPara)}>
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
