import { Link, useForm, usePage } from '@inertiajs/react';
import { ChevronDown, Minus, Plus, CircleCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    fontPrimary,
    modalGhost,
    modalInput,
    modalLabel,
    modalPrimary,
    modalSubtitle,
    modalTitle,
    quizError,
} from '@/config/theme';
import { quizSelectQuestions } from '@/config/quiz';
import Modal from '../shared/Modal';
import type { PageProps } from '@/types';

const MAX_TRAVELERS = 16;

const durations =
    quizSelectQuestions.find((q) => q.id === 'duration')?.options ?? [];
const activities =
    quizSelectQuestions.find((q) => q.id === 'experience')?.options ?? [];

interface CheckAvailabilityProps {
    open: boolean;
    onClose: () => void;
}

export default function CheckAvailability({
    open,
    onClose,
}: CheckAvailabilityProps) {
    const { auth, flash } = usePage<PageProps>().props;
    const user = auth?.user ?? null;
    const today = new Date().toISOString().split('T')[0];

    const { data, setData, post, processing, errors, clearErrors, reset } =
        useForm({
            date: '',
            travelers: 1,
            duration: '',
            looking_for: '',
        });

    const close = () => {
        reset();
        clearErrors();
        onClose();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.date) {
            document.getElementById('availability-date')?.focus();
            return;
        }
        post('/availability', {
            preserveScroll: true,
            onError: () => {
                document.getElementById('availability-date')?.focus();
            },
        });
    };

    const done = Boolean(flash?.success && !processing);

    return (
        <Modal open={open} onClose={close} label="Check availability">
            {done ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                    <CircleCheck
                        aria-hidden
                        className="text-cta size-12 md:size-16"
                    />
                    <h2 className={modalTitle}>Request received!</h2>
                    <p className={modalSubtitle}>
                        {data.travelers} traveller
                        {data.travelers > 1 ? 's' : ''} · {data.date}
                        {data.duration ? ` · ${data.duration}` : ''}
                        {data.looking_for ? ` · ${data.looking_for}` : ''}.
                        We&rsquo;ll confirm availability by email.
                    </p>
                    {flash?.success && (
                        <p
                            className={cn(
                                modalSubtitle,
                                'text-cta font-semibold',
                            )}
                        >
                            {flash.success}
                        </p>
                    )}
                    <div className="mt-2 flex flex-wrap justify-center gap-3">
                        <button
                            type="button"
                            onClick={close}
                            className={cn(modalPrimary, 'cursor-pointer')}
                        >
                            Done
                        </button>
                        <Link
                            href={user ? '/user' : '/login'}
                            className={cn(
                                fontPrimary,
                                'text-cta-accent text-sm font-bold underline-offset-4 hover:underline',
                            )}
                        >
                            {user
                                ? 'View my requests'
                                : 'Sign in to track requests'}
                        </Link>
                    </div>
                </div>
            ) : (
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="flex flex-col"
                >
                    <h2 className={modalTitle}>Check Availability</h2>
                    <p className={cn(modalSubtitle, 'pt-2')}>
                        Select your dates and number of travelers to check
                        availability.
                    </p>
                    {!user && (
                        <p className={cn(modalSubtitle, 'pt-2')}>
                            <Link
                                href="/login"
                                className="text-cta-accent font-bold underline-offset-4 hover:underline"
                            >
                                Sign in
                            </Link>{' '}
                            to track this request in your profile, or continue
                            as guest.
                        </p>
                    )}
                    <hr className="border-hairline mt-6 border-t" />

                    <label
                        htmlFor="availability-date"
                        className={cn(modalLabel, 'pt-6 pb-2 font-semibold')}
                    >
                        Select Date
                    </label>
                    <input
                        id="availability-date"
                        type="date"
                        min={today}
                        value={data.date}
                        onChange={(e) => {
                            setData('date', e.target.value);
                            clearErrors('date' as never);
                        }}
                        aria-invalid={errors.date ? true : undefined}
                        aria-describedby={
                            errors.date ? 'availability-date-error' : undefined
                        }
                        className={cn(
                            modalInput,
                            !data.date && 'text-mist',
                            errors.date && 'border-red-400',
                        )}
                    />
                    {errors.date && (
                        <p
                            id="availability-date-error"
                            role="alert"
                            className={quizError}
                        >
                            {errors.date}
                        </p>
                    )}
                    {errors.travelers && (
                        <p role="alert" className={quizError}>
                            {errors.travelers}
                        </p>
                    )}

                    <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2">
                        <div className="flex flex-col">
                            <span
                                id="travelers-label"
                                className={cn(modalLabel, 'pb-2 font-semibold')}
                            >
                                Number of Travelers
                            </span>
                            <div
                                role="group"
                                aria-labelledby="travelers-label"
                                className={cn(
                                    modalInput,
                                    'flex items-center justify-between px-2',
                                )}
                            >
                                <button
                                    type="button"
                                    aria-label="One fewer traveler"
                                    disabled={data.travelers <= 1}
                                    onClick={() =>
                                        setData(
                                            'travelers',
                                            Math.max(1, data.travelers - 1),
                                        )
                                    }
                                    className="text-cta flex size-10 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    <Minus aria-hidden className="size-5" />
                                </button>
                                <span
                                    aria-live="polite"
                                    className={cn(
                                        fontPrimary,
                                        'text-md-lg font-medium',
                                    )}
                                >
                                    {data.travelers}{' '}
                                    <span className="text-mist">
                                        Traveller
                                        {data.travelers > 1 ? 's' : ''}
                                    </span>
                                </span>
                                <button
                                    type="button"
                                    aria-label="One more traveler"
                                    disabled={data.travelers >= MAX_TRAVELERS}
                                    onClick={() =>
                                        setData(
                                            'travelers',
                                            Math.min(
                                                MAX_TRAVELERS,
                                                data.travelers + 1,
                                            ),
                                        )
                                    }
                                    className="text-cta flex size-10 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    <Plus aria-hidden className="size-5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="availability-duration"
                                className={cn(modalLabel, 'pb-2 font-semibold')}
                            >
                                Trip Duration (Optional)
                            </label>
                            <div className="relative">
                                <select
                                    id="availability-duration"
                                    value={data.duration}
                                    onChange={(e) =>
                                        setData('duration', e.target.value)
                                    }
                                    className={cn(
                                        modalInput,
                                        'cursor-pointer appearance-none pr-10',
                                        !data.duration && 'text-mist',
                                    )}
                                >
                                    <option value="" disabled>
                                        Select Duration
                                    </option>
                                    {durations.map((opt) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown
                                    aria-hidden
                                    className="text-mist pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2"
                                />
                            </div>
                            {errors.duration && (
                                <p role="alert" className={quizError}>
                                    {errors.duration}
                                </p>
                            )}
                        </div>
                    </div>

                    <label
                        htmlFor="availability-looking-for"
                        className={cn(modalLabel, 'pt-5 pb-2 font-semibold')}
                    >
                        Looking for (Optional)
                    </label>
                    <div className="relative">
                        <select
                            id="availability-looking-for"
                            value={data.looking_for}
                            onChange={(e) =>
                                setData('looking_for', e.target.value)
                            }
                            className={cn(
                                modalInput,
                                'cursor-pointer appearance-none pr-10',
                                !data.looking_for && 'text-mist',
                            )}
                        >
                            <option value="" disabled>
                                Select activity or trip
                            </option>
                            {activities.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                        <ChevronDown
                            aria-hidden
                            className="text-mist pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2"
                        />
                    </div>
                    {errors.looking_for && (
                        <p role="alert" className={quizError}>
                            {errors.looking_for}
                        </p>
                    )}

                    <hr className="border-hairline mt-6 border-t" />

                    <div className="flex flex-col gap-4 pt-5 md:flex-row md:items-center md:justify-between">
                        <p className={cn(modalSubtitle, 'font-semibold')}>
                            Your information is{' '}
                            <span className="text-cta">safe</span> with JackYak.
                        </p>
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={close}
                                className={cn(modalGhost, 'cursor-pointer')}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className={cn(
                                    modalPrimary,
                                    'cursor-pointer disabled:opacity-60',
                                )}
                            >
                                {processing ? 'Sending…' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Modal>
    );
}
