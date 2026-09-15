import { BedDouble, Hotel, UtensilsCrossed } from 'lucide-react';
import {
    itinDayCard,
    itinDayLabel,
    itinDayPlace,
    itinDaySub,
    itinDayText,
    itinDayThumb,
} from '@/config/theme';
import { IMAGES } from '@/config/images';
import type { ItineraryDay } from '@/config/itinerary';
import DayMetaIcon from './DayMetaIcon';

interface ItineraryDayCardProps {
    day: ItineraryDay;
}

/**
 * Single day card — thumb + Day/place/subtitle + stay/meals meta.
 * Mobile (done): icons-only row pinned to the subtitle baseline.
 * Desktop (Figma 1440): middle text column flexes, right meta column
 * stacks Hotel over B•L•D with 27px outline icons (Figma x1239/y2491).
 */
export default function ItineraryDayCard({ day }: ItineraryDayCardProps) {
    return (
        <article
            aria-label={`${day.day}: ${day.place}`}
            className={itinDayCard}
        >
            <img
                src={day.image}
                alt=""
                loading="lazy"
                className={itinDayThumb}
            />
            <div className={itinDayText}>
                <p className={itinDayLabel}>{day.day}</p>
                <h3 className={itinDayPlace}>{day.place}</h3>
                <p className={itinDaySub}>{day.subtitle}</p>
            </div>
            {/* Mobile icons row — -ml cancels the card gap (Figma x288);
                self-end + mb drops icons onto the subtitle row (y1700-1727).
                Custom Figma PNGs (IMAGES.itinerary.icons) swap in when you
                drop the files; Lucide shows until then. */}
            <div className="mb-2.25 -ml-3.5 flex shrink-0 items-center gap-2.75 self-end md:hidden">
                <DayMetaIcon
                    src={IMAGES.itinerary.icons.stay}
                    label={`${day.stay} included`}
                    Fallback={BedDouble}
                    className="text-ink size-6.75 shrink-0"
                />
                <DayMetaIcon
                    src={IMAGES.itinerary.icons.meals}
                    label={`${day.meals} included`}
                    Fallback={UtensilsCrossed}
                    className="text-ink size-6.75 shrink-0"
                />
            </div>
            {/* Desktop meta column — right-aligned, Hotel over meals. */}
            <div className="ml-auto hidden shrink-0 flex-col justify-center gap-5 pr-5 md:flex">
                <p className="flex items-center gap-2.5">
                    <DayMetaIcon
                        src={IMAGES.itinerary.icons.stay}
                        decorative
                        Fallback={Hotel}
                        className="text-ink size-6.75 shrink-0"
                    />
                    <span className="font-manrope text-md-lg leading-itinerary-22 text-ink font-bold">
                        {day.stay}
                    </span>
                </p>
                <p className="flex items-center gap-2.5">
                    <DayMetaIcon
                        src={IMAGES.itinerary.icons.meals}
                        decorative
                        Fallback={UtensilsCrossed}
                        className="text-ink size-6.75 shrink-0"
                    />
                    <span className="font-manrope text-md-lg leading-itinerary-22 text-ink font-bold">
                        {day.meals}
                    </span>
                </p>
            </div>
        </article>
    );
}
