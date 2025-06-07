import React, { useState } from "react";
import { motion } from "framer-motion";

const RideCard = ({ driverName, vehicleType, eta, fare, onBook }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
      className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-md mx-auto"
    >
      <h3 className="text-xl font-semibold text-indigo-800 mb-2">
        {vehicleType}
      </h3>
      <p className="text-gray-700 mb-1">
        <strong>Driver:</strong> {driverName}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>ETA:</strong> {eta} min
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Fare:</strong> ₹{fare}
      </p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-semibold shadow-md transition"
        onClick={onBook}
      >
        Book Now
      </motion.button>
    </motion.div>
  );
};

const BookRide = () => {
  // Multiple ride options for demo
  const rides = [
    {
      id: 1,
      driverName: "Keshav",
      vehicleType: "EV Sedan",
      eta: 8,
      fare: 210,
    },
    {
      id: 2,
      driverName: "Khushi ",
      vehicleType: "EV Hatchback",
      eta: 5,
      fare: 180,
    },
    {
      id: 3,
      driverName: "Khushal sahu",
      vehicleType: "EV SUV",
      eta: 10,
      fare: 270,
    },
  ];

  const [bookedRide, setBookedRide] = useState(null);

  const handleBook = (ride) => {
    setBookedRide(ride);
    alert(
      `You have booked a ${ride.vehicleType} with driver ${ride.driverName}.`
    );
  };

  return (
    <div className="p-6 bg-indigo-50 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
        Book Your Ride
      </h1>
      {bookedRide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-md mx-auto mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded text-center"
        >
          Successfully booked: {bookedRide.vehicleType} with{" "}
          {bookedRide.driverName}!
        </motion.div>
      )}

      {rides.map((ride) => (
        <RideCard
          key={ride.id}
          driverName={ride.driverName}
          vehicleType={ride.vehicleType}
          eta={ride.eta}
          fare={ride.fare}
          onBook={() => handleBook(ride)}
        />
      ))}
    </div>
  );
};

export default BookRide;
