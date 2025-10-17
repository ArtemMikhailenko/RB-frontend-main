import React from 'react'

const PakingInputs = ({ formData, onChange }) => {
  const fields = [
    { label: "Reference", key: "reference", placeholder: "150M" },
    { label: "Price", key: "price", placeholder: "$" },
    { label: "Number of Parking", key: "numberOfParking", placeholder: "37" },
    { label: "Parking size", key: "parkingSize", placeholder: "Medium" },
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
                type="text"
               value={formData[item.key] || ""}
                onChange={(e) => handleChange(item.key, e.target.value)}
                className="text-black font-bold bg-transparent outline-none w-full appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                placeholder={item.placeholder}
              />
            </div>
          </div>
        ))}
    </>
  )
}

export default PakingInputs