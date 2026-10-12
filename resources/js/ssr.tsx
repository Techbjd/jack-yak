import type { Page } from '@inertiajs/core';
import { createInertiaApp, type ResolvedComponent } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { renderToString } from 'react-dom/server';
import { COLORS, ColorsContext } from '@/config/colors';

/**
 * Inertia SSR entry — auto-detected by `npm run build:ssr`
 * (`vp build --ssr` picks up `resources/js/ssr.tsx` with zero config).
 *
 * Mirrors `app.tsx` minus browser-only work: `setRootColors` touches
 * `document` so it is skipped here (`ColorsContext` already defaults to
 * `COLORS`), and every page render-path is SSR-safe (`window`/`document`
 * access is guarded or deferred to `useEffect`).
 */
const appName = import.meta.env.VITE_APP_NAME || 'JackYak';

void createServer((page: Page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: (name: string) => {
            const pages = import.meta.glob<{ default: ResolvedComponent }>(
                './pages/**/*.tsx',
                { eager: true },
            );
            const page = pages[`./pages/${name}.tsx`];
            if (!page) {
                throw new Error(`SSR: page not found: ${name}`);
            }
            return page;
        },
        setup({ App, props }) {
            return (
                <ColorsContext.Provider value={COLORS}>
                    <App {...props} />
                </ColorsContext.Provider>
            );
        },
    }),
);
