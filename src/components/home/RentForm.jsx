"use client";
import React from "react";

const RentForm = ({
  marketOptions,
  typeOptions,
  bedroomOptions,
  handleMarketChange,
  handleTypeChange,
  handleBedroomChange,
  activeDropdown,
  toggleDropdown,
  handleSubmit,
}) => {
  return (
    <form>
      {/* Apartment Type Dropdown */}
      <div className="relative w-full mb-1 mt-3">
        <div
          className="peer w-full bg-transparent text-gray-400 border-b border-[#DFDFDF] pt-6 pr-6 outline-none appearance-none cursor-pointer flex justify-between"
          onClick={() => toggleDropdown("market")}
        >
          <span>
            {marketOptions.length > 0 ? marketOptions.join(", ") : <>&nbsp;</>}
          </span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
            {activeDropdown === "market" ? (
              // Red Cross when open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586L15.293 3.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 011.414-1.414L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Down Arrow when closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>

        {activeDropdown === "market" && (
          <div className="absolute mt-2 w-full bg-white text-gray-400 rounded shadow z-10 text-[14px]">
            {["New Building", "Resales listing"].map((option) => (
              <label
                key={option}
                className="flex items-center px-4 py-2  cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={marketOptions.includes(option)}
                  onChange={() => handleMarketChange(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        )}

        <label
          htmlFor="search"
          className="absolute left-0 text-gray-400 text-base transition-all duration-200 ease-in-out
            peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
            peer-focus:top-1 peer-focus:text-sm peer-focus:text-white
            peer-[&:not([value=''])]:top-1 peer-[&:not([value=''])]:text-sm peer-[&:not([value=''])]:text-white"
        >
          Market
        </label>
      </div>
      {/* Flat Dropdown */}
      <div className="relative w-full mb-1">
        {/* Custom Dropdown Field */}
        <div
          className={`peer w-full bg-transparent border-b border-[#DFDFDF] pt-6 pr-6 outline-none appearance-none cursor-pointer flex justify-between
          ${activeDropdown === "type" ? "text-gray-300" : "text-gray-400"}`}
          onClick={() => toggleDropdown("type")}
        >
          <span>
            {/* Show selected items or keep empty */}
            {typeOptions.length > 0 ? typeOptions.join(", ") : <>&nbsp;</>}
          </span>
          {/* Custom arrow */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
            {activeDropdown === "type" ? (
              // Red Cross when dropdown open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586L15.293 3.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 011.414-1.414L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Down Arrow when dropdown closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Dropdown Options */}
        {activeDropdown === "type" && (
          <div className="absolute mt-2 w-full bg-white text-gray-400  rounded shadow z-10">
            {[
              "Houses",
              "Flat (Apartments)",
              "Commercial Premises",
              "Warehouses",
              "Land",
              "Storage Rooms",
              "Garages",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center px-4 py-2  cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={typeOptions.includes(option)}
                  onChange={() => handleTypeChange(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        )}

        {/* Floating Label */}
        <label
          htmlFor="flat"
          className={`absolute left-0 text-white text-base transition-all duration-200 ease-in-out
            peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
            peer-focus:top-1 peer-focus:text-sm peer-focus:text-white
            peer-[&:not([value=''])]:top-1 peer-[&:not([value=''])]:text-sm peer-[&:not([value=''])]:text-white"
          }`}
        >
          Type
        </label>
      </div>

      {/* Bedrooms Dropdown */}
      <div className="relative w-full mb-1">
        <div
          className="peer w-full bg-transparent text-gray-400 border-b border-[#DFDFDF] pt-6 pr-6 outline-none appearance-none cursor-pointer flex justify-between"
          onClick={() => toggleDropdown("bedroom")}
        >
          <span
            className={`${bedroomOptions.length > 0 ? "text-gray-400" : ""}`}
          >
            {/* Show selected options if any */}
            {bedroomOptions.length > 0 ? (
              bedroomOptions.join(", ")
            ) : (
              <>&nbsp;</>
            )}
          </span>
          {/* Custom Arrow */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
            {activeDropdown === "bedroom" ? (
              // Red Cross when dropdown open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586L15.293 3.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 011.414-1.414L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Down Arrow when dropdown closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Dropdown Options */}
        {activeDropdown === "bedroom" && (
          <div className="absolute mt-2 w-full bg-white text-gray-400  rounded shadow z-10">
            {["1", "2", "3", "4", "5", "6", "7", "8+"].map((option) => (
              <label
                key={option}
                className="flex items-center px-4 py-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={bedroomOptions.includes(option)}
                  onChange={() => handleBedroomChange(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        )}

        <label
          htmlFor="bedrooms"
          className={`absolute left-0 text-white text-base transition-all duration-200 ease-in-out
            peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
            peer-focus:top-1 peer-focus:text-sm peer-focus:text-white
            peer-[&:not([value=''])]:top-1 peer-[&:not([value=''])]:text-sm peer-[&:not([value=''])]:text-white"
            }`}
        >
          Bedrooms
        </label>
      </div>

      {/* Monthly Rent Dropdown */}
      <div className="relative w-full mb-1">
        <select
          id="rent"
          defaultValue=""
          className="peer w-full bg-transparent text-gray-400 border-b border-[#DFDFDF] pt-6 pr-6 outline-none appearance-none cursor-pointer"
          required
          onClick={() => toggleDropdown("monthlyRent")}
        >
          <option value="" disabled hidden></option>
          <option value="All">&nbsp;&nbsp;All</option>
          <option value="0-100">&nbsp;&nbsp;From €0 to €100</option>
          <option value="250">&nbsp;&nbsp;Up to €250</option>
          <option value="500">&nbsp;&nbsp;Up to €500</option>
          <option value="750">&nbsp;&nbsp;Up to €750</option>
          <option value="1000">&nbsp;&nbsp;Up to €1,000</option>
          <option value="2500">&nbsp;&nbsp;Up to €2,500</option>
          <option value="5000">&nbsp;&nbsp;Up to €5,000</option>
          <option value="10000">&nbsp;&nbsp;Up to €10,000</option>
          <option value="15000">&nbsp;&nbsp;Up to €15,000</option>
          <option value="15000+">&nbsp;&nbsp;More than €15,000</option>
        </select>

        {/* Custom arrow */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <label
          htmlFor="rent"
          className="absolute left-0 text-gray-400 text-base transition-all duration-200 ease-in-out
        peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-white
        peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-white"
        >
          Monthly rent range
        </label>
      </div>

      {/* Town Dropdown */}
      <div className="relative w-full">
        <input
          id="town"
          type="text"
          placeholder=" "
          className="peer w-full bg-transparent text-gray-400 border-b border-[#DFDFDF]  pt-6 outline-none"
          required
          onClick={() => toggleDropdown("places")}
        />
        <label
          htmlFor="town"
          className="absolute left-0 text-gray-400 text-base transition-all duration-200 ease-in-out
           peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
           peer-focus:top-1 peer-focus:text-sm peer-focus:text-white
           peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-white"
        >
          Town, address RC
        </label>
      </div>

      <button
        type="submit"
        className="sm:w-1/4 w-[100px] bg-white text-black py-2 rounded mt-4 cursor-pointer hover:bg-gray-300"
      >
        Search
      </button>
    </form>
  );
};

export default RentForm;
