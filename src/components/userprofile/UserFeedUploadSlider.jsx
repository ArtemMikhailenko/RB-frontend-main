"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCamera } from "react-icons/fa";

const images = [
  "/images/NewProfile/home.png",
  "/images/NewProfile/home.png",
  "/images/NewProfile/home.png",
  "/images/NewProfile/home.png",
  "/images/NewProfile/home.png",
  "/images/NewProfile/home.png",
  "/images/NewProfile/home.png",
  "/images/NewProfile/home.png",
];

export default function UserFeedUploadSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl group">
      {/* Slider container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${current * 100}%) ` }}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full h-full relative">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded">
        <FaCamera className="text-white" />
        {current + 1}/{images.length}
      </div>

      {/* Prev button */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer z-10 left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        <IoIosArrowBack className="text-xl text-gray-700" />
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer z-10 right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        <IoIosArrowForward className="text-xl text-gray-700" />
      </button>
    </div>
  );
}
