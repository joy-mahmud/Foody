import React, { useCallback, useContext, useEffect, useState } from 'react'


import { CartContext } from '../../provider/CartProvider'
import { MdDelete } from 'react-icons/md'
import debounce from 'lodash.debounce'

const CartPage = () => {
    const { cart, loading, removeFromCart, updateQuantity } = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const [quantities, setQuantities] = useState({})
    useEffect(() => {
        if (!loading) {
            setTotalPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2))
            setQuantities(() => {
                const initialtQuantity = {}
                cart.forEach(item => {
                    initialtQuantity[item.id] = item.quantity
                })
                return initialtQuantity
            })
        }
    }, [loading, cart])
    console.log(quantities)
    if (loading) {
        return (
            <div className='flex pt-32 items-center justify-center'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>

        )
    }
    // const debounceUpdate = debounce((id, qunatity) => { updateQuantity(id, qunatity) }, 500)

    const handleChangeQuantity = (id, delta) => {
        const current = quantities[id]
        const quantity = Math.max(1, current + delta)
        setQuantities((prev) => ({
            ...prev,
            [id]: quantity
        }))
        updateQuantity(id, quantity)
    }
    const handleInputQuantityChange = (id, value) => {
        const parsedValue = parseInt(value, 10)
        const quantity = isNaN(parsedValue) || parsedValue < 1 ? 1 : parsedValue
        setQuantities((prev) => ({
            ...prev,
            [id]: quantity
        }))
        updateQuantity(id, quantity)
    }
    return (
        <div className='container mx-auto px-4 py-10'>
            <h2 className='text-3xl font-bold mb-6 text-center'>Your Cart:</h2>
            {
                cart.length === 0 ? (
                    <p className='text-xl font-semibold text-center'>Your cart is empty</p>
                ) : (

                    <div className='space-y-5'>
                        {cart.map((item, idx) => (
                            <div key={idx} className='grid grid-cols-3 items-center justify-between rounded-xl shadow-md px-5 py-2'>
                                <div className='flex items-center gap-4'>
                                    <img src={item.image} alt={item.title} className='h-20 w-20 rounded-lg object-cover' />
                                    <div>
                                        <h3 className='text-lg font-semibold'>{item.title}</h3>
                                        <p className='text-sm text-gray-600'>price: ${item.price}</p>

                                    </div>
                                </div>
                                <div className='flex gap-5 items-center justify-center'>
                                    <button onClick={() => handleChangeQuantity(item.id, 1)} className=' hover:cursor-pointer h-10 w-10 bg-gray-800 rounded-full text-white'>+</button>
                                    <span className=' text-gray-600'>Quantity:
                                        <input
                                            type='number'
                                            value={quantities[item.id] || 1}
                                            onChange={(e) => handleInputQuantityChange(item.id, e.target.value)}
                                            className='w-16 px-2 py-1 border rounded text-center' />
                                    </span>
                                    <button onClick={() => handleChangeQuantity(item.id, -1)} className='hover:cursor-pointer h-10 w-10 bg-gray-800 rounded-full text-white'>-</button>
                                </div>
                                <div className='flex justify-end'>
                                    <button onClick={() => removeFromCart(item.id)} className='bg-gray-300 rounded-lg w-[40px] h-[40px] flex items-center justify-center hover:cursor-pointer'>
                                        <MdDelete color='red' size={25} />
                                    </button>
                                </div>
                            </div>

                        ))}
                        {
                            cart && <div className='mt-8 flex justify-between items-center'>
                                <h3 className='text-lg font-semibold'>Total:${totalPrice}</h3>
                                <button className='px-5 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg'>Proceed to Checkout</button>
                            </div>
                        }

                    </div>

                )

            }
        </div>
    )
}

export default CartPage