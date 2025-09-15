import React, { useEffect, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'
import { FaCheck } from 'react-icons/fa'
import { Link, useSearchParams } from 'react-router-dom'
const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const tran_id = searchParams.get("tran_id")
    const amount = searchParams.get("amount")
    const [showConfetti, setShowConfetti] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 5000)
        return clearTimeout(timer)
    }, [])
    return (
        <div className='min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-green-200 via-white to-green-300'>
            {
                showConfetti && (
                    <ConfettiExplosion
                        force={.8}
                        duration={4000}
                        particleCount={200}
                        width={1600}
                    />
                )
            }
            <div className='bg-white shadow-xl p-8 max-w-md w-full text-center rounded-2xl border-t-4 border-green-500'>
                <div className='flex justify-center items-center mb-6'>
                    <div className='w-20 h-20 flex justify-center items-center rounded-full bg-green-200'>
                        <FaCheck className='text-green-700' size={30} />
                    </div>
                </div>

                <h2 className='text-2xl font-bold text-green-700 mb-2'>Payment Successfull!</h2>
                <p className='text-gray-600 mb-6'>Thank you for your purchase. Your payment has been confirmed</p>
                <div className='bg-gray-100 rounded-lg p-4 text-left space-y-2 mb-6'>
                    <p className='text-sm text-gray-700'>
                        <span className='font-semibold'>Transaction ID:</span>{tran_id}
                    </p>
                    <p className='text-sm text-gray-700'>
                        <span className='font-semibold'>Amount Paid:</span>${amount}
                    </p>
                </div>
                <Link to={'/'} className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg'>Go to HomePage</Link>
            </div>

        </div>
    )
}

export default PaymentSuccess