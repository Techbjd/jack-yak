import { useAutoRotate } from '@/lib/useAutoRotate';
import { fontPrimary, imageRoundedLg } from '@/config/theme';
import { cn } from '@/lib/utils';
import {
    planStepImages,
    planStepSlideIntervalMs,
    planSteps,
    planTripHeader,
} from '@/config/guide';
import CarouselDots from '@/components/ui/CarouselDots';
import SectionHeading from '@/components/ui/SectionHeading';

const PlanTripSteps = () => {
    const [active, setActive] = useAutoRotate(
        planStepImages.length,
        planStepSlideIntervalMs,
    );

    return (
        <section className="w-full">
            <div className="max-w-container ms:gap-8 ms:px-8 mx-auto flex w-full flex-col gap-4 px-6 py-6 md:px-12 lg:px-24">
                <SectionHeading
                    eyebrow={planTripHeader.eyebrow}
                    title={planTripHeader.title}
                    className="ms:gap-2"
                    eyebrowClassName="ms:text-md-lg"
                    titleClassName="max-w-content-sm ms:max-w-content-md ms:text-xl-2xl md:text-3xl-4xl md:leading-tight"
                />

                <div className="xs:flex-row xs:items-start xs:gap-3 ms:items-stretch flex flex-col gap-4 md:flex-row md:gap-8 lg:grid lg:grid-cols-2">
                    <ol className="flex min-w-0 flex-1 flex-col md:gap-2">
                        {planSteps.map(
                            ({ index, title, description, Icon }, i) => (
                                <li
                                    key={index}
                                    className="flex gap-1.5 md:gap-4"
                                >
                                    <div className="flex flex-col items-center">
                                        <span className="bg-ink ms:h-10 ms:w-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white md:h-16 md:w-16">
                                            <Icon className="ms:h-5 ms:w-5 h-3.5 w-3.5 md:h-11 md:w-11" />
                                        </span>
                                        {i < planSteps.length - 1 && (
                                            <span className="border-bg-placeholder w-px flex-1 border-l border-dashed" />
                                        )}
                                    </div>
                                    <div className="flex flex-col justify-center gap-1 pb-4 md:pb-6">
                                        <h3
                                            className={cn(
                                                fontPrimary,
                                                'text-xs-sm text-ink ms:text-md-lg lg:text-base-md leading-tight font-bold tracking-wide',
                                            )}
                                        >
                                            {index} {title}
                                        </h3>
                                        <p
                                            className={cn(
                                                fontPrimary,
                                                'text-2xs text-text-primary ms:text-base-md md:text-lg-xl lg:text-md-lg leading-relaxed font-medium tracking-wide',
                                            )}
                                        >
                                            {description}
                                        </p>
                                    </div>
                                </li>
                            ),
                        )}
                    </ol>

                    <div className="xs:w-2/5 xs:shrink-0 flex w-full flex-col gap-2 lg:w-auto">
                        <div
                            className={cn(
                                imageRoundedLg,
                                'shadow-card ms:aspect-auto ms:min-h-0 ms:flex-1 relative aspect-4/3 w-full overflow-hidden',
                            )}
                        >
                            {planStepImages.map((image, i) => (
                                <img
                                    key={image.src}
                                    src={image.src}
                                    alt={image.alt}
                                    loading={i === 0 ? 'eager' : 'lazy'}
                                    aria-hidden={i !== active}
                                    className={cn(
                                        'absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out',
                                        i === active
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                    )}
                                />
                            ))}
                            <p aria-live="polite" className="sr-only">
                                {planStepImages[active].alt}
                            </p>
                            <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                                {planStepImages.map((image, i) => (
                                    <button
                                        key={image.src}
                                        type="button"
                                        onClick={() => setActive(i)}
                                        aria-label={`Show ${image.alt}`}
                                        className={cn(
                                            'h-1.5 w-1.5 cursor-pointer rounded-full transition',
                                            i === active
                                                ? 'bg-white'
                                                : 'bg-white/50 hover:bg-white/80',
                                        )}
                                    />
                                ))}
                            </div>
                        </div>
                        <CarouselDots
                            count={planStepImages.length}
                            activeIndex={active}
                            className="ms:flex hidden"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanTripSteps;
