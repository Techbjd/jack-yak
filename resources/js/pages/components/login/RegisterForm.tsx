import { Link, useForm } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import {
    authButton,
    authInput,
    authLabel,
    authTitle,
    fontPrimary,
} from '@/config/theme';

export default function RegisterForm() {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <section className="flex min-h-screen w-full flex-col items-center px-6 pt-16 pb-8 lg:justify-center lg:pt-10">
            <div className="flex w-full max-w-72.75 flex-1 flex-col justify-center">
                <h1 className={authTitle}>Create account</h1>
                <p className={cn(authLabel, 'pt-5')}>
                    Sign up to save trips, request availability, and leave
                    reviews.
                </p>

                <form
                    className="flex w-full flex-col"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <label
                        htmlFor="register-name"
                        className={cn(authLabel, 'pt-5 pb-1.5')}
                    >
                        Name
                    </label>
                    <input
                        id="register-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter Your Name"
                        value={data.name}
                        onChange={(e) => {
                            setData('name', e.target.value);
                            if (errors.name) {
                                clearErrors('name');
                            }
                        }}
                        aria-invalid={errors.name ? true : undefined}
                        className={cn(
                            authInput,
                            errors.name && 'border-red-400',
                        )}
                    />
                    {errors.name && (
                        <p
                            role="alert"
                            className={cn(
                                fontPrimary,
                                'pt-1.5 text-xs font-medium text-red-500',
                            )}
                        >
                            {errors.name}
                        </p>
                    )}

                    <label
                        htmlFor="register-email"
                        className={cn(authLabel, 'pt-4 pb-1.5')}
                    >
                        Email
                    </label>
                    <input
                        id="register-email"
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
                        aria-invalid={errors.email ? true : undefined}
                        className={cn(
                            authInput,
                            errors.email && 'border-red-400',
                        )}
                    />
                    {errors.email && (
                        <p
                            role="alert"
                            className={cn(
                                fontPrimary,
                                'pt-1.5 text-xs font-medium text-red-500',
                            )}
                        >
                            {errors.email}
                        </p>
                    )}

                    <label
                        htmlFor="register-password"
                        className={cn(authLabel, 'pt-4 pb-1.5')}
                    >
                        Password
                    </label>
                    <input
                        id="register-password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Min. 8 characters"
                        value={data.password}
                        onChange={(e) => {
                            setData('password', e.target.value);
                            if (errors.password) {
                                clearErrors('password');
                            }
                        }}
                        aria-invalid={errors.password ? true : undefined}
                        className={cn(
                            authInput,
                            errors.password && 'border-red-400',
                        )}
                    />
                    {errors.password && (
                        <p
                            role="alert"
                            className={cn(
                                fontPrimary,
                                'pt-1.5 text-xs font-medium text-red-500',
                            )}
                        >
                            {errors.password}
                        </p>
                    )}

                    <label
                        htmlFor="register-password-confirmation"
                        className={cn(authLabel, 'pt-4 pb-1.5')}
                    >
                        Confirm password
                    </label>
                    <input
                        id="register-password-confirmation"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Repeat your password"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        className={authInput}
                    />

                    <button
                        type="submit"
                        disabled={processing}
                        className={cn(
                            authButton,
                            'mt-5 cursor-pointer disabled:opacity-60',
                        )}
                    >
                        {processing ? 'Creating…' : 'Sign Up'}
                    </button>
                </form>

                <p className={cn(authLabel, 'pt-5 text-center')}>
                    Already have an account?{' '}
                    <Link href="/login" className="text-cta-accent">
                        Sign in
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
