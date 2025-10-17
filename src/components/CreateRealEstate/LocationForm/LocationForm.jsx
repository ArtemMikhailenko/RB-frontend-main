"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { savePropertyLocation } from "@/services/Property/propertyLocationService";

const LocationForm = ({ propertyid, handleNext }) => {
  const [address, setAddress] = useState("");
  const [searchedAddress, setSearchedAddress] = useState("");

  // ✅ State matches DTO
  const [location, setLocation] = useState({
    propertyId: propertyid || "", // make sure propertyId is defined
    street: "",
    number: "",
    floor: "",
    door: "",
    zipcode: "",
    city: "",
    latitude: null,
    longitude: null,
    showExactLocation: false,
  });

  // If propertyid comes later, update state
  useEffect(() => {
    if (propertyid) {
      setLocation((prev) => ({ ...prev, propertyId: propertyid }));
    }
  }, [propertyid]);

  const updateLocationField = (key, value) => {
    setLocation((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (address.trim()) {
      setSearchedAddress(address);
      // address is optional, not in DTO
    }
  };

  const handleNextClick = async () => {
    const requiredFields = ["street", "number", "zipcode", "city"];
    const hasAll = requiredFields.every((field) =>
      location[field]?.toString().trim()
    );

    if (!hasAll) {
      alert("Please fill all required fields (Street, Number, Zip, City).");
      return;
    }

    try {
      const response = await savePropertyLocation(
        location.propertyId,
        location
      );
      console.log("✅ Location saved:", response);
      handleNext?.();
    } catch (err) {
      alert("❌ Error saving property location. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row text-[#101010]">
      {/* Left Section */}
      <div className="md:w-[40%] w-full border-r border-gray-200 max-md:p-6 md:px-12 z-10 bg-white relative flex flex-col md:gap-65 gap-4">
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Take in mind .</h2>
          <p className="text-sm text-gray-500 max-w-xs">
            The location is one of the most important factors in determining a
            home’s long-term appreciation potential! see !
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">All it’s right ?</h2>
          <p className="text-sm text-gray-500 max-w-xs">
            Introduce and check the details to get more productivity on your
            management
          </p>
        </div>
        <div className="hidden md:block absolute top-0 bottom-0 right-[7.5px] transform z-10">
          {[0, 366].map((pos, idx) => (
            <div
              key={idx}
              className="absolute w-4 h-4 rounded-full bg-white border border-gray-400 flex items-center justify-center"
              style={{ top: `${pos}px`, left: "0px" }}
            >
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-[60%] w-full p-6 md:p-12 bg-white">
        {/* Map Location Section */}
        <div
          className="h-[250px] bg-cover bg-center rounded-md sm:p-4 p-2 flex items-start justify-start"
          style={{
            backgroundImage:
              "url('/images/Partners/company/Card-Poster-1.png')",
          }}
        >
          <form
            onSubmit={handleSearch}
            className="bg-white p-2 rounded-md shadow-md w-full border border-[#EAEAEF]"
          >
            <label htmlFor="address" className="block text-xs font-medium">
              Address
            </label>
            <div className="flex items-center gap-2">
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Start entering your address"
                className="flex-1 sm:text-sm rounded-md outline-none font-bold text-xs"
              />
              <button
                type="submit"
                className="bg-black text-white sm:px-4 px-2 py-2 rounded-md flex items-center justify-center text-xs"
              >
                <Search className="w-4 h-4 mr-2" />
                Show
              </button>
            </div>
          </form>
        </div>

        {/* Show Exact Location Toggle */}
        <div className="flex items-center gap-5 my-5 bg-white text-sm">
          <span>Show exact location</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer focus:outline-0"
              checked={location.showExactLocation}
              onChange={(e) =>
                updateLocationField("showExactLocation", e.target.checked)
              }
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-black transition duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />
          </label>
        </div>

        {/* Address Details Form */}
        <div className="space-y-4">
          <h3 className="text-base font-bold">Confirm the address</h3>

          {["street", "number", "floor", "door", "zipcode", "city"].map(
            (field) => (
              <div
                key={field}
                className="border border-gray-300 px-4 py-2 rounded-md"
              >
                <label className="block text-xs text-gray-500 capitalize">
                  {field === "zipcode" ? "Zip code" : field}
                </label>
                <input
                  type={
                    ["number", "zipcode", "floor"].includes(field)
                      ? "number"
                      : "text"
                  }
                  placeholder={field}
                  value={location[field] || ""}
                  onChange={(e) => updateLocationField(field, e.target.value)}
                  className="text-sm w-full focus:outline-0 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            )
          )}

          {/* Next Button */}
          <button
            onClick={handleNextClick}
            className="mt-4 px-8 bg-black text-white py-2 rounded-md text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
