import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FeedFilterForm() {
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedBedrooms, setSelectedBedrooms] = useState("Any");
  const [selectedBathrooms, setSelectedBathrooms] = useState("Any");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedDropdown, setSelectedDropdown] = useState("Bungalow");

  const defaultState = {
    market: null,
    propertyType: null,
    bedrooms: "Any",
    bathrooms: "Any",
    features: [],
    keywords: "",
    priceMin: "950€",
    priceMax: "2500€",
  };
  const [keywords, setKeywords] = useState(defaultState.keywords);
  const [priceMin, setPriceMin] = useState(defaultState.priceMin);
  const [priceMax, setPriceMax] = useState(defaultState.priceMax);

  const handleReset = () => {
    setSelectedMarket(defaultState.market);
    setSelectedPropertyType(defaultState.propertyType);
    setSelectedBedrooms(defaultState.bedrooms);
    setSelectedBathrooms(defaultState.bathrooms);
    setSelectedFeatures(defaultState.features);
    setKeywords(defaultState.keywords);
    setPriceMin(defaultState.priceMin);
    setPriceMax(defaultState.priceMax);
    setSelectedDropdown("Bungalow");
  };

  const toggleFeature = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const features = [
    "Garden",
    "Garage",
    "Terrace",
    "Pool",
    "Community pool",
    "Lift",
    "A/C",
    "Sea views",
    "Ready to move and live",
  ];

  return (
    <div className=" w-full py-6 min-[350px]:px-3 px-2 border bg-white border-gray-200 rounded-lg overflow-y-auto scrollbar-hide">
      {/* Market */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Market</h3>
        <div className="flex gap-2 flex-wrap">
          {["New building", "Resale", "Rent"].map((item) => (
            <button
              key={item}
              onClick={() => setSelectedMarket(item)}
              className={`px-3 py-1 text-sm rounded-full border border-[#E4E4E4] cursor-pointer ${
                selectedMarket === item
                  ? "bg-black text-white"
                  : "bg-[#F9F9F9] text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Property type */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Property type</h3>
        <div className="grid grid-cols-3 gap-2">
          {["Flat", "House", "Plot"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedPropertyType(type)}
              className={`p-[13px_16px_16px_13px] text-left h-[65px] text-sm border rounded-xl border-[#E4E4E4] ${
                selectedPropertyType === type
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="relative w-full max-w-[300px] mt-4">
          <select
            value={selectedDropdown} // ✅ Controlled
            onChange={(e) => setSelectedDropdown(e.target.value)}
            className="w-full p-3 text-sm border rounded-xl focus:outline-none border-[#E4E4E4] appearance-none cursor-pointer"
          >
            <option>Bungalow</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>
          <FaChevronDown className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-black pointer-events-none text-sm" />
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Price</h3>

        <div className="flex items-center gap-2">
          <div>
            <label htmlFor="min-value" className="text-[14px] font-medium">
              Min
            </label>
            <input
              type="text"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              placeholder="Min"
              className="w-full p-2 text-sm border rounded focus:outline-none border-[#E4E4E4] "
            />
          </div>
          <span className="mt-6">-</span>
          <div>
            <label htmlFor="max-value" className="text-[14px] font-medium">
              Max
            </label>
            <input
              type="text"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              placeholder="Max"
              className="w-full p-2 text-sm border rounded focus:outline-none border-[#E4E4E4] bg-[#F9F9F9]"
            />
          </div>
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-4">Bedrooms</h3>
        <div className="flex flex-wrap gap-2">
          {["Any", 1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedBedrooms(num)}
              className={`px-2 py-1 text-[13px] border border-[#E4E4E4] rounded-lg ${
                selectedBedrooms === num
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-4">Bathrooms</h3>
        <div className="flex flex-wrap gap-2">
          {["Any", 1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedBathrooms(num)}
              className={`px-2 py-1 text-[13px] border border-[#E4E4E4] rounded-lg ${
                selectedBathrooms === num
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className=" w-full mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Features</h3>
        <div className="space-y-2 mt-2">
          {/* Row 1 */}
          <div className="flex gap-2 flex-wrap">
            {features.slice(0, 4).map((feature, index) => (
              <label
                key={index}
                className={`flex items-center gap-1 text-[13px]
            }`}
              >
                <input
                  type="checkbox"
                  className="accent-black"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                />
                {feature}
              </label>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-2 flex-wrap">
            {features.slice(4, 7).map((feature, index) => (
              <label
                key={index + 4}
                className={`flex items-center gap-1 text-[13px] rounded `}
              >
                <input
                  type="checkbox"
                  className="accent-black"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                />
                {feature}
              </label>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex gap-2 flex-wrap">
            {features.slice(7).map((feature, index) => (
              <label key={index + 7} className={`flex gap-1 text-[13px] `}>
                <input
                  type="checkbox"
                  className="accent-black"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                />
                {feature}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Keywords */}
      <div className="mb-4  sm:mx-auto">
        <input
          type="text"
          value={keywords || ""}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Keywords"
          className="w-full p-[10px_10px] text-sm border rounded-xl focus:outline-none border-[#E4E4E4]"
        />
      </div>

      {/* Apply button */}
      <div className="gap-4 sm:mx-auto flex">
        <button
          className="w-full p-[10px_10px]  text-sm text-center  bg-[#E6E6E6] text-black rounded-xl hover:bg-gray-800 hover:text-white cursor-pointer transition-colors duration-200 "
          onClick={handleReset}
        >
          Reset
        </button>
        <button className="w-full p-[10px_10px]  text-sm text-center text-white bg-black rounded-xl hover:bg-gray-800 cursor-pointer transition-colors duration-200">
          Apply
        </button>
      </div>
    </div>
  );
}
