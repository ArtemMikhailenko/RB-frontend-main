"use client";
import React, { useState } from "react";
import { X, Search, Bed, Bath, Ruler, Layers } from "lucide-react";
import Image from "next/image";

const FeedPropertyPopUp = ({ setPropertyPopup }) => {
  const [selectedProperties, setSelectedProperties] = useState([]);

  const properties = [
    {
      id: 1,
      title: "House on Carrer d'Isaac Peral, Gavà",
      price: "1.451.000€",
      beds: 4,
      baths: 3,
      sqft: "2,944",
      level: "One level",
      image: "/images/News/Maincontainer/popuphome.png",
    },
    {
      id: 2,
      title: "House on Carrer d'Isaac Peral, Gavà",
      price: "1.451.000€",
      beds: 4,
      baths: 3,
      sqft: "2,944",
      level: "One level",
      image: "/images/News/Maincontainer/popuphome.png",
    },
    {
      id: 3,
      title: "House on Carrer d'Isaac Peral, Gavà",
      price: "1.451.000€",
      beds: 4,
      baths: 3,
      sqft: "2,944",
      level: "One level",
      image: "/images/News/Maincontainer/popuphome.png",
    },
    {
      id: 4,
      title: "House on Carrer d'Isaac Peral, Gavà",
      price: "1.451.000€",
      beds: 4,
      baths: 3,
      sqft: "2,944",
      level: "One level",
      image: "/images/News/Maincontainer/popuphome.png",
    },
  ];

  const toggleSelect = (id) => {
    if (selectedProperties.includes(id)) {
      setSelectedProperties(selectedProperties.filter((prop) => prop !== id));
    } else {
      setSelectedProperties([...selectedProperties, id]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl relative mx-2 max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-primary-500 px-5 py-6 rounded-t-md">
          <h2 className="sm:text-[18px] text-sm font-medium">
            Select real estate
          </h2>
          <button
            onClick={() => setPropertyPopup(false)}
            className="text-black hover:text-red-600 font-bold transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-3 py-5 flex flex-col gap-3 flex-1 overflow-hidden">
          {/* Search bar */}
          <div className="flex items-center border border-gray-200 rounded-[10px] px-2 py-4">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search real estate by reference address"
              className="ml-2 w-full outline-none sm:text-[14px] text-xs placeholder:text-gray-400"
            />
          </div>

          {/* Property list (scrollable) */}
          <div className="space-y-3 overflow-y-auto pr-1 flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-hidden">
            {properties.map((property) => (
              <div
                key={property.id}
                className={`flex items-center border-b border-gray-200 pb-3 pr-2 ${
                  selectedProperties.includes(property.id)
                    ? "border-blue-500"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="relative min-[425px]:w-[150px] w-[80px] h-[60px] min-[425px]:h-[100px] mr-3">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-semibold sm:text-[15px] text-xs leading-tight mb-1 text-gray-800">
                    {property.title}
                  </h3>
                  <p className="font-bold sm:text-[15px] text-xs text-gray-900 mb-1">
                    {property.price}
                  </p>

                  {/* Icons */}
                  <div className="flex items-center text-gray-500 text-[12px] space-x-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Bed size={14} />
                      <span>{property.beds} bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={14} />
                      <span>{property.baths} bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Ruler size={14} />
                      <span>{property.sqft} sqft</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Layers size={14} />
                      <span>{property.level}</span>
                    </div>
                  </div>
                </div>

                {/* Circle-style Checkbox */}
                <div className="ml-3">
                  <div
                    className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center cursor-pointer transition ${
                      selectedProperties.includes(property.id)
                        ? "border-blue-600"
                        : "border-gray-400"
                    }`}
                    onClick={() => toggleSelect(property.id)}
                  >
                    {selectedProperties.includes(property.id) && (
                      <div className="w-[10px] h-[10px] rounded-full bg-blue-600"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPropertyPopUp;
