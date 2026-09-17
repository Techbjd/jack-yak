import { Head } from '@inertiajs/react';
import { IMAGES } from '@/config/images';
import { pageTitles } from '@/config/site';
import RegisterForm from './components/login/RegisterForm';

export default function Register() {
    return (
        <>
            <Head title={pageTitles.register} />
            <main className="bg-canvas min-h-screen w-full lg:grid lg:grid-cols-2 lg:bg-white">
                <RegisterForm />
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:p-10 xl:p-14">
                    <img
                        src={IMAGES.destination.mardiHimal}
                        alt="Mardi Himal ridge above a sea of clouds"
                        className="rounded-image max-w-content-lg aspect-605/803 w-full object-cover"
                    />
                </div>
            </main>
        </>
    );
}
