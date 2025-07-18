import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import devProfile from '../assets/dev-profile.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const imgref = useRef(null);
    const ringref = useRef(null);
    const heroref = useRef(null);



    return (
        <div
            ref={heroref}
            className="relative min-h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-[url('/ales-nesetril-Im7lZjxeLhg-unsplash.jpg')]"
        >
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-y-10 md:space-x-8 mt-8 px-4 py-20">
                <div className="flex flex-col gap-16">
                    <div>
                        <h1 className="text-5xl text-white md:text-6xl font-bold mb-4">
                            Hi, I’m{' '}
                            <span className="bg-gradient-to-r from-yellow-200 to-red-500 bg-clip-text text-transparent ">
                                Krishna Yadav
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-md bg-gradient-to-r from-[#6C5A5A] to-[#B7BADE] bg-clip-text text-transparent">
                            — a passionate front-end developer skilled in React and Tailwind, focused on building responsive, modern web experiences."                    </p>
                        <div className='gap-3 flex'>
                            <Link
                                to="/project"
                                className="inline-block mt-6 px-5 py-2.5 bg-white text-red-600 font-semibold rounded-full shadow-md hover:scale-105 transition hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]"
                            >
                                View Portfolio
                            </Link>
                            <Link
                                to="/project"
                                className="inline-block mt-6 px-7 py-2.5 bg-gradient-to-r from-gray-400 to-black text-white font-semibold rounded-full shadow-2xl hover:scale-105 transition shadow-[0_0_15px_rgba(255,0,0,0.6)]"
                            >
                                Contect me
                            </Link>
                        </div>
                    </div>
                    <div className='flex w-10 h-10 gap-8' >
                        <img src="./MNnijydi1n.gif" alt="" />
                        <img src="./icons8-javascript.gif" alt="" />
                        <img src="./icons8-figma.gif" alt="" />
                        <img src="./css-3.png" alt="" />
                    </div>
                </div>

                <div className="relative w-[20rem] h-[20rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] top-8 shrink-0">
                    <div className='inset-0 z-0 absolute bg-gradient-to-b from-[#D9D9D9]/70 to-[#050404] w-4/5 h-full rounded-[50px]'></div>
                    <img
                        ref={imgref}
                        src={'img2.png'}
                        alt="Profile picture of Krishna Yadav"
                        className=" absolute -top-[40px] object-contain w-4/5 h-full z-10"
                    />
                </div>
            </div>

            <div className='bg-gradient-to-t from-black to-transparent w-full h-48 '></div>
        </div>
    );
};

export default Home;