"use client";
import React from "react";
import RealEstateImageSlider from "../ImageSlider/ImageSlider";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const button = [
  { label: "Contact" },
  { label: "Call" },
  { image: "/icons/RealeState/LeftSide/whatsapp.svg" },
];

const RealStateSellerCard = ({
  property,
  activeCard,
  gridFilter,
  setRealesrarePopup,
}) => {
  dayjs.extend(relativeTime);
  const featureList = property.features?.[0]?.features ?? [];
  return (
    <div
      className={`mb-4 mt-2 w-full h-full flex rounded-md overflow-hidden shadow bg-white text-[#343434] max-sm:flex-col max-sm:pr-2 
    ${gridFilter ? "flex-col pr-2" : "flex-row"}
    ${
      activeCard ? "lg:border-1 lg:border-yellow-500" : "border border-gray-300"
    }
  `}
    >
      {/* Left Image */}
      <div className={`relative pl-2 pt-2 ${gridFilter ? "" : "flex-3/4"}`}>
        <RealEstateImageSlider property={property} gridFilter={gridFilter} />
      </div>

      {/* Right Content */}
      <div
        className={`py-2 px-2 flex flex-col w-full
    ${gridFilter ? "justify-between flex-1" : " "}
  `}
        onClick={() => {
          setRealesrarePopup(true);
        }}
      >
        {/* Top Section */}
        <div className={`${gridFilter ? "gap-2 flex flex-col" : ""}`}>
          <h2 className="text-md font-semibold mb-1 capitalize">
            {property?.propertyTypes?.[0]?.propertyType} on {property.purpose}{" "}
            at street {property.location?.[0]?.street} ,{" "}
            {property.location?.[0]?.city}
          </h2>
          <div className="text-md font-bold">
            {property?.detail?.[0]?.price}€
            <span className="text-gray-500 text-sm font-normal ml-2">
              {property?.detail?.[0]?.price &&
              property?.features?.[0]?.landArea ? (
                <>
                  {(
                    property.detail[0].price / property.features[0].landArea
                  ).toFixed(2)}{" "}
                  €/m²
                </>
              ) : (
                "-"
              )}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 mb-3 mt-1">
            {property.detail?.[0]?.bathrooms && (
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/RealeState/LeftSide/bath.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
                {property.detail?.[0]?.bathrooms} bath
              </div>
            )}
            {property.detail?.[0]?.bedrooms && (
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/RealeState/LeftSide/bed.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
                {property.detail?.[0]?.bedrooms} bed
              </div>
            )}
            {property.features?.[0]?.landArea && (
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/RealeState/LeftSide/sqft.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
                {property.features?.[0].landArea} sqft
              </div>
            )}
            {property.features?.[0]?.numberOfFloor && (
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/RealeState/LeftSide/level.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
                {property.features?.[0].numberOfFloor} level
              </div>
            )}
          </div>
          {property.features?.[0] && (
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 mb-3 mt-1">
              {Array.isArray(property.features?.[0]?.features) &&
              property.features[0].features.length > 0 ? (
                property.features[0].features.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    {item}
                  </div>
                ))
              ) : (
                <span className="text-gray-400"></span>
              )}
            </div>
          )}
          {/* Tags */}
          {featureList.length > 3 && (
            <div className="flex flex-wrap gap-1 text-xs text-gray-700 mb-2">
              {featureList.slice(3).map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-2 py-[2px] rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {/* Agent Info */}
        </div>
        <div>
          <div className="flex border-t border-gray-300 flex-col sm:flex-row sm:justify-between gap-3 mb-2">
            {property?.user && (
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={property.user.profilePic || "/images/default-avatar.png"}
                  alt={property.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{property.user.name}</p>
                  <p className="text-xs text-gray-500">
                    {dayjs(property.createdAt).fromNow()}
                  </p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Image
                width={20}
                height={20}
                src="/icons/RealeState/LeftSide/heart.svg"
                alt="like"
                className="w-5"
              />
              <Image
                width={20}
                height={20}
                src="/icons/RealeState/LeftSide/archive.svg"
                alt="save"
                className="w-5"
              />
              <Image
                width={20}
                height={20}
                src="/icons/RealeState/LeftSide/share.svg"
                alt="share"
                className="w-5"
              />
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-2 flex-1">
              {button.slice(0, 2).map((btn, index) => (
                <button
                  key={index}
                  className={`flex-1 px-6 py-2 text-xs rounded-md ${
                    btn.label === "Contact"
                      ? "text-white bg-black"
                      : "text-black bg-gray-200"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
            {button[2].image && (
              <div className="px-4 py-2 bg-gray-200 rounded-md">
                <img src={button[2].image} alt="WhatsApp" className="w-4 h-4" />
              </div>
            )}
          </div>
        </div>
        {/* Buttons Section */}
      </div>
    </div>
  );
};

export default RealStateSellerCard;
