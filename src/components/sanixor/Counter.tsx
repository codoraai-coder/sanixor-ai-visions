import { useEffect, useRef, useState } from "react";

export function Counter({
  value,
  suffix = "",
  duration = 1800,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / duration, 1);
          setN(Math.floor(p * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}
