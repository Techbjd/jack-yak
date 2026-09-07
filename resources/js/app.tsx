import { createInertiaApp } from '@inertiajs/react';
import { ColorsContext, setRootColors } from '@/config/colors';
import type { PageProps } from '@/types';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
    withApp(app, { page }) {
        const colors = (page.props as unknown as PageProps).colors;
        setRootColors(colors);

        return (
            <ColorsContext.Provider value={colors}>
                {app}
            </ColorsContext.Provider>
        );
    },
});
