import React, { useContext, useEffect, useState } from 'react'
import PaymentButton from '../../components/common/PaymentButton'
import { CartContext } from '../../provider/CartProvider'
import { AuthContext } from '../../provider/AuthProvider'

const PaymentPage = () => {
    const { cart, loading } = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (!loading) {
            setTotalPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2))

        }
    }, [loading, cart])
    return (
        <div>
            <h2 className='text-2xl font-semibold py-5 text-center'>Make your payment here</h2>

            <div className='flex justify-center'>
                <PaymentButton amount={totalPrice} totalItems={cart?.length} user={user} />
            </div>
        </div>
    )
}

export default PaymentPage