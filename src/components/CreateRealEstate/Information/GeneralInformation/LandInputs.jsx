import React from "react";

const LandInputs = ({ formData, onChange }) => {
  const handleChange = (key, value) => {
    onChange({ [key]: value });
  };

  return (
    <>
      {[
        { label: "Reference", key: "reference", placeholder: "150M" },
        { label: "Price", key: "price", placeholder: "$" },
      ].map((item, index) => (
        <div key={index} className="mb-2">
          <div className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 bg-white">
            {item.label} <br />
            <input
              type="text"
              value={formData[item.key] || ""}
              onChange={(e) => handleChange(item.key, e.target.value)}
              className="text-black font-bold bg-transparent outline-none w-full appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
              placeholder={item.placeholder}
            />
          </div>
        </div>
      ))}

      <div className="font-bold text-lg mb-4">Classification</div>
      <div className="mb-2 flex gap-2 max-sm:flex-wrap">
        {["Residential", "Commercial", "Industrial", "Agricultural"].map(
          (item) => (
            <button
              type="button"
              key={item}
              className={`md:px-6 px-2 py-1.5 border bg-[#F2F4F9] rounded-md cursor-pointer md:text-sm text-xs ${
                formData.classification === item
                  ? "text-black border-black"
                  : "text-black border-gray-200"
              }`}
              onClick={() => handleChange("classification", item)}
            >
              {item}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default LandInputs;
