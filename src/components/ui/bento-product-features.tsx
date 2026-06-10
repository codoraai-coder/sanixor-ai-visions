import * as React from "react";
import { cn } from "@/lib/utils";

interface BentoGridShowcaseProps {
  integration: React.ReactNode;
  trackers: React.ReactNode;
  statistic: React.ReactNode;
  focus: React.ReactNode;
  productivity: React.ReactNode;
  shortcuts: React.ReactNode;
  className?: string;
}

export function BentoGridShowcase({
  integration,
  trackers,
  statistic,
  focus,
  productivity,
  shortcuts,
  className,
}: BentoGridShowcaseProps) {
  const slots = [
    { node: integration, className: "md:col-span-1 md:row-span-3 snx-stagger-item" },
    { node: trackers, className: "md:col-span-1 md:row-span-1 snx-stagger-item" },
    { node: statistic, className: "md:col-span-1 md:row-span-1 snx-stagger-item" },
    { node: focus, className: "md:col-span-1 md:row-span-1 snx-stagger-item" },
    { node: productivity, className: "md:col-span-1 md:row-span-1 snx-stagger-item" },
    { node: shortcuts, className: "md:col-span-2 md:row-span-1 snx-stagger-item" },
  ];

  return (
    <section
      className={cn(
        "snx-stagger grid w-full auto-rows-[minmax(180px,auto)] grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-3",
        className,
      )}
    >
      {slots.map((slot, i) => (
        <div key={i} className={slot.className}>
          {slot.node}
        </div>
      ))}
    </section>
  );
}
