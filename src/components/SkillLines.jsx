import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SkillLines() {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const nodeY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 hidden md:block"
    >

      {/* horizontal connector */}
      <div className="absolute left-8 right-8 top-[35%] h-[1px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

      {/* vertical connector */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-red-500/60 to-transparent" />

      {/* glowing moving node */}
      <motion.div
        style={{ top: nodeY }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_18px_red]"
      />

    </div>
  );
}