import { useState } from 'react';
import { trekCta } from '@/config/itinerary';
import { pageTitles } from '@/config/site';
import QuizModal from '../quiz/QuizModal';

export default function TrekCtaBanner() {
    const [quizOpen, setQuizOpen] = useState(false);

    return (
        <section aria-label={trekCta.title} className="hidden w-full sm:block">
            <div className="rounded-dest-panel shadow-card cta:gap-6 cta:p-6 xl:pr-cta-banner flex w-full flex-row items-center gap-3 bg-white p-3 sm:gap-4 sm:p-4 xl:gap-10 xl:py-5 xl:pl-11">
                <img
                    src={trekCta.image}
                    alt=""
                    loading="lazy"
                    className="rounded-immersive md:h-cta-thumb-compact-h md:w-cta-thumb-compact-w cta:w-48 xl:h-cta-thumb-h xl:w-cta-thumb-w sm:h-cta-thumb-sm h-20 w-28 shrink-0 object-cover sm:w-32 lg:h-28 lg:w-56"
                />
                <div className="cta:gap-2 flex min-w-0 flex-1 flex-col gap-1">
                    <h2 className="font-inter text-base-md text-ink cta:text-xl-2xl cta:leading-itinerary-33 leading-snug font-medium">
                        {trekCta.title}
                    </h2>
                    <p className="font-inter text-xs-sm text-ink cta:text-md-lg cta:leading-itinerary-22 leading-relaxed font-medium">
                        {trekCta.subtitle}
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setQuizOpen(true)}
                    className="font-inter rounded-card-sm bg-cta shadow-card text-xs-sm sm:text-sm-md cta:h-cta-button cta:text-lg-xl xl:w-cta-button-w h-10 shrink-0 cursor-pointer px-2.5 font-bold whitespace-nowrap text-white uppercase transition-opacity hover:opacity-90 sm:px-3"
                >
                    {trekCta.button}
                </button>
            </div>
            <QuizModal
                open={quizOpen}
                onClose={() => setQuizOpen(false)}
                label={pageTitles.quiz}
            />
        </section>
    );
}
