import { cn } from '@/lib/utils';
import { fontPrimary } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { quizHero } from '@/config/quiz';

const PANEL_WRAPPER: Record<'modal' | 'page', string> = {
    modal: 'relative hidden w-99.5 shrink-0 overflow-hidden rounded-l-2xl lg:block',
    page: 'relative min-h-64 w-full shrink-0 overflow-hidden sm:min-h-72 lg:h-auto lg:min-h-0 lg:w-99.5',
};

const PANEL_OVERLAY: Record<'modal' | 'page', string> = {
    modal: 'absolute inset-0 flex flex-col gap-4 p-6 sm:gap-5 lg:justify-start lg:p-14',
    page: 'absolute inset-0 flex flex-col justify-center gap-4 p-6 sm:gap-5 lg:justify-start lg:p-14',
};

interface QuizPanelProps {
    variant: 'modal' | 'page';
}

/**
 * Brand panel shown beside the quiz form: Langtang imagery, logo, tagline.
 * Shared by the home/DiscoverNepal quiz modals and the standalone Quiz page.
 */
export default function QuizPanel({ variant }: QuizPanelProps) {
    return (
        <div className={PANEL_WRAPPER[variant]}>
            <img
                src={IMAGES.destination.langtangMountain}
                alt={quizHero.panelAlt}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className={PANEL_OVERLAY[variant]}>
                <img
                    src={IMAGES.logo.jackYak}
                    alt={quizHero.logoAlt}
                    className="w-36 object-contain lg:w-53.25"
                />
                <p
                    className={cn(
                        fontPrimary,
                        'lg:text-2xl-3xl max-w-82.5 text-2xl leading-11 font-semibold text-white',
                    )}
                >
                    {quizHero.tagline}
                </p>
            </div>
        </div>
    );
}
