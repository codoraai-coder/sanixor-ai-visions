import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed z-[9999] rounded-full bg-primary mix-blend-difference transition-[width,height] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 36 : 10,
          height: hover ? 36 : 10,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed z-[9998] h-10 w-10 rounded-full border border-primary/50 transition-transform duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.6 : 1})`,
        }}
      />
    </>
  );
}
