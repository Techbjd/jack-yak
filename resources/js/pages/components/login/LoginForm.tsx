import { useState } from 'react';
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const checkEmail = (value: string): string => {
        if (!value.trim()) {
            return 'Email is required.';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) {
            return 'Please enter a valid email address.';
        }
        return '';
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const nextEmailError = checkEmail(email);
        setEmailError(nextEmailError);
        if (nextEmailError) {
            document.getElementById('login-email')?.focus();
            return;
        }
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
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) {
                                setEmailError(checkEmail(e.target.value));
                            }
                        }}
                        onBlur={() => setEmailError(checkEmail(email))}
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
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (passwordError) {
                                setPasswordError('');
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

                    <div className="flex justify-end pt-2.5">
                        <a
                            href="#"
                            className={cn(
                                fontPrimary,
                                'text-cta-accent text-xs font-bold',
                            )}
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <button type="submit" className={cn(authButton, 'mt-5')}>
                        Sign In
                    </button>
                </form>

                <div className="flex items-center gap-2.5 pt-6">
                    <span className={authDividerLine} />
                    <span className={authLabel}>Or</span>
                    <span className={authDividerLine} />
                </div>

                <button type="button" className={cn(authSocialButton, 'mt-4')}>
                    <GoogleIcon />
                    Sign in with Google
                </button>

                <p className={cn(authLabel, 'pt-5 text-center')}>
                    Don&rsquo;t you have an account?
                    <a href="#" className="text-cta-accent">
                        Sign up
                    </a>
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
