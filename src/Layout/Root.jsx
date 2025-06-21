import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <Outlet>

            </Outlet>
        </div>
    )
}

export default Root