    import React from 'react'
    import toast from "react-hot-toast";
    import { motion } from 'motion/react';

    
    function ProductsCard({ item, addToCart }) {

        const handleAddToCart = () => {
            addToCart(item);
            toast.success("Added to cart successfully!");
            };


      return (
        <div className="card2 text-left max-w-60 rounded-md shadow-sm font-sans">
            <img
                src={item.image} 
                alt={item.title}
                loading='lazy'
                className="w-full h-50 object-cover rounded-tr-[60px] rounded-bl-[60px]"
            />

            <h1 className="md:text-[15px] text-[14px] font-bold mt-2">
                {item.title}
            </h1>

            <div className="text-[12px] mb-2">
                <p className="italic mb-2">
                {item.rating} | {item.reviews} reviews
                </p>

                <p>{item.description}</p>
            </div>

            <div className="w-full flex justify-between px-2">
                <p className='text-[20px] font-bold'>₱{item.price}</p>

                <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{scale: 1.05, background: "#f0bdad"}}
                onClick={() => handleAddToCart()
                }
                className="w-15 bg-text2 text-white cursor-pointer rounded-sm text-2xl rounded-tr-[45px] rounded-bl-[45px]">
                +
                </motion.button>
            </div>
        </div>
      )
    }
    
    export default ProductsCard