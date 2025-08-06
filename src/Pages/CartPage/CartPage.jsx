import React, { useContext, useEffect, useState } from 'react'


import { CartContext } from '../../provider/CartProvider'
import { MdDelete } from 'react-icons/md'

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

    const handleChangeQuantity = (id, delta) => {
        const current = quantities[id]
        const quantity = Math.max(1, current + delta)
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
                            <div key={idx} className='flex items-center justify-between rounded-xl shadow-md px-5 py-2'>
                                <div className='flex items-center gap-4'>
                                    <img src={item.image} alt={item.title} className='h-20 w-20 rounded-lg object-cover' />
                                    <div>
                                        <h3 className='text-lg font-semibold'>{item.title}</h3>
                                        <p className='text-sm text-gray-600'>price: ${item.price}</p>

                                    </div>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <button onClick={() => handleChangeQuantity(item.id, 1)} className=' hover:cursor-pointer h-10 w-10 bg-gray-800 rounded-full text-white'>+</button>
                                    <span><p className=' text-gray-600'>Quantity: <b>{quantities[item.id]}</b></p></span>
                                    <button onClick={() => handleChangeQuantity(item.id, -1)} className='hover:cursor-pointer h-10 w-10 bg-gray-800 rounded-full text-white'>-</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className='bg-gray-300 rounded-lg w-[40px] h-[40px] flex items-center justify-center hover:cursor-pointer'>
                                    <MdDelete color='red' size={25} />
                                </button>
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