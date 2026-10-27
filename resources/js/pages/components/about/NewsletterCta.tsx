import { useState } from 'react';
import { router } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { validateEmail } from '@/lib/form-utils';
import {
    aboutCta,
    aboutHeading,
    aboutNote,
    sectionInner,
} from '@/config/theme';
import { aboutNewsletter, newsletterEndpoint } from '@/config/about';

export default function NewsletterCta() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailError = validateEmail(email, {
            required: aboutNewsletter.emailRequired,
            invalid: aboutNewsletter.emailInvalid,
        });
        if (emailError) {
            setError(emailError);
            return;
        }
        setError('');
        router.post(
            newsletterEndpoint,
            { email: email.trim() },
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => setDone(true),
                onError: (formErrors) => {
                    setDone(false);
                    setError(
                        typeof formErrors.email === 'string'
                            ? formErrors.email
                            : aboutNewsletter.emailInvalid,
                    );
                },
            },
        );
    };

    return (
        <section
            className={cn(
                sectionInner,
                'flex flex-col items-center gap-3 pt-10 pb-0 text-center md:gap-5 md:pt-16',
            )}
        >
            <h2 className={aboutHeading}>{aboutNewsletter.title}</h2>
            <p className={aboutNote}>{aboutNewsletter.subtitle}</p>
            <form
                noValidate
                onSubmit={handleSubmit}
                className="flex w-full flex-col items-center gap-2"
            >
                <input
                    type="email"
                    aria-label={aboutNewsletter.emailLabel}
                    placeholder={
                        done
                            ? aboutNewsletter.successPlaceholder
                            : aboutNewsletter.button
                    }
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) {
                            setError('');
                        }
                        if (done) {
                            setDone(false);
                        }
                    }}
                    aria-invalid={error ? true : undefined}
                    className={cn(
                        aboutCta,
                        'text-center outline-none placeholder:text-white',
                        error && 'border-2 border-red-400',
                    )}
                />
                {error && (
                    <p role="alert" className={cn(aboutNote, 'text-red-500')}>
                        {error}
                    </p>
                )}
            </form>
        </section>
    );
}
