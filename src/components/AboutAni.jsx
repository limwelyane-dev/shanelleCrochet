import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhileInView3({ children }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.2,
    once: false,
  });

  return (
    <div ref={ref} className="relative overflow-hidden">
      {children}

      <motion.div
        animate={{ y: isInView ? "-100%" : "0%" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-white/20 backdrop-blur-sm overflow-hidden z-20 border-b-2"
      >
      </motion.div>

      <motion.div
        animate={{ y: isInView ? "100%" : "0%" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-white/20 backdrop-blur-sm overflow-hidden z-20 border-t-2"
      >
      </motion.div>
    </div>
  );
}