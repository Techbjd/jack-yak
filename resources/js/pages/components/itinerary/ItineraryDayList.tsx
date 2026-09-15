import { itineraryDays } from '@/config/itinerary';
import ItineraryDayCard from './ItineraryDayCard';

/** Day list — mobile: snap-scroll panel; tablet/laptop (md–xl): single
 *  full-width column of fluid cards, rail hidden; desktop (xl+): rows
 *  of two fluid cards with a center timeline rail (Figma: 1px #D9D9D9
 *  line + 42px white nodes, one per row). Rows (not columns) keep each
 *  node glued to its row center in pure flow even when a card wraps to
 *  two lines — no fixed-height coupling. */
export default function ItineraryDayList() {
    const midpoint = Math.ceil(itineraryDays.length / 2);
    const leftColumn = itineraryDays.slice(0, midpoint);
    const rightColumn = itineraryDays.slice(midpoint);
    const rows = leftColumn.map((left, i) => [left, rightColumn[i]] as const);

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
                aria-label="12-day plan"
                className="flex max-h-dvh w-full snap-y snap-proximity flex-col gap-3.5 overflow-y-auto pb-1 md:hidden"
            >
                {itineraryDays.map((day) => (
                    <div key={day.day} role="listitem" className="contents">
                        <ItineraryDayCard day={day} />
                    </div>
                ))}
            </div>

            {/* Tablet/laptop (md–xl): single full-width column of fluid
                cards. Rail hidden — no center geometry fits one column. */}
            <div
                role="list"
                aria-label="12-day plan"
                className="hidden w-full flex-col gap-6 md:flex xl:hidden"
            >
                {itineraryDays.map((day) => (
                    <div key={day.day} role="listitem">
                        <ItineraryDayCard day={day} />
                    </div>
                ))}
            </div>

            {/* Desktop (xl+): one grid row per day-pair — left card,
                rail node, right card. The rail line is rebuilt per row
                (each middle cell carries its own segment) so segments
                touch across rows into one continuous line, and every
                node stays at its own row center whatever the card
                heights are. Card padding (py-3) sets the 24px rhythm. */}
            <div
                role="list"
                aria-label="12-day plan"
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
