import Header from '@/components/ui/Header';
import CtaButton from '@/components/ui/CtaButton';
import { Plus } from 'lucide-react';
import { fontPrimary, ctaIconCircle } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { homeHero } from '@/config/home';
import { siteRoutes } from '@/config/site';
import { cn } from '@/lib/utils';

export default function Hero() {
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
                <Header />
            </div>

            {/* Hero Content */}
            <div className="max-w-container relative z-20 mx-auto flex w-full flex-1 flex-col justify-center px-6 pt-12 pb-48 sm:pb-72 md:px-12 lg:px-24 lg:pt-20 lg:pb-96">
                <div className="grid max-w-4xl grid-cols-1 items-center gap-4 text-center sm:items-start sm:gap-6 sm:text-left md:gap-8">
                    {/* Heading */}
                    <h1
                        className={cn(
                            fontPrimary,
                            'md:text-3xl-4xl lg:text-hero text-4xl font-extrabold sm:text-6xl',
                            'lg:leading-hero leading-tight',
                            'text-cta-accent tracking-tight sm:text-white',
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
                        href={siteRoutes.quiz}
                        ariaLabel={homeHero.ctaLabel}
                        className={cn(
                            'mt-2 h-10.5 w-fit px-3 py-2 sm:mt-4',
                            'bg-cta-accent sm:bg-cta',
                            'mx-auto flex shrink-0 items-center  gap-3 sm:mx-0',
                            fontPrimary,
                            'sm:text-md-lg text-sm leading-normal text-white',
                            'shadow-md transition-opacity hover:opacity-95',
                        )}
                        icon={
                            <span className={ctaIconCircle}>
                                <Plus
                                    className="text-icon-accent h-4 w-4 "
                                    strokeWidth={3}
                                />
                            </span>
                        }
                    >
                        <span>{homeHero.cta}</span>
                    </CtaButton>
                </div>
            </div>
        </div>
    );
}
