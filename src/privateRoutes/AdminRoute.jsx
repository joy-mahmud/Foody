
import { AuthContext } from '../provider/AuthProvider'
import { useIsAdmin } from '../hooks/IsAdmin'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

const AdminRoute = ({ children }) => {
    const { user, loading: userLoading } = useContext(AuthContext)
    const { loading: roleLoading, isAdmin } = useIsAdmin()

    // Wait until user auth and role are fully loaded
    if (userLoading || roleLoading) {
        return <p>Loading...</p>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/login" replace />
}

export default AdminRoute