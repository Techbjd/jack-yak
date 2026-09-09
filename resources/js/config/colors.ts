import { createContext, useContext } from 'react';

// ============================================
// Palette — Frontend Source of Truth
// ============================================
// Hex values live here and in resources/css/app.css @theme (keep in sync).
// Components read them via useColors(); Tailwind classes via bg-*/text-*.
//
// Usage map (which part owns which color):
// - brand         → footer + dark surfaces (bg-brand)
// - ink           → text/icons on light backgrounds (text-ink)
// - cta           → desktop CTA buttons, rings, panels (bg-cta)
// - cta-accent    → mobile CTAs + active accents (bg-cta-accent)
// - cta-ember     → destination mobile CTA surfaces (bg-cta-ember)
// - surface-warm  → alternating section backgrounds (bg-surface-warm)
// - surface-cream → CTA icon circles (bg-surface-cream)
// - icon-accent   → CTA glyph icons (text-icon-accent)
// Primitives (navy, teal, …) remain for decorative blends (gradients, map).
// ============================================

export interface Colors {
    navy: string;
    navy_light: string;
    navy_gradient: string;
    teal: string;
    orange: string;
    blue_icon: string;
    ember: string;
    text_primary: string;
    text_white: string;
    bg_cream: string;
    bg_warm: string;
    bg_placeholder: string;
    progress: string;
    /** Semantic aliases — part-named mirrors of the primitives above */
    brand: string;
    ink: string;
    cta: string;
    cta_accent: string;
    cta_ember: string;
    surface_warm: string;
    surface_cream: string;
    icon_accent: string;
}

export const COLORS: Colors = {
    navy: '#0E1B2B',
    navy_light: '#253A55',
    navy_gradient: '#5180BB',
    teal: '#2D8A8A',
    orange: '#FF7A00',
    blue_icon: '#60A5FA',
    ember: '#FF5728',
    text_primary: '#334155',
    text_white: '#ffffff',
    bg_cream: '#F7F2EE',
    bg_warm: '#F9F4F0',
    bg_placeholder: '#D9D9D9',
    progress: '#4B5563',
    brand: '#0E1B2B',
    ink: '#253A55',
    cta: '#2D8A8A',
    cta_accent: '#FF7A00',
    cta_ember: '#FF5728',
    surface_warm: '#F9F4F0',
    surface_cream: '#F7F2EE',
    icon_accent: '#60A5FA',
};

export const ColorsContext = createContext<Colors>(COLORS);

export function useColors(): Colors {
    return useContext(ColorsContext);
}

export function setRootColors(colors: Colors): void {
    const root = document.documentElement;
    root.style.setProperty('--color-navy', colors.navy);
    root.style.setProperty('--color-navy-light', colors.navy_light);
    root.style.setProperty('--color-navy-gradient', colors.navy_gradient);
    root.style.setProperty('--color-teal', colors.teal);
    root.style.setProperty('--color-orange', colors.orange);
    root.style.setProperty('--color-blue-icon', colors.blue_icon);
    root.style.setProperty('--color-ember', colors.ember);
    root.style.setProperty('--color-text-primary', colors.text_primary);
    root.style.setProperty('--color-text-white', colors.text_white);
    root.style.setProperty('--color-bg-cream', colors.bg_cream);
    root.style.setProperty('--color-bg-warm', colors.bg_warm);
    root.style.setProperty('--color-bg-placeholder', colors.bg_placeholder);
    root.style.setProperty('--color-brand', colors.brand);
    root.style.setProperty('--color-ink', colors.ink);
    root.style.setProperty('--color-cta', colors.cta);
    root.style.setProperty('--color-cta-accent', colors.cta_accent);
    root.style.setProperty('--color-cta-ember', colors.cta_ember);
    root.style.setProperty('--color-surface-warm', colors.surface_warm);
    root.style.setProperty('--color-surface-cream', colors.surface_cream);
    root.style.setProperty('--color-icon-accent', colors.icon_accent);
}
