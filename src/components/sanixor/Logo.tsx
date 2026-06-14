import { Link } from "react-router-dom";
import logoMark from "@/assets/sanixor-mark.png";

interface LogoProps {
  variant?: "full" | "mark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { mark: "h-7 w-7", text: "text-base" },
  md: { mark: "h-9 w-9", text: "text-lg" },
  lg: { mark: "h-12 w-12", text: "text-2xl" },
};

export function Logo({ variant = "full", size = "md", className = "" }: LogoProps) {
  const s = sizeMap[size];
  return (
    <Link
      to="/"
      aria-label="Sanixor.AI — Home"
      className={`group flex items-center gap-2.5 font-bold tracking-tight transition-smooth ${className}`}
    >
      <span
        className={`relative grid ${s.mark} place-items-center rounded-xl transition-smooth group-hover:scale-105`}
      >
        <span className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 blur-md transition-smooth group-hover:opacity-60" />
        <img
          src={logoMark}
          alt="Sanixor.AI logo"
          className={`relative ${s.mark} object-contain drop-shadow-[0_2px_8px_oklch(0.45_0.15_290_/_0.35)]`}
          draggable={false}
        />
      </span>
      {variant === "full" && (
        <span className={`${s.text} leading-none`}>
          <span className="bg-gradient-to-r from-[oklch(0.32_0.09_265)] via-[oklch(0.42_0.13_290)] to-[oklch(0.55_0.16_310)] bg-clip-text text-transparent dark:from-[oklch(0.85_0.06_265)] dark:via-[oklch(0.78_0.13_290)] dark:to-[oklch(0.75_0.18_310)]">
            SANIXOR
          </span>
          <span className="ml-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary align-top">
            AI
          </span>
        </span>
      )}
    </Link>
  );
}
