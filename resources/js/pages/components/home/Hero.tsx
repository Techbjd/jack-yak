import Header from '../shared/Header';
import { Plus } from 'lucide-react';
import { fontPrimary, ctaIconCircle } from '@/config/theme';
import { cn } from '@/lib/utils';

export default function Hero() {
    return (
        <div className="relative w-full bg-white sm:bg-navy overflow-x-clip overflow-y-visible flex flex-col justify-between">

            {/* Background image & gradient overlay — Fully responsive background layers */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/Hero-bg.png')" }}
            />
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-navy-light to-navy-gradient opacity-40 blur-2xl sm:blur-hero-sm lg:blur-hero-lg" />
            </div>

            {/* Ridge patch — centered on the hero bottom edge, half in / half out */}
            <img
                src="/Herosecond.png"
                alt=""
                className="absolute inset-x-0 top-full z-10 pointer-events-none w-full h-auto object-contain object-bottom -translate-y-1/2"
            />

            {/* Header */}
            <div className="relative z-30 w-full">
                <Header />
            </div>

            {/* Hero text content — Flexbox & Grid layout with theme design tokens */}
            <div className="relative z-20 flex-1 flex flex-col justify-center mx-auto w-full max-w-container px-6 md:px-12 lg:px-24 pt-12 pb-48 sm:pb-72 lg:pt-20 lg:pb-96">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-4xl items-center sm:items-start text-center sm:text-left">
                    <h1 className={cn(
                        fontPrimary,
                        "font-extrabold text-4xl sm:text-6xl md:text-3xl-4xl lg:text-hero",
                        "leading-tight lg:leading-hero",
                        "text-orange sm:text-white tracking-tight"
                    )}>
                        The World Above
                        the Clouds
                    </h1>

                    <div className="w-8 sm:w-10 h-0 border-t-4 sm:border-t-5 border-white hidden sm:block my-1" />

                    <p className={cn(
                        fontPrimary,
                        "hidden sm:block max-w-content-md",
                        "font-bold text-lg md:text-xl lg:text-xl-2xl",
                        "leading-snug md:leading-relaxed text-white"
                    )}>
                        Nestled in the heart of the Himalayas, Nepal is a land of majestic
                        mountains, rich heritage, and adventures unlike anywhere else.
                    </p>

                    <button className={cn(
                        "w-fit h-10.5 px-4 py-2 mt-2 sm:mt-4",
                        "rounded-full bg-orange sm:bg-teal",
                        "flex items-center gap-3 shrink-0 mx-auto sm:mx-0",
                        fontPrimary,
                        "font-bold text-sm sm:text-md-lg leading-normal text-white",
                        "shadow-md hover:opacity-95 transition-opacity cursor-pointer"
                    )}>
                        <span>Explore Nepal</span>
                        <span className={ctaIconCircle}>
                            <Plus className="w-4 h-4 text-blue-icon" strokeWidth={3} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
