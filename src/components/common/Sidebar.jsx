import React from 'react'
import { CiViewList } from 'react-icons/ci'
import { GoHome } from 'react-icons/go'
import { IoAddCircleOutline } from 'react-icons/io5'
import { LuUsers } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='min-h-screen w-[200px] bg-slate-900 p-3'>
            <ul className='flex flex-col gap-2 sticky top-20'>
                <Link to={'/dashboard/dashboard-home'}>
                    <li className='flex items-center justify-start gap-1 text-white pl-5 pr-2 py-2 rounded-full bg-orange-700 font-medium hover:bg-orange-500 hover:scale-105 transition-all duration-300'>
                        <GoHome />
                        <span>Home</span>
                    </li>
                </Link>
                <Link to={'all-foods'}>
                    <li className='flex items-center justify-start gap-1 text-white pl-5 pr-2 py-2 rounded-full bg-orange-700 font-medium hover:bg-orange-500 hover:scale-105 transition-all duration-300'>
                        <CiViewList size={20} />
                        <span>All-Food</span>
                    </li>
                </Link>
                <Link to={'all-users'}>
                    <li className='flex items-center justify-start gap-1 text-white pl-5 pr-2 py-2 rounded-full bg-orange-700 font-medium hover:bg-orange-500 hover:scale-105 transition-all duration-300'>
                        <LuUsers size={20} />
                        <span>All-Users</span>
                    </li>
                </Link>
                <Link to={'add-food'}>
                    <li className='flex items-center justify-start gap-1 text-white pl-5 pr-2 py-2 rounded-full bg-orange-700 font-medium hover:bg-orange-500 hover:scale-105 transition-all duration-300'>
                        <IoAddCircleOutline size={20} />
                        <span>Add-Food</span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar