export default function Section({ id, title, children }) {
  return (
    <section id={id} className="relative py-16">

      {/* 🔥 TITLE */}
      {title && (
        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          {title}
        </h2>
      )}

      {/* CONTENT */}
      {children}

    </section>
  );
}