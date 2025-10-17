"use client";
import React from "react";

export default function PostDetails() {
  return (
    <div className="">
      {/* Header */}
      <h2 className="sm:text-xl text-lg font-semibold mb-2 sm:mb-4 pl-4">
        Home facts and features
      </h2>

      {/* Price Details */}
      <div className=" p-4 mb-6">
        <h3 className="font-medium sm:text-lg text-base mb-3 border-b border-[#E5E7EB]">
          Price details
        </h3>
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <span className="text-gray-600">Last Price</span>
          <span className="font-medium">
            $399,900{" "}
            <a href="#" className="text-blue-600 ">
              See valuation
            </a>
          </span>

          <span className="text-gray-600">Gross Taxes for 2024</span>
          <span className="font-medium">$1,768</span>

          <span className="text-gray-600">Strata Maintenance Fees</span>
          <span className="font-medium">$358</span>
        </div>
      </div>

      {/* Home Facts */}
      <div className="p-4 mb-6">
        <h3 className="font-medium text-base sm:text-lg mb-3 border-b border-[#E5E7EB]">
          Home facts
        </h3>
        <div className="grid grid-cols-2 gap-y-2 text-sm ">
          <span className="text-gray-600">Bedrooms</span>
          <span className="font-medium">0</span>
          <span className="text-gray-600">Full Bathrooms</span>
          <span className="font-medium">1</span>
          <span className="text-gray-600">Property Type</span>
          <span className="font-medium">Apt/Condo</span>
          <span className="text-gray-600 mb-8">Year Built</span>
          <span className="font-medium">Built in 1973 (52 yrs old)</span>
          <span className="text-gray-600">Style</span>
          <span className="font-medium">Condo</span>
          <span className="text-gray-600">Heating</span>
          <span className="font-medium">Natural Gas</span>
          <span className="text-gray-600">Landscape</span>
          <span className="font-medium">Sea views</span>
          <span className="text-gray-600 mb-8">Community areas</span>
          <span className="font-medium">Community pool</span>
          <span className="text-gray-600">Appliances</span>
          <span className="font-medium">
            Dishwasher, Microwave, Oven/Range Electric, Refrigerator
          </span>
        </div>
      </div>

      {/* Listing Details */}
      <div className=" p-4 mb-6">
        <h3 className="font-medium text-base sm:text-lg mb-3 border-b border-[#E5E7EB]">
          Listing details
        </h3>
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <span className="text-gray-600">Days on RB</span>
          <span className="font-medium">17 Days</span>
          <span className="text-gray-600">Property Views</span>
          <span className="font-medium">1005</span>
        </div>
      </div>

      {/* Building Info */}

      <div className="p-4 mb-6 bg-[#E5E7EB] rounded-lg">
        <h3 className="font-medium text-base sm:text-lg mb-3 ">Building</h3>
        <p className="text-sm text-gray-600 mb-4">
          Building information on{" "}
          <span className="font-medium">Jukebox Victoria</span>, 3 units for
          sale, 5 units for rent from 299
        </p>

        <div className="grid grid-cols-3 gap-6 text-sm">
          <div>
            <span className="text-gray-600 block font-medium">
              Active units:
            </span>
            <span>8</span>
          </div>
          <div>
            <span className="text-gray-600 block font-medium">Floors:</span>
            <span>9</span>
          </div>
          <div>
            <span className="text-gray-600 block font-medium">Built in:</span>
            <span>1973</span>
          </div>
        </div>
      </div>
      <div className="p-4 mb-6 max-w-lg">
        {/* For Sale */}
        <h4 className="mt-6 pt-1 font-bold bg-[#E5E7EB] text-center text:base sm:text-lg rounded">
          For Sale
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm ">
            <thead className="bg-[#E5E7EB] text-left">
              <tr>
                <th className="p-2 ">1 Bed</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">421 </td>
                <td className="p-2">$339,900</td>
                <td className="p-2">0-499 ft²</td>
              </tr>
              <tr>
                <td className="p-2">521 </td>
                <td className="p-2">$339,900</td>
                <td className="p-2">0-499 ft²</td>
              </tr>
            </tbody>
          </table>
          <table className="w-full text-sm ">
            <thead className="bg-[#E5E7EB] text-left">
              <tr>
                <th className="p-2 ">2 Bed</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">421 </td>
                <td className="p-2">$339,900</td>
                <td className="p-2">0-499 ft²</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* For Rent */}
        <h4 className="mt-6 pt-1 font-bold bg-[#E5E7EB] text-center text:base sm:text-lg rounded">
          For Rent
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm ">
            <thead className="bg-[#E5E7EB] text-left">
              <tr>
                <th className="p-2 ">1 Bed</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">22 </td>
                <td className="p-2">$339,900</td>
                <td className="p-2">0-499 ft²</td>
              </tr>
              <tr>
                <td className="p-2">521 </td>
                <td className="p-2">$339,900</td>
                <td className="p-2">0-499 ft²</td>
              </tr>
              <tr>
                <td className="p-2">521 </td>
                <td className="p-2">$339,900</td>
                <td className="p-2">0-499 ft²</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
