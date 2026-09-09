import type { LucideIcon } from 'lucide-react';
import { Compass, Map, Mountain } from 'lucide-react';
import { fontPrimary, imageRoundedLg } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

interface PlanStep {
    index: string;
    title: string;
    description: string;
    Icon: LucideIcon;
}

const planSteps: PlanStep[] = [
    {
        index: '01',
        title: 'Choose Your Travel Style',
        description:
            'Adventure, wildlife, culture, photography, or relaxation — you decide.',
        Icon: Mountain,
    },
    {
        index: '02',
        title: 'Discover Perfect Destinations',
        description:
            'Receive personalized recommendations based on your preferences.',
        Icon: Map,
    },
    {
        index: '03',
        title: 'Explore with Confidence',
        description:
            'Access guides, travel tips, permits, weather, and local insights before your journey.',
        Icon: Compass,
    },
];


const PlanTripSteps = () => {
    return (
        <section className="w-full bg-slate-50">
            <div className="mx-auto flex w-full max-w-container flex-col gap-4 px-6 py-6 ms:gap-8 ms:px-8 md:px-12 lg:px-24">
                <div className="flex flex-col gap-1 ms:gap-2">
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-sm font-bold text-ink ms:text-md-lg',
                        )}
                    >
                        Start Here
                    </p>
                    <h2
                        className={cn(
                            fontPrimary,
                            'max-w-content-sm text-md-lg leading-snug font-bold tracking-wide text-text-primary ms:max-w-content-md ms:text-xl-2xl md:text-3xl-4xl md:leading-tight',
                        )}
                    >
                        Plan Your Trip in 3 Easy Steps
                    </h2>
                </div>

                {/* 400px+: Figma side-by-side (image column narrower); below 400px: image shifts below steps */}
                {/* ms+ (600px): tablet sizing step-up, photo stretches to full steps height; lg: equal halves like desktop Figma */}
                <div className="flex flex-col gap-4 xs:flex-row xs:items-start xs:gap-3 ms:items-stretch md:flex-row md:gap-8 lg:grid lg:grid-cols-2">
                    {/* Steps — vertical timeline */}
                    <ol className="flex min-w-0 flex-1 flex-col md:gap-2">
                        {planSteps.map(
                            ({ index, title, description, Icon }, i) => (
                                <li
                                    key={index}
                                    className="flex gap-1.5 md:gap-4"
                                >
                                    {/* Rail: icon + dashed connector */}
                                    <div className="flex flex-col items-center">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-white ms:h-10 ms:w-10 md:h-16 md:w-16">
                                            <Icon className="h-3.5 w-3.5 ms:h-5 ms:w-5 md:h-11 md:w-11" />
                                        </span>
                                        {i < planSteps.length - 1 && (
                                            <span className="w-px flex-1 border-l border-dashed border-slate-400" />
                                        )}
                                    </div>
                                    <div className="flex flex-col justify-center gap-1 pb-4 md:pb-6">
                                        <h3
                                            className={cn(
                                                fontPrimary,
                                                'text-xs-sm leading-tight font-bold tracking-wide text-ink ms:text-md-lg lg:text-base-md',
                                            )}
                                        >
                                            {index} {title}
                                        </h3>
                                        <p
                                            className={cn(
                                                fontPrimary,
                                                'text-2xs leading-relaxed font-medium tracking-wide text-text-primary ms:text-base-md md:text-lg-xl lg:text-md-lg',
                                            )}
                                        >
                                            {description}
                                        </p>
                                    </div>
                                </li>
                            ),
                        )}
                    </ol>

                    {/* Side image — Lukla flight */}
                    <div className="flex w-full flex-col gap-2 xs:w-2/5 xs:shrink-0 lg:w-auto">
                        <img
                            src={IMAGES.about.luklaFlight}
                            alt="Flight landing at Lukla airport"
                            loading="lazy"
                            className={cn(
                                imageRoundedLg,
                                'aspect-4/3 w-full bg-bg-placeholder object-cover object-center text-2xs text-text-primary shadow-card ms:aspect-auto ms:min-h-0 ms:flex-1 ms:text-xs-sm',
                            )}
                        />
                        {/* Desktop: carousel dots */}
                        <div className="hidden items-center justify-center gap-1 ms:flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-cta-accent" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanTripSteps;
