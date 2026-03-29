export default function ProjectsVideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/projects-bg.mp4" type="video/mp4" />
      </video>

      {/* overlay so cards are readable */}
      <div className="absolute inset-0 bg-black/40"></div>

    </div>
  );
}