import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants'
import TableSkeleten from '../../components/common/TableSkeleten'
import OrderItemsModal from '../../components/OrderItemModal/OrderItemsModal'
const AllOrders = () => {
    const [allOrders, setAllOrders] = useState(null)
    const [page, setPage] = useState(1)
    const [numOfPage, setNumOfpages] = useState(1)
    const [loading, setLoading] = useState(false)
    const page_size = 5
    useEffect(() => {
        try {
            const fetchAllOrders = async () => {
                setLoading(true)
                const res = await axios.get(`${BASE_URL}/api/all-orders`, { params: { page: page, page_size: page_size } })
                if (res.status === 200) {
                    setLoading(false)
                    setAllOrders(res.data.result)
                    setPage(res.data.current_page)
                    setNumOfpages(res.data.num_of_pages)
                }

            }
            fetchAllOrders()
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
    function formatDateTime(datetimeStr) {
        try {
            const date = new Date(datetimeStr);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");

            let hours = date.getHours();
            const minutes = String(date.getMinutes()).padStart(2, "0");

            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;

            return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
        } catch (err) {
            throw new Error("Invalid datetime string format", err);
        }
    }


    return (
        <div>

            <h2 className='text-center font-bold text-2xl py-5'>All Foods</h2>
            <div className="overflow-x-auto rounded-box border-[2px] border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Total Items</th>
                            <th>Order Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <TableSkeleten rows={10} columns={8} /> : allOrders ? allOrders.map((order, idx) => (
                                <tr key={idx}>
                                    <th>{(page - 1) * page_size + (idx + 1)}</th>
                                    <td>{order.user.name}</td>
                                    <td>{order.user.email}</td>
                                    <td>{order.total_amount}</td>
                                    <td>{order.status}</td>
                                    <td>{formatDateTime(order.created_at)}</td>
                                    <td>{order.updated_at}</td>
                                    <td>{order?.items?.length}</td>
                                    <td>
                                        <OrderItemsModal data={order.items} idx={idx} />
                                        <button className="btn" onClick={() => document.getElementById(`my_modal_${idx}`).showModal()}>Order Items</button>
                                    </td>

                                </tr>
                            )) : <tr>
                                <td>No Order Found</td>
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

export default AllOrders