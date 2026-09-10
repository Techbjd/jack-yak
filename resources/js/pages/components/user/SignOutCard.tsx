import { LogOut } from 'lucide-react';
import { userSignOut } from '@/config/theme';

/** User sign-out card — ember logout action */
export default function SignOutCard() {
    return (
        <section className="shadow-card w-full rounded-xl bg-white p-5 md:rounded-none md:p-10">
            {/* TODO: post to /logout once backend auth lands */}
            <button
                type="button"
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
