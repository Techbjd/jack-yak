import { itineraryDays } from '@/config/itinerary';
import ItineraryDayCard from './ItineraryDayCard';

/** Day list — mobile: snap-scroll panel; desktop: 2-col flow grid with a
 *  center timeline rail (Figma: 1px #D9D9D9 line + 42px white nodes,
 *  one per row) between the columns */
export default function ItineraryDayList() {
    const midpoint = Math.ceil(itineraryDays.length / 2);
    const leftColumn = itineraryDays.slice(0, midpoint);
    const rightColumn = itineraryDays.slice(midpoint);
    const rowCount = Math.max(leftColumn.length, rightColumn.length);

    return (
        <section
            aria-labelledby="itinerary-heading"
            className="flex w-full flex-col gap-3 md:gap-6"
        >
            <h2
                id="itinerary-heading"
                className="font-manrope text-xl-2xl leading-itinerary-33 text-ink md:text-2xl-3xl font-bold"
            >
                Itinerary
            </h2>
            {/* Mobile: heading + screen-height snap-scroll panel of all 12 days */}
            <div
                role="list"
                aria-label={`12-day plan, ${itineraryDays.length} days`}
                className="flex max-h-dvh w-full snap-y snap-proximity flex-col gap-3.5 overflow-y-auto pb-1 md:hidden"
            >
                {itineraryDays.map((day) => (
                    <div key={day.day} role="listitem" className="contents">
                        <ItineraryDayCard day={day} />
                    </div>
                ))}
            </div>

            {/* Desktop: two flow columns with a center timeline rail */}
            <div
                role="list"
                aria-label={`12-day plan, ${itineraryDays.length} days`}
                className="hidden w-full items-stretch gap-6 md:flex"
            >
                <div className="flex min-w-0 flex-1 flex-col gap-6">
                    {leftColumn.map((day) => (
                        <div key={day.day} role="listitem">
                            <ItineraryDayCard day={day} />
                        </div>
                    ))}
                </div>
                {/* Center rail — continuous gray line with one white node
                    per row. Each slot matches the card height + column gap
                    (h-day-card-desktop-h + gap-6), so nodes sit at row
                    centers in pure flow, no absolute page positions. */}
                <div
                    aria-hidden
                    className="relative flex shrink-0 flex-col gap-6 self-stretch"
                >
                    <span className="bg-bg-placeholder absolute inset-y-0 left-1/2 w-px -translate-x-1/2" />
                    {Array.from({ length: rowCount }).map((_, i) => (
                        <div
                            key={`rail-node-${i}`}
                            className="h-day-card-desktop-h flex items-center justify-center"
                        >
                            <span className="shadow-card size-10.5 rounded-full bg-white" />
                        </div>
                    ))}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-6">
                    {rightColumn.map((day) => (
                        <div key={day.day} role="listitem">
                            <ItineraryDayCard day={day} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
