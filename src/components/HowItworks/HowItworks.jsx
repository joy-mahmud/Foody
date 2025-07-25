
import React from 'react';
import { motion } from 'framer-motion';
import { FoodIcon, CartIcon, TruckIcon } from './Icon';

const steps = [
  {
    title: 'Choose Food',
    desc: 'Browse and select from a wide variety of delicious dishes.',
    Icon: FoodIcon,
  },
  {
    title: 'Place Order',
    desc: 'Add items to your cart and pay securely online.',
    Icon: CartIcon,
  },
  {
    title: 'Fast Delivery',
    desc: 'Relax while we deliver your meal hot and fresh!',
    Icon: TruckIcon,
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 bg-gray-600 rounded-3xl">
      <h2 className="text-3xl font-bold text-center mb-12 text-stone-200">📱 How Foody Works</h2>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-between items-center overflow-x-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="min-w-[280px] bg-stone-200/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <step.Icon />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-gray-200">{step.desc}</p>
          </motion.div>

        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
