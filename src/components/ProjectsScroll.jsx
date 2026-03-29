import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";
import ProjectsVideoBackground from "./ProjectsVideoBackground";
import { useState, useEffect } from "react";

export default function ProjectsScroll() {

  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => Math.min(prev + 1, projects.length - 1));
  };

  const prevProject = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  // Arrow key navigation
  useEffect(() => {

    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);

  }, []);

  const project = projects[index];

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center">

      {/* Background Video */}
      <ProjectsVideoBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>

      {/* Projects Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-12 left-1/2 -translate-x-1/2 text-4xl font-bold text-white z-20"
      >
        Projects
      </motion.h2>

      {/* Project Card */}
      <div className="relative z-10 ml-20 w-[900px] h-[520px]">

        <AnimatePresence mode="wait">

          <motion.div
            key={project.title}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-3xl bg-black/70 backdrop-blur border border-white/10 shadow-2xl overflow-hidden"
          >

            <div className="grid md:grid-cols-2 h-full">

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />

              {/* Text */}
              <div className="p-10 flex flex-col justify-between bg-black/80">

                <div>

                  <h2 className="text-4xl font-bold text-lime-300">
                    {project.title}
                  </h2>

                  <p className="mt-6 text-white/70 text-lg">
                    {project.desc}
                  </p>

                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition w-fit"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

      {/* Navigation Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm flex items-center gap-4 z-20">

        <div className="px-3 py-1 border border-white/40 rounded">←</div>
        <span>Use Arrow Keys to change projects</span>
        <div className="px-3 py-1 border border-white/40 rounded">→</div>

      </div>

    </div>
  );
}