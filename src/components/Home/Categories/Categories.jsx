import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
    { name: "Pizza", emoji: '🍕' },
    { name: "Burgers", emoji: '🍔' },
    { name: "Sushi", emoji: '🍣' },
    { name: "Deserts", emoji: '🍰' },
    { name: "Drinks", emoji: '🥤' },
    { name: "Salads", emoji: '🥗' },
    { name: "Seafood", emoji: '🦞' },
    { name: "Cury", emoji: '🍲' }
]
const CategoriesSection = () => {

    return (
        <div className='mb-5'>
            <h2 className='text-3xl font-bold text-center mb-8'>Explore By Categories</h2>
            <div className='grid grid-cols-4 gap-4 place-items-center'>
                {
                    categories.map((item, idx) => {
                        const cat = item.name
                        //const catLower = item.name.toLocaleLowerCase()
                        return (<Link key={idx} to={`category/${cat}`} className='w-full border rounded-lg py-6 flex flex-col items-center justify-center bg-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 hover:cursor-pointer'>
                            <button className='flex flex-col'>
                                <span className='text-3xl mb-2'>{item.emoji}</span>
                                <span className='font-semibold text-gray-700'>{item.name}</span>
                            </button>
                        </Link>

                        )
                    }

                    )
                }
            </div>

        </div>
    )
}

export default CategoriesSection