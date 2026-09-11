import type { User } from './auth';

export interface PageProps extends Record<string, unknown> {
    name: string;
    auth: {
        user: User | null;
    };
    flash?: {
        success?: string | null;
    };
}

export interface UserStats {
    availabilityRequests: number;
    reviews: number;
    quizSubmissions: number;
}

export interface RecentAvailability {
    id: number;
    date: string;
    travelers: number;
    duration: string | null;
    looking_for: string | null;
}

export interface RecentReview {
    id: number;
    rating: number;
    place: string;
    visit_date: string;
}
