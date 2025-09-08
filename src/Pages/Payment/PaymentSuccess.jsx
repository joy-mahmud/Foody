import React from 'react'
import { useSearchParams } from 'react-router-dom'
const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const tran_id = searchParams.get("tran_id")
    const amount = searchParams.get("amount")
    return (
        <div>
            <p>status: Payment successfull</p>
            <p>transaction id:{tran_id}</p>
            <p>amount:{amount}</p>
        </div>
    )
}

export default PaymentSuccess