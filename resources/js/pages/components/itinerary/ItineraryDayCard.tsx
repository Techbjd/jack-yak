import { BedDouble, UtensilsCrossed } from 'lucide-react';
import {
    itinDayCard,
    itinDayLabel,
    itinDayPlace,
    itinDaySub,
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
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <p className={itinDayLabel}>{day.day}</p>
                <h3 className={itinDayPlace}>{day.place}</h3>
                <p className={itinDaySub}>{day.subtitle}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2.5 pr-1">
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
