import { useState } from 'react';
import { cn } from '@/lib/utils';
import { aboutCta, aboutHeading, aboutNote } from '@/config/theme';
import { aboutNewsletter } from '@/config/about';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** About newsletter — title, subtitle, pill email field (Enter to join) */
export default function NewsletterCta() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email.trim()) {
            setError('Email is required.');
            return;
        }
        if (!EMAIL_PATTERN.test(email.trim())) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        // TODO: post to the newsletter endpoint once it exists
        setDone(true);
    };

    return (
        <section className="flex w-full flex-col items-center gap-3 px-6 py-10 text-center md:gap-5 md:px-12 md:py-16 lg:px-24">
            <h2 className={aboutHeading}>{aboutNewsletter.title}</h2>
            <p className={aboutNote}>{aboutNewsletter.subtitle}</p>
            <form
                noValidate
                onSubmit={handleSubmit}
                className="flex w-full flex-col items-center gap-2"
            >
                <input
                    type="email"
                    aria-label="Email address"
                    placeholder={
                        done ? 'You are on the list!' : aboutNewsletter.button
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
