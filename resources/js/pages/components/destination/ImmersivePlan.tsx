import { useState } from 'react';
import { fontPrimary, imagePlaceholder, sectionInner } from '@/config/theme';
import { immersiveExperiences, immersivePlanCopy } from '@/config/destination';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';
import CoverImage from '@/components/ui/CoverImage';
import CtaButton from '@/components/ui/CtaButton';
import CheckAvailability from '../booking/CheckAvailability';

export default function ImmersivePlan() {
    const [availabilityOpen, setAvailabilityOpen] = useState(false);
    return (
        <section className={cn(sectionInner, 'flex flex-col py-8 md:py-12')}>
            <div className="rounded-immersive md:min-h-immersive grid grid-cols-2 items-stretch overflow-hidden md:grid-cols-12">
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
                        shape="block"
                        className={cn(
                            fontPrimary,
                            'bg-cta-ember text-xs-sm md:bg-cta md:text-md-lg md:h-immersive-cta w-fit px-5 py-2 tracking-wide md:w-52 md:px-0 md:py-0',
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
                        'md:min-h-immersive relative flex min-h-40 w-full items-center justify-center overflow-hidden md:col-span-7',
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
