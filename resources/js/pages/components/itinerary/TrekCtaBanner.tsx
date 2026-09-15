import { trekCta } from '@/config/itinerary';

export default function TrekCtaBanner() {
    return (
        <section aria-label={trekCta.title} className="hidden w-full sm:block">
            {}
            <div className="bg-ink shadow-card flex w-full flex-col overflow-hidden rounded-2xl md:hidden">
                <div className="relative h-44 w-full shrink-0 overflow-hidden">
                    <img
                        src={trekCta.image}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span aria-hidden className="bg-ink/20 absolute inset-0" />
                </div>
                <div className="flex w-full flex-col items-start gap-3 p-6">
                    <h2 className="font-manrope text-lg-xl leading-snug font-bold text-white">
                        {trekCta.title}
                    </h2>
                    <p className="font-manrope text-sm-base leading-relaxed font-normal text-white/80">
                        {trekCta.subtitle}
                    </p>
                    <button
                        type="button"
                        className="font-manrope rounded-itinerary-cta bg-cta text-base-md cursor-pointer px-6 py-3 font-bold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
                    >
                        {trekCta.button}
                    </button>
                </div>
            </div>

            {}
            <div className="rounded-dest-panel shadow-card hidden w-full flex-col gap-6 bg-white p-6 md:flex xl:flex-row xl:items-center xl:gap-10 xl:py-5 xl:pr-30 xl:pl-11">
                <img
                    src={trekCta.image}
                    alt=""
                    loading="lazy"
                    className="rounded-immersive h-cta-thumb-h w-cta-thumb-w shrink-0 object-cover"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <h2 className="font-manrope text-xl-2xl leading-itinerary-33 text-ink font-medium">
                        {trekCta.title}
                    </h2>
                    <p className="font-manrope text-md-lg leading-itinerary-22 text-ink font-medium">
                        {trekCta.subtitle}
                    </p>
                </div>
                <button
                    type="button"
                    className="font-manrope rounded-card-sm bg-cta shadow-card text-lg-xl xl:w-cta-button-w h-13 w-full shrink-0 cursor-pointer font-bold text-white uppercase transition-opacity hover:opacity-90"
                >
                    {trekCta.button}
                </button>
            </div>
        </section>
    );
}
