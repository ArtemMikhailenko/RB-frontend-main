"use client";

import Image from "next/image";
import React, { useState } from "react";
import { createOpportunity } from "@/services/opportunityService";

const AddvanceOpportunityForm = () => {
  const [selectedType, setSelectedType] = useState("rental");
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [location, setLocation] = useState("New York City"); // ✅ new state
  const [price,setPrice]=useState(190000)
  const [propertyType, setPropertyType] = useState("");


  const toggleOptions = [
    "Garden","Pool","Garage","Terrace","Community Parking","Community Pool",
    "Lift","New Building","Resale","Bank","Sea Views",
  ];
  const [toggles, setToggles] = useState(
    toggleOptions.reduce((acc, item) => ({ ...acc, [item]: false }), {})
  );

  const toggleSwitch = (label) => setToggles({ ...toggles, [label]: !toggles[label] });

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => value > 0 && setter(value - 1);
  const handleInputChange = (setter, e) => {
    const val = parseInt(e.target.value, 10);
    setter(isNaN(val) || val < 0 ? 0 : val);
  };


  // ✅ Submit handler
  const handleSubmit = async () => {
    const payload = {
      method: "ADVANCED",
      need: selectedType === "buy" ? "BUYER" : "RENTAL",
      location,
      bedrooms,
      bathrooms,
      toggles,
      price,
      propertyType
    };

    try {
      const result = await createOpportunity(payload);
      alert("✅ Opportunity created successfully!");
      console.log("Result:", result);
    } catch (err) {
      alert("❌ Failed: " + err.message);
    }
  };
  return (
    <div className="sm:max-w-[600px] mx-auto bg-white sm:p-5 py-5 px-2 text-sm font-medium space-y-6 mt-5 max-sm:mx-3">
      {/* Title */}
      <div>
        <p className="text-xs sm:text-[18px] font-semibold mb-4">NEW REQUEST</p>
        <div className="flex items-center gap-6">
          {/* Buy Option */}
          <div
            onClick={() => setSelectedType("buy")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center
                ${
                  selectedType === "buy"
                    ? "bg-orange-500 border-orange-500"
                    : "border-gray-400"
                }`}
            >
              {selectedType === "buy" && (
                <span className="text-white text-[10px] font-bold">✔</span>
              )}
            </div>
            <span className="text-sm">Buy</span>
          </div>

          {/* Rental Option */}
          <div
            onClick={() => setSelectedType("rental")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center
                ${
                  selectedType === "rental"
                    ? "bg-orange-500 border-orange-500"
                    : "border-gray-400"
                }`}
            >
              {selectedType === "rental" && (
                <span className="text-white text-[10px] font-bold">✔</span>
              )}
            </div>
            <span className="text-sm">Rental</span>
          </div>
        </div>
      </div>

      {/* Location */}
     <div className="border border-[#EAEAEF] px-4 py-2 rounded-[8px]">
      <label className="text-xs text-[#7D869D]">Where</label>
        <input
        type="text" 
        className="w-full outline-none rounded-md placeholder-gray-400"
        value={location} // ✅ controlled
          onChange={(e) => setLocation(e.target.value)}
      />
     </div>

      {/* Bedrooms & Bathrooms */}
      <div className="flex w-full gap-5 max-sm:flex-col">
        {/* Bedrooms */}
        <div className="">
          <label className="block mb-1">BEDROOMS</label>
          <div className="flex items-center rounded-md overflow-hidden">
            <button
              className="w-15 h-12 bg-gray-100"
              onClick={() => handleDecrement(setBedrooms, bedrooms)}
            >
              -
            </button>
            <input
              type="number"
              value={bedrooms}
              onChange={(e) => handleInputChange(setBedrooms, e)}
              className="w-12 text-center outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min={0}
            />
            <button
              className="w-15 h-12 bg-gray-100"
              onClick={() => handleIncrement(setBedrooms, bedrooms)}
            >
              +
            </button>
          </div>
        </div>

        {/* Bathrooms */}
        <div className="">
          <label className="block mb-1">BATHROOMS</label>
          <div className="flex rounded-md overflow-hidden">
            <button
              className="w-15 h-12 bg-gray-100"
              onClick={() => handleDecrement(setBathrooms, bathrooms)}
            >
              -
            </button>
            <input
              type="number"
              value={bathrooms}
              onChange={(e) => handleInputChange(setBathrooms, e)}
               className="w-12 text-center outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min={0}
            />
            <button
              className="w-15 h-12 bg-gray-100"
              onClick={() => handleIncrement(setBathrooms, bathrooms)}
            >
              +
            </button>
          </div>
        </div>
      </div>

     <div className="flex max-sm:flex-col gap-4">
     <div className="border border-[#EAEAEF] px-4 py-2 rounded-[8px] w-full">
      <label className="text-xs text-[#7D869D]">Budget</label>
        <input
        type="text" 
        className="w-full outline-none rounded-md placeholder-gray-400"
        value={price} // ✅ controlled
          onChange={(e) => setPrice(e.target.value)}
      />
     </div>
 <div className="border border-[#EAEAEF] px-4 py-2 rounded-[8px] w-full">
  <label className="text-xs text-[#7D869D] mb-1 block">Property type</label>
  <select
    name="propertyType"
    className="w-full text-sm outline-none bg-transparent -ml-1"
  value={propertyType}
  onChange={(e) => setPropertyType(e.target.value)}
  >
    <option value="" disabled>
      Select property type
    </option>
    <option value="apartment">Apartment</option>
    <option value="house">House</option>
    <option value="premises">Premises</option>
    <option value="building">Building</option>
    <option value="warehouse">Warehouse</option>
    <option value="land">Land</option>
    <option value="parking space">Parking space</option>
    <option value="storage room">Storage rooms</option>
  </select>
</div>

     </div>

      {/* Toggles (Switches at the end) */}
       <div className="mb-1 font-bold">Features</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2">
        {toggleOptions.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between sm:text-[13px] text-[11px] px-1 sm:px-2 py-2 rounded-md"
          >
            <span>{item}</span>
            <button
              onClick={() => toggleSwitch(item)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-200 ${
                toggles[item] ? "bg-[#ED8F03]" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white shadow-md transform duration-200 ${
                  toggles[item] ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-4 gap-2">
        <button className="flex-1 bg-[#F2F2F2] text-black py-2 rounded-md">
          Cancel
        </button>
        <button className="flex-1 bg-black text-white py-2 rounded-md"  onClick={handleSubmit}>
          Confirm
        </button>
      </div>
    </div>
  );
};

// Component for preference tags
const PreferenceChip = ({ label, onRemove }) => (
  <div className="flex items-center  p-2 sm:py-3 gap-6 border border-[#EAEAEF] rounded sm:text-sm text-xs">
    <span>{label}</span>
    <button
      className="ml-1 text-gray-500 hover:text-gray-700 text-xl"
      onClick={onRemove}
    >
      &times;
    </button>
  </div>
);

export default AddvanceOpportunityForm;
