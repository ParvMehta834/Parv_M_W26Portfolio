export default function ProjectsBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/projects-bg.mp4" type="video/mp4" />
      </video>

      {/* overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/60" />

    </div>
  );
}