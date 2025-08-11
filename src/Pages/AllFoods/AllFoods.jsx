import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import { CartContext } from '../../provider/CartProvider'
const AllFoods = () => {
    const [foods, setFoods] = useState(null)
    const { addToCart } = useContext(CartContext)
    const [page, setPage] = useState(1)
    const [numOfPage, setNumOfpages] = useState(1)
    const page_size = 6
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${BASE_URL}/api/all-foods/`, { params: { page: page, page_size: page_size } })
            const data = res.data.result
            setFoods(data)
            setPage(res.data.current_page)
            setNumOfpages(res.data.num_of_pages)
        }
        fetchData()
    }, [page])
    const goToPrevious = () => {
        if (page > 1) {
            setPage(prev => Number(prev) - 1)
        }
    }
    const goToNext = () => {
        if (page < numOfPage) {
            setPage(prev => Number(prev) + 1)
        }
    }
    return (
        <div>
            <h2 className='text-2xl my-5 font-semibold text-center'>All Foods</h2>
            <div className='grid grid-cols-3 gap-5 p-5'>
                {
                    foods ? foods.map((item, idx) => (
                        <div key={idx} className='bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:cursor-pointer'>
                            <img src={item.image} alt="img" className='w-full h-48 rounded-t-xl' />
                            <div className='p-5'>
                                <h2 className='text-xl font-bold'>{item.title}</h2>
                                <p className='text-gray-600 text-sm mb-2'>{item.description}</p>
                                <p className='text-gray-600 text-sm '><strong>Origin: </strong>{item.origin}</p>
                                <p className='text-gray-600 text-sm '><strong>Category: </strong>{item.category}</p>
                                <p className='text-gray-600 text-sm '><strong>Quantity: </strong>{item.quantity}</p>
                                <p className='text-gray-600 text-sm '><strong>Price: </strong>{item.price}</p>
                                <p className='text-gray-600 text-sm '><strong>Rating: </strong>{item.rating}</p>
                                <button onClick={() => addToCart(item.id)} className='btn btn-neutral mt-3 w-full'>Order now</button>
                            </div>

                        </div>
                    )) : Array.from({ length: 6 }, (_, index) => <div key={index} className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>)


                }

            </div>
            <div className='flex justify-center items-center gap-5 w-full mb-5'>
                <button onClick={goToPrevious} disabled={page === 1} className='hover:cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed'>Prev</button>
                <span className='text-gray-700'>Page {page} of {numOfPage}</span>
                <button onClick={goToNext} disabled={page === numOfPage} className='hover:cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed'>Next</button>

            </div>
        </div>
    )
}

export default AllFoods