// Co-located quiz tokens — class strings repeated in QuizForm, moved here
// verbatim so theme.ts stays untouched.
// Counts: quizErrorBorder 3x (name, email, select inputs),
// quizQuestionRow 5x rendered (3 select rows + 2 segment rows).

/** Quiz question row — label + control grid shared by selects + segments */
export const quizQuestionRow =
    'grid grid-cols-1 items-center gap-3 py-6 lg:grid-cols-[220px_1fr] lg:gap-6';

/** Quiz error border — re-exported from theme.ts (single truth) */
export { formErrorBorder as quizErrorBorder } from '@/config/theme';
