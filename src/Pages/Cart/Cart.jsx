import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { AuthContext } from '../../provider/AuthProvider';

const CartPage = () => {
    const { user } = useContext(AuthContext)
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCart = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/cart/${user.email}/`);
            setCart(res.data);
        } catch (error) {
            console.error("Failed to fetch cart:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchCart();
        }

    }, [user]);

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    if (loading) return <p className="text-center mt-10">Loading cart...</p>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6">🛒 Your Cart</h2>

            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md"
                            >
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg object-cover" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-gray-500 text-sm">৳ {item.price}</p>
                                        <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex justify-between items-center">
                        <div className="text-lg font-semibold">Total: ৳ {getTotalPrice()}</div>
                        <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
