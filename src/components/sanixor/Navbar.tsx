import sanixorMark from "@/assets/sanixor-mark.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Box, Briefcase, Calendar, GraduationCap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuToggle } from "./MenuToggle";
import { motion, AnimatePresence } from "framer-motion";

const homeLinks = [
  { href: "/#products", label: "Products", icon: Box, gradientFrom: "#a955ff", gradientTo: "#ea51ff" },
  { href: "/#services", label: "Services", icon: Briefcase, gradientFrom: "#56CCF2", gradientTo: "#2F80ED" },
  { href: "/#event", label: "Events", icon: Calendar, gradientFrom: "#FF9966", gradientTo: "#FF5E62" },
  { href: "/#learn", label: "Learn", icon: GraduationCap, gradientFrom: "#80FF72", gradientTo: "#7EE8FA" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    // Trap focus inside drawer
    drawerRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const hash = href.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    },
    [location.pathname, navigate],
  );

  return (
    <>
      {/* Skip to content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-4 transition-all duration-500 md:px-8",
          menuOpen 
            ? "py-4 bg-transparent border-transparent shadow-none" 
            : scrolled
            ? "border-b border-primary/30 bg-background/95 py-3 backdrop-blur-2xl shadow-lg"
            : "border-b border-primary/10 bg-gradient-to-b from-background via-background/95 to-background/80 backdrop-blur-lg py-4",
        )}
      >
        <Link to="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight hover:opacity-80 transition-all duration-300">
          <img src={sanixorMark} alt="Sanixor" className="h-8 w-8 rounded-lg shadow-lg" />
          Sanixor<span className="text-gradient animate-pulse">AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3 md:flex">
          {homeLinks.map(({ href, label, icon: Icon, gradientFrom, gradientTo }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleHashClick(e, href)}
              style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
              className="relative w-[48px] h-[48px] bg-white/5 border border-white/10 shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[130px] hover:shadow-none group cursor-pointer"
            >
              {/* Gradient background on hover */}
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
              
              {/* Blur glow */}
              <span className="absolute top-[8px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-40"></span>

              {/* Icon */}
              <span className="relative z-10 transition-all duration-500 group-hover:scale-0 flex items-center justify-center">
                <Icon className="h-[22px] w-[22px] text-white/70" />
              </span>

              {/* Title */}
              <span className="absolute text-white font-bold tracking-wide text-sm transition-all duration-500 scale-0 group-hover:scale-100 delay-75">
                {label}
              </span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-secondary via-primary to-primary-glow shadow-glow"
          >
            <a href="#cta">
              Get Early Access
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        {/* Placeholder to keep flex-between layout on mobile */}
        <div className="h-10 w-10 md:hidden" />
      </header>

      {/* Mobile Menu Trigger (Standalone so it sits above drawer) */}
      <div
        className={cn(
          "fixed z-[100] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 md:hidden",
          "right-4",
          menuOpen || !scrolled ? "top-4" : "top-3"
        )}
      >
        <MenuToggle open={menuOpen} onOpenChange={setMenuOpen} className="h-5 w-5" />
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              ref={drawerRef}
              className="fixed top-0 right-0 z-[60] h-[100dvh] w-[85vw] max-w-sm bg-background md:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              tabIndex={-1}
            >
            {/* Menu Links */}
            <div className="flex flex-1 flex-col justify-center px-8 pb-20 pt-20">
              <div className="flex flex-col gap-6">
                {homeLinks.map(({ href, label, icon: Icon, gradientFrom, gradientTo }, i) => (
                  <div key={href} className="overflow-hidden">
                    <motion.a
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      href={href}
                      onClick={(e) => handleHashClick(e, href)}
                      style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
                      className="group flex items-center gap-5 text-4xl font-bold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-lg transition-transform duration-400 group-hover:scale-110">
                        {/* Glow on hover */}
                        <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-opacity duration-400 group-hover:opacity-20"></span>
                        <Icon className="relative z-10 h-7 w-7 text-white/70 transition-colors duration-400 group-hover:text-white" />
                      </span>
                      <span className="relative">
                        {label}
                        <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-[linear-gradient(90deg,var(--gradient-from),var(--gradient-to))] transition-all duration-400 group-hover:w-full"></span>
                      </span>
                    </motion.a>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  delay: homeLinks.length * 0.08 + 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-12"
              >
                <Button
                  asChild
                  className="w-full rounded-2xl h-14 text-lg font-bold bg-gradient-to-r from-secondary via-primary to-primary-glow shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  size="lg"
                >
                  <a href="#cta" onClick={(e) => handleHashClick(e, "/#cta")}>
                    Get Early Access
                  </a>
                </Button>
              </motion.div>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}