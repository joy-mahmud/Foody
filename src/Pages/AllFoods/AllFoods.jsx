import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import FoodCard from '../../components/foodCard/FoodCard'
const AllFoods = () => {
    const [foods, setFoods] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${BASE_URL}/api/all-foods/`)
            const data = res.data
            setFoods(data)
        }
        fetchData()
    }, [])
    return (
        <div>
            <h2 className='text-2xl my-5 font-semibold text-center'>All Foods</h2>
            <div className='grid grid-cols-3 gap-5 p-5'>
                {
                    foods ? foods.map((item, idx) => (
                      <FoodCard key={idx} food={item}/>
                    )) : Array.from({ length: 6 }, (_, index) => <div key={index} className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>)


                }
            </div>
        </div>
    )
}

export default AllFoods