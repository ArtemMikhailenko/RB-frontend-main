"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const ShareWithPartner = ({ onClose }) => {
  const users = [
    { name: "John Smith", email: "abc@gmail.com" },
    { name: "Jane Doe", email: "jane@example.com" },
    { name: "Alice Johnson", email: "alice@example.com" },
    { name: "Bob Brown", email: "bob@example.com" },
    { name: "Eve Adams", email: "eve@example.com" },
  ];

  const [checked, setChecked] = useState({});

  const toggleCheckbox = (index) => {
    setChecked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center text-[#343434] justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between bg-[#E4E4E4] items-center px-4 py-5 rounded-t-lg">
          <h2 className="text-sm font-bold text-gray-900">
            Share with partners
          </h2>
          <button onClick={onClose}>
            <X size={18} className="text-gray-400 hover:text-black" />
          </button>
        </div>

        {/* User List */}
        <div className="overflow-y-auto px-1 py-1 flex-1">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => toggleCheckbox(idx)}
            >
              <div className="flex items-center gap-3">
                <Image src="/images/ManageLeads/man.png" width={48} height={48} alt="profile" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              <input
                type="checkbox"
                className="w-4 h-4 rounded"
                checked={!!checked[idx]}
                onChange={() => toggleCheckbox(idx)}
                onClick={(e) => e.stopPropagation()} // Prevent div click when clicking checkbox directly
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between gap-2 px-4 py-3 ">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-md bg-gray-100 text-gray-800 text-sm font-medium"
          >
            Cancel
          </button>
          <button className="flex-1 py-2 rounded-md bg-black text-white text-sm font-medium">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareWithPartner;
