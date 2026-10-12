import Seo from '@/components/seo/Seo';
import { IMAGES } from '@/config/images';
import { pageSeo } from '@/config/seo';
import LoginForm from './components/login/LoginForm';

export default function Login() {
    return (
        <>
            <Seo {...pageSeo.login} />
            <main className="bg-canvas min-h-screen w-full lg:grid lg:grid-cols-2 lg:bg-white">
                <LoginForm />
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:p-10 xl:p-14">
                    <img
                        src={IMAGES.login.panel}
                        alt="Machhapuchhre peak glowing at sunset"
                        className="rounded-image max-w-content-lg aspect-605/803 w-full object-cover"
                    />
                </div>
            </main>
        </>
    );
}
