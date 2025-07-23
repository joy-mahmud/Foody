import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/constants'

const FoodsCategory = () => {
    const { cat } = useParams()
    const [foods, setFoods] = useState([])
    useEffect(() => {
        const fetchCategoryFood = async () => {
            const res = await axios.get(`${BASE_URL}/api/category-foods`, {
                params: {
                    category: cat
                }
            })
            setFoods(res.data)
        }
        fetchCategoryFood()
    }, [cat])
    return (

        <div>
            <h2 className='text-center font-bold mb-5 text-3xl mt-5'>{cat}</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    foods.length > 0 ? foods.map((item, idx) => (
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
                    )) : <h2 className='text-center font-normal col-span-3'>No foods found for this category</h2>
                }
            </div>

        </div>
    )
}

export default FoodsCategory