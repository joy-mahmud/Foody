import React from 'react'

const FoodCard = ({food}) => {
    return (
        <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:cursor-pointer'>
            <img src={food.image} alt="img" className='w-full h-48 rounded-t-xl' />
            <div className='p-5'>
                <h2 className='text-xl font-bold'>{food.title}</h2>
                <p className='text-gray-600 text-sm mb-2'>{food.description}</p>
                <p className='text-gray-600 text-sm '><strong>Origin: </strong>{food.origin}</p>
                <p className='text-gray-600 text-sm '><strong>Category: </strong>{food.category}</p>
                <p className='text-gray-600 text-sm '><strong>Quantity: </strong>{food.quantity}</p>
                <p className='text-gray-600 text-sm '><strong>Price: </strong>{food.price}</p>
                <p className='text-gray-600 text-sm '><strong>Rating: </strong>{food.rating}</p>
                <button className='btn btn-neutral mt-3 w-full'>Order now</button>
            </div>

        </div>
    )
}

export default FoodCard