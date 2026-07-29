import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhileInView2 = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  return (
    <div
      ref={ref}
      className="relative sm:mt-10 grid h-32 w-96 place-content-center overflow-hidden"
    >
      <div className="relative z-0 text-center">
        <p className="font-light text-[15px]">About Us</p>
        <h1  className="text-2xl sm:text-4xl font-bold">Why we are the best?</h1>
      </div>

      <motion.div
        animate={{ x: isInView ? "-100%" : "0%" }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute inset-y-0 left-0 z-10 w-1/2 bg-background "
      />

      <motion.div
        animate={{ x: isInView ? "100%" : "0%" }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute inset-y-0 right-0 z-10 w-1/2  bg-background"
      />
    </div>
  );
};

export default WhileInView2;