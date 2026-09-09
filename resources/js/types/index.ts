import type { User } from './auth';

export interface PageProps {
    name: string;
    auth: {
        user: User;
    };
}
