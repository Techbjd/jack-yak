import { IMAGES } from '@/config/images';
import { pageSeo } from '@/config/seo';
import AuthImagePage from './components/login/AuthImagePage';
import RegisterForm from './components/login/RegisterForm';

export default function Register() {
    return (
        <AuthImagePage
            seo={pageSeo.register}
            image={IMAGES.destination.mardiHimal}
            alt="Mardi Himal ridge above a sea of clouds"
        >
            <RegisterForm />
        </AuthImagePage>
    );
}
