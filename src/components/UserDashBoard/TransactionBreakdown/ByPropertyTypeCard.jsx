import React from "react";

const ByPropertyTypeCard = ({ marketData }) => {
  // Simulated backend data

  return (
    <div className="w-full ">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-base font-semibold text-gray-900">
          By Property Type
        </h2>
      </div>

      {marketData.map((item, index) => (
        <div
          key={index}
          className={index !== marketData.length - 1 ? "mb-6" : ""}
        >
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-600">{item.label}</span>
            <span className="text-sm font-medium text-[#6C47FF]">
              {item.percentage}%
            </span>
          </div>
          <div className="w-full bg-[#f6f6fd] rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${
                index === 0
                  ? "bg-gradient-to-r from-[#6C47FF] to-[#825CFF]"
                  : "bg-[#8F8F9F]"
              }`}
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ByPropertyTypeCard;
