import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import devProfile from '../assets/dev-profile.png';
import gsap from 'gsap';
const Home = () => {
    const imgref = useRef(null);
    const ringref = useRef(null)
    const heroref = useRef(null)

    useEffect(() => {
        gsap.fromTo(imgref.current,
            {
                y: -90,
                opacity: 0,
            }, {
            y: 10,
            opacity: 1,
            duration: 1,
            ease: "power3.Out",
            scrollTrigger: {
                trigger: heroref.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            }
        }
        );


    }, [])
    return (
        <div
            ref={heroref}
            className="relative min-h-screen w-full overflow-hidden" >
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-y-10 md:space-x-8 mt-8 px-4 py-20">
                <div className="text-center md:text-left rounded-xl">
                    <h1 className="text-5xl md:text-6xl font-bold  mb-4">
                        Hi, I’m <span className="bg-gradient-to-r from-yellow-200 to-red-500 bg-clip-text text-transparent ">Krishna Yadav</span>
                    </h1>
                    <p className=" text-lg md:text-xl max-w-md">
                        I’m a passionate Front-End Developer. I love building beautiful UIs and smooth experiences.
                    </p>
                    <Link
                        to="/project"
                        className="inline-block mt-6 px-5 py-2.5 bg-white text-red-600 font-semibold rounded-full shadow-md hover:scale-105 transition hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]"
                    >
                        View Portfolio
                    </Link>

                </div>
                <div className="relative w-[15rem] h-[15rem] md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] top-8 shrink-0">
  <div
    ref={ringref}
    className="absolute w-full h-full rounded-full p-1 bg-gradient-to-r from-red-900 via-yellow-400 to-blue-900 animate-spin shadow-[0_0_30px_10px_rgba(255,0,128,0.4)]"
  >
    <div className="w-full h-full bg-white rounded-full"></div>
  </div>

  <img
    ref={imgref}
    src={devProfile}
    alt="Developer Illustration"
    className="w-full h-full object-contain rounded-full relative -top-[15px] z-10"
  />
</div>
   </div>
            <div className="mt-10 text-center animate-bounce ">
                <span className="text-white text-xl p-2 bg-white/20 w-2 h-1 rounded-full shadow-2xl">↓</span>
            </div>
        </div>
    );
};

export default Home;
