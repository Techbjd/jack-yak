import AppLayout from '@/layouts/AppLayout';
import Header from '@/components/ui/Header';
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
import { altitudeTitle } from '@/config/itinerary';
import { pageTitles } from '@/config/site';
import { cn } from '@/lib/utils';

export default function Itinerary() {
    return (
        <AppLayout
            title={pageTitles.itinerary}
            header={<Header tone="onLight" className='max-w-full' />}
        >
            <div className={cn(itinPage,"md:max-w-full")}>
                <div className="mt-4 w-full md:mt-8">
                    <ItineraryGallery />
                </div>
                <div className={itinPage}>
                <div className={"mt-2.5 w-full md:mt-5 "}>
                    <GalleryFilterPills />
                </div>
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
                <div className="no-scrollbar mt-6 flex w-full flex-col gap-6 md:mt-10 md:flex-row md:gap-8 md:overflow-x-auto md:overscroll-x-contain">
                    <div className="md:w-graph-card-w w-full shrink-0">
                        <AltitudeProfile title={altitudeTitle} />
                    </div>
                    <div className="md:w-graph-card-w w-full shrink-0">
                        <WeatherCard />
                    </div>
                </div>
                <div className="mt-6 w-full md:mt-10">
                    <ReviewCard />
                </div>
            </div>
            </div>
        </AppLayout>
    );
}
