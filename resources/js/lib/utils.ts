import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Mirror of the custom tokens in resources/css/app.css (@theme).
// tailwind-merge only knows default Tailwind utilities — without this,
// our custom `text-*` sizes fall in the same bucket as `text-*` colors
// and silently eat each other inside cn(), e.g.
// cn('text-2xl-3xl', 'text-text-primary') → 'text-text-primary' (size lost).
// Keep this list in sync with @theme when adding new tokens.
const twMerge = extendTailwindMerge({
    extend: {
        theme: {
            text: [
                '2xs',
                'xs-sm',
                'sm-base',
                'base-md',
                'md-lg',
                'lg-xl',
                'xl-2xl',
                '2xl-3xl',
                '3xl-4xl',
                'hero',
                'display',
                'about-display',
                'section-xl',
                'modal',
                'journey',
                'display-lg',
            ],
            leading: [
                'hero',
                'journey',
                'display-lg',
                'about-display',
                'section-xl',
                'about',
            ],
            font: ['manrope', 'display', 'poppins', 'roboto'],
            color: [
                'navy',
                'navy-light',
                'navy-gradient',
                'teal',
                'orange',
                'blue-icon',
                'text-primary',
                'text-white',
                'bg-cream',
                'bg-warm',
                'bg-placeholder',
                'ember',
                'brand',
                'ink',
                'cta',
                'cta-accent',
                'cta-ember',
                'surface-warm',
                'surface-cream',
                'icon-accent',
                'quote-blush',
                'canvas',
                'steel',
                'pine',
                'frost',
                'frost-line',
                'fog',
                'divider',
                'midnight',
                'mist',
                'quiz-line',
                'hairline',
                'subtle',
                'haze',
            ],
            radius: ['card', 'image', 'dest-card', 'card-sm'],
            blur: ['hero-sm', 'hero-lg'],
            shadow: ['card'],
            spacing: [
                'card-w',
                'card-h',
                'logo',
                'logo-w',
                'sidebar',
                'hamburger',
                'hero-line',
                'dest-card-w',
                'dest-card-h',
                'feat-card-h',
            ],
        },
    },
});

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
