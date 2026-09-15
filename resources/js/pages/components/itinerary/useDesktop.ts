import { useEffect, useState } from 'react';

export default function useDesktop(): boolean {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const sync = (): void => setIsDesktop(mq.matches);
        sync();
        mq.addEventListener('change', sync);
        return () => mq.removeEventListener('change', sync);
    }, []);

    return isDesktop;
}
