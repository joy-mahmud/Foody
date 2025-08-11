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

    const addToCart = async (food_id) => {
        try {
            const CartData = { food_id: food_id, user_email: user.email, quantity: 1 }
            const res = await axios.post(`${BASE_URL}/api/add-to-cart/`, { ...CartData })
            if (res.status == 201) {
                toast.success("food item added to cart successfully")
            }
            fetchCart()
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }

    const updateQuantity = async (cart_item_id, quantity) => {
        try {
            await axios.post(`${BASE_URL}/api/update-cart-item-quantity/`, { cart_item_id, quantity })
            //setCart(prev=>prev.map(item=>item.id === cart_item_id?{...item,quantity}:item ))
            setCart(prev => {
                return prev.map((item) => {
                    if (item.id === cart_item_id) {
                        return { ...item, quantity }
                    } else {
                        return item
                    }
                })
            })
        } catch (error) {
            console.error("Quantity updation failed", error)
        }

    }

    const removeFromCart = async (item_id) => {
        try {
            const res = await axios.delete(`${BASE_URL}/api/remove-cart-item/`, { data: { cart_item_id: item_id } })
            if (res.status === 200) {
                setCart(prev => prev.filter(item => item.id != item_id))
            }

        } catch (error) {
            console.log("remove failed", error)
        }

    }

    const cartInfo = { loading, cart, removeFromCart, addToCart, updateQuantity }
    return (
        <CartContext.Provider value={cartInfo}>
            {
                children
            }
        </CartContext.Provider>
    )
}

export default CartProvider