import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Blog Website",
    description: "A multi-page blog site using React Router.",
    features: [
      "Home, About, and Blog pages, services",
      "Post previews, jsonplaceholder API",
      "Smooth routing and UI"
    ],
    tech: ["React", "React Router", "Tailwind CSS", "GSAP"],
    live: "https://krishna-dev-yadav.github.io/Blog-web/#",
    code: "https://github.com/krishna-dev-yadav/Blog-web"
  },
  {
    name: "E-commerce Product Page",
    description: "A modern e-commerce product UI inspired by real-world designs.",
    features: [
      "Image gallery with thumbnails",
      "Color and size selectors",
      "Add to cart functionality"
    ],
    tech: ["React", "Tailwind CSS"],
    live: "https://krishna-dev-yadav.github.io/e-commerce/",
    code: "https://github.com/krishna-dev-yadav/ecommerce-page"
  },
  {
    name: "To-Do App",
    description: "A simple task manager to add, delete, and mark tasks as complete.",
    features: [
      "Add, edit, delete, and complete tasks",
      "Clean and minimal UI",
      "Responsive layout"
    ],
    tech: ["React", "Tailwind CSS", "useState"],
    live: "https://krishna-dev-yadav.github.io/to-do-app/",
    code: "https://github.com/krishna-dev-yadav/to-do-app"
  },
  {
    name: "Weather App",
    description: "Fetches live weather data for any city using a weather API.",
    features: [
      "Search weather by city",
      "Shows temperature, humidity, wind",
      "Animated weather icons"
    ],
    tech: ["React", "Tailwind CSS", "OpenWeatherMap API"],
    live: "https://krishna-dev-yadav.github.io/-weather-app/",
    code: "https://github.com/krishna-dev-yadav/-weather-app"
  },
  {
    name: "Quiz App",
    description: "A dynamic quiz application with score tracking and multiple questions.",
    features: [
      "Multiple-choice questions",
      "Score calculation",
      "Next/Previous navigation"
    ],
    tech: ["React", "Tailwind CSS", "useState", "Conditional Rendering"],
    live: "https://krishna-dev-yadav.github.io/quiz-app/",
    code: "https://github.com/krishna-dev-yadav/quiz-app"
  }
];

const ProjectCard = React.forwardRef(({ project }, ref) => (
  <div
    ref={ref}
    className="bg-gradient-to-r from-[#D9D9D9]/20 to-[#737373] border border-blue-500 rounded-[60px] shadow-xl p-6 hover:scale-105 transition w-full md:w-[45%]"
  >
    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00F4E0] via-[#2E5451] to-[#F6E2E2] bg-clip-text text-transparent ">{project.name}</h3>
    <p className="text-gray-400 mt-2">{project.description}</p>
    <ul className="list-disc list-inside mt-2 text-sm text-gray-200">
      {project.features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
    <div className="mt-2 text-sm text-gray-400">
      <span className="font-semibold">Tech:</span> {project.tech.join(', ')}
    </div>
    <div className="mt-4 flex gap-4">
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-red-600 text-white rounded-full text-sm hover:bg-red-700 transition"
      >
        Live Demo
      </a>
      <a
        href={project.code}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 border border-red-600 text-red-600 rounded-full text-sm hover:bg-red-600 hover:text-white transition"
      >
        View Code
      </a>
    </div>
  </div>
));

const Projects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#000000] via-[#1C1A1A] to-[#5C5C5C] ">
      <h2
        className="text-4xl font-bold text-center text-red-600 mb-10"
      >
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            ref={(el) => (cardRefs.current[idx] = el)}
          />
          
        ))}
      </div>
    </section>
  );
};

export default Projects;