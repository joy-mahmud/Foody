import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import { Toaster } from 'react-hot-toast'
import Sidebar from '../components/common/Sidebar'

const DashBoardLayout = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <div className='flex-1 overflow-auto'>
                    <Outlet >

                    </Outlet>
                </div>

            </div>

            <Toaster />
        </div>
    )
}

export default DashBoardLayout