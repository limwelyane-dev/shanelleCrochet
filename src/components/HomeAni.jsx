import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhileInView() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  const leafs = [
    {
      id: 1,
      name: "Available Color",
      number: "10+",
      mobile: { x: -70, y: -30 },
      desktop: { x: -110, y: -15 },
      hover: 15,
      rotate: -10,
    },
    {
      id: 2,
      name: "Available Size",
      number: "5+",
      mobile: { x: 60, y: -60 },
      desktop: { x: 120, y: -40 },
      hover: -15,
      rotate: 20,
    },
    {
      id: 3,
      name: "Available Stock",
      number: "20+",
      mobile: { x: -160, y: -60 },
      desktop: { x: -300, y: -40 },
      hover: -12,
      rotate: 30,
    },
    {
      id: 4,
      name: "Product Sold",
      number: "25+",
      mobile: { x: 150, y: -20 },
      desktop: { x: 300, y: -20 },
      hover: 12,
      rotate: -12,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative h-50 md:h-52 flex items-center justify-center mb-20 overflow-hidden "
    >
      {leafs.map((leaf, index) => (
        <motion.div
          key={leaf.id}
          initial={false}
          animate={
            isInView
              ? {
                  x:
                    window.innerWidth < 768
                      ? leaf.mobile.x
                      : leaf.desktop.x,
                  y:
                    window.innerWidth < 768
                      ? leaf.mobile.y
                      : leaf.desktop.y,
                  rotate: leaf.rotate,
                  scale: 1,
                }
              : {
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 0.9,
                }
          }
          transition={{
            duration: 0.8,
            delay: index * 0.15,
            type: "spring",
            stiffness: 80,
          }}
          className="absolute"
        >
          <motion.div
            whileHover={{ rotate: leaf.hover, scale: 1.1 }}
            className="
              w-32 md:w-48
              p-4 md:p-8
              rounded-xl
              shadow-lg
              leaf
              z-100
            "
          >
            <h2 className="text-2xl md:text-4xl font-bold">
              {leaf.number}
            </h2>
            <p className="text-xs md:text-base">
              {leaf.name}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}