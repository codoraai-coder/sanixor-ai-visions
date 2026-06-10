import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import sanixorMark from "@/assets/sanixor-mark.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const homeLinks = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#event", label: "Events" },
  { href: "#learn", label: "Learn" },
];

const pageLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export function Navbar({ variant = "page" }: { variant?: "home" | "page" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = variant === "home" || location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-4 transition-all duration-500 md:px-8",
          scrolled
            ? "border-b border-primary/30 bg-background/95 py-3 backdrop-blur-2xl shadow-lg"
            : "border-b border-primary/10 bg-gradient-to-b from-background via-background/95 to-background/80 backdrop-blur-lg",
        )}
      >
        <Link to="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight hover:opacity-80 transition-all duration-300">
          <img src={sanixorMark} alt="Sanixor" className="h-8 w-8 rounded-lg shadow-lg" />
          Sanixor<span className="text-gradient animate-pulse">AI</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-primary/30 bg-background/60 px-2 py-1 backdrop-blur-xl shadow-lg md:flex">
          {(isHome ? homeLinks : pageLinks).map((link) =>
            "href" in link ? (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-primary/20 hover:text-foreground hover:shadow-md"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-foreground",
                  location.pathname === link.to
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-secondary via-primary to-primary-glow shadow-glow"
          >
            <a href={isHome ? "#cta" : "/contact"}>
              {isHome ? "Get Early Access" : "Get in Touch"}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/60 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex items-center justify-between border-b border-border/40 px-6 py-5">
            <span className="text-lg font-bold">
              Sanixor<span className="text-gradient">AI</span>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-2 p-6">
            {(isHome ? homeLinks : pageLinks).map((link) =>
              "href" in link ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Button asChild className="mt-4 rounded-full" size="lg">
              <a href={isHome ? "#cta" : "/contact"} onClick={() => setMenuOpen(false)}>
                {isHome ? "Get Early Access" : "Get in Touch"}
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
