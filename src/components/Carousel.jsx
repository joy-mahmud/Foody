import React from 'react'
import food1 from '../assets/images/food1.jpg'
import food2 from '../assets/images/food2.jpg'
import food3 from '../assets/images/food3.jpg'
import food4 from '../assets/images/food4.jpg'
import { Link } from 'react-router-dom'
const Carousel = () => {
    // const bannerImages = [food1, food2, food3, food4]
    const bannerInfo = [
        {
            img: food1,
            title: "Margherita Pizza",
            description: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves."
        },
        {
            img: food2,
            title: "Chicken Biryani",
            description: "A flavorful South Asian rice dish cooked with aromatic spices, marinated chicken, and saffron."
        },
        {
            img: food3,
            title: "Sushi Platter",
            description: "An assortment of fresh sushi rolls including salmon, tuna, and vegetable maki served with soy sauce and wasabi."
        },
        {
            img: food4,
            title: "Caesar Salad",
            description: "A crisp salad made with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing."
        }
    ]

    return (

        <div className="carousel w-full mt-5">
            {
                bannerInfo.map((item, idx) => <div key={idx} id={`slide${idx}`} className="carousel-item relative w-full">
                    <img
                        src={item.img}
                        className="w-full h-[500px] rounded-lg" />
                    <div className='absolute left-0 top-0 bg-gradient-to-r from-[#151515] t0-[rgba(21,21,21,0.00) 100%] h-[500px] w-full rounded-lg flex flex-col justify-center '>
                        <div className='p-12 w-1/2 space-y-5'>
                            <h2 className='text-6xl font-bold text-white'>{item.title}</h2>
                            <p className='text-white'>{item.description}</p>
                            <div className=''>
                                <button className='hover:bg-neutral hover:text-white hover:border-[#0da3d6] btn btn-outline text-white'><Link to={'/allfoods'}>All menus</Link></button>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 bottom-10 flex gap-5 -translate-y-1/2 transform justify-end">
                        <a href={idx == 0 ? `#slide${3}` : `#slide${idx - 1}`} className="btn btn-circle bg-neutral text-white hover:border-[#0da3d6]">❮</a>
                        <a href={idx == 3 ? `#slide${0}` : `#slide${idx + 1}`} className="btn btn-circle bg-neutral text-white hover:border-[#0da3d6]">❯</a>
                    </div>
                </div>)
            }

        </div>
    )
}

export default Carousel