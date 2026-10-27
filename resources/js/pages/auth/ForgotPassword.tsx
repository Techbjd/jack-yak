import { Link, useForm, usePage } from '@inertiajs/react';
import { ArrowRight, Mail } from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import Header from '@/components/ui/Header';
import TextField from '@/components/forms/TextField';
import AuthBrandPanel from '@/pages/components/login/AuthBrandPanel';
import AuthPanelHeader from '@/pages/components/login/AuthPanelHeader';
import { forgotPasswordCopy as copy } from '@/config/auth';
import { pageSeo } from '@/config/seo';
import { siteRoutes } from '@/config/site';
import {
    authButtonCta,
    authLabel,
    authLink,
    fontPrimary,
} from '@/config/theme';
import { cn } from '@/lib/utils';
import { validateEmail } from '@/lib/form-utils';

export default function ForgotPassword() {
    const { flash } = usePage().props as {
        flash?: { success?: string };
    };
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        email: '',
    });

    const checkEmail = (value: string): string =>
        validateEmail(value, {
            required: copy.emailRequired,
            invalid: copy.emailInvalid,
        });

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
            background="canvas"
            header={<Header tone="onLight" />}
        >
            <div className="max-w-container mx-auto w-full px-6 py-10 md:px-12 lg:px-24">
                <div className="shadow-card max-w-content-md mx-auto grid w-full overflow-hidden rounded-2xl bg-white md:grid-cols-2">
                    <AuthBrandPanel
                        eyebrow="ACCOUNT RECOVERY"
                        title="Resume Your Path Above the Clouds."
                        body="Every great journey through the Himalayas has occasional detours. We’ll securely guide you back to your itineraries, permits, and basecamp plans."
                        note="Secure link. Valid for 15 minutes for the world’s most verified routes — so your next step upward starts right where you left off."
                    />

                    <div className="flex flex-col p-8 md:p-10">
                        <AuthPanelHeader
                            backHref={siteRoutes.login}
                            title="Forgot Your Password?"
                            subtitle="Enter your registered email address and we’ll send you a link to reset your password and get you back on your journey."
                        />

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
                                    authButtonCta,
                                    'mt-5 cursor-pointer disabled:opacity-60',
                                )}
                            >
                                {processing ? copy.submitting : copy.submit}
                                <ArrowRight className="ml-2 size-4" />
                            </button>
                        </form>

                        <div
                            className={cn(
                                fontPrimary,
                                'text-mist flex flex-wrap items-center justify-between gap-2 pt-5 text-xs font-normal',
                            )}
                        >
                            <span>Valid for 15 minutes. Instant delivery.</span>
                            <span>
                                Need help?{' '}
                                <a href={copy.endpoint} className={authLink}>
                                    Contact Support
                                </a>
                            </span>
                        </div>

                        <p className={cn(authLabel, 'pt-5 text-center')}>
                            Remember your password?{' '}
                            <Link href={siteRoutes.login} className={authLink}>
                                Sign In
                            </Link>
                        </p>

                        <p
                            className={cn(
                                fontPrimary,
                                'text-mist flex items-center justify-center gap-1.5 pt-4 text-xs font-normal',
                            )}
                        >
                            <Mail className="size-3.5" />
                            Check spam if the email doesn’t arrive.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
