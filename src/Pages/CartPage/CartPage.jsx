import React, { useCallback, useContext, useEffect, useState } from 'react'
import debounce from 'lodash.debounce';

import { CartContext } from '../../provider/CartProvider'
import { MdDelete } from 'react-icons/md'

const CartPage = () => {
    const { cart, loading, removeFromCart, updateQuantity } = useContext(CartContext)
    const [quantities, setQuantities] = useState({})
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        if (!loading) {
            setTotalPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2))
            setQuantities(() => {
                const initialQuantities = {};
                cart.forEach(item => {
                    initialQuantities[item.id] = item.quantity;
                });
                return initialQuantities
            })
        }
    }, [loading, cart])
    // const debouncedUpdate = useCallback(
    //     debounce((id, qty) => {
    //         updateQuantity(id, qty);
    //     }, 300),
    //     []
    // );
    const debounceUpdate = useCallback(
        debounce((id, qty) => {
            updateQuantity(id, qty);
        }, 500),
        []
    );
    if (loading) {
        return (
            <div className='flex pt-32 items-center justify-center'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>

        )
    }


    // const handleQuantityChange = (item, type) => {
    //     const newQty = type === 'inc' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    //     debouncedUpdate(item.id, newQty);
    // };
    const handleChangeQuantity = (id, delta) => {
        const current = quantities[id];
        const updatedQuantity = Math.max(1, current + delta);

        setQuantities(prev => ({
            ...prev,
            [id]: updatedQuantity,
        }));

        debounceUpdate(id, updatedQuantity)
    };
    const handleInputQuantityChange = (id, value) => {
        const parsed = parseInt(value, 10);
        const quantity = isNaN(parsed) || parsed < 1 ? 1 : parsed;

        setQuantities(prev => ({
            ...prev,
            [id]: quantity,
        }));

        debounceUpdate(id, quantity);
    };
    return (
        <div className='container mx-auto px-4 py-10'>
            <h2 className='text-3xl font-bold mb-6 text-center'>Your Cart:</h2>
            {
                cart.lengh === 0 ? (
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
                                    <button
                                        onClick={() => handleChangeQuantity(item.id, 1)}
                                        className='hover:cursor-pointer h-10 w-10 bg-gray-800 rounded-full text-white'
                                    >
                                        +
                                    </button>

                                    <span className='text-gray-600'>
                                        Quantity:{' '}
                                        <input
                                            type='number'
                                            min={1}
                                            value={quantities[item.id]}
                                            onChange={(e) => handleInputQuantityChange(item.id, e.target.value)}
                                            className='w-16 px-2 py-1 border rounded text-center'
                                        />
                                    </span>

                                    <button
                                        onClick={() => handleChangeQuantity(item.id, -1)}
                                        className='hover:cursor-pointer h-10 w-10 bg-gray-800 rounded-full text-white'
                                    >
                                        -
                                    </button>
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