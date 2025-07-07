import React from 'react'
import food1 from '../../assets/images/food1.jpg'
import food2 from '../../assets/images/food2.jpg'
import food3 from '../../assets/images/food3.jpg'
const AllFoods = () => {
    const data = [{
        "title": "Margherita Pizza",
        "description": "Classic pizza with tomato sauce, mozzarella, and basil.",
        "price": 8.99,
        "quantity": 10,
        "origin": "Italy",
        "category": "Fast Food",
        "rating": 4.5,
        "image": food1
    },
    {
        "title": "Chicken Biryani",
        "description": "Fragrant rice cooked with spiced chicken and saffron.",
        "price": 10.5,
        "quantity": 5,
        "origin": "India",
        "category": "Main Course",
        "rating": 4.8,
        "image": food2
    },
    {
        "title": "Caesar Salad",
        "description": "Fresh romaine lettuce with creamy Caesar dressing.",
        "price": 6.75,
        "quantity": 0,
        "origin": "Mexico",
        "category": "Salad",
        "rating": 4.2,
        "image": food3
    }

    ]
    return (
        <div>
            <h2 className='text-2xl my-5 font-semibold text-center'>All Foods</h2>
            <div className='grid grid-cols-3 gap-5 p-5'>
                {
                    data.map((item, idx) => (
                        <div key={idx} className='bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:cursor-pointer'>
                            <img src={item.image} alt="img" className='w-full h-48 rounded-t-xl' />
                            <div className='p-5'>
                                <h2 className='text-xl font-bold'>{item.title}</h2>
                                <p className='text-gray-600 text-sm mb-2'>{item.description}</p>
                                <p className='text-gray-600 text-sm '><strong>Origin: </strong>{item.origin}</p>
                                <p className='text-gray-600 text-sm '><strong>Category: </strong>{item.category}</p>
                                <p className='text-gray-600 text-sm '><strong>Quantity: </strong>{item.quantity}</p>
                                <p className='text-gray-600 text-sm '><strong>Price: </strong>{item.price}</p>
                                <p className='text-gray-600 text-sm '><strong>Rating: </strong>{item.rating}</p>
                                <button className='btn btn-neutral mt-3 w-full'>Order now</button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllFoods