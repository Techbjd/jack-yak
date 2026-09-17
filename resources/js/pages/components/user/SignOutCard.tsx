import { router } from '@inertiajs/react';
import { LogOut } from 'lucide-react';
import { userCard, userSignOut } from '@/config/theme';
import { siteRoutes } from '@/config/site';
import { signOutCopy } from '@/config/user';

export default function SignOutCard() {
    return (
        <section className={userCard}>
            <button
                type="button"
                onClick={() => router.post(siteRoutes.logout)}
                className="flex cursor-pointer items-center gap-3"
            >
                <LogOut
                    aria-hidden
                    className="text-cta-ember size-5 md:size-8"
                />
                <span className={userSignOut}>{signOutCopy.label}</span>
            </button>
        </section>
    );
}
