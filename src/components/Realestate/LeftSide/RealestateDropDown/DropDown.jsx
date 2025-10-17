"use client";

import React, { useState } from "react";
import PropertyTypeCard from './SubDropdowns/PropertyTypeCard';
import PriceFilterCard from './SubDropdowns/PriceFilterCard';
import RoomsFilterCard from './SubDropdowns/RoomsFilterCard';
import ListingStatusCard from './SubDropdowns/ListingStatusCard';
import ListingFeaturesCard from './SubDropdowns/ListingFeaturesCard';

const labels = ["Property type", "Price", "Beds & Bath", "Listing Status", "More"];

const DropDown = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleToggle = (label) => {
    setActiveComponent((prev) => (prev === label ? null : label));
  };

  const renderComponent = (label) => {
    switch (label) {
      case "Property type":
        return <PropertyTypeCard />;
      case "Price":
        return <PriceFilterCard />;
      case "Beds & Bath":
        return <RoomsFilterCard />;
      case "Listing Status":
        return <ListingStatusCard />;
      case "More":
        return <ListingFeaturesCard />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="flex flex-col mt-6">
        <div className="flex flex-wrap gap-1 relative max-md:flex-col ">
          {labels.map((label) => (
            <div key={label} className="">
              {/* Label button with SVG inside */}
              <button
                onClick={() => handleToggle(label)}
                className=" cursor-pointer relative flex items-center gap-1 px-2 py-2 text-[14px] font-bold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm pr-7 max-md:w-full"
              >
                {label}

                {/* SVG Dropdown Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Render dropdown content if active */}
              {activeComponent === label && (
                <div
                  className={`absolute z-20 mt-2 max-md:w-full ${
                    label === "Listing Status" || label === "More"
                      ? "right-0"
                      : ""
                  }`}
                >
                  {renderComponent(label)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
