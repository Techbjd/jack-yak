import { useState } from 'react';
import { cn } from '@/lib/utils';
import { EMAIL_PATTERN } from '@/lib/form-utils';
import { aboutCta, aboutHeading, aboutNote } from '@/config/theme';
import { aboutNewsletter } from '@/config/about';

export default function NewsletterCta() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email.trim()) {
            setError(aboutNewsletter.emailRequired);
            return;
        }
        if (!EMAIL_PATTERN.test(email.trim())) {
            setError(aboutNewsletter.emailInvalid);
            return;
        }
        setError('');
        setDone(true);
    };

    return (
        <section className="flex w-full flex-col items-center gap-3 px-6 pt-10 pb-0 text-center md:gap-5 md:px-12 md:pt-16 md:pb-0 lg:px-24">
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
