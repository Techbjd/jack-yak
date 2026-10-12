import { createInertiaApp } from '@inertiajs/react';
import { COLORS, ColorsContext, setRootColors } from '@/config/colors';

const appName = import.meta.env.VITE_APP_NAME || 'JackYak';
void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: COLORS.progress,
    },
    withApp(app) {
        setRootColors(COLORS);

        return (
            <ColorsContext.Provider value={COLORS}>
                {app}
            </ColorsContext.Provider>
        );
    },
});
