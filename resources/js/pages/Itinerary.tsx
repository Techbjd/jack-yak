import AppLayout from '@/layouts/AppLayout';
import Header from './components/shared/Header';
import { itinPage } from '@/config/theme';
import ItineraryGallery from './components/itinerary/ItineraryGallery';
import GalleryFilterPills from './components/itinerary/GalleryFilterPills';
import TrekAbout from './components/itinerary/TrekAbout';
import BookingCard from './components/itinerary/BookingCard';
import ItineraryDayList from './components/itinerary/ItineraryDayList';
import AltitudeProfile from './components/itinerary/AltitudeProfile';
import ReviewCard from './components/itinerary/ReviewCard';

const ALTITUDE_TITLE = 'Altitude Profile of Everest Base Camp Trek';

export default function Itinerary() {
    return (
        <AppLayout title="Itinerary" header={<Header tone="onLight" />}>
            <div className={itinPage}>
                <div className="mt-4 w-full">
                    <ItineraryGallery />
                </div>
                <div className="mt-2.5 w-full">
                    <GalleryFilterPills />
                </div>
                <div className="mt-4.5 w-full">
                    <TrekAbout />
                </div>
                <div className="mt-2.5 w-full">
                    <BookingCard />
                </div>
                <div className="mt-5.5 w-full">
                    <ItineraryDayList />
                </div>
                <div className="mt-6 w-full">
                    <AltitudeProfile title={ALTITUDE_TITLE} />
                </div>
                <div className="mt-6 w-full">
                    <AltitudeProfile title={ALTITUDE_TITLE} />
                </div>
                <div className="mt-6 w-full">
                    <ReviewCard />
                </div>
            </div>
        </AppLayout>
    );
}
