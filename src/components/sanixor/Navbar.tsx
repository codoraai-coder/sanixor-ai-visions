import sanixorMark from "@/assets/sanixor-mark.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const homeLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#event", label: "Events" },
  { href: "/#learn", label: "Learn" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header Container */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-4 transition-all duration-500 md:px-8",
          scrolled
            ? "border-b border-white/10 bg-[#090911]/70 py-3 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]"
            : "border-b border-white/[0.03] bg-gradient-to-b from-[#030307] via-[#030307]/90 to-transparent backdrop-blur-md",
        )}
      >
        {/* Brand Logo Cluster */}
        <Link to="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight hover:opacity-90 transition-all duration-300 group">
          <img src={sanixorMark} alt="Sanixor" className="h-8 w-8 rounded-lg shadow-lg border border-white/10 transform transition-transform duration-500 group-hover:rotate-6" />
          <span className="text-white font-extrabold tracking-tight">
            Sanixor<span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent animate-pulse ml-0.5">AI</span>
          </span>
        </Link>

        {/* 1. DESKTOP LINKS REPLACE BLOCK - FEATURING PREMIUM PURPLE MICRO-GLOW */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-[#090911]/60 px-2 py-1.5 backdrop-blur-xl shadow-inner md:flex">
          {homeLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1 text-sm font-medium text-slate-400 transition-all duration-300 outline-none transform hover:scale-[1.02] active:scale-95 hover:text-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] border border-transparent hover:border-purple-500/10"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-primary via-purple-600 to-accent text-white font-semibold shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:opacity-95 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 transform active:scale-95"
          >
            <a href="#cta" className="flex items-center gap-1">
              Get Early Access
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#030307]/95 backdrop-blur-2xl md:hidden animate-in fade-in duration-300">
          
          {/* Subtle Ambient Background Flare inside Drawer */}
          <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-5 relative z-10">
            <span className="text-lg font-black text-white">
              Sanixor<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI</span>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white transition-all"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* 2. MOBILE LINKS REPLACE BLOCK - MATCHING PREMIUM PURPLE SIGNATURE */}
          <div className="flex flex-col gap-2 p-6 relative z-10">
            {homeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3.5 text-lg font-semibold text-slate-400 border border-transparent transition-all duration-300 outline-none hover:text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/20 shadow-sm"
              >
                {link.label}
              </a>
            ))}
            
            <Button 
              asChild 
              className="mt-6 rounded-xl bg-gradient-to-r from-primary via-purple-600 to-accent text-white py-6 text-base font-bold shadow-lg" 
              size="lg"
            >
              <a href="#cta" onClick={() => setMenuOpen(false)}>
                Get Early Access
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}