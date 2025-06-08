import React from "react";

const RideCard = ({ driverName, vehicleType, eta, fare, onBook }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{vehicleType}</h2>
          <p className="text-sm text-gray-600">Driver: {driverName}</p>
        </div>
        <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded-full">
          ETA: {eta} mins
        </span>
      </div>

      <p className="text-lg font-semibold text-gray-700">₹{fare}</p>

      <button
        onClick={onBook}
        className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition duration-200"
      >
        Book Now
      </button>
    </div>
  );
};

export default RideCard;
