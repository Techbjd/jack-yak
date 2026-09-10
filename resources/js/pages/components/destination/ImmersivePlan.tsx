import { useState } from 'react';
import {
    coverImageAbsolute,
    fontPrimary,
    imagePlaceholder,
} from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';
import CheckAvailability from '../booking/CheckAvailability';

export default function ImmersivePlan() {
    const [availabilityOpen, setAvailabilityOpen] = useState(false);
    return (
        <section className="flex w-full flex-col px-6 py-8 md:px-12 md:py-12 lg:px-24">
            <div className="rounded-immersive grid grid-cols-2 items-stretch overflow-hidden md:min-h-81.5 md:grid-cols-12">
                {/* Left — warm panel */}
                <div className="bg-surface-warm flex flex-col justify-center gap-4 p-5 md:col-span-5 md:gap-5 md:p-8 lg:gap-6 lg:px-16 lg:py-10">
                    {/* <p
                        className={cn(
                            eyebrow,
                            'leading-snug tracking-wide md:text-md-lg',
                        )}
                    >
                        Explore Nepal
                    </p> */}
                    <h2
                        className={cn(
                            fontPrimary,
                            'text-lg-xl text-text-primary md:text-2xl-3xl leading-snug font-bold tracking-wide uppercase',
                        )}
                    >
                        IMMERSIVE EXPERIENCES
                    </h2>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-md text-text-primary md:text-md-lg leading-snug font-medium',
                        )}
                    >
                        Explore Nepal through cinematic destination stories,
                        travel guides, local insights, trekking routes, and
                        hidden gems designed to inspire your next adventure.
                    </p>
                    <button
                        type="button"
                        onClick={() => setAvailabilityOpen(true)}
                        className={cn(
                            fontPrimary,
                            'bg-cta-ember text-xs-sm md:bg-cta md:text-md-lg flex w-fit cursor-pointer items-center justify-center px-5 py-2 font-bold tracking-wide text-white md:h-12.75 md:w-52 md:px-0 md:py-0',
                        )}
                    >
                        Start Planning
                    </button>
                    <CheckAvailability
                        open={availabilityOpen}
                        onClose={() => setAvailabilityOpen(false)}
                    />
                </div>
                {/* Right — temple backdrop */}
                <div
                    className={cn(
                        imagePlaceholder,
                        'relative flex min-h-40 w-full items-center justify-center overflow-hidden md:col-span-7 md:min-h-81.5',
                    )}
                >
                    {/* Mobile only — temple portrait (408x640) fits the narrow half-column */}
                    <img
                        src={IMAGES.destination.swayambhuStupa}
                        alt="Temple image"
                        className={cn(coverImageAbsolute, 'md:hidden')}
                    />
                    {/* Desktop only — immersive wide (1648x652) fits the ~2.2:1 right panel */}
                    <img
                        src={IMAGES.destination.stupaPanorama}
                        alt="Temple image"
                        className={cn(coverImageAbsolute, 'hidden md:block')}
                    />
                </div>
            </div>
        </section>
    );
}
