import React from "react";
import Image from "next/image";

const UserProfileShare = ({ onClose }) => {
  const shareOptions = [
    { name: "Facebook", icon: "/icons/NewProfile/facebook.svg" },
    { name: "Twitter", icon: "/icons/NewProfile/twitter.svg" },
    { name: "LinkedIn", icon: "/icons/NewProfile/linkedin.svg" },
    { name: "Instagram", icon: "/icons/NewProfile/insta.svg" },
  ];

  const handleShare = (platform) => {
    // Add share logic here
    console.log(`Sharing to ${platform}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Share Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => handleShare(option.name)}
              className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Image
                src={option.icon}
                alt={option.name}
                width={24}
                height={24}
              />
              <span className="text-gray-700">{option.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Or copy link:</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={typeof window !== "undefined" ? window.location.href : ""}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileShare;
