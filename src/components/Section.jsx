export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      {title && (
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
}