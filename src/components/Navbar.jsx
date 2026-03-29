import { useEffect, useMemo, useRef, useState } from "react";

const links = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const linkRefs = useRef({});

  // Navbar background effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        threshold: 0.4,
        rootMargin: "-80px 0px -30% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));

    // fallback for bottom of page
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (bottom) {
        setActiveId("about");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navClass = useMemo(() => {
    return `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-black/70 backdrop-blur-md shadow-lg"
        : "bg-transparent"
    }`;
  }, [scrolled]);

  return (
    <nav className={navClass}>
      <div className="w-full flex items-center justify-between px-6 md:px-12 py-4">

        {/* Logo */}
        <button
          onClick={() => {
            setMenuOpen(false);
            scrollToId("home");
          }}
          className="group relative font-extrabold text-white text-xl tracking-tight"
        >
          <span className="relative z-10">
            Parv <span className="text-lime-400">Mehta</span>
          </span>

          <span className="absolute -inset-2 rounded-lg bg-lime-400/0 blur-xl transition group-hover:bg-lime-400/20" />
        </button>

        {/* Desktop Links */}
        <div className="relative hidden md:flex items-center gap-8">

          {links.map((l) => (
            <button
              key={l.id}
              ref={(el) => (linkRefs.current[l.id] = el)}
              onClick={() => scrollToId(l.id)}
              className="relative font-semibold text-white/90 hover:text-white transition"
            >
              {l.name}
            </button>
          ))}

          {/* Sliding underline */}
          <div
            className="absolute -bottom-2 h-[2px] bg-lime-300 transition-all duration-300"
            style={{
              width:
                linkRefs.current[activeId]?.offsetWidth || 0,
              left:
                linkRefs.current[activeId]?.offsetLeft || 0,
            }}
          />

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="text-sm font-semibold">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5">
          <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md p-3">
            {links.map((l) => {
              const isActive = activeId === l.id;

              return (
                <button
                  key={l.id}
                  onClick={() => {
                    scrollToId(l.id);
                    setMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition ${
                    isActive
                      ? "bg-lime-300/15 text-white"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {l.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}