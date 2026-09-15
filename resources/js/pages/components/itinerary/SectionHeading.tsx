import { cn } from '@/lib/utils';
import { itinAltTitle, itinRailTeal, itinTitleBar } from '@/config/theme';

interface SectionHeadingProps {
    title: string;
    id?: string;
    /** Override the h2 classes (e.g. Reviews tints it at md) */
    titleClassName?: string;
}

/** Itinerary section heading — teal rail + title + desktop underline bar.
 *  Shared by the altitude, weather + reviews sections (single truth). */
export default function SectionHeading({
    title,
    id,
    titleClassName,
}: SectionHeadingProps) {
    return (
        <div className="flex w-full flex-col gap-2">
            <div className="flex w-full items-stretch gap-2.5">
                <span aria-hidden className={itinRailTeal} />
                <h2 id={id} className={cn(itinAltTitle, titleClassName)}>
                    {title}
                </h2>
            </div>
            <span aria-hidden className={itinTitleBar} />
        </div>
    );
}
