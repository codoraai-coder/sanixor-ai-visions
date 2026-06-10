import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const mockupVariants = cva(
  "relative z-10 flex overflow-hidden shadow-2xl border border-border/10 border-t-border/20",
  {
    variants: {
      type: {
        mobile: "rounded-[48px] max-w-[350px]",
        responsive: "rounded-xl",
      },
    },
    defaultVariants: {
      type: "responsive",
    },
  },
);

export interface MockupProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof mockupVariants> {}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, type, ...props }, ref) => (
    <div ref={ref} className={cn(mockupVariants({ type, className }))} {...props} />
  ),
);
Mockup.displayName = "Mockup";

export { Mockup };
