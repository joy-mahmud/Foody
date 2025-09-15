import React, { useContext, useEffect, useState } from 'react'
import PaymentButton from '../../components/common/PaymentButton'
import { CartContext } from '../../provider/CartProvider'
import { AuthContext } from '../../provider/AuthProvider'
import checkoutImg from '../../assets/images/checkout/checkout.png'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'

const PaymentPage = () => {
    const { cart, loading } = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const { user } = useContext(AuthContext)
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" })
    const [sslRedirectLoading, setSslRedirectLoading] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    useEffect(() => {
        if (!loading) {
            setTotalPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2))
            setIsButtonDisabled(cart.length === 0)
        }
    }, [loading, cart])
    const handlePayment = async (e) => {
        e.preventDefault()
        setSslRedirectLoading(true)
        try {
            const res = await axios.post(`${BASE_URL}/api/payment-init`, {
                user_email: user?.email,
                amount: Number(totalPrice).toFixed(2),
                cus_name: formData.name,
                cus_email: formData.email,
                phone: formData.phone,
                address: formData.address,
                num_of_items: cart?.length || 1
            })
            if (res.status === 200) {
                setSslRedirectLoading(false)
                window.location.href = res.data.gateway_url;
            }

        } catch (error) {
            console.log(error)
        }

    }
    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center p-2'>
            <div className='bg-white shadow-2xl rounded-2xl max-w-3xl w-full p-8 '>
                <div className='flex gap-4 items-center justify-center mb-4'>
                    <img src={checkoutImg} className='h-[40px] w-[40px]' alt="checkout" />
                    <h2 className='text-4xl font-semibold text-center'> Checkout </h2>
                </div>
                <form onSubmit={handlePayment} action="" className='space-y-3'>
                    <div>
                        <label htmlFor="">Full Name:</label>
                        <input onChange={handleFormData} type="text" name='name' value={formData.name}
                            placeholder='Enter full name here' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' required />
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <input onChange={handleFormData} type="text" name='email' value={formData.email} placeholder='Enter your email here' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' required />
                    </div>
                    <div>
                        <label htmlFor="">Phone:</label>
                        <input onChange={handleFormData} type="text" name='phone' value={formData.phone} placeholder='Enter your phone number' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' required />
                    </div>
                    <div>
                        <label htmlFor="">Address:</label>
                        <input onChange={handleFormData} type="text" name='address' value={formData.address} placeholder='Enter your phone number' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' required />
                    </div>
                    <div className='bg-gray-100 rounded-lg p-4 mt-4'>
                        <h2 className='font-semibold text-gray-700 mb-2'>Order summary</h2>
                        <div className='flex flex-col'>
                            <span className='text-gray-600'>Total Price: ${totalPrice}</span>
                            <span className='text-gray-600'>Total Items: {cart?.length}</span>
                        </div>
                    </div>

                    <div className='flex justify-center mt-3'>
                        <button disabled={isButtonDisabled} type='submit' className={`w-full px-5 py-2 text-white font-semibold shadow-md transition-all duration-200 rounded-lg bg-indigo-600 hover:bg-indigo-700 ${isButtonDisabled ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'} `}>
                            {sslRedirectLoading ? "Redirecting.." : " Pay With SSLCOMMERZ"}

                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default PaymentPage