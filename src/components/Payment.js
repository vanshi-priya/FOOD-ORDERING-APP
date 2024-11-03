import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import QR from "../images/QR.jpg"; // Ensure the QR code image is in this path

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalAmount } = location.state || {};
  const [loading, setLoading] = useState(false);

  const handlePaymentSuccess = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(clearCart());
      navigate("/confirmation", { state: { totalAmount } });
    }, 2000); // Simulate a 2-second loading time
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Payment Gateway
        </h2>
        <p className="text-gray-700 text-center mb-2">
          You are about to pay{" "}
          <span className="text-green-500 font-semibold">₹{totalAmount}</span>
        </p>
        <p className="text-gray-500 text-sm text-center mb-6">
          Complete the payment securely using one of the options below.
        </p>

        {loading ? (
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-700">Processing your payment...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <button
              className="py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300"
              onClick={handlePaymentSuccess}
            >
              Pay ₹{totalAmount} with Credit Card
            </button>
            <button
              className="py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300"
              onClick={handlePaymentSuccess}
            >
              Pay ₹{totalAmount} with UPI
            </button>
            <button
              className="py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg transition duration-300"
              onClick={handlePaymentSuccess}
            >
              Pay ₹{totalAmount} with Net Banking
            </button>

            <div className="flex flex-col items-center mt-6">
              <img src={QR} alt="QR Code for Payment" className="w-32 h-32" />
              <p className="text-gray-600 text-sm mt-2">Scan to Pay via UPI</p>
            </div>
          </div>
        )}

        <p className="text-gray-500 text-center text-sm mt-6">
          Powered by{" "}
          <a href="https://razorpay.com" className="text-blue-500 underline">
            Razorpay
          </a>
        </p>
      </div>
    </div>
  );
};

export default Payment;
