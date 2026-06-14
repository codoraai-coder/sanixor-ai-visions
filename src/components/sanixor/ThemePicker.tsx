import { useEffect, useRef, useState } from "react";
import { Check, Palette } from "lucide-react";
import { THEMES, useTheme } from "./ThemeProvider";

export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Choose theme"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-full glass transition-smooth hover:scale-110"
      >
        <Palette className="h-4 w-4" />
      </button>

      {open && (
        <div
          role="menu"
          className="glass-strong absolute right-0 mt-2 w-64 rounded-2xl p-2 shadow-elegant z-50"
        >
          <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Theme
          </div>
          <ul className="space-y-1">
            {THEMES.map((t) => {
              const active = theme === t.id;
              return (
                <li key={t.id}>
                  <button
                    onClick={() => {
                      setTheme(t.id);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-smooth hover:bg-muted ${
                      active ? "bg-muted" : ""
                    }`}
                  >
                    <span
                      aria-hidden
                      className="h-7 w-7 shrink-0 rounded-lg ring-1 ring-border"
                      style={{ background: t.swatch }}
                    />
                    <span className="flex-1">
                      <span className="block font-medium">{t.label}</span>
                      <span className="block text-xs text-muted-foreground capitalize">
                        {t.mode}
                      </span>
                    </span>
                    {active && <Check className="h-4 w-4 text-primary" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
