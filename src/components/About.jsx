import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import yarn from "/src/assets/yarn.jpg"
import yarn2 from "/src/assets/yarn2.jpg"
import WhileInView3 from './AboutAni'
import WhileInView2 from './Aboutheader'

function AboutSection() {
  return (

    <WhileInView3>
      <section id='about' className="relative min-h-screen flex flex-col items-center justify-center py-16 px-5 overflow-x-hidden">
        
        <WhileInView2 />

        <div className='flex flex-col lg:flex-row items-center bg-white justify-between p-8 gap-15 mt-8 rounded-3xl'>
          <motion.div 
          initial={{x: -200, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{once: false}}
          transition={{duration: 0.8, delay: 1.2}}
          className="p-4 w-full">
            <div className='flex flex-col text-left justify-center font-sans text-[15px] gap-2'>
              <p>At <span className='font-bold'>Shanelle Crochet</span>, we believe every handmade creation should be as special as the person receiving it.</p>
              <ul className='flex flex-col text-left'>
                <li>🧶 100% Handmade with Love</li>
                <li>🌸 Carefully Crafted with Quality Materials</li>
                <li>🎨 Unique and Customizable Designs</li>
                <li>🎁 Perfect for Gifts and Special Occasions</li>
                <li>💖 Dedicated to Customer Satisfaction</li>
              </ul>
              <p>Every stitch reflects our passion for creating crochet pieces that you'll love and cherish.</p>

              <button className="btn w-fit mt-6 inline-flex items-center gap-2">
                Read More
                <ArrowRight className='size-[15px]'/>
                </button>
            </div>
          </motion.div>

          <motion.div
          initial={{x: 200, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{once: false}}
          transition={{duration: 0.8, delay: 1.2 }} 
          className="grid grid-cols-2 gap-4 w-full max-w-sm md:max-w-md p-4">
            <div className='min-h-40 bg-accent'></div>
            <div>
              <img src={yarn} alt="tools" className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-tr-[60px] rounded-bl-[60px]" />
            </div>
            <div>
              <img src={yarn2} alt="tools" className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-tr-[60px] rounded-bl-[60px]" />
            </div>
            <div className='min-h-40 bg-accent'></div>
          </motion.div>
        </div>
      </section>
    </WhileInView3>
  )
}

export default AboutSection