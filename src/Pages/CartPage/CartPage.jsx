import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import toast from 'react-hot-toast'

const CartPage = () => {
    const { user } = useContext(AuthContext)
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchCart = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/cart/${user.email}/`)
            if (res.status === 200) {
                setCart(res.data)
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (user) {
            fetchCart()
        }
    }, [user])
    return (
        <div>

        </div>
    )
}

export default CartPage