import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants'
import DashboardHero from '../../components/dashboard/DashboardHero'
import MetricsCard from '../../components/dashboard/MetricsCard'
import { LuCircleDollarSign, LuShoppingBag, LuUsers, LuUtensilsCrossed } from 'react-icons/lu'
import { FaArrowRight, FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { formatDateTime } from '../../utils/formatDateTime'

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
    const label_bg = { "FAILED": "#D12A24", "CONFIRMED": "#24D129", "PENDING": "#CED124" }
    return (
        <div className='bg-gray-100 mb-10'>
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
            <div className='grid grid-cols-2 gap-5 px-5'>
                <div className='border-2 border-gray-200 bg-white p-5 rounded-xl flex flex-col w-full'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl font-bold mb-2'>Recent Users</h2>
                        <span className='text-green-500'>
                            <Link to={'/dashboard/all-users'} className='flex gap-2 items-center'>
                                <span>View all</span>
                                <FaArrowRight />
                            </Link>

                        </span>
                    </div>
                    <div className='space-y-2'>

                        {
                            stats && stats?.recent_users.map((user, index) => (
                                <div key={index} className='bg-gray-200 rounded-lg px-3 py-1 space-y-2'>
                                    <div className='flex justify-between items-start'>
                                        <div>
                                            <h3 className='text-[16px] font-semibold'>{user.name}</h3>
                                            <p className='text-gray-500 text-xs'>{user.email}</p>
                                        </div>
                                        <p className='text-[16px] font-medium'>{formatDateTime(user.created_at)}</p>
                                    </div>


                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className='border-2 border-gray-200 bg-white p-5 rounded-xl flex flex-col w-full'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl font-bold mb-2'>Recent Users</h2>
                        <span className='text-green-500'>
                            <Link to={'/dashboard/all-orders'} className='flex gap-2 items-center'>
                                <span>View all</span>
                                <FaArrowRight />
                            </Link>

                        </span>
                    </div>
                    <div className='space-y-2'>
                        {
                            stats && stats?.recent_orders.map((order, index) => (
                                <div key={index} className='bg-gray-200 rounded-lg px-3 py-1 flex justify-between items-center'>
                                    <div>
                                        <h3 className='text-[18px] font-semibold'>{order.user}</h3>
                                        <p className='text-gray-500 text-xs'>{formatDateTime(order.created_at)}</p>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-[18px]'>${order.total_amount}</p>
                                        <span
                                            style={{ backgroundColor: label_bg[order.status] }}
                                            className={`text-xs font-extralight px-3 py-[2px] rounded-full`}>
                                            {order.status.toLowerCase()}
                                        </span>
                                    </div>

                                </div>
                            ))
                        }
                    </div>


                </div>
            </div>

            <div className='border-2 border-gray-200 bg-white p-5 rounded-xl mx-5 mt-5'>
                <h2 className='text-xl font-semibold mb-5'>Performance Overview</h2>
                <div className='flex justify-around'>
                    <div className='text-center'>

                        <p className='text-green-500 text-2xl font-semibold'>95%</p>
                        <p className='text-xs text-gray-600'>Customer Satisfaction</p>
                    </div>
                    <div className='text-center'>

                        <p className='text-orange-600 text-2xl font-semibold'>20 min</p>
                        <p className='text-xs text-gray-600'>Avg Delivery Time</p>
                    </div>
                    <div className='text-center'>

                        <p className='text-yellow-500 text-2xl font-semibold'>4.2</p>
                        <p className='text-xs text-gray-600'>Orders Per Day</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DashboardHome