import React from 'react';

const DescriptionSection = ({ formData, onChange }) => {
  const handleChange = (key, value) => {
    if (typeof onChange === "function") {
      onChange({ [key]: value });
    }
  };

  return (
    <div className="mt-6">
      <label className="block mb-2 text-lg font-bold">Description</label>

      {/* Language select */}
      <div className="relative flex flex-col justify-center mb-2 w-[300px] border border-gray-300 rounded-md text-sm px-3 py-2">
        <p className="text-black font-bold">Language</p>
        <select
          className="appearance-none text-gray-500 font-semibold pr-6 outline-none bg-white"
          value={formData.language || "english"}
          onChange={(e) => handleChange("language", e.target.value)}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="urdu">Urdu</option>
        </select>

        <img
          src="/icons/CreateRealEstate/feature/arrow.svg"
          alt="arrow"
          className="absolute rotate-90 right-8 top-[32px] h-2 w-2 pointer-events-none text-black"
        />
      </div>

      {/* Text area */}
      <textarea
        rows="4"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:outline-none "
        placeholder="Description"
        value={formData.description || ""}
        onChange={(e) => handleChange("description", e.target.value)}
      />
    </div>
  );
};

export default DescriptionSection;
