import { Link, useForm } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import {
    authButton,
    authDividerLine,
    authInput,
    authLabel,
    authSocialButton,
    authTitle,
    fontPrimary,
} from '@/config/theme';
import GoogleIcon from './GoogleIcon';

export default function LoginForm() {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const checkEmail = (value: string): string => {
        if (!value.trim()) {
            return 'Email is required.';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) {
            return 'Please enter a valid email address.';
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
        post('/login');
    };

    return (
        <section className="flex min-h-screen w-full flex-col items-center px-6 pt-16 pb-8 lg:justify-center lg:pt-10">
            <div className="flex w-full max-w-72.75 flex-1 flex-col justify-center">
                <h1 className={authTitle}>Welcome Back</h1>
                <p className={cn(authLabel, 'pt-5')}>
                    Sign in to discover personalized destinations.
                </p>

                <form
                    className="flex w-full flex-col"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <label
                        htmlFor="login-email"
                        className={cn(authLabel, 'pt-5 pb-1.5')}
                    >
                        Email
                    </label>
                    <input
                        id="login-email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter Your Email"
                        value={data.email}
                        onChange={(e) => {
                            setData('email', e.target.value);
                            if (errors.email) {
                                clearErrors('email');
                            }
                        }}
                        aria-invalid={emailError ? true : undefined}
                        aria-describedby={
                            emailError ? 'login-email-error' : undefined
                        }
                        className={cn(
                            authInput,
                            emailError && 'border-red-400',
                        )}
                    />
                    {emailError && (
                        <p
                            id="login-email-error"
                            role="alert"
                            className={cn(
                                fontPrimary,
                                'pt-1.5 text-xs font-medium text-red-500',
                            )}
                        >
                            {emailError}
                        </p>
                    )}

                    <label
                        htmlFor="login-password"
                        className={cn(authLabel, 'pt-4 pb-1.5')}
                    >
                        Password
                    </label>
                    <input
                        id="login-password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Enter Your Password"
                        value={data.password}
                        onChange={(e) => {
                            setData('password', e.target.value);
                            if (errors.password) {
                                clearErrors('password');
                            }
                        }}
                        aria-invalid={passwordError ? true : undefined}
                        aria-describedby={
                            passwordError ? 'login-password-error' : undefined
                        }
                        className={cn(
                            authInput,
                            passwordError && 'border-red-400',
                        )}
                    />
                    {passwordError && (
                        <p
                            id="login-password-error"
                            role="alert"
                            className={cn(
                                fontPrimary,
                                'pt-1.5 text-xs font-medium text-red-500',
                            )}
                        >
                            {passwordError}
                        </p>
                    )}

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
                            Remember me
                        </label>
                        <Link
                            href="/register"
                            className={cn(
                                fontPrimary,
                                'text-cta-accent text-xs font-bold',
                            )}
                        >
                            Forgot Password?
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
                        {processing ? 'Signing in…' : 'Sign In'}
                    </button>
                </form>

                <div className="flex items-center gap-2.5 pt-6">
                    <span className={authDividerLine} />
                    <span className={authLabel}>Or</span>
                    <span className={authDividerLine} />
                </div>

                <Link
                    href="/form"
                    className={cn(authSocialButton, 'mt-4')}
                    aria-label="Continue as guest to find your destination"
                >
                    <GoogleIcon />
                    Continue to explore destinations
                </Link>

                <p className={cn(authLabel, 'pt-5 text-center')}>
                    Don&rsquo;t you have an account?{' '}
                    <Link href="/register" className="text-cta-accent">
                        Sign up
                    </Link>
                </p>
                <p className={cn(authLabel, 'pt-2 text-center')}>
                    Just looking around?{' '}
                    <Link href="/destinations" className="text-cta-accent">
                        Browse destinations
                    </Link>
                </p>
            </div>

            <p
                className={cn(
                    fontPrimary,
                    'text-ink w-full max-w-72.75 pt-10 text-center text-xs font-medium',
                )}
            >
                &copy; 2026 JackYak. All rights reserved.
            </p>
        </section>
    );
}
