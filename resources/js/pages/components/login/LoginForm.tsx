import { Link, useForm } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { EMAIL_PATTERN } from '@/lib/form-utils';
import {
    authButton,
    authDividerLine,
    authLabel,
    authLink,
    authSocialButton,
    authTitle,
    fontPrimary,
} from '@/config/theme';
import GoogleIcon from './GoogleIcon';
import TextField from '@/components/forms/TextField';
import { loginCopy } from '@/config/auth';
import { siteLegal, siteRoutes } from '@/config/site';

export default function LoginForm() {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const checkEmail = (value: string): string => {
        if (!value.trim()) {
            return loginCopy.emailRequired;
        }
        if (!EMAIL_PATTERN.test(value.trim())) {
            return loginCopy.emailInvalid;
        }
        return '';
    };

    const clientEmailError = data.email ? checkEmail(data.email) : '';
    const emailError = errors.email ?? clientEmailError;
    const passwordError = errors.password;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const nextEmailError = checkEmail(data.email);
        if (nextEmailError) {
            document.getElementById('login-email')?.focus();
            return;
        }
        if (!data.password) {
            document.getElementById('login-password')?.focus();
            return;
        }
        post(loginCopy.endpoint);
    };

    return (
        <section className="flex min-h-screen w-full flex-col items-center px-6 pt-16 pb-8 lg:justify-center lg:pt-10">
            <div className="flex w-full max-w-72.75 flex-1 flex-col justify-center">
                <h1 className={authTitle}>{loginCopy.title}</h1>
                <p className={cn(authLabel, 'pt-5')}>{loginCopy.subtitle}</p>

                <form
                    className="flex w-full flex-col"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <TextField
                        id="login-email"
                        label={loginCopy.emailLabel}
                        type="email"
                        tone="auth"
                        autoComplete="email"
                        placeholder={loginCopy.emailPlaceholder}
                        value={data.email}
                        onChange={(value) => {
                            setData('email', value);
                            if (errors.email) {
                                clearErrors('email');
                            }
                        }}
                        error={emailError}
                        errorId="login-email-error"
                        first
                    />

                    <TextField
                        id="login-password"
                        label={loginCopy.passwordLabel}
                        type="password"
                        tone="auth"
                        autoComplete="current-password"
                        placeholder={loginCopy.passwordPlaceholder}
                        value={data.password}
                        onChange={(value) => {
                            setData('password', value);
                            if (errors.password) {
                                clearErrors('password');
                            }
                        }}
                        error={passwordError}
                        errorId="login-password-error"
                    />

                    <div className="flex items-center justify-between pt-2.5">
                        <label
                            htmlFor="login-remember"
                            className={cn(
                                fontPrimary,
                                'flex cursor-pointer items-center gap-2 text-xs font-medium',
                            )}
                        >
                            <input
                                id="login-remember"
                                type="checkbox"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                                className="accent-ink size-4 cursor-pointer"
                            />
                            {loginCopy.rememberMe}
                        </label>
                        <Link
                            href={siteRoutes.register}
                            className={cn(
                                fontPrimary,
                                authLink,
                                'text-xs font-bold',
                            )}
                        >
                            {loginCopy.forgotPassword}
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className={cn(
                            authButton,
                            'mt-5 cursor-pointer disabled:opacity-60',
                        )}
                    >
                        {processing ? loginCopy.submitting : loginCopy.submit}
                    </button>
                </form>

                <div className="flex items-center gap-2.5 pt-6">
                    <span className={authDividerLine} />
                    <span className={authLabel}>{loginCopy.divider}</span>
                    <span className={authDividerLine} />
                </div>

                <Link
                    href={siteRoutes.quiz}
                    className={cn(authSocialButton, 'mt-4')}
                    aria-label={loginCopy.guestAria}
                >
                    <GoogleIcon />
                    {loginCopy.guestCta}
                </Link>

                <p className={cn(authLabel, 'pt-5 text-center')}>
                    {loginCopy.noAccount}{' '}
                    <Link href={siteRoutes.register} className={authLink}>
                        {loginCopy.signUp}
                    </Link>
                </p>
                <p className={cn(authLabel, 'pt-2 text-center')}>
                    {loginCopy.lookingAround}{' '}
                    <Link
                        href={siteRoutes.destinations}
                        className={authLink}
                    >
                        {loginCopy.browse}
                    </Link>
                </p>
            </div>

            <p
                className={cn(
                    fontPrimary,
                    'text-ink w-full max-w-72.75 pt-10 text-center text-xs font-medium',
                )}
            >
                {siteLegal.copyright}
            </p>
        </section>
    );
}
