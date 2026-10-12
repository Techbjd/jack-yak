import AppLayout from '@/layouts/AppLayout';
import Header from '@/components/ui/Header';
import ErrorBoundary from '@/components/error/ErrorBoundary';
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
            header={<Header tone="onLight" className="max-w-full" />}
        >
            <div className={cn(itinPage, 'md:max-w-full')}>
                <div className="mt-4 w-full md:mt-8">
                    <ErrorBoundary message="Gallery failed to load.">
                        <ItineraryGallery />
                    </ErrorBoundary>
                </div>
                <div className={itinPage}>
                    <div className={'mt-2.5 w-full md:mt-5'}>
                        <ErrorBoundary message="Filters failed to load.">
                            <GalleryFilterPills />
                        </ErrorBoundary>
                    </div>
                    <div className="mt-4.5 grid w-full grid-cols-1 gap-6 md:mt-10 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start xl:gap-10">
                        <ErrorBoundary message="Trek details failed to load.">
                            <TrekAbout />
                        </ErrorBoundary>
                        <div
                            id="booking"
                            className="w-full scroll-mt-4 xl:sticky xl:top-6"
                        >
                            <ErrorBoundary message="Booking failed to load.">
                                <BookingCard />
                            </ErrorBoundary>
                        </div>
                    </div>
                    <div className="mt-5.5 w-full md:mt-12">
                        <ErrorBoundary message="Itinerary failed to load.">
                            <ItineraryDayList />
                        </ErrorBoundary>
                    </div>
                    <div className="mt-6 w-full md:mt-10">
                        <ErrorBoundary message="Banner failed to load.">
                            <TrekCtaBanner />
                        </ErrorBoundary>
                    </div>
                    <div className="no-scrollbar mt-6 flex w-full flex-col gap-6 md:mt-10 md:flex-row md:gap-8 md:overflow-x-auto md:overscroll-x-contain">
                        <div className="md:w-graph-card-w w-full shrink-0">
                            <ErrorBoundary message="Altitude chart failed to load.">
                                <AltitudeProfile title={altitudeTitle} />
                            </ErrorBoundary>
                        </div>
                        <div className="md:w-graph-card-w w-full shrink-0">
                            <ErrorBoundary message="Weather failed to load.">
                                <WeatherCard />
                            </ErrorBoundary>
                        </div>
                    </div>
                    <div className="mt-6 w-full md:mt-10">
                        <ErrorBoundary message="Reviews failed to load.">
                            <ReviewCard />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
