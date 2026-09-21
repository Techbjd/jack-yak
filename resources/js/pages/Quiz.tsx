import { Head } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { fontPrimary } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { quizHero } from '@/config/quiz';
import { pageTitles } from '@/config/site';
import QuizForm from './components/quiz/QuizForm';

export default function Quiz() {
    return (
        <>
            <Head title={pageTitles.quiz} />
            <main className="flex min-h-screen w-full justify-center bg-white sm:p-6 lg:items-center lg:p-10">
                <div className="flex w-full max-w-297 flex-1 flex-col overflow-hidden bg-white sm:rounded-2xl lg:h-198 lg:flex-row lg:items-stretch">
                <div className="relative min-h-64 w-full shrink-0 overflow-hidden sm:min-h-72 lg:h-auto lg:min-h-0 lg:w-99.5">
                    <img
                        src={IMAGES.destination.langtangMountain}
                        alt={quizHero.panelAlt}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center gap-4 p-6 sm:gap-5 lg:justify-start lg:p-14">
                        <img
                            src={IMAGES.logo.jackYak}
                            alt={quizHero.logoAlt}
                            className="w-36 object-contain lg:w-53.25"
                        />
                        <p
                            className={cn(
                                fontPrimary,
                                'lg:text-2xl-3xl max-w-82.5 text-2xl leading-11 font-semibold text-white',
                            )}
                        >
                            {quizHero.tagline}
                        </p>
                    </div>
                </div>


                    <div className="w-full min-w-0 flex-1 p-6 md:p-10 lg:overflow-y-auto">
                        <QuizForm compact />
                    </div>
                </div>

            </main>
        </>
    );
}
