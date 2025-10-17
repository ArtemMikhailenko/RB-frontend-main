"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

const ExportPopup = ({ setEditPopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-sm:w-[360px] w-[500] py-6 mx-3 ">
        <div className="flex justify-between items-center mb-6 border-b border-b-gray-300 px-4">
          <h2 className="text-[18px] font-medium mb-3">Export</h2>
          <FaTimes
            className="text-[18px] mb-2 cursor-pointer"
            onClick={() => setEditPopup(false)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 px-6">
          {/* Google Ads */}
          <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-sm transition">
            <Image
              width={34}
              height={34}
              src="/icons/ManageListing/PopUps/google.svg"
              alt="Google Ads"
              className="w-8 h-8"
            />
            <span className="text-sm font-medium underline decoration-gray-400">
              Export Listing
            </span>
          </button>

          {/* Instagram */}
          <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-sm transition">
            <Image
              width={34}
              height={34}
              src="/icons/ManageListing/PopUps/instagram.svg"
              alt="Instagram"
              className="w-8 h-8"
            />
            <span className="text-sm font-medium underline decoration-gray-400">
              Export Listing
            </span>
          </button>

          {/* Facebook */}
          <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-sm transition">
            <Image
              width={34}
              height={34}
              src="/icons/ManageListing/PopUps/facebook.svg"
              alt="Facebook"
              className="w-8 h-8"
            />
            <span className="text-sm font-medium underline decoration-gray-400">
              Export Listing
            </span>
          </button>

          {/* VK */}
          <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-sm transition">
            <Image
              width={34}
              height={34}
              src="/icons/ManageListing/PopUps/vklogo.svg"
              alt="VK"
              className="w-8 h-8"
            />
            <span className="text-sm font-medium underline decoration-gray-400">
              Export Listing
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportPopup;
