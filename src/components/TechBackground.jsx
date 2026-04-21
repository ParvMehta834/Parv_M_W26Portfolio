import { useEffect, useRef } from "react";

export default function TechBackground() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      if (shadowRef.current) {
        shadowRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {/* same background color */}
      <div className="absolute inset-0 bg-[#050e3b]" />

      {/* same grid pattern */}
      <div
        className="absolute inset-0 opacity-30
        bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* same center shading */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,35,80,0.35),rgba(0,0,0,0.65))]" />

      {/* mouse shadow */}
      <div
        ref={shadowRef}
        className="pointer-events-none absolute left-0 top-0 z-[1] h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/40 blur-[80px]"
      />

      {/* mouse glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-0 top-0 z-[2] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/20 blur-[120px]"
      />
    </div>
  );
}