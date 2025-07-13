import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = {
  Languages: ['HTML', 'CSS', 'JavaScript'],
  'Frameworks & Libraries': ['React', 'Tailwind CSS', 'React Router'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Vite', 'Netlify'],
  Design: ['Figma', 'Canva'],
};

const Skills = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white shadow-xl rounded-2xl p-6 border-l-8 border-red-500 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold text-red-600 mb-4">{category}</h3>
            <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
              {items.map((skill, i) => (
                <li
                  key={i}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded-full shadow text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
