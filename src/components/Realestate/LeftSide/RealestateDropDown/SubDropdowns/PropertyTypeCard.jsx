"use client";

import { useState } from "react";

const propertyTypes = [
  "Flat",
  "House",
  "Premises",
  "Building",
  "Warehouse",
  "Plot",
];

export default function PropertyTypeCard() {
  const [selectedType, setSelectedType] = useState(null);
  const [subtype, setSubtype] = useState("Townhouse");

  return (
    <div className=" md:w-[320px] bg-white rounded-xl border border-gray-200 shadow-md p-5 space-y-5">
      {/* Property Type Title */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">
          Property type
        </p>

        {/* First row: 4 items */}
        <div className="grid grid-cols-4 gap-2 mb-2">
          {propertyTypes.slice(0, 4).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`py-2 text-xs rounded-md border font-medium transition ${
                selectedType === type
                  ? "bg-black text-white border-black"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Second row: 2 items */}
        <div className="grid grid-cols-2 gap-2">
          {propertyTypes.slice(4).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`py-2 text-xs rounded-md border font-medium transition ${
                selectedType === type
                  ? "bg-black text-white border-black"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Subtype Input */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-2">Subtype</p>
        <input
          type="text"
          value={subtype}
          onChange={(e) => setSubtype(e.target.value)}
          className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Apply Button */}
      <button
        className="w-full py-2 text-sm font-semibold bg-black text-white rounded-md hover:opacity-90 transition"
        onClick={() => {
          alert(`Selected: ${selectedType || "None"}\nSubtype: ${subtype}`);
        }}
      >
        Apply
      </button>
    </div>
  );
}
