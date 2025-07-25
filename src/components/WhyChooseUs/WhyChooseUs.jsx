import React from 'react';

const benefits = [
  {
    icon: '🍽️',
    title: 'Fresh & Tasty',
    desc: 'Only high-quality, fresh ingredients in every meal.',
  },
  {
    icon: '🚀',
    title: 'Fast Delivery',
    desc: 'Your order delivered hot and fast at your doorstep.',
  },
  {
    icon: '💳',
    title: 'Secure Payment',
    desc: 'Multiple safe & secure payment options.',
  },
  {
    icon: '⭐',
    title: 'Top Rated',
    desc: 'Highly rated by thousands of happy customers.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-br from-[#1f1f1f] to-[#3f3f3f] px-5 pt-10 mt-20 pb-20 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-200">💡 Why Choose Foody?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 text-center shadow-lg border border-gray-300 bg-gradient-to-br from-gray-200/60 to-gray-100/30 backdrop-blur-md hover:cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-800">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
