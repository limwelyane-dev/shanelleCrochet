import React, { useEffect, useRef } from 'react';
import WhileInView from './ShopHeader';
import products from '../data/products';
import ProductsCard from '../data/ProductsCard';
import { motion } from 'motion/react';


export default function ShopSection({ addToCart, searchTerm }) {

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasAnimated = useRef(false);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      scale: 1.05,
      opacity: 0,
      x: -50,
    },
    show: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };


  return (
    <section id='shop' className="flex flex-col items-center justify-center p-4 mb-8 overflow-x-hidden">
      
       <WhileInView />

      <motion.div
      className="grid grid-cols-2 sm:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={hasAnimated.current ? "show" : undefined}
        whileInView={!hasAnimated.current ? "show" : undefined}
        onAnimationComplete={() => {
          hasAnimated.current = true;
        }}
      >
        {filteredProducts.map((product) => (
          <motion.div key={product.id}
          whileHover={{scale: 1.05}}
          variants={itemVariants}>
            <ProductsCard
              item={product}
              addToCart={addToCart}
            />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}