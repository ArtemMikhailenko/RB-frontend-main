"use client";

import { useState } from "react";
import { updatePassword } from "@/services/profileSetting";

const PasswordSection = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleUpdate = async () => {
    if (!currentPassword || !newPassword) {
      setMessage("Please fill out both fields.");
      return;
    }

    setLoading(true);
    setMessage(null);

    const result = await updatePassword(currentPassword, newPassword);

    setMessage(result.message);
    if (result.success) {
      setCurrentPassword("");
      setNewPassword("");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-sm font-bold text-[#15171C] mb-3">PASSWORD</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="currentPassword" className="text-[#343434] text-[14px] font-medium">
            Current password
          </label>
          <input
            id="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full border border-[#E4E4E4] rounded px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newPassword" className="text-[#343434] text-[14px] font-medium">
            New password
          </label>
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-[#E4E4E4] rounded px-3 py-2 text-sm"
          />
        </div>
      </div>
      <button
        onClick={handleUpdate}
        disabled={loading}
        className="px-3 py-2 text-sm rounded-lg text-[13px] font-medium bg-[#F0F0F0] text-[#343434] hover:bg-gray-400 disabled:opacity-50"
      >
        {loading ? "Updating..." : "Update password"}
      </button>
      {message && (
        <p className="mt-2 text-sm text-center text-red-600">{message}</p>
      )}
    </div>
  );
};

export default PasswordSection;
