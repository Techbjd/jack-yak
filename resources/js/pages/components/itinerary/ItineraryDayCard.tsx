import { BedDouble, UtensilsCrossed } from 'lucide-react';
import {
    itinDayCard,
    itinDayLabel,
    itinDayPlace,
    itinDaySub,
    itinDayText,
    itinDayThumb,
} from '@/config/theme';
import type { ItineraryDay } from '@/config/itinerary';

interface ItineraryDayCardProps {
    day: ItineraryDay;
}

/** Single day card — thumb, day/place/subtitle, hotel + dinner icons */
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
            {/* -ml cancels the card gap (Figma x288); self-end + mb drops icons
                onto the subtitle row (Figma y1700-1727), not card middle */}
            <div className="mb-2.25 -ml-3.5 flex shrink-0 items-center gap-2.75 self-end">
                <BedDouble
                    aria-label="Hotel included"
                    role="img"
                    className="text-ink size-6.75"
                />
                <UtensilsCrossed
                    aria-label="Dinner included"
                    role="img"
                    className="text-ink size-6.75"
                />
            </div>
        </article>
    );
}
