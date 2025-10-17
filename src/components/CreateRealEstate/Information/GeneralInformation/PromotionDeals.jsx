"use client";
import React from "react";

export default function PromotionDeals({ formData, onChange }) {
  const fields = [
    { label: "Reference", key: "reference", type: "text", placeholder: "150M" },
    { label: "Price", key: "price", type: "number", placeholder: "$" },
    { label: "Delivery Date", key: "deliveryDate", type: "date", placeholder: "" },
    { label: "Stage", key: "stage", type: "text", placeholder: "Under construction" },
  ];

  return (
    <div>
      {fields.map((item, index) => (
        <div key={index} className="mb-2">
          <div className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 bg-white">
            <label className="block text-gray-500 mb-1">{item.label}</label>
            <input
              type={item.type}
              value={formData[item.key] || ""}
              onChange={(e) => onChange({ [item.key]: e.target.value })}
              className="text-black font-bold bg-transparent outline-none w-full appearance-none 
                [&::-webkit-outer-spin-button]:appearance-none 
                [&::-webkit-inner-spin-button]:appearance-none 
                [-moz-appearance:textfield]"
              placeholder={item.placeholder}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
