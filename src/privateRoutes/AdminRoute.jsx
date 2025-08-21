
import { AuthContext } from '../provider/AuthProvider'
import { useIsAdmin } from '../hooks/IsAdmin'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

const AdminRoute = ({ children }) => {
    const { user, loading: userLoading } = useContext(AuthContext)
    const { loading: roleLoading, isAdmin } = useIsAdmin()

    // Wait until user auth and role are fully loaded
    if (userLoading || roleLoading) {
        return <div className='h-screen flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/login" replace />
}

export default AdminRoute