import { Link, useForm, usePage } from '@inertiajs/react';
import { ChevronDown, CircleCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    quizButton,
    quizError,
    quizInput,
    quizLabel,
    quizNote,
    quizOption,
} from '@/config/theme';
import {
    quizSegmentQuestions,
    quizSelectQuestions,
    type QuizAnswers,
} from '@/config/quiz';
import type { PageProps } from '@/types';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function QuizForm() {
    const { auth, flash } = usePage<PageProps>().props;
    const user = auth?.user ?? null;

    const { data, setData, post, processing, errors, clearErrors } = useForm({
        name: user?.name ?? '',
        email: user?.email ?? '',
        answers: {} as QuizAnswers,
    });

    const setAnswer = (id: string, value: string) => {
        setData('answers', { ...data.answers, [id]: value });
        clearErrors(`answers.${id}` as never);
    };

    const getError = (key: string): string | undefined => {
        const bag = errors as Record<string, string | undefined>;
        return bag[key] ?? bag[`answers.${key}`];
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.name.trim() || !EMAIL_PATTERN.test(data.email.trim())) {
            const firstBad = !data.name.trim() ? 'quiz-name' : 'quiz-email';
            document.getElementById(firstBad)?.focus();
            return;
        }
        post('/quiz', {
            onError: () => {
                const firstBackend =
                    (errors as Record<string, string>).name ||
                    (errors as Record<string, string>).email
                        ? 'quiz-name'
                        : quizSelectQuestions.find(
                              (q) =>
                                  (errors as Record<string, string>)[
                                      `answers.${q.id}`
                                  ],
                          )?.id;
                if (firstBackend) {
                    document.getElementById(`quiz-${firstBackend}`)?.focus();
                }
            },
        });
    };

    if (flash?.success) {
        return (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
                <CircleCheck
                    aria-hidden
                    className="text-cta size-12 md:size-16"
                />
                <h2 className="text-2xl font-bold">Request received!</h2>
                <p className={cn(quizNote, 'max-w-md')}>
                    {flash.success} We saved it for {data.email || 'you'}.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <Link href="/destinations" className={quizButton}>
                        Browse destinations
                    </Link>
                    <Link
                        href={user ? '/user' : '/login'}
                        className={cn(
                            quizNote,
                            'text-cta-accent font-bold underline-offset-4 hover:underline',
                        )}
                    >
                        {user ? 'View my activity' : 'Sign in to track it'}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            className="divide-hairline flex w-full flex-col divide-y"
        >
            {!user && (
                <p className={cn(quizNote, 'pb-5')}>
                    Tip:{' '}
                    <Link
                        href="/login"
                        className="text-cta-accent font-bold underline-offset-4 hover:underline"
                    >
                        Sign in
                    </Link>{' '}
                    to track your recommendations in your profile.
                </p>
            )}
            <div className="grid grid-cols-1 gap-5 pb-7 sm:grid-cols-2">
                <div className="flex flex-col">
                    <label
                        htmlFor="quiz-name"
                        className={cn(quizLabel, 'pb-2')}
                    >
                        Enter your Name
                    </label>
                    <input
                        id="quiz-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your name"
                        value={data.name}
                        onChange={(e) => {
                            setData('name', e.target.value);
                            clearErrors('name' as never);
                        }}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={
                            errors.name ? 'quiz-name-error' : undefined
                        }
                        className={cn(
                            quizInput,
                            errors.name && 'border-red-400',
                        )}
                    />
                    {errors.name && (
                        <p
                            id="quiz-name-error"
                            role="alert"
                            className={quizError}
                        >
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="quiz-email"
                        className={cn(quizLabel, 'pb-2')}
                    >
                        Enter your Email
                    </label>
                    <input
                        id="quiz-email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={(e) => {
                            setData('email', e.target.value);
                            clearErrors('email' as never);
                        }}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={
                            errors.email ? 'quiz-email-error' : undefined
                        }
                        className={cn(
                            quizInput,
                            errors.email && 'border-red-400',
                        )}
                    />
                    {errors.email && (
                        <p
                            id="quiz-email-error"
                            role="alert"
                            className={quizError}
                        >
                            {errors.email}
                        </p>
                    )}
                </div>
            </div>

            {quizSelectQuestions.map((q) => {
                const err = getError(q.id);
                return (
                    <div
                        key={q.id}
                        className="grid grid-cols-1 items-center gap-3 py-6 lg:grid-cols-[220px_1fr] lg:gap-6"
                    >
                        <label htmlFor={`quiz-${q.id}`} className={quizLabel}>
                            {q.question}
                        </label>
                        <div className="flex flex-col">
                            <div className="relative">
                                <select
                                    id={`quiz-${q.id}`}
                                    value={data.answers[q.id] ?? ''}
                                    onChange={(e) =>
                                        setAnswer(q.id, e.target.value)
                                    }
                                    aria-invalid={err ? true : undefined}
                                    aria-describedby={
                                        err ? `quiz-${q.id}-error` : undefined
                                    }
                                    className={cn(
                                        quizInput,
                                        'cursor-pointer appearance-none pr-10',
                                        !data.answers[q.id] && 'text-mist',
                                        err && 'border-red-400',
                                    )}
                                >
                                    <option value="" disabled>
                                        {q.placeholder}
                                    </option>
                                    {q.options.map((opt) => (
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
                            {err && (
                                <p
                                    id={`quiz-${q.id}-error`}
                                    role="alert"
                                    className={quizError}
                                >
                                    {err}
                                </p>
                            )}
                        </div>
                    </div>
                );
            })}

            {quizSegmentQuestions.map((q) => (
                <div
                    key={q.id}
                    className="grid grid-cols-1 items-center gap-3 py-6 lg:grid-cols-[220px_1fr] lg:gap-6"
                >
                    <p id={`quiz-${q.id}-label`} className={quizLabel}>
                        {q.question}
                    </p>
                    <div
                        role="radiogroup"
                        aria-labelledby={`quiz-${q.id}-label`}
                        className="border-quiz-line bg-quiz-line grid grid-cols-2 gap-px overflow-hidden rounded-md border sm:grid-cols-4"
                    >
                        {q.options.map((opt) => (
                            <label
                                key={opt}
                                className="group flex h-12 cursor-pointer items-center gap-2 bg-white px-3"
                            >
                                <input
                                    type="radio"
                                    name={`quiz-${q.id}`}
                                    value={opt}
                                    checked={data.answers[q.id] === opt}
                                    onChange={(e) =>
                                        setAnswer(q.id, e.target.value)
                                    }
                                    className="sr-only"
                                />
                                <span
                                    aria-hidden
                                    className="group-has-checked:border-midnight group-has-focus-visible:outline-midnight flex size-[15px] shrink-0 items-center justify-center rounded-full border border-black transition-colors group-has-focus-visible:outline-2 group-has-focus-visible:outline-offset-2"
                                >
                                    <span className="bg-midnight size-2 rounded-full opacity-0 transition-opacity group-has-checked:opacity-100" />
                                </span>
                                <span
                                    className={cn(
                                        quizOption,
                                        data.answers[q.id] === opt &&
                                            'text-midnight',
                                    )}
                                >
                                    {opt}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            <div className="flex flex-col items-center pt-7">
                <button
                    type="submit"
                    disabled={processing}
                    className={cn(quizButton, 'disabled:opacity-60')}
                >
                    {processing ? 'Sending…' : 'Find My Destination'}
                </button>
                <p className={cn(quizNote, 'pt-4 text-center')}>
                    We&rsquo;ll send your personalized recommendations to your
                    email.
                </p>
            </div>
        </form>
    );
}
