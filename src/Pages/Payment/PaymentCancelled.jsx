import React from 'react'
import { useSearchParams } from 'react-router-dom'
const PaymentCancelled = () => {
    const [searchParams] = useSearchParams()
    const tran_id = searchParams.get("tran_id")
    return (
        <div className='min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-red-200 via-white to-red-300'>
            <div className='bg-white shadow-xl p-8 max-w-md w-full text-center rounded-2xl border-t-4 border-red-500'>
                <div className='flex justify-center items-center mb-6'>
                    <div className='w-20 h-20 flex justify-center items-center rounded-full bg-red-300'>
                        <RxCross2 className='text-red-700' size={40} />
                    </div>
                </div>

                <h2 className='text-2xl font-bold text-red-700 mb-2'>Payment Cancelled!</h2>
                <p className='text-gray-600 mb-6'>Unfortunately , your payment has been cancelled</p>
                <div className='bg-gray-100 rounded-lg p-4 text-left space-y-2 mb-6'>
                    <p className='text-sm text-gray-700'>
                        <span className='font-semibold'>Transaction ID:</span>{tran_id || "N/A"}
                    </p>
                    <p className='text-sm text-gray-700'>
                        <span className='font-semibold'>Reason:</span>Payment declined or cancelled
                    </p>
                </div>
                <div className='flex gap-4 justify-center'>
                    <Link to={'/'} className='bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg'>Go to HomePage</Link>
                    <Link to={'/payment'} className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg'>Go Try Again</Link>
                </div>

            </div>

        </div>
    )
}

export default PaymentCancelled