import React from "react";

const vehicleTypes = [
  { id: "all", label: "All" },       // <-- All option added
  { id: "sedan", label: "EV Sedan" },
  { id: "hatchback", label: "EV Hatchback" },
  { id: "suv", label: "EV SUV" },
];

const VehicleSelector = ({ selectedType, onSelect }) => {
  return (
    <div className="flex justify-center gap-4 my-6">
      {vehicleTypes.map((vehicle) => (
        <button
          key={vehicle.id}
          onClick={() => onSelect(vehicle.id)}
          className={`px-5 py-2 rounded-lg font-semibold transition
            ${
              selectedType === vehicle.id
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-300"
            }`}
        >
          {vehicle.label}
        </button>
      ))}
    </div>
  );
};

export default VehicleSelector;
