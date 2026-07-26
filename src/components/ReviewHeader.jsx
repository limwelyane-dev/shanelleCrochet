import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhileInView4 = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  return (
    <div
      ref={ref}
      className="relative sm:mt-10 mb-15 grid h-32 w-96 place-content-center overflow-hidden"
    >
      <div className="relative z-0 text-center">
        <p className="font-light text-[15px]">Testimonials</p>
        <h1  className="text-2xl sm:text-4xl font-bold">What our buyers say</h1>
      </div>

      <motion.div
        animate={{ x: isInView ? "-100%" : "0%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-y-0 left-0 z-10 w-1/2 bg-background "
      />

      <motion.div
        animate={{ x: isInView ? "100%" : "0%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-y-0 right-0 z-10 w-1/2  bg-background"
      />
    </div>
  );
};

export default WhileInView4;