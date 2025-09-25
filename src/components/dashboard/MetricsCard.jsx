import React from 'react'

const MetricsCard = ({ title, value, trend, icon }) => {
    return (
        <div className='border-2 border-gray-200 bg-white p-5 rounded-xl flex flex-col w-full max-w-[250px]'>
            <div className='flex justify-between items-center'>
                <div className='bg-gray-100 inline-block p-3 rounded-lg mb-2'>
                    {icon}
                </div>
                <span className='text-green-400'>{trend}</span>
            </div>
            <span className='text-3xl font-bold mb-2'>{value}</span>
            <span className='text-sm text-green-500'>{title}</span>

        </div>
    )
}

export default MetricsCard