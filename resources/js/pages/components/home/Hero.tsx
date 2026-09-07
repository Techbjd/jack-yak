import Header from '../shared/Header';
import { Plus } from 'lucide-react';
import { fontPrimary, ctaIconCircle } from '@/config/theme';

export default function Hero() {
    return (
        <div className=" box-content relative w-full bg-white sm:bg-navy [overflow-x:clip] [overflow-y:visible]">

            {/* Clipped visuals only — background image + gradient stay inside the box */}
            <div className="absolute inset-0">
                <img
                    src="/Hero-bg.png"
                    alt="hero background"
                    className="absolute inset-0 w-full h-full object-fit md:object-cover z-0"
                />
                <div className="absolute inset-0 bg-linear-to-r from-navy-light to-navy-gradient opacity-40 blur-2xl sm:blur-[70px] lg:blur-[100.9px] z-10" />
            </div>

            {/* Bottom ridge patch — fixed-height anchor line, image centered on its bottom edge */}
            <div className="  pointer-events-none absolute inset-x-0.5 bottom-0 h-40 z-15">
                <img
                    src="/Herosecond.png"
                    alt=""
                    className="fixed left-0 top-full w-full h-auto max-h-64 -translate-y-1/2 object-contain object-bottom"
                />
            </div>

            {/* Header */}
            <div className="relative z-30">
                <Header />
            </div>

            {/* Hero text content */}
            <div className="relative z-20 flex flex-col items-center sm:items-start text-white
                      min-w-0
                      px-4 sm:px-6 md:px-10 lg:pl-27.25
                      pt-8 sm:pt-16 lg:pt-20
                      pb-16 sm:pb-24 lg:pb-32
                      max-w-full lg:max-w-225">
                <h1
                    className={`${fontPrimary} font-extrabold
             text-[clamp(1.15rem,2vw,2rem)]
             sm:text-[clamp(1.15rem,7vw,6rem)]
             leading-[1.15] sm:leading-tight
             wrap-break-words max-w-full
             text-center sm:text-left
             text-orange sm:text-white`}
                >
                    The World Above
                    the Clouds
                </h1>

                <div className="w-[clamp(1.5rem,2vw,2rem)] h-0 border-t-hero-line sm:border-t-5 border-white my-[clamp(0.625rem,1.5vw,2rem)] hidden sm:block" />

                <p className={`hidden sm:block max-w-full sm:max-w-134.5 ${fontPrimary} font-bold
                      text-[clamp(0.75rem,1.4vw,1.5rem)] leading-snug`}>
                    Nestled in the heart of the Himalayas, Nepal is a land of majestic
                    mountains, rich heritage, and adventures unlike anywhere else.
                </p>

                <button className={`mt-[clamp(0.75rem,2vw,1.5rem)]
                           px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.4rem,1vw,0.625rem)]
                           rounded-full bg-orange sm:bg-teal
                           flex items-center gap-[clamp(0.375rem,1vw,0.5rem)]
                           ${fontPrimary} font-bold
                           text-[clamp(0.75rem,1.5vw,1rem)] text-white shrink-0`}>
                    <span>Explore Nepal</span>
                    <span className={`${ctaIconCircle} p-[clamp(0.3rem,0.8vw,0.5rem)] aspect-square flex items-center justify-center`}>
                        <Plus className="w-[clamp(0.6rem,1.2vw,0.875rem)] h-[clamp(0.6rem,1.2vw,0.875rem)] text-blue-icon" strokeWidth={3} />
                    </span>
                </button>
            </div>
        </div>
    );
}
