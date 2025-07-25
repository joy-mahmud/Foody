import React from 'react'

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: '🍽️',
            title: 'Delicious Variety',
            desc: 'Explore a wide range of cuisines made with fresh ingredients by top chefs.'
        },
        {
            icon: '⚡',
            title: 'Fast Delivery',
            desc: 'Get your food delivered hot and fresh in under 30 minutes, guaranteed.'
        },
        {
            icon: '💳',
            title: 'Secure Payments',
            desc: 'We support all major payment methods with end-to-end encryption.'
        },
        {
            icon: '⭐',
            title: 'Customer Satisfaction',
            desc: 'Thousands of happy customers love our easy ordering and fast service.'
        }
    ];

    return (
        <section className='bg-gray-900 px-5 pt-10 pb-20 my-20 rounded-3xl'>
            <h2 className='text-3xl font-bold text-center mb-10 text-gray-200'>Why Choose Foody</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    benefits.map((item, index) => {
                        return (
                            <div key={index} className='rounded-2xl p-6 text-center border border-gray-300 bg-gradient-to-br from-gray-100/60 to-gray-100/30 backdrop-blur-md hover:cursor-pointer hover:scale-105 transition-all duration-300'>
                                <div className='text-4xl mb-3'>{item.icon}</div>
                                <h3 className='text-xl font-semibold text-gray-800'>{item.title}</h3>
                                <p className='text-sm text-gray-800'>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default WhyChooseUs