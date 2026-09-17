import { useEffect, useState } from 'react';

/**
 * Auto-rotating carousel index. Shared by every auto-play slideshow
 * (destination hero, guide plan-steps) so the interval + reduced-motion
 * guard live in exactly one place.
 *
 * @param length total slide count; rotation is disabled when < 2.
 * @param intervalMs time each slide stays on screen.
 * @returns the active slide index. Call `setActive` from dots/arrows via
 * the returned tuple — same shape as `useState`.
 */
export function useAutoRotate(
    length: number,
    intervalMs: number,
): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (length < 2) {
            return;
        }
        if (
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }
        const id = window.setInterval(() => {
            setActive((index) => (index + 1) % length);
        }, intervalMs);
        return () => {
            window.clearInterval(id);
        };
    }, [length, intervalMs]);

    return [active, setActive];
}
