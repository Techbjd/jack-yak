import {
    Settings as SettingsIcon,
    User as UserIcon,
    Bell,
    ShieldCheck,
    Globe,
    ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { userRow, userRowDark } from '@/config/theme';
import { userSettings } from '@/config/user';

const SETTING_ICONS: Record<string, typeof UserIcon> = {
    account: UserIcon,
    notifications: Bell,
    privacy: ShieldCheck,
    language: Globe,
};

export default function SettingsCard() {
    return (
        <section className="shadow-card flex w-full flex-col gap-2 rounded-xl bg-white p-5 md:rounded-none md:p-10">
            <div className="flex items-center gap-3">
                <SettingsIcon
                    aria-hidden
                    className="text-ink size-5 md:size-7 md:text-black"
                />
                <h2 className={userRowDark}>Settings</h2>
            </div>
            <ul className="divide-fog flex w-full flex-col divide-y">
                {userSettings.map((row) => {
                    const Icon = SETTING_ICONS[row.id] ?? UserIcon;
                    return (
                        <li key={row.id}>
                            <a
                                href="#"
                                className="flex items-center gap-3 py-3 md:gap-4 md:py-4"
                            >
                                <Icon
                                    aria-hidden
                                    className="text-ink size-5 shrink-0 md:size-7 md:text-black"
                                />
                                <span className={userRowDark}>{row.label}</span>
                                {row.value && (
                                    <span className={cn(userRow, 'ml-auto')}>
                                        {row.value}
                                    </span>
                                )}
                                <ArrowRight
                                    aria-hidden
                                    className={cn(
                                        'text-ink size-3 shrink-0 md:size-5',
                                        !row.value && 'ml-auto',
                                    )}
                                    strokeWidth={2}
                                />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
