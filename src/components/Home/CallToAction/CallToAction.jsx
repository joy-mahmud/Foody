import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <div className='bg-stone-800 mx-auto rounded-3xl mt-20 text-center py-16 mb-20'>
            <h2 className='text-3xl font-bold mb-4 text-white'>Hungry Already?</h2>
            <p className='text-xl mb-8 text-white'>Order now and get <span>20% OFF</span>your first meal!</p>
            <Link to={'allfoods'} className='hover:cursor-pointer bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600'>Order Now</Link>
        </div>
    )
}

export default CallToAction