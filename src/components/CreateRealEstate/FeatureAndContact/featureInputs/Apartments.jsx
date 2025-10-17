import React from "react";

const Apartments = ({ formData, onChange }) => {
  const fields = [
    { label: "Internal area", key: "internalArea", placeholder: "75" },
    { label: "Land area", key: "landArea", placeholder: "120" },
    { label: "Number of floor", key: "numberOfFloor", placeholder: "3" },
    { label: "Total floors", key: "totalFloor", placeholder: "3" },
    { label: "Year of construction", key: "yearOfConstruction", placeholder: "2005" },
    { label: "HOA", key: "hoa", placeholder: "15000" },
    { label: "Taxes", key: "taxes", placeholder: "15000" },
    { label: "Commission", key: "commission", placeholder: "15000" },
  ];

  const handleChange = (key, value) => {
    if (onChange) {
      onChange({ [key]: value });
    }
  };

  return (
    <>
      {fields.map((item, index) => (
        <div key={index} className="mb-2">
          <div className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 bg-white">
            {item.label} <br />
            <input
              type="text"
              value={formData?.[item.key] ?? ""}
              onChange={(e) => handleChange(item.key, e.target.value)}
              className="text-black font-bold bg-transparent outline-none w-full appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
              placeholder={item.placeholder}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Apartments;
