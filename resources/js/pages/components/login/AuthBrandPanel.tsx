import { cn } from '@/lib/utils';
import { fontPrimary } from '@/config/theme';

interface AuthBrandPanelProps {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
}

/**
 * Dark recovery-panel used by the forgot/reset password cards.
 */
export default function AuthBrandPanel({
    eyebrow,
    title,
    body,
    note,
}: AuthBrandPanelProps) {
    return (
        <div className="bg-brand flex flex-col justify-between gap-10 p-8 text-white md:p-10">
            <div>
                <p
                    className={cn(
                        fontPrimary,
                        'inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-bold tracking-wide',
                    )}
                >
                    <span
                        aria-hidden
                        className="bg-cta size-1.5 rounded-full"
                    />
                    {eyebrow}
                </p>
                <h1
                    className={cn(
                        fontPrimary,
                        'text-xl-2xl pt-5 leading-tight font-bold',
                    )}
                >
                    {title}
                </h1>
                <p
                    className={cn(
                        fontPrimary,
                        'text-sm-base pt-4 leading-relaxed font-normal text-white/70',
                    )}
                >
                    {body}
                </p>
            </div>
            <div>
                <p
                    aria-label="Rated 5 out of 5"
                    className="text-sm font-bold tracking-widest text-amber-400"
                >
                    ★★★★★
                </p>
                <p className={cn(fontPrimary, 'text-sm-base pt-2 font-bold')}>
                    Trusted Trek Companion
                </p>
                <p
                    className={cn(
                        fontPrimary,
                        'text-xs-sm pt-1 leading-relaxed font-normal text-white/60',
                    )}
                >
                    {note}
                </p>
            </div>
        </div>
    );
}
