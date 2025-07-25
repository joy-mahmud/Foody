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
                {foods.length > 0 ? (
                    foods.map((item, idx) => (
                        <div key={idx} className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden hover:-translate-y-1.5">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover hover:scale-110 transition duration-300" />
                            <div className="p-5 flex flex-col grow">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-600 grow">{item.description}</p>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>🍳 {item.category}</span>
                                    <span>📍 {item.origin}</span>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                    <span className="text-lg font-bold text-orange-500">${item.price}</span>
                                    <span className="text-yellow-500 font-medium">⭐ {item.rating}</span>
                                </div>
                                <button className="mt-4 w-full btn btn-neutral">Order Now</button>
                            </div>
                        </div>
                    ))
                ) : <h2 className='text-center font-normal col-span-3'>No foods found for this category</h2>
                }
            </div>

        </div>
    )
}

export default FoodsCategory