import React, { useState } from 'react'
import { motion } from 'motion/react';
import { ArrowRight } from "lucide-react";
import bird from "/src/assets/bird.jpg"
import pig from "/src/assets/pig.jpg"
import unicorn from "/src/assets/unicorn.jpg"
import rabbit from "/src/assets/rabbit.jpg"
import WhileInView from './HomeAni';
import background from "/src/assets/background.png"

function HomeSection() {

const images = [
  { src: bird, alt: "bird", className: "rounded-tl-[60px] rounded-br-[60px]" },
  { src: pig, alt: "pig", className: "rounded-tr-[60px] rounded-bl-[60px]" },
  { src: unicorn, alt: "unicorn", className: "rounded-tr-[60px] rounded-bl-[60px]" },
  { src: rabbit, alt: "rabbit", className: "rounded-tl-[60px] rounded-br-[60px]" },
];

const text = "Get your favourite crochet here.".split(" ");

const imageVariants = {
  hidden: {
    y: 250,
    opacity: 0,
  },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
      delay: 0.8 + index * 0.15,
    },
  }),
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 1,
    y: 30,
  },
  visible: {
    opacity: [0, 1],
    y: 0,
    transition: {
      duration: 2,
    type: "spring",
    stiffness: 80,
    damping: 10,
    }
  },
};

  return (
    <>
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 ">
      <img
        src={background}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

        <div className='flex flex-col items-center justify-center mt-20'>
          <div className='flex flex-col items-center p-4 mb-6'>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              transition={{delay: 2}}
            >
              {text.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-3 text-4xl sm:text-5xl text-black/80 font-bold mb-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
            initial= {{y: -20, opacity: 0}}
            animate= {{y: 0, opacity: 1}}
            transition={{ delay: 1.5}}
            className='italic text-[15px] font-normal'>Discover Beautiful Handmade Crochet perfect for gift and personal collection.
            </motion.p>

          </div>
          
          <div className="grid grid-cols-4 gap-2 mt-2 mb-12">
            {images.map((image, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{scale: 0.9}}
                viewport={{ once: true, margin: "0px 0px 200px 0px" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-30 sm:h-55 object-cover ${image.className}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
    </section>
    <div className='w-full h-auto'>
      <WhileInView />
    </div>
    
    </>
  )
}

export default HomeSection