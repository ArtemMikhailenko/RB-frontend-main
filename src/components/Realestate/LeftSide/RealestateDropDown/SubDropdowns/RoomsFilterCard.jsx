"use client";

import { useState } from "react";

const roomOptions = ["Any", "1", "2", "3", "4 or more"];

export default function RoomsFilterCard() {
  const [selectedBedroom, setSelectedBedroom] = useState("Any");
  const [selectedBathroom, setSelectedBathroom] = useState("Any");

  return (
    <div className="md:w-87 bg-white rounded-xl border border-gray-200 shadow-md p-5 space-y-6">
      {/* Bedrooms Section */}
      <div>
        <p className="text-base font-semibold text-gray-800 mb-3">Bedrooms</p>
        <div className="flex gap-1 flex-wrap">
          {roomOptions.map((option) => (
            <button
              key={`bed-${option}`}
              onClick={() => setSelectedBedroom(option)}
              className={`px-4 py-2 text-sm rounded-full border font-medium transition ${
                selectedBedroom === option
                  ? "bg-black text-white border-black"
                  : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms Section */}
      <div>
        <p className="text-base font-semibold text-gray-800 mb-3">Bathrooms</p>
        <div className="flex gap-1 flex-wrap">
          {roomOptions.map((option) => (
            <button
              key={`bath-${option}`}
              onClick={() => setSelectedBathroom(option)}
              className={`px-4 py-2 text-sm rounded-full border font-medium transition ${
                selectedBathroom === option
                  ? "bg-black text-white border-black"
                  : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button
        className="w-full py-2 text-sm font-semibold bg-black text-white rounded-md hover:opacity-90 transition"
        onClick={() => {
          alert(`Bedrooms: ${selectedBedroom}\nBathrooms: ${selectedBathroom}`);
        }}
      >
        Apply
      </button>
    </div>
  );
}
