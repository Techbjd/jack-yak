import { Head } from '@inertiajs/react';
import { IMAGES } from '@/config/images';
import RegisterForm from './components/login/RegisterForm';

export default function Register() {
    return (
        <>
            <Head title="Sign up" />
            <main className="bg-canvas min-h-screen w-full lg:grid lg:grid-cols-2 lg:bg-white">
                <RegisterForm />
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:p-10 xl:p-14">
                    <img
                        src={IMAGES.destination.mardiHimal}
                        alt="Machhapuchhre peak glowing at sunset"
                        className="rounded-image aspect-[605/803] w-full max-w-151.25 object-cover"
                    />
                </div>
            </main>
        </>
    );
}
