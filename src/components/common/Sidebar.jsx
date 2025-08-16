import React from 'react'
import { CiViewList } from 'react-icons/ci'
import { IoAddCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='h-screen w-[250px] bg-slate-900 p-3'>
            <ul className='flex flex-col gap-2'>
                <li className='flex items-center justify-start gap-1 text-white pl-5 pr-2 py-2 rounded-full bg-orange-700 font-medium hover:bg-orange-500 hover:scale-105 transition-all duration-300'>
                    <CiViewList size={25} />
                    <Link to={'all-foods'}>All-Food</Link>
                </li>
                <li className='flex items-center justify-start gap-1 text-white pl-5 pr-2 py-2 rounded-full bg-orange-700 font-medium hover:bg-orange-500 hover:scale-105 transition-all duration-300'>
                    <IoAddCircleOutline size={25} />
                    <Link to={'add-food'}>Add-Food</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar