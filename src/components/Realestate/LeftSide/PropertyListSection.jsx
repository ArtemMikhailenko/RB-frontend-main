"use client";
import React from "react";
import RealEstateDropDown from "./RealestateDropDown/DropDown";
import RealStateFilter from "./RealEstateFilter/RealStateFilter";
import RealStateSellerCard from "./RealEstateSellerCard/RealStateSellerCard";

const PropertyListSection = ({
  data,
  selectedCardIndex,
  handleCardClick,
  gridFilter,
  setGridFilter,
  setRealesrarePopup,
  propertyTpe
}) => {
  return (
    <div className="lg:max-w-[51.5%] w-full">
      {/* Top Bar */}
      <div className="flex max-md:justify-end max-md:pr-4">
        <div className="md:block hidden flex-1">
          <RealEstateDropDown />
        </div>
        <div className="md:block hidden">
          <RealStateFilter
            gridFilter={gridFilter}
            setGridFilter={setGridFilter}
          />
        </div>
      </div>

      {/* Sort Section */}
      <div className="flex justify-end mt-2 pr-8">
        <span className="mr-1">SORT BY</span>
        <span className="mr-1">:</span>
        <span className="font-bold">Newest</span>
      </div>

      {/* Cards Grid/List */}
      <div className={`${gridFilter ? "grid sm:grid-cols-2 gap-2 pl-3" : ""}`}>
        {data.map((property, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className=""
          >
            <RealStateSellerCard
              property={property}
              gridFilter={gridFilter}
              activeCard={selectedCardIndex === index}
              setRealesrarePopup={setRealesrarePopup}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListSection;
