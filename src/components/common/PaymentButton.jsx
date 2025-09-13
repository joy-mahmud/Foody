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
            window.location.href = res.data.gateway_url;
        }

    }
    return (
        <button className='px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer'>
            Pay With SSLCOMMERZ
        </button>
    )
}

export default PaymentButton