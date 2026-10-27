import { IMAGES } from '@/config/images';
import { pageSeo } from '@/config/seo';
import AuthImagePage from './components/login/AuthImagePage';
import LoginForm from './components/login/LoginForm';

export default function Login() {
    return (
        <AuthImagePage
            seo={pageSeo.login}
            image={IMAGES.login.panel}
            alt="Machhapuchhre peak glowing at sunset"
        >
            <LoginForm />
        </AuthImagePage>
    );
}
