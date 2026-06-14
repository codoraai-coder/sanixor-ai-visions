import type { ReactNode, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

export function GlassCard({ children, className = "", ...rest }: Props) {
  return (
    <div
      className={`glass relative overflow-hidden rounded-3xl p-8 shadow-elegant transition-all duration-300 hover:shadow-glow ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
