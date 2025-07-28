import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-300 px-6 py-12'>
            <div className='grid grid-cols-4 max-w-6xl gap-8'>
                <div>
                    <h2 className='text-2xl font-bold text-white mb-4'>Foody</h2>
                    <p className='text-sm'>Delicious meals delivered fresh to your door.</p>
                </div>
                <div>
                    <h3 className='text-lg font-semibold text-white mb-3'>Quick Links</h3>
                    <ul className='space-y-2 tex-sm'>
                        <li className='hover:text-white'><Link to={'#'}>Home</Link></li>
                        <li className='hover:text-white'><Link to={'#'}>Menu</Link></li>
                        <li className='hover:text-white'><Link to={'#'}>Categories</Link></li>
                        <li className='hover:text-white'><Link to={'#'}>Contact</Link></li>
                    </ul>

                </div>
                <div>
                    <h3 className='text-lg font-semibold text-white mb-3'>Follow Us</h3>
                    <div className='flex space-x-4'>
                        <Link to={'#'} className='hover:text-whit'><FaFacebook /></Link>
                        <Link to={'#'} className='hover:text-whit'><FaTwitter /></Link>
                        <Link to={'#'} className='hover:text-whit'><FaInstagram /></Link>
                        <Link to={'#'} className='hover:text-whit'><FaDiscord /></Link>
                    </div>
                </div>
                <div>
                    <h3 className='text-lg font-semibold text-white mb-3'>Contact Us</h3>
                    <p className='text-sm'>Email:suppurt@foody.com</p>
                    <p className='text-sm'>Phone:+880123456789</p>
                    <p className='text-sm'>Dhaka,Bangladesh</p>

                </div>

            </div>

            <hr className='border-gray-700 my-8' />
            <p className='text-center text-sm text-gray-500'>&copy; {new Date().getFullYear()} Foody. All rights reserved.</p>
        </footer>

    )
}

export default Footer