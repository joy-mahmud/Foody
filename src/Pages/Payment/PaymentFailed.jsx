
import { RxCross2 } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";

const PaymentFailed = () => {
    const { tran_id } = useParams();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-200 px-6">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border-t-4 border-red-500">
                <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> */}
                        <RxCross2 className="text-red-700" size={40} />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-red-700 mb-2">
                    Payment Failed!
                </h1>
                <p className="text-gray-600 mb-6">
                    Unfortunately, your payment could not be processed.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 text-left space-y-2 mb-6">
                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Transaction ID:</span> {tran_id || "N/A"}
                    </p>
                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Reason:</span> Payment declined or cancelled.
                    </p>
                </div>

                <div className="flex gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-block bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        Go to Homepage
                    </Link>
                    <Link
                        to="/checkout"
                        className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Try Again
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailed;
