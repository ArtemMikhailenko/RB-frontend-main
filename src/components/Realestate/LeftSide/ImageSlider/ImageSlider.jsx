"use client";
import { Camera, Video } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const RealEstateImageSlider = ({ property, gridFilter }) => {
  // Fallback to single image if images array is missing
const imagesArray =
  property?.media?.[0]?.images?.length > 0
    ? property.media[0].images
    : ["/images/placeholder.png"];


  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };
  const dynamicCameraText = `${currentIndex + 1}/${imagesArray.length}`;
  return (
    <div
      className={`relative overflow-hidden ${
        gridFilter ? "h-[250px]" : "h-full flex-1 pb-1"
      }`}
    >
      {/* Current Image */}
      <div className="relative w-full h-[300px]">
        <Image
          fill
          src={imagesArray[currentIndex] || "/images/placeholder.png"}
          alt={`Property ${currentIndex}`}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Top Left Ref */}
      {property?.detail?.[0]?.reference && (
        <div className="absolute top-4 left-3 text-xs px-1 py-1 bg-[#4D4D4D] bg-opacity-60 backdrop-blur-md rounded text-white">
          Ref {property?.detail?.[0]?.reference}
        </div>
      )}
      {/* Top Right Buttons */}
      <div className="absolute top-4 right-2 flex gap-1">

          <div className="bg-[#4D4D4D] bg-opacity-60 backdrop-blur-md text-white text-xs px-2  rounded flex items-center gap-1">
            <Camera className="w-4"/>
            {dynamicCameraText}
          </div>

        {property?.media?.[0]?.videoUrl && (
          <div className="bg-[#4D4D4D] bg-opacity-60 backdrop-blur-md text-white text-xs px-2 rounded flex items-center gap-1">
            <Video className="w-4"/>
            <a href={property?.media?.[0]?.videoUrl} target="_blank" rel="noopener noreferrer">Video</a>
          </div>
        )}
      </div>

      {/* Bottom Left Tags */}
      {property?.keyLabel && (
        <div className="absolute bottom-3 left-3 bg-white text-xs rounded shadow px-2 py-1">
          {property.keyLabel}
        </div>
      )}
      {property?.market && (
        <div className="absolute bottom-10 left-3 text-xs px-2 py-1 bg-[#25D366] text-white rounded shadow">
          {property.market}
        </div>
      )}

      {/* Left/Right Navigation */}
      {imagesArray.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 bg-opacity-50 py-2 px-4 rounded-full hover:bg-opacity-70"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 bg-opacity-50 py-2 px-4 rounded-full hover:bg-opacity-70"
          >
            ❯
          </button>
        </>
      )}

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {imagesArray.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RealEstateImageSlider;
