/**
 * Client-side form helpers shared by every Inertia form
 * (quiz, login, availability, review) so validation rules and date
 * handling stay identical everywhere.
 */

/** Single email rule for all forms — keep in sync with backend. */
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Today's date as `YYYY-MM-DD` for `<input type="date">` min/max. */
export function todayISODate(): string {
    return new Date().toISOString().split('T')[0];
}
