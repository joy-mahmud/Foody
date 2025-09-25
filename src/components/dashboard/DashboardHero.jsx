import React from 'react'
import dashBoardHeroImg from '../../assets/images/dashboard/dashboard-hero.jpg'
const DashboardHero = () => {
    return (
        <div className='relative h-48 overflow-hidden'>
            <img src={dashBoardHeroImg} alt='dashboard-hero' className='w-full h-full object-cover' />
            <div className='absolute bg-gradient-to-r from-[#151515] t0-[rgba(21,21,21,0.00) 100%] inset-0'>
                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='text-gray-200 text-center'>
                        <h1 className='text-3xl font-bold mb-2'>Welcome Back</h1>
                        <p className='text-lg opacity-90'>Here's what's happenning in your restaurant today</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHero