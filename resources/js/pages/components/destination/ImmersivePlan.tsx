import { useState } from 'react';
import { fontPrimary, imagePlaceholder } from '@/config/theme';
import { immersiveExperiences, immersivePlanCopy } from '@/config/destination';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';
import CoverImage from '@/components/ui/CoverImage';
import CtaButton from '@/components/ui/CtaButton';
import CheckAvailability from '../booking/CheckAvailability';

export default function ImmersivePlan() {
    const [availabilityOpen, setAvailabilityOpen] = useState(false);
    return (
        <section className="flex w-full flex-col px-6 py-8 md:px-12 md:py-12 lg:px-24">
            <div className="rounded-immersive grid grid-cols-2 items-stretch overflow-hidden md:min-h-81.5 md:grid-cols-12">
                <div className="bg-surface-warm flex flex-col justify-center gap-4 p-5 md:col-span-5 md:gap-5 md:p-8 lg:gap-6 lg:px-16 lg:py-10">
                    <h2
                        className={cn(
                            fontPrimary,
                            'text-lg-xl text-text-primary md:text-2xl-3xl leading-snug font-bold tracking-wide uppercase',
                        )}
                    >
                        {immersiveExperiences.heading}
                    </h2>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-md text-text-primary md:text-md-lg leading-snug font-medium',
                        )}
                    >
                        {immersiveExperiences.body}
                    </p>
                    <CtaButton
                        onClick={() => setAvailabilityOpen(true)}
                        className={cn(
                            fontPrimary,
                            'bg-cta-ember text-xs-sm md:bg-cta md:text-md-lg w-fit rounded-none px-5 py-2 tracking-wide md:h-12.75 md:w-52 md:px-0 md:py-0',
                        )}
                    >
                        {immersivePlanCopy.cta}
                    </CtaButton>
                    <CheckAvailability
                        open={availabilityOpen}
                        onClose={() => setAvailabilityOpen(false)}
                    />
                </div>
                <div
                    className={cn(
                        imagePlaceholder,
                        'relative flex min-h-40 w-full items-center justify-center overflow-hidden md:col-span-7 md:min-h-81.5',
                    )}
                >
                    <CoverImage
                        src={IMAGES.destination.swayambhuStupa}
                        alt={immersivePlanCopy.imageAltMobile}
                        className="md:hidden"
                        eager
                    />
                    <CoverImage
                        src={IMAGES.destination.stupaPanorama}
                        alt={immersivePlanCopy.imageAltDesktop}
                        className="hidden md:block"
                        eager
                    />
                </div>
            </div>
        </section>
    );
}
