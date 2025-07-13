import React from 'react';

const About = () => {
    return (
        <section className="  py-20 px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 min-h-screen">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold text-red-600 mb-4">About Me</h2>
                    <p className="  text-lg mb-4 ">
                        I'm <span className="font-semibold text-red-600">Krishna Yadav</span>, a passionate front-end developer with a love for building clean, modern UIs using React and Tailwind CSS. I enjoy turning ideas into interactive digital experiences.
                    </p>
                    <p className=" text-lg mb-4">
                        I’ve built several projects like to-do apps, e-commerce pages, blog platforms, and weather/quiz apps to strengthen my skills.
                    </p>
                    <p className="text-lg">
                        I’m currently looking for an internship or junior developer opportunity where I can learn, grow, and contribute to real-world projects.
                    </p>

                    <div className="mt-6">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow hover:bg-red-700 transition"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
