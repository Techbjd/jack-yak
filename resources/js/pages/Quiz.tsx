import { Head } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { fontPrimary } from '@/config/theme';
import { IMAGES } from '@/config/images';
import QuizForm from './components/quiz/QuizForm';

/** Quiz — standalone destination-finder page (no header/footer) */
export default function Quiz() {
    return (
        <>
            <Head title="Find Your Destination" />
            <main className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
                {/* Image panel — top banner on mobile, fixed side panel on desktop */}
                <div className="relative h-64 w-full shrink-0 overflow-hidden sm:h-72 lg:h-auto lg:min-h-screen lg:w-[398px]">
                    <img
                        src={IMAGES.destination.langtangMountain}
                        alt="Snow-covered Langtang peaks under a clear sky"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center gap-4 p-6 sm:gap-5 lg:justify-start lg:p-14">
                        <img
                            src={IMAGES.logo.jackYak}
                            alt="JackYak"
                            className="w-36 object-contain lg:w-53.25"
                        />
                        <p
                            className={cn(
                                fontPrimary,
                                'lg:text-2xl-3xl max-w-82.5 text-2xl leading-11 font-semibold text-white',
                            )}
                        >
                            Find your perfect destination in Nepal
                        </p>
                    </div>
                </div>

                {/* Form column */}
                <div className="flex w-full flex-1 justify-center px-6 py-10 sm:px-10 lg:items-start lg:px-14 lg:py-14">
                    <div className="w-full max-w-170">
                        <QuizForm />
                    </div>
                </div>
            </main>
        </>
    );
}
