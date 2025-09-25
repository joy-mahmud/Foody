import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants'
import DashboardHero from '../../components/dashboard/DashboardHero'
import MetricsCard from '../../components/dashboard/MetricsCard'
import { LuCircleDollarSign, LuShoppingBag, LuUsers, LuUtensilsCrossed } from 'react-icons/lu'
import { FaRegStar } from 'react-icons/fa'

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
    console.log(Object.keys(stats))
    return (
        <div className='bg-gray-100 h-full'>
            <DashboardHero />


            <div className='p-5 grid grid-cols-5 gap-3'>
                <MetricsCard
                    title={'Total Revenue'}
                    value={`$${stats?.total_revenue}`}
                    icon={<LuCircleDollarSign className='text-yellow-500' size={22} />}
                    trend={"+12.5%"}
                />
                <MetricsCard
                    title={'Total Users'}
                    value={stats?.user_count}
                    icon={<LuUsers className='text-blue-500' size={22} />}
                    trend={"+12.5%"}
                />
                <MetricsCard
                    title={'Total Foods'}
                    value={stats?.food_count}
                    icon={<LuUtensilsCrossed className='text-orange-500' size={22} />}
                />
                <MetricsCard
                    title={'Average Rating'}
                    value={stats?.avg_rating}
                    icon={<FaRegStar className='text-yellow-300' size={22} />}
                />
                <MetricsCard
                    title={'Total Orders'}
                    value={stats?.total_orders}
                    icon={<LuShoppingBag className='text-orange-600' size={22} />}
                />
            </div>

            {/* <div className='flex gap-5'>
                <div className='h-20 flex justify-center items-center rounded-lg border w-[190px]'>
                    <div>Toatal revenue:{stats?.total_revenue}</div>
                </div>
                <div className='h-20 flex justify-center items-center rounded-lg border w-[190px]'>
                    <div>Total foods: {stats?.food_count}</div>
                </div>
                <div className='h-20 flex justify-center items-center rounded-lg border w-[190px]'>
                    <div>Average rating:{stats?.avg_rating}</div>
                </div>
                <div className='h-20 flex justify-center items-center rounded-lg border w-[190px]'>
                    <div>Total users:{stats.user_count}</div>
                </div>
                <div className='h-20 flex justify-center items-center rounded-lg border w-[190px]'>
                    <div>Total Orders:{stats?.total_orders}</div>
                </div>
            </div> */}


        </div>
    )
}

export default DashboardHome