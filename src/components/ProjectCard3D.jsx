import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard3D({ project }) {
  return (
    <motion.div
      whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative w-[520px] h-[320px] rounded-3xl overflow-hidden bg-black/70 backdrop-blur border border-white/10 shadow-xl"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="grid grid-cols-2 h-full">

        {/* IMAGE */}
        <div className="h-full w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="p-6 flex flex-col justify-between">

          <div>
            <h3 className="text-2xl font-bold text-lime-300">
              {project.title}
            </h3>

            <p className="mt-4 text-white/70 text-sm">
              {project.desc}
            </p>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>
    </motion.div>
  );
}