import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: 'Sarah Williams',
    comment: 'Foody delivers fast and the meals are always fresh and hot! Highly recommend it.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=11',
  },
  {
    name: 'John Smith',
    comment: 'The user interface is smooth and the food quality is amazing!',
    rating: 4.5,
    avatar: 'https://i.pravatar.cc/100?img=32',
  },
  {
    name: 'Emily Johnson',
    comment: 'Great variety of dishes and very reliable service.',
    rating: 4.8,
    avatar: 'https://i.pravatar.cc/100?img=45',
  },
  {
    name: 'David Lee',
    comment: 'Tastes just like restaurant-quality food at home!',
    rating: 4.9,
    avatar: 'https://i.pravatar.cc/100?img=60',
  },
];

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">💬 What Our Customers Say</h2>

      <Slider {...settings} className='py-10 bg-gray-100 rounded-lg'>
        {reviews.map((review, idx) => (
          <div key={idx} className="px-3 my-5 h-full hover:scale-y-105 transition-all duration-300">
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition h-full">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-gray-300"
              />
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-600 mt-2 mb-4 italic">"{review.comment}"</p>
              <div className="text-yellow-500 text-sm font-semibold">⭐ {review.rating}</div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CustomerReviews;
