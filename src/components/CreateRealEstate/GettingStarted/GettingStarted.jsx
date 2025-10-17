"use client";
import React, { useState } from "react";
import { savePurposeSelection } from "@/services/Property/gettingStartedService";

const GettingStarted = ({handleNext}) => {
  const [formData, setFormData] = useState({
    purpose: "sale",
    purposeOption: "resale",
  });
  const { purpose, purposeOption } = formData;

  const [loading, setLoading] = useState(false);

  const handleSelect = (category, option) => {
    setFormData({ purpose: category, purposeOption: option });
  };

  const isActive = (category, option) =>
    purpose === category && purposeOption === option;

  const OptionButton = ({ category, option, label }) => {
    const active = isActive(category, option);
    return (
      <button
        type="button"
        onClick={() => handleSelect(category, option)}
        className={`relative w-40 h-12 flex max-sm:w-full items-center justify-center text-sm border rounded-md transition-all 
          ${
            active
              ? "border-orange-500 text-black"
              : "border-gray-200 text-gray-600 bg-white"
          }`}
      >
        {label}
        <span
          className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center
            text-white text-[10px] font-bold transition-colors duration-200
            border border-white
            ${active ? "bg-orange-500" : "bg-gray-300"}`}
        >
          {active ? "✓" : ""}
        </span>
      </button>
    );
  };

const handleNextClick = async () => {
  try {
    setLoading(true);

    const payload = {
      purpose,
      purposeOption,
    };

    const savedProperty = await savePurposeSelection(payload);

    const propertyData = {
      id: savedProperty.id,
      purpose: savedProperty.purpose,
      purposeOption: savedProperty.purposeOption,
    };

    console.log("✅ Property saved:", propertyData);

    // send to parent for next step
    handleNext(propertyData);

  } catch (err) {
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-[89.5vh] flex items-center justify-center  p-4">
      <div className="bg-white rounded-xl border border-gray-200 w-full max-w-4xl shadow-sm">
        {/* Header */}
        <div className="p-6 pb-4">
          <h2 className="text-xl font-semibold text-black">Getting started</h2>
        </div>

        <hr className="border-t border-gray-200" />

        {/* Main Content */}
        <div className="p-6 pt-4">
          <p className="text-gray-500 mb-6 text-sm">What would you like to do?</p>

          {/* SALE and RENT */}
          <div className="flex max-sm:flex-col gap-6 mb-6">
            <div className="border border-gray-200 max-sm:w-full rounded-lg p-4 w-1/2">
              <h3 className="text-xl font-semibold mb-4">SALE</h3>
              <div className="flex gap-4">
                <OptionButton category="sale" option="new" label="New building" />
                <OptionButton category="sale" option="resale" label="Resale" />
              </div>
            </div>

            <div className="border border-gray-200 max-sm:w-full rounded-lg p-4 w-1/2">
              <h3 className="text-xl font-semibold mb-4">RENT</h3>
              <div className="flex gap-4">
                <OptionButton category="rent" option="short" label="Short term" />
                <OptionButton category="rent" option="long" label="Long term" />
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleNextClick}
              disabled={loading}
              className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-md w-[120px] disabled:opacity-50"
            >
              {loading ? "Saving..." : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
