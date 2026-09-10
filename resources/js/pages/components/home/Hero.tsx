import Header from '../shared/Header';
import { Plus } from 'lucide-react';
import { fontPrimary, ctaIconCircle } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

export default function Hero() {
    return (
        <div className="sm:bg-brand relative flex w-full flex-col justify-between overflow-x-clip overflow-y-visible bg-white">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${IMAGES.home.heroBg}')` }}
            />
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                <div className="from-navy-light to-navy-gradient sm:blur-hero-sm lg:blur-hero-lg absolute inset-0 bg-linear-to-r opacity-40 blur-2xl" />
            </div>

            <img
                src={IMAGES.home.heroSecondary}
                alt=""
                className="pointer-events-none absolute inset-x-0 top-full z-10 h-auto w-full -translate-y-1/2 object-contain object-bottom"
            />

            <div className="relative z-30 w-full">
                <Header />
            </div>

            <div className="max-w-container relative z-20 mx-auto flex w-full flex-1 flex-col justify-center px-6 pt-12 pb-48 sm:pb-72 md:px-12 lg:px-24 lg:pt-20 lg:pb-96">
                <div className="grid max-w-4xl grid-cols-1 items-center gap-4 text-center sm:items-start sm:gap-6 sm:text-left md:gap-8">
                    <h1
                        className={cn(
                            fontPrimary,
                            'md:text-3xl-4xl lg:text-hero text-4xl font-extrabold sm:text-6xl',
                            'lg:leading-hero leading-tight',
                            'text-cta-accent tracking-tight sm:text-white',
                        )}
                    >
                        The World Above the Clouds
                    </h1>

                    <div className="my-1 hidden h-0 w-8 border-t-4 border-white sm:block sm:w-10 sm:border-t-5" />

                    <p
                        className={cn(
                            fontPrimary,
                            'max-w-content-md hidden sm:block',
                            'lg:text-xl-2xl text-lg font-bold md:text-xl',
                            'leading-snug text-white md:leading-relaxed',
                        )}
                    >
                        Nestled in the heart of the Himalayas, Nepal is a land
                        of majestic mountains, rich heritage, and adventures
                        unlike anywhere else.
                    </p>

                    <button
                        className={cn(
                            'mt-2 h-10.5 w-fit px-4 py-2 sm:mt-4',
                            'bg-cta-accent sm:bg-cta rounded-full',
                            'mx-auto flex shrink-0 items-center gap-3 sm:mx-0',
                            fontPrimary,
                            'sm:text-md-lg text-sm leading-normal font-bold text-white',
                            'cursor-pointer shadow-md transition-opacity hover:opacity-95',
                        )}
                    >
                        <span>Explore Nepal</span>
                        <span className={ctaIconCircle}>
                            <Plus
                                className="text-icon-accent h-4 w-4"
                                strokeWidth={3}
                            />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
