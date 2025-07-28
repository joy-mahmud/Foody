import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const reviews = [
    {
        name: "Ariana Gomez",
        comment: "Absolutely loved the sushi platter! Everything was fresh and beautifully packed.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
        name: "Rahim Uddin",
        comment: "Delivery was super quick and the food was still warm. Great service!",
        rating: 4,
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
        name: "Sneha Roy",
        comment: "I’m a regular now. The biryani is to die for. Highly recommend!",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "Michael Chen",
        comment: "Tried the new pasta items. Flavor was good but could be spicier.",
        rating: 4,
        avatar: "https://i.pravatar.cc/150?img=45"
    },
    {
        name: "Fatima Nahar",
        comment: "Very user-friendly app. Food quality and presentation are top-notch.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
        name: "John Smith",
        comment: "Burger was juicy and perfectly cooked. Fries were a bit soggy though.",
        rating: 3,
        avatar: "https://i.pravatar.cc/150?img=18"
    }
];

const CustomerReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        slidesToScroll: 1,
    };
    return (
        <section className=" mx-auto px-4 mb-20">
            <h2 className="text-center text-3xl font-bold mb-10">💬 What Our Client Say</h2>
            <Slider {...settings} className=" bg-gray-200 rounded-3xl py-10">
                {
                    reviews.map((review, idx) => (
                        <div key={idx} className="px-3 my-5 hover:scale-y-105 transition-all duration-300">
                            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full mb-4 border-2 border-gray-300" />
                                <h3 className="text-lg font-semibold">{review.name}</h3>
                                <p className="text-sm text-gray-600 mt-2 mb-4 italic">{review.comment}</p>
                                <div className="text-yellow-500 text-sm font-semibold">⭐ {review.rating}</div>

                            </div>
                        </div>
                    ))
                }

            </Slider>
        </section>
    )
}

export default CustomerReviews