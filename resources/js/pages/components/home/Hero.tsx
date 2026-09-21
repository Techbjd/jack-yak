import Header from '@/components/ui/Header';
import CtaButton from '@/components/ui/CtaButton';
import { Plus } from 'lucide-react';
import { fontPrimary, ctaIconCircle } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { discoverNepalCopy, homeHero } from '@/config/home';
import { siteRoutes } from '@/config/site';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import QuizForm from '../quiz/QuizForm';
import Modal from '@/components/ui/Modal';
import { quizHero } from '@/config';

export default function Hero() {
       const [quizOpen, setQuizOpen] = useState(false);
    return (
        <div className="group sm:bg-brand relative flex w-full flex-col justify-between overflow-x-clip overflow-y-visible bg-white">
            {/* Hero Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-125"
                    style={{
                        backgroundImage: `url("${IMAGES.home.heroBg}")`,
                    }}
                />
            </div>

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                <div className="from-navy-light to-navy-gradient sm:blur-hero-sm lg:blur-hero-lg absolute inset-0 bg-linear-to-r opacity-40 blur-2xl" />
            </div>

            {/* Secondary Hero Image */}
            <img
                src={IMAGES.home.heroSecondary}
                alt=""
                className="pointer-events-none absolute inset-x-0 top-full z-10 h-auto w-full -translate-y-1/2 object-contain object-bottom"
            />

            {/* Header */}
            <div className="relative z-30 w-full">
                <Header className='max-w-full' />
            </div>

            {/* Hero Content */}
            <div className="max-w-full relative z-20 mx-auto flex w-full flex-1 flex-col justify-center px-6 pt-12 pb-48 sm:pb-72 md:px-12 lg:px-24 lg:pt-20 lg:pb-96">
                <div className="grid max-w-4xl grid-cols-1 items-center gap-4 text-center sm:items-start sm:gap-6 sm:text-left md:gap-8">
                    {/* Heading */}
                    <h1
                        className={cn(
                            fontPrimary,
                            'md:text-3xl-4xl lg:text-hero text-xl-2xl font-extrabold sm:text-6xl',
                            'lg:leading-hero leading-tight',
                            'text-cta tracking-tight sm:text-white',
                        )}
                    >
                        {homeHero.title}
                    </h1>

                    {/* Divider */}
                    <div className="my-1 hidden h-0 w-8 border-t-4 border-white sm:block sm:w-10 sm:border-t-5" />

                    {/* Description */}
                    <p
                        className={cn(
                            fontPrimary,
                            'max-w-content-md hidden sm:block',
                            'lg:text-xl-2xl text-lg font-bold md:text-xl',
                            'leading-snug text-white md:leading-relaxed',
                        )}
                    >
                        {homeHero.body}
                    </p>

                    {/* CTA */}
                    <CtaButton
                    onClick={() => setQuizOpen(true)}

                        ariaLabel={homeHero.ctaLabel}
                        className={cn(
                            'mt-2 h-10.5 w-fit px-3 py-2 sm:mt-4',
                            'bg-cta-accent sm:bg-cta',
                            'mx-auto flex shrink-0 items-center  gap-3 sm:mx-0',
                            fontPrimary,
                            'sm:text-md-lg text-xs-sm leading-normal text-white',
                            'shadow-md transition-opacity hover:opacity-95',
                        )}
                        icon={
                            <span className={ctaIconCircle}>
                                <Plus
                                    className="text-cta h-4 w-4 "
                                    strokeWidth={3}
                                />
                            </span>
                        }
                    >
                        <span>{homeHero.cta}</span>
                    </CtaButton>

                </div>
            </div>
               <Modal
                            open={quizOpen}
                            onClose={() => setQuizOpen(false)}
                            label={discoverNepalCopy.modalLabel}
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
        </div>
    );
}
