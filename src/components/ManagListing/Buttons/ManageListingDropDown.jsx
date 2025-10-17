"use client";
import Image from "next/image";
import React from "react";
const ManageListingDropDown = () => {
  const filterData = [
    {
      label: "Type",
      options: ["House", "Apartment", "Villa"],
    },
    {
      label: "Max price",
      options: ["$500", "$1000", "$1500"],
    },
    {
      label: "Beds & Bath",
      options: ["1 Bed 1 Bath", "2 Bed 2 Bath", "3 Bed 2 Bath"],
    },
    {
      label: "More",
      options: ["Furnished", "Pet Friendly", "Parking"],
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(null);
  const toggledropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div>
      <div className="flex items-center text-[#636363]  gap-1 justify-end sm:mr-2">
        {filterData.map((item, index) => (
          <div key={index} className="relative sm:block hidden">
            <button
              onClick={() => toggledropdown(index)}
              className=" cursor-pointer flex items-center gap-1 px-2 py-2 text-[12px] font-bold bg-white border border-gray-300 rounded-md shadow-sm "
            >
              {item.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-3 h-3 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div
                className={`absolute top-12 z-50 bg-white border border-gray-200 rounded-md shadow-md w-40 text-sm ${
                  item.label === "More" || item.label === "Beds & Bath"
                    ? "right-0"
                    : ""
                }`}
              >
                {item.options.map((option, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center gap-1.5 px-3.5 py-2 w-full sm:w-[300px] text-[12px] font-semibold  bg-white border border-gray-300 rounded-2xl shadow-sm">
          <Image src="/icons/ManageListing/search.svg" alt="Search" width={24} height={24} />
          <input
            type="text"
            placeholder="Search by reference, street, town,..."
            className="flex-1 bg-transparent focus:outline-none text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ManageListingDropDown;
