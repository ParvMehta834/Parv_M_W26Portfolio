import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="group relative overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ backgroundColor: "#000000C4" }}
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-black/70" />

        {/* Tag */}
        <div className="absolute left-5 top-5 rounded-full bg-black/70 px-3 py-1 text-xs text-white border border-white/20">
          {project.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* GitHub Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 bg-black/40 p-3 transition hover:bg-lime-300 hover:text-black"
            aria-label="GitHub Link"
          >
            <FaGithub />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white/80"
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime-300"
          whileHover={{ x: 2 }}
        >
          View on GitHub →
        </motion.div>
      </div>

      {/* Hover Glow Edge */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-r from-lime-300/10 via-transparent to-lime-300/10" />
    </motion.article>
  );
}