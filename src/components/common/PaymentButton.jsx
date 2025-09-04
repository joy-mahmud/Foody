import axios from 'axios'
import { BASE_URL } from '../../utils/constants'

const PaymentButton = ({ amount, totalItems, user }) => {
    console.log(user)

    const handlePayment = async () => {
        const res = await axios.post(`${BASE_URL}/api/payment-init`, {
            amount: Number(amount).toFixed(2),
            cus_name: user?.displayName ?? "joy",
            cus_email: user.email,
            num_of_items: totalItems || 1
        })
        if (res.status === 200) {
            console.log("request sent successfully")
        }

    }
    return (
        <button onClick={handlePayment} className='px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 hover:cursor-pointer'>
            Pay With SSLCOMMERZ
        </button>
    )
}

export default PaymentButton