/** Mirrors the minimal user shared by HandleInertiaRequests (id, name, email, avatar). */
export type User = {
    id: number;
    name: string;
    email: string;
    avatar?: string | null;
};

export type Auth = {
    user: User | null;
};
