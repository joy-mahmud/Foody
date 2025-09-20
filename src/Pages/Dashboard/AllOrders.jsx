import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants'

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState(null)

    useEffect(() => {
        const fetchAllOrders = async () => {
            const res = await axios.get(`${BASE_URL}/api/all-orders`)
            if (res.status === 200) {
                setAllOrders(res.data)
            }

        }
        fetchAllOrders()
    }, [])
    console.log(allOrders)
    return (
        <div>
            <h2>All orders</h2>
        </div>
    )
}

export default AllOrders