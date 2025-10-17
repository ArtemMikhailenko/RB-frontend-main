"use client";

import React, { useState } from "react";
import { savePropertyType } from "@/services/Property/propertyOptionsService";

export default function PropertySelector({ handleNext, propertyid }) {
  const [propertyType, setPropertyType] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);

  const propertyTypes = [
    { key: "apartment", label: "Apartment" },
    { key: "house", label: "House" },
    { key: "premises", label: "Premises" },
    { key: "building", label: "Building" },
    { key: "warehouse", label: "Warehouse" },
    { key: "parking", label: "Parking Space" },
    { key: "storage", label: "Storage Rooms" },
    { key: "lands", label: "Lands" },
  ];

  const handleSelectType = (key) => {
    setPropertyType(key);
  };

  const toggleTag = (tag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleNextClick = async () => {
    if (!propertyType) {
      alert("Please select a property type.");
      return;
    }

    const hasCategory = category.trim() !== "";
    const hasTag = tags.length > 0;

    if (!hasCategory && !hasTag) {
      alert("Please enter a category or select at least one tag.");
      return;
    }

    try {
      const response = await savePropertyType({
        propertyId: propertyid, // 👈 comes from parent
        propertyType,
        category,
        tags,
      });

      handleNext({propertyType}); // pass saved data up to parent
    } catch (error) {
      alert("Error saving property type. Please try again.");
    }
  };

  return (
    <div className="flex p-6 bg-white max-md:flex-col max-md:gap-5">
      {/* Left Side */}
      <div className="md:w-[35%] md:pr-10 relative">
        <h2 className="text-lg font-semibold mb-2">
          Let’s start with what are you publish?
        </h2>
        <p className="text-sm text-gray-500">
          This helps us better understand the real estate and find the right
          candidates. It’s the first thing they’ll see.
        </p>
        <div className="hidden md:block absolute top-0 bottom-0 right-[7.5px] transform z-10">
          <div className="absolute w-4 h-4 rounded-full bg-white border border-gray-400 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 md:pl-10 md:border-l border-l-gray-200">
        <h3 className="text-lg font-semibold mb-4">Select property type</h3>

        {/* Property Type Grid */}
        <div className="grid grid-cols-4 gap-2 mb-6 lg:grid-cols-5 lg:gap-3">
          {propertyTypes.map((item) => {
            const isSelected = propertyType === item.key;
            return (
              <div
                key={item.key}
                onClick={() => handleSelectType(item.key)}
                className={`relative cursor-pointer border rounded-lg flex flex-col gap-3 justify-center items-center px-3 py-8 transition-all
                  ${isSelected ? "border-orange-500 bg-blue-50" : "border-gray-200 bg-[#FBFCFD]"}`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                    ✓
                  </div>
                )}

                <img
                  src={`/icons/CreateRealEstate/propertytype/${item.key}.svg`}
                  alt={item.label}
                  className="w-10 h-10"
                />
                <span className="capitalize sm:text-[11px] text-[9px] md:text-sm text-black font-bold">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Category Box */}
        <div className="mb-6 border border-gray-300 px-4 py-2 rounded-md">
          <label htmlFor="category" className="text-sm text-gray-600 block">
            Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Search or choose"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 sm:text-sm rounded-md outline-none font-bold text-xs"
            required
          />
        </div>

        {/* Tags */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {["Apartment", "High rise", "Penthouse"].map((tag) => {
            const isSelected = tags.includes(tag);
            return (
              <div
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`cursor-pointer text-sm px-6 py-1.5 rounded-md font-bold transition-all bg-gray-200 
                  ${isSelected ? " border border-black text-black" : "border border-transparent text-gray-700"}`}
              >
                {tag}
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <div>
          <button
            onClick={handleNextClick}
            className="bg-black text-white text-sm px-10 py-1.5 rounded-md hover:bg-gray-900"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
