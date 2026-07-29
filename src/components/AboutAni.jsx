import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhileInView3({ children }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.3,
    once: false,
  });

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const panel = {
    hidden: {
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    visible: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div ref={ref} className="relative overflow-hidden border-t-2">
      {children}

      <motion.div
        className="absolute inset-0 z-20 flex pointer-events-none"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            variants={panel}
            className="flex-1 h-full bg-primary"
          />
        ))}
      </motion.div>
    </div>
  );
}