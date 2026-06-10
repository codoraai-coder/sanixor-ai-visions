import { motion, AnimatePresence } from "framer-motion";

export function ScrollIndicator({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="scroll-indicator"
        >
          <span className="scroll-indicator-text">Scroll to explore</span>
          <div className="scroll-indicator-mouse">
            <div className="scroll-indicator-dot" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
