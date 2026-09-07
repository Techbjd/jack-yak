import { createContext, useContext } from 'react';
import type { PageProps } from '@/types';

export type Colors = PageProps['colors'];

export const ColorsContext = createContext<Colors | null>(null);

export function useColors(): Colors {
    const ctx = useContext(ColorsContext);
    if (!ctx) {
        throw new Error('useColors must be used within a ColorsProvider');
    }
    return ctx;
}

export function setRootColors(colors: Colors): void {
    const root = document.documentElement;
    root.style.setProperty('--color-navy', colors.navy);
    root.style.setProperty('--color-navy-light', colors.navy_light);
    root.style.setProperty('--color-navy-gradient', colors.navy_gradient);
    root.style.setProperty('--color-teal', colors.teal);
    root.style.setProperty('--color-orange', colors.orange);
    root.style.setProperty('--color-blue-icon', colors.blue_icon);
    root.style.setProperty('--color-text-primary', colors.text_primary);
    root.style.setProperty('--color-text-white', colors.text_white);
    root.style.setProperty('--color-bg-cream', colors.bg_cream);
    root.style.setProperty('--color-bg-warm', colors.bg_warm);
    root.style.setProperty('--color-bg-placeholder', colors.bg_placeholder);
}
