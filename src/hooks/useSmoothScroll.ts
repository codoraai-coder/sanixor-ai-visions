import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initialises Lenis smooth-scroll on mount and tears it down on unmount.
 * Call once at the top-level layout / page component.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,            // scroll interpolation duration (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      touchMultiplier: 2,       // touch device sensitivity
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
