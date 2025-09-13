
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";

const PaymentSuccess = () => {
    const { tran_id, amount } = useParams();
    const [showConfetti, setShowConfetti] = useState(true);

    // Stop confetti after 5s
    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-6">
            {showConfetti && (
                <ConfettiExplosion
                    force={0.7}
                    duration={3000}
                    particleCount={200}
                    width={1600}
                />
            )}

            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border-t-4 border-green-500">
                <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-green-700 mb-2">
                    Payment Successful!
                </h1>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your payment has been confirmed.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 text-left space-y-2 mb-6">
                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Transaction ID:</span> {tran_id}
                    </p>
                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Amount Paid:</span> ৳{amount}
                    </p>
                </div>

                <Link
                    to="/"
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;
