import React from "react";
import { motion } from "framer-motion";

const PaymentModal = ({ ride, onConfirm, onCancel }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onCancel}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-indigo-900">Confirm Payment</h2>
        <p className="mb-4">
          Pay <span className="font-semibold">₹{ride.fare}</span> to book your{" "}
          <span className="font-semibold">{ride.vehicleType}</span> with{" "}
          <span className="font-semibold">{ride.driverName}</span>.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentModal;
