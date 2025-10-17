import React from "react";

const BuldingDetails = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Building details</h2>
      {[
        {
          label: "Year of construction",
          key: "constructionYear",
          placeholder: "5",
        },
        {
          label: "Total floors",
          key: "totalFloors",
          placeholder: "2",
        },
      ].map((item, index) => (
        <div key={index} className="mb-2">
          <div className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 bg-white">
            {item.label} <br />
            <input
              type="number"
              placeholder={item.placeholder}
              className="text-black font-bold bg-transparent outline-none w-full appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
            />
          </div>
        </div>
      ))}
      <div className="mb-1">
        <div className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 bg-white">
          Building name
          <br />
          <input
            type="text"
            className="text-black font-bold bg-transparent outline-none w-full"
            placeholder="Maria IV"
          />
        </div>
      </div>
    </div>
  );
};

export default BuldingDetails;
