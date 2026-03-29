import { useEffect, useRef, useState } from "react";

export default function ScrambleText({ text }) {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ref = useRef(null);
  const [display, setDisplay] = useState(text);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let iteration = 0;

    const interval = setInterval(() => {

      setDisplay(
        text
          .split("")
          .map((letter, index) => {

            if (index < iteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);

      iteration += 1 / 3;

    }, 30);

    return () => clearInterval(interval);

  }, [start, text]);

  return (
    <span ref={ref} className="font-medium">
      {display}
    </span>
  );
}