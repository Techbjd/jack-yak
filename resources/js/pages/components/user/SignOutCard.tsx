import { router } from '@inertiajs/react';
import { LogOut } from 'lucide-react';
import { userSignOut } from '@/config/theme';

export default function SignOutCard() {
    return (
        <section className="shadow-card w-full rounded-xl bg-white p-5 md:rounded-none md:p-10">
            <button
                type="button"
                onClick={() => router.post('/logout')}
                className="flex cursor-pointer items-center gap-3"
            >
                <LogOut
                    aria-hidden
                    className="text-cta-ember size-5 md:size-8"
                />
                <span className={userSignOut}>Sign Out</span>
            </button>
        </section>
    );
}
