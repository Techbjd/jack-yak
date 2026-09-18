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
import { cn } from '@/lib/utils';

interface ItineraryDayCardProps {
    day: ItineraryDay;
}

export default function ItineraryDayCard({ day }: ItineraryDayCardProps) {
    return (
        <article
            aria-label={`${day.day}: ${day.place}`}
            className={cn(itinDayCard)}
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
            <div className="mb-1 flex shrink-0 items-center gap-2 self-end pl-1 min-[360px]:mb-2.25 min-[360px]:gap-2.75 min-[360px]:pl-0 md:hidden">
                <DayMetaIcon
                    src={IMAGES.itinerary.icons.stay}
                    label={`${day.stay} included`}
                    Fallback={BedDouble}
                    className="text-ink size-5.5 shrink-0 min-[360px]:size-6.75"
                />
                <DayMetaIcon
                    src={IMAGES.itinerary.icons.meals}
                    label={`${day.meals} included`}
                    Fallback={UtensilsCrossed}
                    className="text-ink size-5.5 shrink-0 min-[360px]:size-6.75"
                />
            </div>
            <div className="ml-auto hidden shrink-0 flex-col justify-center gap-5 pr-5 md:flex">
                <p className="flex items-center gap-2.5">
                    <DayMetaIcon
                        src={IMAGES.itinerary.icons.stay}
                        decorative
                        Fallback={Hotel}
                        className="text-ink size-6.75 shrink-0"
                    />
                    <span className="font-inter text-md-lg leading-itinerary-22 text-ink font-bold">
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
                    <span className="font-inter text-md-lg leading-itinerary-22 text-ink font-bold">
                        {day.meals}
                    </span>
                </p>
            </div>
        </article>
    );
}
