import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export function InitialLoader({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(location.pathname === "/");

  useEffect(() => {
    // If not on the main home page, disable loader immediately
    if (location.pathname !== "/") {
      setIsLoading(false);
      return;
    }

    // Safety fallback in case video fails to load or play
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 15000); 
    
    return () => clearTimeout(timer);
  }, [location.pathname]);



  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1, y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} // elegant shutter curve
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#09090b] overflow-hidden"
          >
            <video 
              src="/sanixor.mp4" 
              autoPlay
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover" 
              onEnded={() => setIsLoading(false)}
            />
            
            {/* The loading text/dots placed over the GIF */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-16 flex flex-col items-center gap-3 z-10"
            >
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-purple-500"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-white/50">
                Loading
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
