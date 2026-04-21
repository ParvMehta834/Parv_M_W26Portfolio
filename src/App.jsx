import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import SkillGraph from "./components/SkillGraph.jsx";
import Marquee from "./components/Marquee.jsx";
import Footer from "./components/Footer.jsx";
import ProjectsScroll from "./components/ProjectsScroll.jsx";
import SkillsLiveBg from "./components/SkillsLiveBg.jsx";
import TechBackground from "./components/TechBackground";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function App() {

return (

<div className="min-h-screen bg-black text-white">

<Navbar />

{/* HOME */}
<section
id="home"
className="relative h-screen flex items-center justify-center text-center overflow-hidden"
>

<div
className="absolute -top-24 left-0 w-full h-[120vh] bg-cover bg-center"
style={{ backgroundImage: "url('/hero-bg.webp')" }}
/>

<div className="absolute inset-0 bg-black/60" />

<div className="relative z-10 px-6">

<p className="uppercase tracking-[0.3em] text-sm text-white/200">
Hello, my name is PARV
</p>

<h1 className="mt-4 text-[70px] md:text-[110px] font-extrabold text-lime-300">
PORTFOLIO
</h1>

<p className="mt-4 text-white/80">
IT Developer • Automation • System Integration
</p>

<div className="mt-8 flex gap-4 justify-center">

<a
href="#projects"
className="px-6 py-3 bg-lime-300 text-black font-semibold rounded-full hover:brightness-110 transition"
>
View Projects
</a>

<a
href="#about"
className="px-6 py-3 border border-white/40 text-white rounded-full hover:bg-white/10 transition"
>
Contact Me
</a>

</div>

</div>

</section>

{/* SKILLS */}
<section
id="skills"
className="scroll-mt-24 relative py-24 overflow-hidden bg-[#f5f3ef]"
>

<SkillsLiveBg />

<div className="relative z-10">

<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-4xl font-bold text-center text-black mb-10"
>
Skills
</motion.h2>

<SkillGraph />

</div>
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
</section>

{/* PROJECTS */}
<section
id="projects"
className="scroll-mt-24"
>

<ProjectsScroll />

</section>

{/* MARQUEE */}
<Marquee text="Let's work together" />


{/* ABOUT */}
<section id="about" className="relative overflow-hidden">

  {/* 🔥 TECH BACKGROUND */}
  <TechBackground />

  <Section title="About">

    <div className="relative z-10 scroll-mt-24 pt-28 pb-16 mx-auto max-w-6xl px-5">

      <div className="grid gap-8 md:grid-cols-2">

        {/* PROFILE CARD */}
        <div className="rounded-3xl border border-white/20 bg-white/10 p-16 backdrop-blur-xl shadow-xl hover:scale-[1.02] transition">

          <div className="flex items-center gap-5">

            <div className="relative w-32 h-32 rounded-full p-[4px] bg-lime-400 shadow-[0_0_35px_rgba(132,204,22,0.6)]">

              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img
                  src="/profile.jpeg"
                  alt="Parv Mehta"
                  className="w-full h-full object-cover object-[30%_15%]"
                />
              </div>

            </div>

            <div>
              <p className="text-lg font-semibold md:text-3xl">
                Hi 👋 I am Parv Mehta
              </p>

              <p className="mt-1 text-sm text-white/70">
                IT Developer • Automation • System Integration
              </p>
            </div>

          </div>

          <p className="mt-6 text-sm leading-6 text-white/100 md:text-base">
            I specialize in IT development, automation, and system integration — 
            building reliable infrastructure while also crafting full-stack applications 
            with React and Node.js when needed.
          </p>

        </div>

        {/* EDUCATION */}
        <div className="rounded-3xl border border-white/20 bg-white/10 p-16 backdrop-blur-xl shadow-xl hover:scale-[1.02] transition">

          <h3 className="text-lg font-semibold">Education</h3>

          <div className="mt-4 space-y-4">

            <div className="rounded-xl bg-black/40 p-4 border border-white/10">
              <p className="font-semibold">
                Computer Programming & Analysis
              </p>
              <p className="text-sm text-white/70">
                George Brown College • Toronto
              </p>
            </div>

            <div className="rounded-xl bg-black/40 p-4 border border-white/10">
              <p className="font-semibold">Courses & Focus</p>
              <p className="text-sm text-white/70">
                IT: System Architecture, Databases, Security, Cloud Infrastructure
              </p>
              <p className="text-sm text-white/70">
                Dev: Full-Stack, React, Node.js, API Development
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* 🔥 ACTION BUTTONS */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">

  {/* GitHub */}
  <a
    href="https://github.com/ParvMehta834"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 transition backdrop-blur"
  >
    <FaGithub className="text-lg" />
    GitHub
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/parv-mehta-658911301"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 transition backdrop-blur"
  >
    <FaLinkedin className="text-lg" />
    LinkedIn
  </a>

  {/* Email */}
  <a
    href="mailto:parvmehtait@gmail.com"
    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 transition backdrop-blur"
  >
    <FaEnvelope className="text-lg" />
    Email
  </a>

  {/* Resume */}
  <a
    href="/resume.pdf"
    download
    className="flex items-center gap-2 px-6 py-3 rounded-full bg-lime-400 text-black font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition"
  >
    📄 View Resume
  </a>

</div>

    </div>

  </Section>

</section>
<Footer />

</div>

);

}