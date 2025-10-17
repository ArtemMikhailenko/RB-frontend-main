"use client";
import React, { useState } from "react";

const ContactPreferencesForm = ({ handleNext, formData, setFormData }) => {
  const [showSecondPhone, setShowSecondPhone] = useState(false);

  return (
    <div className=" sm:mx-6 space-y-6">
      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your phone number
        </label>
        <div className="flex items-center mb-2">
          <input
            type="text"
            value={formData.countryCode1 || ""}
            onChange={(e) =>
              setFormData({ ...formData, countryCode1: e.target.value })
            }
            className="hide-number-button outline-none w-12 bg-[#D1D5DB] px-2 h-6 rounded"
          />

          <input
            type="number"
            value={formData.phone1 || ""}
            onChange={(e) => {
              let val = e.target.value;

              // ✅ ensure it's string
              val = val.toString();

              // ✅ restrict to max 11 digits
              if (val.length > 11) return;

              setFormData({ ...formData, phone1: val });
            }}
            className="w-full border rounded px-3 py-2 hide-number-button text-sm outline-none border-[#E5E7EB]"
          />
        </div>

        {!showSecondPhone ? (
          <button
            type="button"
            onClick={() => setShowSecondPhone(true)}
            className="text-sm text-orange-500 mt-2"
          >
            Add an additional phone number
          </button>
        ) : (
          <div className="flex items-center">
            <input
              type="text"
              value={formData.countryCode2 || ""}
              onChange={(e) =>
                setFormData({ ...formData, countryCode2: e.target.value })
              }
              className="hide-number-button outline-none w-12 bg-[#D1D5DB] px-2 h-6 rounded"
            />

            <input
              type="number"
              value={formData.phone2 || ""}
              onChange={(e) => {
                let val = e.target.value;

                // ✅ ensure it's string
                val = val.toString();

                // ✅ restrict to max 11 digits
                if (val.length > 11) return;

                setFormData({ ...formData, phone2: val });
              }}
              className="w-full border rounded px-3 py-2 hide-number-button text-sm outline-none border-[#E5E7EB] "
            />
          </div>
        )}
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your name
        </label>
        <input
          type="text"
          value={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border rounded px-3 py-2 text-sm outline-none border-[#E5E7EB]"
        />
        <p className="text-xs text-gray-500 mt-1">
          It will be shown on your listing and when you contact other users
        </p>
      </div>

      {/* Contact Preference */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How do you prefer to be contacted?
        </label>

        <div className="space-y-4">
          {/* Option 1 */}
          <label className="flex items-start space-x-2 cursor-pointer">
            <input
              type="radio"
              name="contact"
              value="PHONE_AND_CHAT"
              checked={formData.contactPreference === "PHONE_AND_CHAT"}
              onChange={(e) =>
                setFormData({ ...formData, contactPreference: e.target.value })
              }
              className="mt-1"
            />
            <div>
              <span className="font-medium text-sm">
                Phone and messages in our chat (recommended)
              </span>
              <p className="text-xs text-gray-600">
                You can receive messages with tenant profile if you want
                <br />
                You will be notified of messages by email and notifications in
                our app
              </p>
            </div>
          </label>

          {/* Option 2 */}
          <label className="flex items-start space-x-2 cursor-pointer pl-6">
            <input
              type="radio"
              name="contact"
              value="CHAT_ONLY"
              checked={formData.contactPreference === "CHAT_ONLY"}
              onChange={(e) =>
                setFormData({ ...formData, contactPreference: e.target.value })
              }
              className="mt-1"
            />
            <div className="text-sm font-medium ">Only by chat messages</div>
          </label>

          {/* Option 3 */}
          <label className="flex items-start space-x-2 cursor-pointer pl-6">
            <input
              type="radio"
              name="contact"
              value="CHAT_WITH_PROFILE"
              checked={formData.contactPreference === "CHAT_WITH_PROFILE"}
              onChange={(e) =>
                setFormData({ ...formData, contactPreference: e.target.value })
              }
              className="mt-1"
            />
            <div>
              <span className="font-medium text-sm">
                Receive all messages by chat with tenant profile
              </span>
              <p className="text-xs text-orange-500 mt-0.5 mb-3 ">
                What are tenant profile messages?
              </p>
              <p className="text-xs text-gray-600">
                You will be notified of messages by email and notifications in
                our app
              </p>
            </div>
          </label>

          {/* Option 4 */}
          <label className="flex items-start space-x-2 cursor-pointer">
            <input
              type="radio"
              name="contact"
              value="PHONE_ONLY"
              checked={formData.contactPreference === "PHONE_ONLY"}
              onChange={(e) =>
                setFormData({ ...formData, contactPreference: e.target.value })
              }
              className="mt-1"
            />
            <span className="text-sm font-medium mb-4">Only by telephone</span>
          </label>
          <button
            className="bg-black text-white px-10 py-1.5 resize-none rounded-md text-sm"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPreferencesForm;
