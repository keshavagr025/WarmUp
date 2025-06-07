import React from 'react';
import RideCard from '../components/Ridecard';

const BookRide = () => {
  const handleBook = () => {
    alert('Ride booked!');
  };

  return (
    <div className="p-4">
      <RideCard
        driverName="Ravi Singh"
        vehicleType="EV Sedan"
        eta={8}
        fare={210}
        onBook={handleBook}
      />
    </div>
  );
};

export default BookRide;
