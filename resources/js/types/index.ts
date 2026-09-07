export type * from './auth';

export interface PageProps {
    name: string;
    auth: {
        user: unknown;
    };
    colors: {
        navy: string;
        navy_light: string;
        navy_gradient: string;
        teal: string;
        orange: string;
        blue_icon: string;
        text_primary: string;
        text_white: string;
        bg_cream: string;
        bg_warm: string;
        bg_placeholder: string;
        progress: string;
    };
}
