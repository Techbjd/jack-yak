import { itineraryDays } from '@/config/itinerary';
import ItineraryDayCard from './ItineraryDayCard';

/** Day list — heading + screen-height snap-scroll panel of all 12 days */
export default function ItineraryDayList() {
    return (
        <section
            aria-labelledby="itinerary-heading"
            className="flex w-full flex-col gap-3"
        >
            <h2
                id="itinerary-heading"
                className="font-manrope text-xl-2xl leading-itinerary-33 text-ink font-bold"
            >
                Itinerary
            </h2>
            <div
                role="list"
                aria-label={`12-day plan, ${itineraryDays.length} days`}
                className="flex max-h-dvh w-full snap-y snap-proximity flex-col gap-3.5 overflow-y-auto pb-1"
            >
                {itineraryDays.map((day) => (
                    <div key={day.day} role="listitem" className="contents">
                        <ItineraryDayCard day={day} />
                    </div>
                ))}
            </div>
        </section>
    );
}
