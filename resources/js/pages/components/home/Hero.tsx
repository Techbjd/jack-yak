import Header from '../shared/Header';
import { Plus } from 'lucide-react';
export default function Hero() {
    return (
        <div className="relative w-full h-270">
            {/* Background image */}
            <img
                src="/Hero-bg.png"
                alt="hero background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#253A55] to-[#5180BB] opacity-40 blur-[100.9px] z-10"></div>

            {/* Header */}
            <div className="relative z-20">
                <Header />
            </div>

            {/* Content - flex based, no overflow */}
            <div className="absolute inset-x-0 top-40 h-full z-20 flex flex-col justify-baseline pl-27.25">
                <div className="flex flex-col items-start text-white w-full max-w-[789px]">
                    <h1 className="font-manrope font-extrabold text-7xl lg:text-[96px] leading-tight tracking-normal break-words">
                        The World Above the Clouds
                    </h1>
                    <div className="w-8 h-0 border-t-[5px] border-white my-8"></div>
                    <p className="max-w-[538px] font-manrope font-bold text-xl lg:text-2xl leading-snug">
                        Nestled in the heart of the Himalayas, Nepal is a land of majestic
                        mountains, rich heritage, and adventures unlike anywhere else.
                    </p>
                    <button className="mt-6 w-[209px] h-[42px] rounded-full bg-[#2D8A8A] flex items-center justify-between gap-2 font-manrope font-bold text-white text-[16px] leading-[22px]">
                        <span className='px-3'>Explore Nepal</span>
                        <span className="bg-[#F7F2EE] mx-2 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                            {/* Plus icon = two crossing 1px lines */}
                            <span className="relative w-[10px] h-[10px] ">
                                <span className="absolute top-1/2 left-0 w-full h-px bg-[#60A5FA] -translate-y-1/2"></span>
                                <span className="absolute left-1/2 top-0 h-full w-px bg-[#60A5FA] -translate-x-1/2"></span>
                            </span>
                        </span>
                    </button>
                </div>
            </div>
            <div className='absolute w-full h-full'>
                <img
                    src="/patch1-left.png"
                    alt="left side image"
                    className='absolute h-167 left-0 -bottom-70 z-10 w-1/2 object-contain scale-120 origin-bottom-left'
                />
                <img
                    src="/patch1-right.png"
                    alt="right side image"
                    className='absolute h-184.5 right-0 -bottom-84 z-10 w-1/2 object-contain scale-125 origin-bottom-right border-none'
                />
            </div>
        </div>
    );
}
