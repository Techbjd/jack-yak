import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, KeyRound } from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import Header from '@/components/ui/Header';
import TextField from '@/components/forms/TextField';
import { resetPasswordCopy as copy } from '@/config/auth';
import { pageSeo } from '@/config/seo';
import { siteRoutes } from '@/config/site';
import {
    authButton,
    authLabel,
    authLink,
    authTitle,
    fontPrimary,
} from '@/config/theme';
import { cn } from '@/lib/utils';

interface ResetPasswordProps {
    token: string;
    email: string | null;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        token,
        email: email ?? '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.password) {
            document.getElementById('reset-password')?.focus();
            return;
        }
        if (data.password !== data.password_confirmation) {
            document.getElementById('reset-password-confirm')?.focus();
            return;
        }
        post(copy.endpoint);
    };

    return (
        <AppLayout
            seo={pageSeo.resetPassword}
            shellClassName="bg-canvas"
            header={<Header tone="onLight" />}
        >
            <div className="mx-auto w-full max-w-container px-6 py-10 md:px-12 lg:px-24">
                <div className="shadow-card mx-auto grid w-full max-w-content-md overflow-hidden rounded-2xl bg-white md:grid-cols-2">
                    {/* Left — dark brand panel */}
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
                                ACCOUNT RECOVERY
                            </p>
                            <h1
                                className={cn(
                                    fontPrimary,
                                    'pt-5 text-xl-2xl leading-tight font-bold',
                                )}
                            >
                                One Step From the Trailhead.
                            </h1>
                            <p
                                className={cn(
                                    fontPrimary,
                                    'pt-4 text-sm-base leading-relaxed font-normal text-white/70',
                                )}
                            >
                                Choose a strong new password and you&rsquo;ll be
                                back to your itineraries, permits, and basecamp
                                plans in seconds.
                            </p>
                        </div>
                        <div>
                            <p
                                aria-label="Rated 5 out of 5"
                                className="text-sm font-bold tracking-widest text-amber-400"
                            >
                                ★★★★★
                            </p>
                            <p
                                className={cn(
                                    fontPrimary,
                                    'pt-2 text-sm-base font-bold',
                                )}
                            >
                                Trusted Trek Companion
                            </p>
                            <p
                                className={cn(
                                    fontPrimary,
                                    'pt-1 text-xs-sm leading-relaxed font-normal text-white/60',
                                )}
                            >
                                This link works once and expires in 60 minutes
                                — your account stays yours alone.
                            </p>
                        </div>
                    </div>

                    {/* Right — new password form */}
                    <div className="flex flex-col p-8 md:p-10">
                        <Link
                            href={siteRoutes.login}
                            className={cn(
                                fontPrimary,
                                authLabel,
                                'inline-flex items-center gap-1.5 text-xs font-bold',
                            )}
                        >
                            <ArrowLeft className="size-3.5" />
                            Back to Sign In
                        </Link>

                        <div className="bg-cta/10 text-cta mt-6 flex size-10 items-center justify-center rounded-full">
                            <KeyRound className="size-5" />
                        </div>

                        <h2 className={cn(authTitle, 'pt-4')}>{copy.title}</h2>
                        <p className={cn(authLabel, 'pt-2 font-normal')}>
                            {copy.subtitle}
                        </p>

                        <form
                            className="flex w-full flex-col pt-5"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <TextField
                                id="reset-password"
                                label={copy.passwordLabel}
                                type="password"
                                tone="auth"
                                autoComplete="new-password"
                                placeholder={copy.passwordPlaceholder}
                                value={data.password}
                                onChange={(value) => {
                                    setData('password', value);
                                    if (errors.password) {
                                        clearErrors('password');
                                    }
                                }}
                                error={errors.password}
                                errorId="reset-password-error"
                                first
                            />

                            <TextField
                                id="reset-password-confirm"
                                label={copy.confirmLabel}
                                type="password"
                                tone="auth"
                                autoComplete="new-password"
                                placeholder={copy.confirmPlaceholder}
                                value={data.password_confirmation}
                                onChange={(value) => {
                                    setData('password_confirmation', value);
                                    if (errors.password) {
                                        clearErrors('password');
                                    }
                                }}
                            />
                            {errors.email ? (
                                <p
                                    className={cn(
                                        fontPrimary,
                                        'pt-1.5 text-xs font-medium text-red-500',
                                    )}
                                >
                                    {errors.email}
                                </p>
                            ) : null}

                            <button
                                type="submit"
                                disabled={processing}
                                className={cn(
                                    authButton,
                                    'bg-cta mt-5 cursor-pointer disabled:opacity-60',
                                )}
                            >
                                {processing ? copy.submitting : copy.submit}
                                <ArrowRight className="ml-2 size-4" />
                            </button>
                        </form>

                        <p className={cn(authLabel, 'pt-5 text-center')}>
                            Remember your password?{' '}
                            <Link
                                href={siteRoutes.login}
                                className={authLink}
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
