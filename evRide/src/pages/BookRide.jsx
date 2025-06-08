import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import RideCard from "../components/Ridecard";
import { RewardContext } from "../context/RewardContext";
import PaymentModal from "../components/PaymentModal";
import VehicleSelector from "../components/VehicleSelector";

const BookRide = () => {
  const { addRewardPoints } = useContext(RewardContext);
  const [selectedRide, setSelectedRide] = useState(null);
  const [bookedRide, setBookedRide] = useState(null);
  const [selectedType, setSelectedType] = useState("all");

  const rides = [
    { id: 1, driverName: "Keshav", vehicleType: "sedan", eta: 8, fare: 210 },
    { id: 2, driverName: "Khushi", vehicleType: "hatchback", eta: 5, fare: 180 },
    { id: 3, driverName: "Khushal Sahu", vehicleType: "suv", eta: 10, fare: 270 },
    { id: 4, driverName: "Ravi", vehicleType: "sedan", eta: 6, fare: 220 },
    { id: 5, driverName: "Neha", vehicleType: "hatchback", eta: 7, fare: 175 },
    { id: 6, driverName: "Amit", vehicleType: "suv", eta: 9, fare: 260 },
    { id: 7, driverName: "Sneha", vehicleType: "sedan", eta: 4, fare: 205 },
    { id: 8, driverName: "Raj", vehicleType: "hatchback", eta: 8, fare: 185 },
    { id: 9, driverName: "Priya", vehicleType: "suv", eta: 6, fare: 280 },
    { id: 10, driverName: "Vikram", vehicleType: "sedan", eta: 7, fare: 215 },
    { id: 11, driverName: "Anita", vehicleType: "hatchback", eta: 5, fare: 190 },
  ];

  // Filter rides based on selectedType
  const filteredRides =
    selectedType === "all"
      ? rides
      : rides.filter((ride) => ride.vehicleType === selectedType);

  const handleBook = (ride) => {
    setSelectedRide(ride);
  };

  const handleConfirmPayment = () => {
    setBookedRide(selectedRide);
    addRewardPoints(20);
    setSelectedRide(null);
    alert(`✅ Payment successful! You booked a ${selectedRide.vehicleType} with ${selectedRide.driverName}.`);
  };

  const handleCancelPayment = () => {
    setSelectedRide(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-indigo-200 p-6 md:p-10">
      <h1 className="text-5xl font-extrabold text-center text-indigo-800 drop-shadow-lg mb-10">
        🚗 Book Your EV Ride
      </h1>

      {/* Vehicle type selector */}
      <VehicleSelector selectedType={selectedType} onSelect={setSelectedType} />

      {bookedRide && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-green-100 border border-green-400 text-green-900 px-6 py-4 rounded-lg shadow-md max-w-2xl mx-auto mb-8 text-center font-medium"
        >
          🎉 <span className="font-semibold">{bookedRide.vehicleType}</span> booked with{" "}
          <span className="font-semibold">{bookedRide.driverName}</span> successfully!
        </motion.div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
        {filteredRides.map((ride) => (
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

      {selectedRide && (
        <PaymentModal
          ride={selectedRide}
          onConfirm={handleConfirmPayment}
          onCancel={handleCancelPayment}
        />
      )}
    </div>
  );
};

export default BookRide;
