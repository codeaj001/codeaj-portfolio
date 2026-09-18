import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { EASE_OUT, MOTION } from "@/lib/motion";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="material fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full text-[#1d1d1f] active:scale-95"
          initial={reduceMotion ? false : { opacity: 0, transform: "translateY(100%) scale(0.95)" }}
          animate={{ opacity: 1, transform: "translateY(0%) scale(1)" }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, transform: "translateY(100%) scale(0.95)" }}
          transition={reduceMotion ? { duration: 0 } : { duration: MOTION.small, ease: EASE_OUT }}
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
          aria-label="Back to top"
        >
          <ChevronUp size={20}/>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
