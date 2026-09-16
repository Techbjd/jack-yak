import { trekCta } from '@/config/itinerary';

export default function TrekCtaBanner() {
    return (
        <section aria-label={trekCta.title} className="hidden w-full sm:block">
            <div className="rounded-dest-panel shadow-card flex w-full flex-row items-center gap-3 bg-white p-3 min-[900px]:gap-6 min-[900px]:p-6 sm:gap-4 sm:p-4 xl:gap-10 xl:py-5 xl:pr-30 xl:pl-11">
                <img
                    src={trekCta.image}
                    alt=""
                    loading="lazy"
                    className="rounded-immersive xl:h-cta-thumb-h xl:w-cta-thumb-w h-20 w-28 shrink-0 object-cover min-[900px]:h-24 min-[900px]:w-48 sm:h-22 sm:w-32 md:h-24 md:w-36 lg:h-28 lg:w-56"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-1 min-[900px]:gap-2">
                    <h2 className="font-manrope text-base-md text-ink min-[900px]:text-xl-2xl min-[900px]:leading-itinerary-33 leading-snug font-medium">
                        {trekCta.title}
                    </h2>
                    <p className="font-manrope text-xs-sm text-ink min-[900px]:text-md-lg min-[900px]:leading-itinerary-22 leading-relaxed font-medium">
                        {trekCta.subtitle}
                    </p>
                </div>
                <button
                    type="button"
                    className="font-manrope rounded-card-sm bg-cta shadow-card text-xs-sm sm:text-sm-md min-[900px]:text-lg-xl xl:w-cta-button-w h-10 w-auto max-w-fit shrink-0 cursor-pointer px-2.5 font-bold whitespace-nowrap text-white uppercase transition-opacity hover:opacity-90 min-[900px]:h-13 min-[900px]:px-3 sm:px-3"
                >
                    {trekCta.button}
                </button>
            </div>
        </section>
    );
}
