import React from "react";

const HomeDetails = ({ formData, onChange }) => {
  const fields = [
    { label: "Reference", key: "reference", placeholder: "150M" },
    { label: "Price", key: "price", placeholder: "$" },
    { label: "Bedrooms", key: "bedrooms", placeholder: "3" },
    { label: "Bathroom", key: "bathrooms", placeholder: "2" },
  ];

  const handleChange = (key, value) => {
    onChange({ [key]: value });
  };

  return (
    <>
      {fields.map((item, index) => (
        <div key={index} className="mb-2">
          <div className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 bg-white">
            {item.label} <br />
            <input
              type={item.key === "bathroom" || "bedroom" ||"price" ? "text" : "number"}
              value={formData[item.key] || ""}
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

export default HomeDetails;
