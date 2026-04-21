export default function ProjectsVideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/projects-bg.mp4" type="video/mp4" />
    </video>
  );
}