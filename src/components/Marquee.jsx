export default function Marquee({ text }) {
  const items = new Array(10).fill(0);
  return (
    <div className="border-y border-white/10 bg-black py-6 overflow-hidden">
      <div className="whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="inline-block animate-[marquee_18s_linear_infinite]">
          {items.map((_, i) => (
            <span key={i} className="mx-6 text-2xl font-extrabold tracking-tight text-white/85">
              {text} <span className="text-lime-300">✌</span>
            </span>
          ))}
        </div>
        <div className="inline-block animate-[marquee_18s_linear_infinite]">
          {items.map((_, i) => (
            <span key={i} className="mx-6 text-2xl font-extrabold tracking-tight text-white/85">
              {text} <span className="text-lime-300">✌</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}