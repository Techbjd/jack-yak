import { useState } from 'react';
import { trekCta } from '@/config/itinerary';
import { pageTitles } from '@/config/site';
import { quizHero } from '@/config/quiz';
import { IMAGES } from '@/config/images';
import { fontPrimary } from '@/config/theme';
import { cn } from '@/lib/utils';
import Modal from '@/components/ui/Modal';
import QuizForm from '../quiz/QuizForm';

export default function TrekCtaBanner() {
    const [quizOpen, setQuizOpen] = useState(false);

    return (
        <section aria-label={trekCta.title} className="hidden w-full sm:block">
            <div className="rounded-dest-panel shadow-card cta:gap-6 cta:p-6 flex w-full flex-row items-center gap-3 bg-white p-3 sm:gap-4 sm:p-4 xl:gap-10 xl:py-5 xl:pr-30 xl:pl-11">
                <img
                    src={trekCta.image}
                    alt=""
                    loading="lazy"
                    className="rounded-immersive md:h-cta-thumb-compact-h md:w-cta-thumb-compact-w cta:h-24 cta:w-48 xl:h-cta-thumb-h xl:w-cta-thumb-w h-20 w-28 shrink-0 object-cover sm:h-22 sm:w-32 lg:h-28 lg:w-56"
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
                    className="font-inter rounded-card-sm bg-cta shadow-card text-xs-sm sm:text-sm-md cta:h-13 cta:px-3 cta:text-lg-xl xl:w-cta-button-w h-10 w-auto max-w-fit shrink-0 cursor-pointer px-2.5 font-bold whitespace-nowrap text-white uppercase transition-opacity hover:opacity-90 sm:px-3"
                >
                    {trekCta.button}
                </button>
            </div>
            <Modal
                open={quizOpen}
                onClose={() => setQuizOpen(false)}
                label={pageTitles.quiz}
                panelClassName="p-0 sm:max-w-[1188px] md:p-0 lg:h-[792px]"
            >
                <div className="flex w-full flex-1 items-stretch">
                    <div className="relative hidden w-99.5 shrink-0 overflow-hidden rounded-l-2xl lg:block">
                        <img
                            src={IMAGES.destination.langtangMountain}
                            alt={quizHero.panelAlt}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col gap-4 p-6 sm:gap-5 lg:justify-start lg:p-14">
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
                    <div className="w-full min-w-0 flex-1 p-6 md:p-10">
                        <QuizForm compact />
                    </div>
                </div>
            </Modal>
        </section>
    );
}
