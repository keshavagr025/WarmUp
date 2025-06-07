import React from 'react';

const RideCard = ({ driverName, vehicleType, eta, fare, onBook }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-md mx-auto hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{vehicleType}</h2>
          <p className="text-sm text-gray-500">Driver: {driverName}</p>
        </div>
        <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
          ETA: {eta} mins
        </span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold text-gray-700">₹{fare}</p>
        <button
          onClick={onBook}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RideCard;
