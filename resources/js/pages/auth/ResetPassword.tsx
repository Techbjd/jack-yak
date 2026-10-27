import { Link, useForm } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import Header from '@/components/ui/Header';
import TextField from '@/components/forms/TextField';
import FieldError from '@/components/forms/FieldError';
import AuthBrandPanel from '@/pages/components/login/AuthBrandPanel';
import AuthPanelHeader from '@/pages/components/login/AuthPanelHeader';
import { resetPasswordCopy as copy } from '@/config/auth';
import { pageSeo } from '@/config/seo';
import { siteRoutes } from '@/config/site';
import { authButtonCta, authLabel, authLink } from '@/config/theme';
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
            background="canvas"
            header={<Header tone="onLight" />}
        >
            <div className="max-w-container mx-auto w-full px-6 py-10 md:px-12 lg:px-24">
                <div className="shadow-card max-w-content-md mx-auto grid w-full overflow-hidden rounded-2xl bg-white md:grid-cols-2">
                    <AuthBrandPanel
                        eyebrow="ACCOUNT RECOVERY"
                        title="One Step From the Trailhead."
                        body="Choose a strong new password and you’ll be back to your itineraries, permits, and basecamp plans in seconds."
                        note="This link works once and expires in 60 minutes — your account stays yours alone."
                    />

                    <div className="flex flex-col p-8 md:p-10">
                        <AuthPanelHeader
                            backHref={siteRoutes.login}
                            title={copy.title}
                            subtitle={copy.subtitle}
                        />

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
                                <FieldError>{errors.email}</FieldError>
                            ) : null}

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

                        <p className={cn(authLabel, 'pt-5 text-center')}>
                            Remember your password?{' '}
                            <Link href={siteRoutes.login} className={authLink}>
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
