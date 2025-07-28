import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import { Toaster } from 'react-hot-toast'

const Root = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet>

            </Outlet>
            <Toaster />
        </div>
    )
}

export default Root