import { Link, useForm } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import {
    authButton,
    authLabel,
    authLink,
    authTitle,
    fontPrimary,
} from '@/config/theme';
import TextField from '@/components/forms/TextField';
import { registerCopy } from '@/config/auth';
import { siteLegal, siteRoutes } from '@/config/site';

export default function RegisterForm() {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(registerCopy.endpoint);
    };

    return (
        <section className="flex min-h-screen w-full flex-col items-center px-6 pt-16 pb-8 lg:justify-center lg:pt-10">
            <div className="flex w-full max-w-72.75 flex-1 flex-col justify-center">
                <h1 className={authTitle}>{registerCopy.title}</h1>
                <p className={cn(authLabel, 'pt-5')}>{registerCopy.subtitle}</p>

                <form
                    className="flex w-full flex-col"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <TextField
                        id="register-name"
                        label={registerCopy.nameLabel}
                        type="text"
                        tone="auth"
                        autoComplete="name"
                        placeholder={registerCopy.namePlaceholder}
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

                    <TextField
                        id="register-email"
                        label={registerCopy.emailLabel}
                        type="email"
                        tone="auth"
                        autoComplete="email"
                        placeholder={registerCopy.emailPlaceholder}
                        value={data.email}
                        onChange={(value) => {
                            setData('email', value);
                            if (errors.email) {
                                clearErrors('email');
                            }
                        }}
                        error={errors.email}
                    />

                    <TextField
                        id="register-password"
                        label={registerCopy.passwordLabel}
                        type="password"
                        tone="auth"
                        autoComplete="new-password"
                        placeholder={registerCopy.passwordPlaceholder}
                        value={data.password}
                        onChange={(value) => {
                            setData('password', value);
                            if (errors.password) {
                                clearErrors('password');
                            }
                        }}
                        error={errors.password}
                    />

                    <TextField
                        id="register-password-confirmation"
                        label={registerCopy.confirmLabel}
                        type="password"
                        tone="auth"
                        autoComplete="new-password"
                        placeholder={registerCopy.confirmPlaceholder}
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
                        {processing
                            ? registerCopy.submitting
                            : registerCopy.submit}
                    </button>
                </form>

                <p className={cn(authLabel, 'pt-5 text-center')}>
                    {registerCopy.haveAccount}{' '}
                    <Link href={siteRoutes.login} className={authLink}>
                        {registerCopy.signIn}
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
