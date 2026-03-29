import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function SkillsLiveBg() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          color: { value: "#000000" },
          links: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.4,
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}