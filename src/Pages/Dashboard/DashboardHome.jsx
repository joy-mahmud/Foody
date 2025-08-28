import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants'

const DashboardHome = () => {
    const [stats, setStats] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchStats = async () => {
            const res = await axios.get(`${BASE_URL}/api/get-stats`)
            if (res.status === 200) {
                setStats(res.data)
                setLoading(false)
            }
        }
        fetchStats()
    }, [])
    if (loading) {
        return
    }
    return (
        <div className='px-5 py-20'>
            <div className='flex gap-5'>
                <div className='h-20 flex justify-center items-center rounded-lg border w-[190px]'>
                    <div>Total foods: {stats?.food_count}</div>
                </div>
                <div className='h-20 flex justify-center items-center rounded-lg border w-[190px]'>
                    <div>Average rating:{stats?.avg_rating}</div>
                </div>
                <div className='h-20 flex justify-center items-center rounded-lg border w-[190px]'>
                    <div>Average price:{stats.avg_price}</div>
                </div>
                <div className='h-20 flex justify-center items-center rounded-lg border w-[190px]'>
                    <div>Total users:{stats.user_count}</div>
                </div>
                <div className='h-20 flex justify-center items-center rounded-lg border w-[190px]'>
                    <div>Total cart quantity:{stats?.total_cart_qty}</div>
                </div>
            </div>


        </div>
    )
}

export default DashboardHome