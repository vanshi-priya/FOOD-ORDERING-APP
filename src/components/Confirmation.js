import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalAmount } = location.state || {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-6 text-green-600">
          Payment Successful!
        </h2>
        <p className="text-gray-700 mb-4">
          Thank you for your payment of{" "}
          <span className="text-green-500 font-semibold">₹{totalAmount}</span>
        </p>
        <button
          className="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 mt-6"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
