import { Link, useForm, usePage } from '@inertiajs/react';
import { CircleCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { quizButton, quizNote } from '@/config/theme';
import {
    quizSegmentQuestions,
    quizSelectQuestions,
    type QuizAnswers,
} from '@/config/quiz';
import QuizTextField from './QuizTextField';
import QuizSelectField from './QuizSelectField';
import QuizSegmentField from './QuizSegmentField';
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
                <QuizTextField
                    id="quiz-name"
                    label="Enter your Name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={data.name}
                    onChange={(value) => {
                        setData('name', value);
                        clearErrors('name' as never);
                    }}
                    error={errors.name}
                />

                <QuizTextField
                    id="quiz-email"
                    label="Enter your Email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={(value) => {
                        setData('email', value);
                        clearErrors('email' as never);
                    }}
                    error={errors.email}
                />
            </div>

            {quizSelectQuestions.map((q) => (
                <QuizSelectField
                    key={q.id}
                    question={q}
                    value={data.answers[q.id] ?? ''}
                    onChange={(value) => setAnswer(q.id, value)}
                    error={getError(q.id)}
                />
            ))}

            {quizSegmentQuestions.map((q) => (
                <QuizSegmentField
                    key={q.id}
                    question={q}
                    value={data.answers[q.id]}
                    onChange={(value) => setAnswer(q.id, value)}
                />
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
