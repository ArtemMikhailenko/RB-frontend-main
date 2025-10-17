import React from "react";

const NewBuildingInputs = ({ formData, onChange }) => {
  const handleInputChange = (key, value) => {
    onChange({ [key]: value });
  };

  return (
    <>
      {/* Type of Complex */}
      <div className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 bg-white mb-2">
        <label className="block">Type of Complex</label>
        <select
          className="w-full outline-0 mt-1 text-black"
          value={formData.typeOfComplex || ""}
          onChange={(e) => handleInputChange("typeOfComplex", e.target.value)}
        >
          <option value="">Select</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>

      {/* General Inputs */}
      {[
        { label: "Total units", key: "totalUnits", placeholder: "3" },
        { label: "N⁰ blocks", key: "blockNumber", placeholder: "3" },
        {
          label: "Available units for sale",
          key: "forSale",
          placeholder: "8",
        },
        {
          label: "Year of construction",
          key: "yearOfConstruction",
          placeholder: "2005",
        },
        {
          label: "Discount or special promotion",
          key: "promotion",
          placeholder: "Action",
        },
        { label: "HOA", key: "hoa", placeholder: "15000" },
        { label: "Taxes", key: "taxes", placeholder: "15000" },
        { label: "Commission", key: "commission", placeholder: "15000" },
      ].map((item, index) => (
        <div key={index} className="mb-2">
          <div className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 bg-white">
            {item.label} <br />
            <input
              type={item.key === "promotion" || item.key === "category" ? "text" : "number"}
              value={formData[item.key] || ""}
              onChange={(e) =>
                handleInputChange(
                  item.key,
                  item.key === "promotion" || item.key === "category"
                    ? e.target.value
                    : Number(e.target.value)
                )
              }
              placeholder={item.placeholder}
              className="text-black font-bold bg-transparent outline-none w-full appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
           required={item.required}
           />
          </div>
        </div>
      ))}

      <h2 className="text-lg font-bold mb-2">Available list ( ++ )</h2>

      {[
        { label: "Price from", key: "priceFrom", placeholder: "15000" },
        { label: "Price to ++", key: "priceTo", placeholder: "15000" },
        { label: "Bedroom", key: "bedroom", placeholder: "2" },
        { label: "Bathroom", key: "bathroom", placeholder: "2" },
        { label: "Internal area", key: "internalArea", placeholder: "2" },
        { label: "Land area", key: "landArea", placeholder: "2" },
        { label: "Floor", key: "floor", placeholder: "2" },
        { label: "Category", key: "category", placeholder: "Studio" },
      ].map((item, index) => (
        <div key={index} className="mb-2">
          <div className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 bg-white">
            {item.label} <br />
            <input
              type={item.key === "category" ? "text" : "number"}
              value={formData[item.key] || ""}
              onChange={(e) =>
                handleInputChange(
                  item.key,
                  item.key === "category"
                    ? e.target.value
                    : Number(e.target.value)
                )
              }
              placeholder={item.placeholder}
              className="text-black font-bold bg-transparent outline-none w-full appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
            required={item.required}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default NewBuildingInputs;
