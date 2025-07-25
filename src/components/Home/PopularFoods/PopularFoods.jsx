import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/constants'


export const PopularFoods = () => {
    const [foods, setfoods] = useState([])
    useEffect(() => {
        const getPopularFoods = async () => {
            const res = await axios.get(`${BASE_URL}/api/popular-foods/`)
            setfoods(res.data)
        }
        getPopularFoods()
    }, [])
    return (
        <section className='max-w-6xl mx-auto py-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>Popular Foods</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    foods.length > 0 ? (
                        foods.map((item, idx) => (
                            <div key={idx} className='bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:cursor-pointer overflow-hidden hover:-translate-y-1.5'>
                                <img src={item.image} alt="img" className='w-full h-48 rounded-t-xl hover:scale-110 transition-all duration-300' />
                                <div className='p-5'>
                                    <h2 className='text-xl font-bold'>{item.title}</h2>
                                    <p className='text-gray-600 text-sm mb-2'>{item.description}</p>
                                    <div className='flex justify-between items-center mt-3'>
                                        <p className='text-gray-600 text-sm '>🎯 {item.category}</p>
                                        <p className='text-gray-600 text-sm '>📍 {item.origin}</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-3'>
                                        <p className='text-sm text-yellow-500'>$ {item.price}</p>
                                        <p className='text-gray-600 text-sm '>⭐ {item.rating}</p>
                                    </div>
                                    <button className='btn btn-neutral mt-3 w-full'>Order now</button>
                                </div>

                            </div>
                        ))
                    ) : Array.from({ length: 6 }, (_, index) => <div key={index} className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>)
                }
            </div>
        </section>
    )
}
