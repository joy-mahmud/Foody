import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { BASE_URL } from "../utils/constants"
import { AuthContext } from "../provider/AuthProvider"

export const useIsAdmin = () => {
    const { user, loading: userLoading } = useContext(AuthContext)
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRole = async () => {
            if (user?.email) {
                try {
                    const res = await axios.post(`${BASE_URL}/api/check-role`, {
                        user_email: user.email
                    })
                    setIsAdmin(res.data.role === "admin")
                } catch (err) {
                    console.error(err)
                } finally {
                    setLoading(false)
                }
            }
        }

        fetchRole()
    }, [user, userLoading])

    return { isAdmin, loading }
}
