"use client";
import { useState } from "react";

export default function HouseFeatures({ formData, onChange }) {
  const [features, setFeatures] = useState([
    "Wifi",
    "TV",
    "Kitchen",
    "Washing machine",
    "Free parking",
    "Paid parking",
    "Chimney",
    "Zone - work",
  ]);


const toggleFeature = (item) => {
  const updated = formData.features.includes(item)
    ? formData.features.filter((f) => f !== item)
    : [...formData.features, item];
  onChange({ features: updated });
};

const toggleOrientation = (item) => {
  const updated = formData.orientation.includes(item)
    ? formData.orientation.filter((o) => o !== item)
    : [...formData.orientation, item];
  onChange({ orientation: updated });
};

const toggleHouseFeature = (item) => {
  const updated = formData.houseFeatures.includes(item)
    ? formData.houseFeatures.filter((h) => h !== item)
    : [...formData.houseFeatures, item];
  onChange({ houseFeatures: updated });
};

const toggleBuildingFeature = (item) => {
  const updated = formData.buildingFeatures.includes(item)
    ? formData.buildingFeatures.filter((b) => b !== item)
    : [...formData.buildingFeatures, item];
  onChange({ buildingFeatures: updated });
};



  const [orientation] = useState(["North", "South", "East", "West"]);
  const [houseFeatures] = useState([
    "Fitted wardrobes",
    "Terrace",
    "Balcony",
    "Savage room",
    "Garage/parking space included in the price",
  ]);
  const [buildingFeatures] = useState(["Swimming pool", "Garden area"]);

  return (
    <div className="max-w-4xl mx-auto font-sans">
      {/* Heading */}
      <h2 className="text-lg font-semibold mb-6">Features of the house</h2>

      {/* Counters */}
      <div className="space-y-4">
        {[
          { label: "Persons", key: "persons" },
          { label: "Bedrooms", key: "bedrooms" },
          { label: "Beds", key: "beds" },
          { label: "Bathrooms", key: "bathrooms" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border-b border-[#E5E7EB] pb-3 max-w-lg"
          >
            <span className="text-gray-800 text-sm">{item.label}</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  onChange({
                    [item.key]: Math.max(0, (formData[item.key] || 0) - 1),
                  })
                }
                className="w-8 h-8 flex items-center justify-center border-[#D1D5DB] border rounded-full hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-4 text-sm text-center">
                {formData[item.key] || 0}
              </span>
              <button
                onClick={() =>
                  onChange({ [item.key]: (formData[item.key] || 0) + 1 })
                }
                className="w-8 h-8 flex items-center justify-center border-[#D1D5DB] border rounded-full hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div>
          <label className="block text-sm text-gray-600">Built area</label>
          <input
            type="text"
            value={formData.builtArea || ""}
            onChange={(e) => onChange({ builtArea: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none border-[#D1D5DB]"
            placeholder="m²"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">
            Usable area (optional)
          </label>
          <input
            type="text"
            value={formData.usableArea || ""}
            onChange={(e) => onChange({ usableArea: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none border-[#D1D5DB]"
            placeholder="m²"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">
            Plot area (optional)
          </label>
          <input
            type="text"
            value={formData.plotArea || ""}
            onChange={(e) => onChange({ plotArea: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none border-[#D1D5DB]"
            placeholder="m²"
          />
        </div>
      </div>

      {/* Features */}
      <div className="mt-8">
        <h3 className="text-base font-medium mb-4">Features</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {features.map((item, idx) => (
            <button
              key={idx}
              onClick={() => toggleFeature(item)}
              className={`border rounded-lg px-4 py-3 text-sm capitalize ${
                formData.features.includes(item)
                  ? "border-gray-800 bg-gray-100"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Orientation + Floors */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-medium mb-3">Orientation (optional)</h3>
          <div className="space-y-2">
            {orientation.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                 checked={formData.orientation.includes(item)}
                 onChange={() => toggleOrientation(item)}
                  className="w-5 h-5 appearance-none rounded bg-white border border-gray-300 checked:bg-[#ED8F03] checked:border-[#ED8F03] 
             flex items-center justify-center 
             relative checked:after:content-['✔'] checked:after:text-white checked:after:text-sm 
             checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] 
             checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                  }}
                />

                {item}
              </label>
            ))}
          </div>
        </div>
        {/* Floors */}
        <div>
          <h3 className="font-medium mb-3">Number of floors (optional)</h3>
          <div className="flex items-center border w-fit border-[#D1D5DB] rounded-sm gap-3">
            <button
              onClick={() =>
                onChange({ floors: Math.max(0, (formData.floors || 0) - 1) })
              }
              className="w-8 h-8 border-r border-[#D1D5DB] flex items-center justify-center"
            >
              −
            </button>
            <span className="w-6 text-center">{formData.floors || 0}</span>
            <button
              onClick={() => onChange({ floors: (formData.floors || 0) + 1 })}
              className="w-8 h-8 border-l border-[#D1D5DB] flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* House + Building features */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-medium mb-3">Other features of your house</h3>
          <div className="space-y-2">
            {houseFeatures.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={formData.houseFeatures.includes(item)}
      onChange={() => toggleHouseFeature(item)}
                  className="w-5 h-5 appearance-none rounded bg-white border border-gray-300 checked:bg-[#ED8F03] checked:border-[#ED8F03] 
             flex items-center justify-center 
             relative checked:after:content-['✔'] checked:after:text-white checked:after:text-sm 
             checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] 
             checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                  }}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-3">Other features of your building</h3>
          <div className="space-y-2">
            {buildingFeatures.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={formData.buildingFeatures.includes(item)}
      onChange={() => toggleBuildingFeature(item)}
                  className="w-5 h-5 appearance-none rounded bg-white border border-gray-300 checked:bg-[#ED8F03] checked:border-[#ED8F03] 
             flex items-center justify-center 
             relative checked:after:content-['✔'] checked:after:text-white checked:after:text-sm 
             checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] 
             checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                  }}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Rental details */}
      <div className="mt-10 pt-6 border-t border-[#E5E7EB]">
        <h3 className="font-medium mb-1">Rental details</h3>
        <p className="text-sm text-gray-500 mb-6">
          This section helps you to be contacted by the most suitable tenants
          for your property.
        </p>

        {/* Children */}
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">
            Suitable for children (0-12 years)?
          </h4>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={formData.childrenAllowed || false}
              onChange={(e) => onChange({ childrenAllowed: e.target.checked })}
              className="w-5 h-5 appearance-none rounded bg-white border border-gray-300 checked:bg-[#ED8F03] checked:border-[#ED8F03] 
             flex items-center justify-center 
             relative checked:after:content-['✔'] checked:after:text-white checked:after:text-sm 
             checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] 
             checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
              }}
            />
            The home is suitable for children
          </label>
        </div>

        {/* Pets */}
        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
            Are pets allowed?{" "}
            <span className="text-gray-400 text-xs">help_outline</span>
          </h4>
          <div className=" flex gap-[35]">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="pets"
             checked={formData.petsAllowed === true}
              onChange={() => onChange({ petsAllowed: true })}
                className="accent-[#ED8F03]"
              />
              Yes, I accept pets
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="pets"
                              checked={formData.petsAllowed === false}
              onChange={() => onChange({ petsAllowed: false })}
                className="accent-[#ED8F03]"
              />
              No, I don't accept pets
            </label>
          </div>
        </div>
      </div>

      {/* Disabled adaptation */}
      <div className="mt-2 pt-2 ">
        <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
          Is the property adapted for disabled people?{" "}
          <span className="text-gray-400 text-xs">help_outline</span>
        </h3>
        <div className="space-y-3 text-sm">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
            checked={formData.disabledAccess || false}
            onChange={(e) => onChange({ disabledAccess: e.target.checked })}
              className="w-5 h-5 appearance-none rounded bg-white border border-gray-300 checked:bg-[#ED8F03] checked:border-[#ED8F03] 
             flex items-center justify-center 
             relative checked:after:content-['✔'] checked:after:text-white checked:after:text-sm 
             checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] 
             checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
              }}
            />
            <span>
              <span className="font-medium">
                The exterior access to the property has been adapted for
                wheelchair use
              </span>
              <br />
              <span className="text-gray-500 text-xs">
                The property has ramps and a lift with a capacity of 6 people or
                the property is at street level without kerbs.
              </span>
            </span>
          </label>

          <label className="flex items-start gap-2">
            <input
              type="checkbox"
             checked={formData.disabledInterior || false}
            onChange={(e) => onChange({ disabledInterior: e.target.checked })}
              className="w-5 h-5 appearance-none rounded bg-white border border-gray-300 checked:bg-[#ED8F03] checked:border-[#ED8F03] 
             flex items-center justify-center 
             relative checked:after:content-['✔'] checked:after:text-white checked:after:text-sm 
             checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] 
             checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
              }}
            />
            <span>
              <span className="font-medium">
                The interior of the property has been adapted for wheelchair use
              </span>
              <br />
              <span className="text-gray-500 text-xs">
                Wide doors and corridors, handrails, non-slip floors...
              </span>
            </span>
          </label>
        </div>
      </div>

      {/* Price */}
      <div className="mt-10 pt-6 border-t border-[#E5E7EB]">
        <h3 className="font-medium mb-2">Price</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Price"
           value={formData.monthlyRent || ""}
          onChange={(e) => onChange({ monthlyRent: e.target.value })}
            className="border rounded-lg px-3 py-2 w-32 text-sm focus:outline-none border-[#E5E7EB]"
          />
          <span className="text-sm text-gray-600 bg-[#E5E7EB] p-2 ">
            euros/month
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          If you plan to change the tenant the community costs, add it to the
          price.
        </p>
      </div>

      {/* Deposit */}
      <div className="mt-6">
        <h3 className="font-medium mb-1">Deposit 1 month</h3>
        <p className="text-xs text-gray-500">
          For residential rentals (for main residences), the Urban Lease Act
          (LAU) requires a one-month deposit.
        </p>
      </div>

      {/* In Spanish */}
      <div className="mt-8">
        <h3 className="font-medium mb-2 flex items-center gap-2">
          <img
            src="/icons/CreateRealEstate/details/Image-spain.svg"
            alt="spanish flag"
          />{" "}
          In Spanish
        </h3>
        <p className="text-xs text-gray-500 mb-2">
          Write the description here in Spanish. Later you will be able to add
          other languages.
        </p>
        <textarea
          rows={4}
          value={formData.descriptionEs || ""}
          onChange={(e) => onChange({ descriptionEs: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none border-[#E5E7EB]"
        />
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          This will be read more frequently <br />
          You can add other languages later. <br />
          Capital letters make reading more difficult, so we can't allow the
          whole description to be written in capitals.
        </p>
      </div>
    </div>
  );
}
