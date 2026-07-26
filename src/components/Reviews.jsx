import React from "react";
import { motion } from "motion/react";
import profile from "/src/assets/profile.jpg";
import WhileInView4 from "./ReviewHeader";

function ReviewsSection() {
  const reviews = [
    {
      name: "Limwel Ren Yane",
      stars: "⭐⭐⭐⭐",
      review: "I absolutely love my crochet keychain!",
    },
    {
      name: "Joy Abunda",
      stars: "⭐⭐⭐⭐",
      review: "Highly recommended!",
    },
    {
      name: "Nova Kishia",
      stars: "⭐⭐⭐⭐⭐",
      review: "The quality is amazing!",
    },
    {
      name: "Renato Reyes",
      stars: "⭐⭐⭐⭐",
      review: "Highly recommended! I will definitely buy again for my kids.",
    },
    {
      name: "Daisyrie Yane",
      stars: "⭐⭐⭐⭐",
      review: "Thank You Shanelle crochet. Highly recommended!",
    },
  ];

  const infiniteReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="relative min-h-screen mt-8 flex flex-col items-center justify-center"
    >
      <WhileInView4 />

      <div className="w-full overflow-hidden py-4 font-sans">
        <div
          className="flex gap-10 w-max marquee"
        >
          {infiniteReviews.map((review, index) => (
            <motion.div
            whileHover={{scale: 1.2}}
              key={index}
              className="w-80 shrink-0 bg-gray-100 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={profile}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h2 className="font-bold">{review.name}</h2>
                  <p>{review.stars}</p>
                </div>
              </div>

              <p>{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;