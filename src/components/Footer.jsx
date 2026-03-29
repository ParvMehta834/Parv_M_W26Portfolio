export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-white/55">
      © {new Date().getFullYear()} Parv Mehta — Built with React + Tailwind
    </footer>
  );
}