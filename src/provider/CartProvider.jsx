import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import { BASE_URL } from "../utils/constants"
import { AuthContext } from "./AuthProvider"
import toast from "react-hot-toast"

export const CartContext = createContext(null)

const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([])
    const fetchCart = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/cart/${user.email}/`)
            if (res.status === 200) {
                setLoading(false)
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

    const cartInfo = { loading, cart }
    return (
        <CartContext.Provider value={cartInfo}>
            {
                children
            }
        </CartContext.Provider>
    )
}

export default CartProvider