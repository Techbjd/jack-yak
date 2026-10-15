import { Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, KeyRound, Mail } from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import Header from '@/components/ui/Header';
import TextField from '@/components/forms/TextField';
import { forgotPasswordCopy as copy } from '@/config/auth';
import { pageSeo } from '@/config/seo';
import {
    authButton,
    authLabel,
    authLink,
    authTitle,
    fontPrimary,
} from '@/config/theme';
import { cn } from '@/lib/utils';
import { EMAIL_PATTERN } from '@/lib/form-utils';

export default function ForgotPassword() {
    const { flash } = usePage().props as {
        flash?: { success?: string };
    };
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        email: '',
    });

    const checkEmail = (value: string): string => {
        if (!value.trim()) {
            return copy.emailRequired;
        }
        if (!EMAIL_PATTERN.test(value.trim())) {
            return copy.emailInvalid;
        }
        return '';
    };

    const emailError =
        errors.email ?? (data.email ? checkEmail(data.email) : '');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkEmail(data.email)) {
            document.getElementById('forgot-email')?.focus();
            return;
        }
        post(copy.endpoint);
    };

    return (
        <AppLayout
            seo={pageSeo.forgotPassword}
            shellClassName="bg-canvas"
            header={<Header tone="onLight" />}
        >
            <div className="mx-auto w-full max-w-container px-6 py-10 md:px-12 lg:px-24">
                <div className="shadow-card mx-auto grid w-full max-w-content-md overflow-hidden rounded-2xl bg-white md:grid-cols-2">
                    {/* Left — dark brand panel (Figma: Resume Your Path) */}
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
                                Resume Your Path Above the Clouds.
                            </h1>
                            <p
                                className={cn(
                                    fontPrimary,
                                    'pt-4 text-sm-base leading-relaxed font-normal text-white/70',
                                )}
                            >
                                Every great journey through the Himalayas has
                                occasional detours. We&rsquo;ll securely guide
                                you back to your itineraries, permits, and
                                basecamp plans.
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
                                Secure link. Valid for 15 minutes for the
                                world&rsquo;s most verified routes — so your
                                next step upward starts right where you left
                                off.
                            </p>
                        </div>
                    </div>

                    {/* Right — form panel (Figma: Forgot Your Password?) */}
                    <div className="flex flex-col p-8 md:p-10">
                        <Link
                            href="/login"
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

                        <h2 className={cn(authTitle, 'pt-4')}>
                            Forgot Your Password?
                        </h2>
                        <p className={cn(authLabel, 'pt-2 font-normal')}>
                            Enter your registered email address and we&rsquo;ll
                            send you a link to reset your password and get you
                            back on your journey.
                        </p>

                        {flash?.success ? (
                            <p
                                className={cn(
                                    fontPrimary,
                                    'text-cta pt-4 text-sm font-bold',
                                )}
                            >
                                {flash.success}
                            </p>
                        ) : null}

                        <form
                            className="flex w-full flex-col pt-5"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <TextField
                                id="forgot-email"
                                label="EMAIL ADDRESS"
                                type="email"
                                tone="auth"
                                autoComplete="email"
                                placeholder="e.g. trekker@jackyak.com"
                                value={data.email}
                                onChange={(value) => {
                                    setData('email', value);
                                    if (errors.email) {
                                        clearErrors('email');
                                    }
                                }}
                                error={emailError}
                                errorId="forgot-email-error"
                                first
                            />
                            <p
                                className={cn(
                                    fontPrimary,
                                    'text-mist pt-1.5 text-xs font-normal',
                                )}
                            >
                                The email associated with your trekking permits
                                and bookings.
                            </p>

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

                        <div
                            className={cn(
                                fontPrimary,
                                'flex flex-wrap items-center justify-between gap-2 pt-5 text-xs font-normal text-mist',
                            )}
                        >
                            <span>
                                Valid for 15 minutes. Instant delivery.
                            </span>
                            <span>
                                Need help?{' '}
                                <a
                                    href={copy.endpoint}
                                    className={authLink}
                                >
                                    Contact Support
                                </a>
                            </span>
                        </div>

                        <p className={cn(authLabel, 'pt-5 text-center')}>
                            Remember your password?{' '}
                            <Link href="/login" className={authLink}>
                                Sign In
                            </Link>
                        </p>

                        <p
                            className={cn(
                                fontPrimary,
                                'flex items-center justify-center gap-1.5 pt-4 text-xs font-normal text-mist',
                            )}
                        >
                            <Mail className="size-3.5" />
                            Check spam if the email doesn&rsquo;t arrive.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
