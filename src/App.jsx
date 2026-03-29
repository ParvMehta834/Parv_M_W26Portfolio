import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import SkillGraph from "./components/SkillGraph.jsx";
import Marquee from "./components/Marquee.jsx";
import Footer from "./components/Footer.jsx";
import ProjectsScroll from "./components/ProjectsScroll.jsx";
import SkillsLiveBg from "./components/SkillsLiveBg.jsx";

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

<p className="uppercase tracking-[0.3em] text-sm text-white/80">
Hello, my name is PARV
</p>

<h1 className="mt-4 text-[70px] md:text-[110px] font-extrabold text-lime-300">
PORTFOLIO
</h1>

<p className="mt-4 text-white/80">
Welcome to the playground
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
className="scroll-mt-24 relative overflow-hidden"
>

<ProjectsScroll />

</section>

{/* MARQUEE */}
<Marquee text="Let's work together" />

{/* ABOUT */}
<section id="about" >
  <Section title="About">

<div className="scroll-mt-24 pt-24 mx-auto max-w-6xl px-5">

<div className="grid gap-6 md:grid-cols-2">

<div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

<div className="flex items-center gap-5">

<div className="relative w-32 h-32 rounded-full p-[4px] bg-lime-400 shadow-[0_0_25px_rgba(132,204,22,0.45)]">

<div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">

<img
src="/profile.jpeg"
alt="Parv Mehta"
className="w-full h-full object-cover object-[30%_15%]"
/>

</div>

</div>

<div>

<p className="text-lg font-semibold">
Hi 👋 I am Parv Mehta
</p>

<p className="mt-1 text-sm text-white/70">
Junior Full-Stack Developer | React • Node • Databases • DevOps
</p>

</div>

</div>

<p className="mt-6 text-sm leading-6 text-white/75">
I build clean, modern web applications with a focus on performance,
UI/UX, and maintainable code. I enjoy turning ideas into real
products using React, backend APIs, and strong database design.
</p>

</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

<h3 className="text-lg font-semibold">Education</h3>

<div className="mt-4 space-y-3">

<div className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-black/40">

<p className="font-semibold">
Computer Programming & Analysis
</p>

<p className="text-sm text-white/70">
George Brown College • Toronto
</p>

</div>

<div className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-black/40">

<p className="font-semibold">Courses & Focus</p>

<p className="text-sm text-white/70">
Full-stack, DevOps, Databases, Security
</p>

</div>

</div>

</div>

</div>

<div className="mt-8 flex flex-wrap gap-3">

<a
href="https://github.com/ParvMehta834"
target="_blank"
rel="noreferrer"
className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10"
>
<FaGithub /> GitHub
</a>

<a
href="https://linkedin.com/in/parv-mehta-658911301"
target="_blank"
rel="noreferrer"
className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10"
>
<FaLinkedin /> LinkedIn
</a>

<a
href="mailto:parvmehtait@gmail.com"
className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10"
>
<FaEnvelope /> Email
</a>

<a
href="tel:+14379339629"
className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10"
>
<FaPhoneAlt /> Phone
</a>

</div>

</div>

</Section>
</section>
<Footer />

</div>

);

}