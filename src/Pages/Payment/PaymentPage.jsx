// import React, { useContext, useEffect, useState } from 'react'
// import PaymentButton from '../../components/common/PaymentButton'
// import { CartContext } from '../../provider/CartProvider'
// import { AuthContext } from '../../provider/AuthProvider'

// const PaymentPage = () => {
//     const { cart, loading } = useContext(CartContext)
//     const [totalPrice, setTotalPrice] = useState(0)
//     const { user } = useContext(AuthContext)
//     useEffect(() => {
//         if (!loading) {
//             setTotalPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2))

//         }
//     }, [loading, cart])
//     return (
//         <div>
//             <h2 className='text-2xl font-semibold py-5 text-center'>Make your payment here</h2>

//             <div className='flex justify-center'>
//                 <PaymentButton amount={totalPrice} totalItems={cart?.length} user={user} />
//             </div>
//         </div>
//     )
// }

// export default PaymentPage

import { useState } from "react";
import axios from "axios";

const PaymentPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Call your Django API to initiate payment
            const res = await axios.post("/api/payment/initiate/", form);
            window.location.href = res.data.GatewayPageURL; // Redirect to SSLCommerz
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white shadow-2xl rounded-2xl max-w-3xl w-full p-8">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    🛒 Secure Checkout
                </h2>

                <form onSubmit={handleCheckout} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="+880 1XXXXXXXXX"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Delivery Address</label>
                        <textarea
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Street, City, ZIP"
                            required
                        />
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 border rounded-lg p-4 mt-4">
                        <h3 className="font-semibold text-gray-700 mb-2">Order Summary</h3>
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>৳ 1200</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Delivery</span>
                            <span>৳ 60</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-gray-800 mt-2">
                            <span>Total</span>
                            <span>৳ 1260</span>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-200"
                    >
                        {loading ? "Redirecting..." : "Proceed to Payment"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
