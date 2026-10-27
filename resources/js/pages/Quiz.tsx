import Seo from '@/components/seo/Seo';
import { pageSeo } from '@/config/seo';
import QuizForm from './components/quiz/QuizForm';
import QuizPanel from './components/quiz/QuizPanel';

export default function Quiz() {
    return (
        <>
            <Seo {...pageSeo.quiz} />
            <main className="flex min-h-screen w-full justify-center bg-white sm:p-6 lg:items-center lg:p-10">
                <div className="max-w-hero-panel lg:h-hero-panel-h flex w-full flex-1 flex-col overflow-hidden bg-white sm:rounded-2xl lg:flex-row lg:items-stretch">
                    <QuizPanel variant="page" />

                    <div className="w-full min-w-0 flex-1 p-6 md:p-10 lg:overflow-y-auto">
                        <QuizForm compact />
                    </div>
                </div>
            </main>
        </>
    );
}
