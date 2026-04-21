import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";
import ProjectsVideoBackground from "./ProjectsVideoBackground";
import { useState, useEffect, useRef } from "react";

export default function ProjectsScroll() {

  const [index, setIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const ref = useRef(null);

  useEffect(() => {

    const handleWheel = (e) => {
      const section = ref.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();

      // 👉 Only active when section is centered
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!inView) return;

      if (isLocked) return;

      e.preventDefault(); // lock page scroll

      setIsLocked(true);

      if (e.deltaY > 0) {
        setIndex((prev) => {
          if (prev === projects.length - 1) {
            // allow leaving section
            setTimeout(() => setIsLocked(false), 300);
            return prev;
          }
          return prev + 1;
        });
      } else {
        setIndex((prev) => {
          if (prev === 0) {
            setTimeout(() => setIsLocked(false), 300);
            return prev;
          }
          return prev - 1;
        });
      }

      setTimeout(() => setIsLocked(false), 600);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);

  }, [isLocked]);

  const project = projects[index];

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center overflow-hidden"
    >

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <ProjectsVideoBackground />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* 🔥 CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* 🔥 LEFT SIDE (MAIN CARD) */}
        <div className="w-[60%]">

          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
            >

              <div className="grid md:grid-cols-2 h-[520px]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />

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
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                    {/* 🔥 Live Demo (only if exists) */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-lime-400 text-black rounded-md font-semibold hover:brightness-110 transition"
                  >
                    🚀 Live Demo
                  </a>
                )}

                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* 🔥 RIGHT SIDE (INDICATOR / LIST) */}
        <div className="w-[30%] space-y-4">

          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`cursor-pointer p-4 rounded-xl transition ${
                i === index
                  ? "bg-lime-400 text-black font-semibold"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
              onClick={() => setIndex(i)}
            >
              {p.title}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}