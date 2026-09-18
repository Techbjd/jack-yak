import { itineraryDays, itinerarySectionTitle } from '@/config/itinerary';
import ItineraryDayCard from './ItineraryDayCard';

export default function ItineraryDayList() {
    const midpoint = Math.ceil(itineraryDays.length / 2);
    const leftColumn = itineraryDays.slice(0, midpoint);
    const rightColumn = itineraryDays.slice(midpoint);
    const rows = leftColumn.map((left, i) => [left, rightColumn[i]] as const);
    const planLabel = `${itineraryDays.length}-day plan`;

    return (
        <section
            aria-labelledby="itinerary-heading"
            className="flex w-full flex-col gap-3 md:gap-6"
        >
            <h2
                id="itinerary-heading"
                className="font-inter text-xl-2xl leading-itinerary-33 text-ink md:text-2xl-3xl font-bold"
            >
                {itinerarySectionTitle}
            </h2>
            <div
                role="list"
                aria-label={planLabel}
                className="flex max-h-dvh w-full snap-y snap-proximity flex-col gap-3.5 overflow-y-auto pb-1 md:hidden"
            >
                {itineraryDays.map((day) => (
                    <div key={day.day} role="listitem" className="contents">
                        <ItineraryDayCard day={day} />
                    </div>
                ))}
            </div>

            <div
                role="list"
                aria-label={planLabel}
                className="hidden w-full flex-col gap-6 md:flex xl:hidden"
            >
                {itineraryDays.map((day) => (
                    <div key={day.day} role="listitem">
                        <ItineraryDayCard day={day} />
                    </div>
                ))}
            </div>

            <div
                role="list"
                aria-label={planLabel}
                className="hidden w-full flex-col xl:flex"
            >
                {rows.map(([left, right]) => (
                    <div
                        key={left.day}
                        role="listitem"
                        className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-6"
                    >
                        <div className="min-w-0 py-3">
                            <ItineraryDayCard day={left} />
                        </div>
                        <div
                            aria-hidden
                            className="relative flex items-center justify-center"
                        >
                            <span className="bg-bg-placeholder absolute inset-y-0 left-1/2 w-px -translate-x-1/2" />
                            <span className="shadow-card relative size-10.5 shrink-0 rounded-full bg-white" />
                        </div>
                        <div className="min-w-0 py-3">
                            {right !== undefined && (
                                <ItineraryDayCard day={right} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
