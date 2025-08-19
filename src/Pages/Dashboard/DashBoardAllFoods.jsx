import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants'
import axios from 'axios'
import TableSkeleten from '../../components/common/TableSkeleten'

const DashBoardAllFoods = () => {
    const [allFoods, setAllFoods] = useState(null)
    const [page, setPage] = useState(1)
    const [numOfPage, setNumOfpages] = useState(1)
    const [loading, setLoading] = useState(false)
    const page_size = 6
    useEffect(() => {
        try {
            const fetchData = async () => {
                setLoading(true)
                const res = await axios.get(`${BASE_URL}/api/all-foods/`, { params: { page: page, page_size: page_size } })
                if (res.status == 200) {
                    console.log("foods")
                    setLoading(false)
                    const data = res.data.result
                    setAllFoods(data)
                    setPage(res.data.current_page)
                    setNumOfpages(res.data.num_of_pages)
                }

            }
            fetchData()
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
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
        <div className="overflow-x-auto">
            <h2 className='text-center font-bold text-2xl '>All Foods</h2>
            <div className="overflow-x-auto rounded-box border-[2px] border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Imgae</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Origin</th>
                            <th>Price</th>
                            <th>Qunatity</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <TableSkeleten rows={10} columns={9} /> : allFoods ? allFoods.map((item, idx) => (
                                <tr key={idx}>
                                    <th>{(page - 1) * page_size + (idx + 1)}</th>
                                    <td><img src={item.image} alt={item.name} className='h-12 w-12 rounded-xl' /></td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.category}</td>
                                    <td>{item.origin}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.rating}</td>
                                </tr>
                            )) : <tr>
                                <td>no foods</td>
                            </tr>
                        }

                    </tbody>
                </table>
            </div>
            <div className='flex justify-center items-center gap-5 w-full mb-5'>
                <button onClick={goToPrevious} disabled={page === 1} className='hover:cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed'>Prev</button>
                <span className='text-gray-700'>Page {page} of {numOfPage}</span>
                <button onClick={goToNext} disabled={page === numOfPage} className='hover:cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed'>Next</button>

            </div>
        </div>
    )
}

export default DashBoardAllFoods