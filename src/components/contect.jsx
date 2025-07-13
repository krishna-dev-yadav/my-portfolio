import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className=" py-20 px-6">
            <div className="max-w-3xl mx-auto text-center w-full min-h-screen">
                <h2 className="text-4xl font-bold text-red-600 mb-6">Contact Me</h2>
                <p className="text-gray-700 text-lg mb-8">
                    Have an opportunity or just want to say hi? I’d love to connect!
                </p>

                <div className="flex justify-center gap-8 mb-8 text-red-600 text-2xl">
                    <a
                        href="mailto:youremail@example.com"
                        className="hover:text-red-800 transition"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-800 transition"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-800 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                <a
                    href="mailto:youremail@example.com"
                    className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow hover:bg-red-700 transition"
                >
                    Say Hello 👋
                </a>
            </div>
        </section>
    );
};

export default Contact;
