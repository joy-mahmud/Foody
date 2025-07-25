import React from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const CTASection = () => {
  return (
    <div className='bg-stone-800 max-w-6xl mx-auto rounded-3xl mt-20'>
 <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative max-w-6xl mx-auto px-6 py-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-lg text-center text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Hungry already? 🍽️</h2>
      <p className="text-lg md:text-xl mb-8">Order now and get <span className="font-semibold text-yellow-400">20% OFF</span> your first meal!</p>
      <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition">
        Order Now
      </button>

      {/* Decorative Floating Blobs (optional) */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-400/20 blur-2xl rounded-full -z-10 animate-pulse delay-200" />
    </motion.section>
    </div>
   
  );
};

export default CTASection;
