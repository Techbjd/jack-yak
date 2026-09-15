import { Link, useForm } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { authButton, authLabel, authTitle, fontPrimary } from '@/config/theme';
import AuthField from './AuthField';
import { authLink } from './tokens';

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
                    <AuthField
                        id="register-name"
                        label="Name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter Your Name"
                        value={data.name}
                        onChange={(value) => {
                            setData('name', value);
                            if (errors.name) {
                                clearErrors('name');
                            }
                        }}
                        error={errors.name}
                        first
                    />

                    <AuthField
                        id="register-email"
                        label="Email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter Your Email"
                        value={data.email}
                        onChange={(value) => {
                            setData('email', value);
                            if (errors.email) {
                                clearErrors('email');
                            }
                        }}
                        error={errors.email}
                    />

                    <AuthField
                        id="register-password"
                        label="Password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Min. 8 characters"
                        value={data.password}
                        onChange={(value) => {
                            setData('password', value);
                            if (errors.password) {
                                clearErrors('password');
                            }
                        }}
                        error={errors.password}
                    />

                    <AuthField
                        id="register-password-confirmation"
                        label="Confirm password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Repeat your password"
                        value={data.password_confirmation}
                        onChange={(value) =>
                            setData('password_confirmation', value)
                        }
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
                    <Link href="/login" className={authLink}>
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
