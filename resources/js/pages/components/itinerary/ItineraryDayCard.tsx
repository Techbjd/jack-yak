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
import { SkeletonImage } from '@/components/ui/Skeleton';
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
            <SkeletonImage
                src={day.image}
                alt=""
                loading="lazy"
                wrapperClassName={itinDayThumb}
                className="h-full w-full object-cover"
            />
            <div className={itinDayText}>
                <p className={itinDayLabel}>{day.day}</p>
                <h3 className={itinDayPlace}>{day.place}</h3>
                <p className={itinDaySub}>{day.subtitle}</p>
            </div>
            <div className="xs2:mb-day-meta-mb xs2:gap-day-meta-gap xs2:pl-0 mb-1 flex shrink-0 items-center gap-2 self-end pl-1 md:hidden">
                <BedDouble
                    aria-label={`${day.stay} included`}
                    role="img"
                    className="text-ink size-day-meta-sm xs2:size-day-meta shrink-0"
                />
                <DayMetaIcon
                    src={IMAGES.itinerary.icons.meals}
                    label={`${day.meals} included`}
                    Fallback={UtensilsCrossed}
                    className="text-ink size-day-meta-sm xs2:size-day-meta shrink-0"
                />
            </div>
            <div className="ml-auto hidden shrink-0 flex-col justify-center gap-5 pr-5 md:flex">
                <p className="flex items-center gap-2.5">
                    <Hotel
                        aria-hidden
                        className="text-ink size-day-meta shrink-0"
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
                        className="text-ink size-day-meta shrink-0"
                    />
                    <span className="font-inter text-md-lg leading-itinerary-22 text-ink font-bold">
                        {day.meals}
                    </span>
                </p>
            </div>
        </article>
    );
}
