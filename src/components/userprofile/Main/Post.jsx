import Image from "next/image";
import React, { useState } from "react";
import { FaBed, FaCamera } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Post = () => {
  const images = Array(8).fill("/images/NewProfile/home.png"); // same image 8 times
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white p-4 rounded-lg max-w-[550px] shadow-sm">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div>
            <Image width={54} height={54} src="/icons/NewProfile/profile.png" alt="Profile" />
          </div>
          <div>
            <h4 className="font-semibold">Michael Carter</h4>
            <p className="text-sm text-gray-500">
              Luxury Real Estate Specialist
            </p>
            <p className="text-[12px] text-gray-500">1 hour ago</p>
          </div>
        </div>
        <div>
          <Image
            src="/icons/NewProfile/threedot.svg"
            alt="three dot"
            width={28}
            height={28}
            className="py-1 px-1 rounded-md border-gray-300 border"
          />
        </div>
      </div>

      {/* Post text */}
      <p className="mt-4 pl-0.5 text-sm">
        Check out this stunning modern home in the heart of Los Angeles! ✨
      </p>

      {/* Custom Slider */}
      <div className="mt-4 relative w-full h-[250px] overflow-hidden rounded-md">
        {/* Images wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              width={760}
              height={760}
              alt={`Property ${index + 1}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          <MdArrowBackIos />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          <MdArrowForwardIos />
        </button>

        {/* Camera + Count (📷 bottom-left over image) */}
        <div className="absolute bottom-2 left-2 bg-black/40 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          <FaCamera className="text-[10px]" /> {current + 1}/{images.length}
        </div>
      </div>

      {/* Info Section */}
      <div className="sm:px-4 px-[6px] py-2 bg-gray-100 rounded-[0px_0px_8px_8px]">
        <div>
          <div className="flex justify-between sm:flex-nowrap flex-wrap">
            <div className="font-semibold sm:text-lg text-[14px]">
              Modern City Retreat
            </div>
            <div className="font-semibold sm:text-lg text-[14px]">
              3.500.000€
            </div>
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-2 mt-1.5 sm:flex-nowrap flex-wrap">
            <div className="flex items-center gap-2">
              <FaBed /> 4 bed &nbsp; | &nbsp;
            </div>
            <div className="flex items-center gap-2">
              <Image height={16} width={16} src="/icons/NewProfile/bath.svg" alt="bath" />3 bath &nbsp; |
              &nbsp;
            </div>
            <div className="flex items-center gap-2">
              <Image width={18} height={18} src="/icons/NewProfile/square.svg" alt="square" /> 128m²
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-1 flex items-center gap-2">
            <Image width={16} height={16} src="/icons/NewProfile/location.svg" alt="location" /> Los Angeles, CA
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-6 text-gray-500 text-sm pl-0.5">
        <button className="flex items-center gap-1 cursor-pointer max-[350px]:text-[13px]">
          <Image width={24} height={24} src="/icons/NewProfile/heart.svg" alt="heart" />
          Like
        </button>
        <button className="flex items-center gap-1 cursor-pointer max-[350px]:text-[13px]">
          <Image width={24} height={24} src="/icons/NewProfile/message.svg" alt="message" />
          Comment
        </button>
        <button className="flex items-center gap-1 cursor-pointer max-[350px]:text-[13px]">
          <Image width={24} height={24} src="/icons/NewProfile/share.svg" alt="share" />
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;
