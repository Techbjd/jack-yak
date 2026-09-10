import { useState } from 'react';
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
    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState('');
    const [travelers, setTravelers] = useState(1);
    const [duration, setDuration] = useState('');
    const [lookingFor, setLookingFor] = useState('');
    const [dateError, setDateError] = useState('');
    const [done, setDone] = useState(false);

    const close = () => {
        setDateError('');
        setDone(false);
        onClose();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!date) {
            setDateError('Please choose a date.');
            document.getElementById('availability-date')?.focus();
            return;
        }
        setDateError('');
        setDone(true);
    };

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
                        {travelers} traveller{travelers > 1 ? 's' : ''} · {date}
                        {duration ? ` · ${duration}` : ''}
                        {lookingFor ? ` · ${lookingFor}` : ''}. We&rsquo;ll
                        confirm availability by email.
                    </p>
                    <button
                        type="button"
                        onClick={close}
                        className={cn(modalPrimary, 'mt-2 cursor-pointer')}
                    >
                        Done
                    </button>
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
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                            if (dateError) {
                                setDateError('');
                            }
                        }}
                        aria-invalid={dateError ? true : undefined}
                        aria-describedby={
                            dateError ? 'availability-date-error' : undefined
                        }
                        className={cn(
                            modalInput,
                            !date && 'text-mist',
                            dateError && 'border-red-400',
                        )}
                    />
                    {dateError && (
                        <p
                            id="availability-date-error"
                            role="alert"
                            className={quizError}
                        >
                            {dateError}
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
                                    disabled={travelers <= 1}
                                    onClick={() =>
                                        setTravelers((n) => Math.max(1, n - 1))
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
                                    {travelers}{' '}
                                    <span className="text-mist">
                                        Traveller{travelers > 1 ? 's' : ''}
                                    </span>
                                </span>
                                <button
                                    type="button"
                                    aria-label="One more traveler"
                                    disabled={travelers >= MAX_TRAVELERS}
                                    onClick={() =>
                                        setTravelers((n) =>
                                            Math.min(MAX_TRAVELERS, n + 1),
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
                                    value={duration}
                                    onChange={(e) =>
                                        setDuration(e.target.value)
                                    }
                                    className={cn(
                                        modalInput,
                                        'cursor-pointer appearance-none pr-10',
                                        !duration && 'text-mist',
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
                            value={lookingFor}
                            onChange={(e) => setLookingFor(e.target.value)}
                            className={cn(
                                modalInput,
                                'cursor-pointer appearance-none pr-10',
                                !lookingFor && 'text-mist',
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
                                className={cn(modalPrimary, 'cursor-pointer')}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Modal>
    );
}
