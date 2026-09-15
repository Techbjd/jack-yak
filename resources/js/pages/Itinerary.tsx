import AppLayout from '@/layouts/AppLayout';
import Header from './components/shared/Header';
import { itinPage } from '@/config/theme';
import ItineraryGallery from './components/itinerary/ItineraryGallery';
import GalleryFilterPills from './components/itinerary/GalleryFilterPills';
import TrekAbout from './components/itinerary/TrekAbout';
import BookingCard from './components/itinerary/BookingCard';
import ItineraryDayList from './components/itinerary/ItineraryDayList';
import TrekCtaBanner from './components/itinerary/TrekCtaBanner';
import AltitudeProfile from './components/itinerary/AltitudeProfile';
import WeatherCard from './components/itinerary/WeatherCard';
import ReviewCard from './components/itinerary/ReviewCard';

const ALTITUDE_TITLE = 'Altitude Profile of Everest Base Camp Trek';

export default function Itinerary() {
    return (
        <AppLayout title="Itinerary" header={<Header tone="onLight" />}>
            <div className={itinPage}>
                <div className="mt-4 w-full md:mt-8">
                    <ItineraryGallery />
                </div>
                <div className="mt-2.5 w-full md:mt-5">
                    <GalleryFilterPills />
                </div>
                {/* About copy + sticky booking sidebar on desktop (stacked
                    full-width below xl, side-by-side from xl) */}
                <div className="mt-4.5 grid w-full grid-cols-1 gap-6 md:mt-10 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start xl:gap-10">
                    <TrekAbout />
                    <div
                        id="booking"
                        className="w-full scroll-mt-4 xl:sticky xl:top-6"
                    >
                        <BookingCard />
                    </div>
                </div>
                <div className="mt-5.5 w-full md:mt-12">
                    <ItineraryDayList />
                </div>
                <div className="mt-6 w-full md:mt-10">
                    <TrekCtaBanner />
                </div>
                {/* Altitude + weather scroll as whole full-size cards in a
                    free-scroll row (no snap, so it rests exactly at the
                    start/end) — no inner chart scrollers; stacked
                    full-width below md */}
                <div className="no-scrollbar mt-6 flex w-full flex-col gap-6 overscroll-x-contain md:mt-10 md:flex-row md:gap-8 md:overflow-x-auto">
                    <div className="md:w-graph-card-w w-full shrink-0">
                        <AltitudeProfile title={ALTITUDE_TITLE} />
                    </div>
                    <div className="md:w-graph-card-w w-full shrink-0">
                        <WeatherCard />
                    </div>
                </div>
                <div className="mt-6 w-full md:mt-10">
                    <ReviewCard />
                </div>
            </div>
        </AppLayout>
    );
}
