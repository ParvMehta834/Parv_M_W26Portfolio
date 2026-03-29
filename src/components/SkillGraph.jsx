import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import SkillLines from "./SkillLines";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaPython
} from "react-icons/fa";

import {
  SiDotnet,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiJenkins
} from "react-icons/si";

const groups = [
{
id: "languages",
title: "Languages",
icon: <FaCode />,
items: [
{ name: "C#", icon: <SiDotnet /> },
{ name: "Java", icon: <FaJava /> },
{ name: "Python", icon: <FaPython /> },
{ name: "JavaScript", icon: <FaReact /> }
]
},

{
id: "frontend",
title: "Frontend",
icon: <FaReact />,
items: [
{ name: "React", icon: <FaReact /> },
{ name: "NextJS", icon: <SiNextdotjs /> },
{ name: "Angular", icon: <SiAngular /> },
{ name: "Tailwind CSS", icon: <SiTailwindcss /> }
]
},

{
id: "backend",
title: "Backend",
icon: <FaServer />,
items: [
{ name: "Node.js", icon: <FaNodeJs /> },
{ name: "Express", icon: <SiExpress /> },
{ name: "ASP.NET", icon: <SiDotnet /> },
{ name: "Spring Boot", icon: <SiSpringboot /> }
]
},

{
id: "database",
title: "Database",
icon: <FaDatabase />,
items: [
{ name: "MySQL", icon: <SiMysql /> },
{ name: "MongoDB", icon: <SiMongodb /> },
{ name: "PostgreSQL", icon: <SiPostgresql /> },
{ name: "SQL", icon: <FaDatabase /> }
]
},

{
id: "devops",
title: "DevOps / Cloud",
icon: <FaCloud />,
items: [
{ name: "Git", icon: <FaGitAlt /> },
{ name: "Docker", icon: <FaDocker /> },
{ name: "Jenkins", icon: <SiJenkins /> },
{ name: "Cloud", icon: <FaCloud /> }
]
}
];

function Card({ group }) {
return (
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="rounded-3xl p-6 border border-black/20 backdrop-blur hover:scale-[1.03] transition"
style={{ backgroundColor: "#000000C4" }}
>

<div className="flex items-center gap-3 text-white">

<div className="grid h-10 w-10 place-items-center rounded-2xl bg-black/40 text-lime-300 text-lg">
{group.icon}
</div>

<h3 className="text-lg font-semibold">{group.title}</h3>

</div>

<ul className="mt-4 space-y-3 text-sm text-white/80">

{group.items.map((s) => (

<li key={s.name} className="flex items-center gap-3">

<span className="text-lime-300 text-lg">
{s.icon}
</span>

<ScrambleText text={s.name} />

</li>

))}

</ul>

</motion.div>
);
}

export default function SkillGraph() {

return (

<div className="relative">

{/* Animated network lines + glowing node */}
<SkillLines />

{/* Skills Cards */}
<div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto px-6">

<div className="md:col-span-2 md:flex md:justify-center">
<div className="md:w-[420px]">
<Card group={groups[0]} />
</div>
</div>

<Card group={groups[1]} />
<Card group={groups[2]} />
<Card group={groups[3]} />
<Card group={groups[4]} />

</div>

</div>

);
}