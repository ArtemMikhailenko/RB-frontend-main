"use client";
import { usePathname } from "next/navigation";
import React from "react";
import RealEstateCardPrice from "./RealEstateCardPrice";
import RealEstateImageSlider from "../LeftSide/ImageSlider/ImageSlider"; // ✅ slider re-added
import GalleryModal from "./Modal/GalleryModal";
import Image from "next/image";
import { MapPin, Camera, Navigation } from "lucide-react";
import Link from "next/link";

const RealEstateServices = ({ property }) => {
  console.log("property in child", property);
  const [isGalleryOpen, setGalleryOpen] = React.useState(false);
  const pathname = usePathname();

  // Replace with real property photos
  const photos = property?.media?.[0]?.images || [];

  return (
    <div className={`${pathname.includes("/detail") ? "lg:pl-8" : "bg-white"}`}>
      {!pathname.includes("/detail") && (
        <button className="py-2 px-1 text-xl cursor-pointer">
          <Link href="/realestate/detail">Expand the tab</Link>
        </button>
      )}

      {/* ✅ Slider Section */}
      <div className="w-full sm:hidden mb-4">
        {property?.media[0]?.images?.length > 0 ? (
          <RealEstateImageSlider property={property} />
        ) : (
          <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">No images available</p>
          </div>
        )}
      </div>

      {/* Kitchen Image */}
      {property?.media?.[0]?.images && property.media[0].images.length > 0 && (
      <div className="relative sm:block hidden w-full h-[400px]">
        <Image
          src={property?.media[0]?.images?.[0] || "/images/placeholder.png"}
          alt="Kitchen"
          fill
          className="object-cover"
        />
        {/* Buttons */}
        <div className="flex sm:gap-3 gap-1 sm:px-4 px-1 py-3 absolute z-1 bottom-0">
          <button className="flex items-center gap-1 sm:gap-2 sm:px-4 px-2 py-2 rounded-full text-[9px] sm:text-sm bg-gray-100">
            <Camera size={16} /> Virtual tour
          </button>
          <button className="flex items-center gap-1 sm:gap-2 sm:px-4 px-2 py-2 rounded-full text-[9px] sm:text-sm bg-gray-100">
            <Navigation size={16} /> Street View
          </button>
          <button className="flex items-center gap-1 sm:gap-2 sm:px-4 px-2 py-2 rounded-full text-[9px] sm:text-sm bg-gray-100">
            <MapPin size={16} /> Location
          </button>
        </div>
      </div>
      )}
      {/* Secondary Images */}
      {property?.media?.[0]?.images && property.media[0].images.length > 1 && (
        <div className="grid grid-cols-2 gap-2 max-sm:hidden py-2 border-b border-gray-200">
          <div className="relative h-[220px] rounded-lg overflow-hidden">
            <Image
              src={property?.media[0]?.images?.[1] || "/images/placeholder.png"}
              alt="View"
              fill
              className="object-cover"
            />
          </div>

          <button
            onClick={() => setGalleryOpen(true)}
            className="relative h-[220px] rounded-lg overflow-hidden focus:outline-none"
          >
            <Image
              src={property?.media[0]?.images?.[2] || "/images/placeholder.png"}
              alt="Living Room"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium text-lg">
              +{property?.media[0]?.images?.length-2}
            </div>
          </button>
        </div>
      )}

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <GalleryModal photos={photos} onClose={() => setGalleryOpen(false)} />
      )}

      <RealEstateCardPrice property={property} />
    </div>
  );
};

export default RealEstateServices;
