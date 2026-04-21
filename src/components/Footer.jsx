export default function Footer() {
  return (
    <>
      {/* glow line ABOVE footer */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-lime-400/60 to-transparent" />

      <footer className="bg-black/85">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/55 text-sm">
            © {new Date().getFullYear()} Parv Mehta
          </p>

          <div className="flex items-center gap-5 text-sm text-white/65">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}