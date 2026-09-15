// Co-located auth tokens — class fragments repeated 3+ times across
// LoginForm + RegisterForm, moved here verbatim so theme.ts stays untouched.
// Counts: authLabelRest 4x, authError 5x, authErrorBorder 5x, authLink 3x.
// authLabelFirst (2x) lives here too for AuthField symmetry.

/** Auth field label spacing for the first field in a form */
export const authLabelFirst = 'pt-5 pb-1.5';

/** Auth field label spacing for subsequent fields */
export const authLabelRest = 'pt-4 pb-1.5';

/** Auth inline error + border — re-exported from theme.ts (single truth) */
export { formError as authError, formErrorBorder as authErrorBorder } from '@/config/theme';

/** Auth inline link (Sign up / Sign in / Browse destinations) */
export const authLink = 'text-cta-accent';
