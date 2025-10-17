import React from "react";
import { X } from "lucide-react";
const NewCustomersPopup = ({ setCustomerPopup }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl relative mx-4">
        {/* Updated Header */}
        <div className="flex justify-between items-center bg-[#E4E4E4] px-4 py-5 rounded-t-xl">
          <h2 className="text-base font-semibold text-gray-900">
            New customer
          </h2>
          <button
            className="text-gray-400 hover:text-black"
            onClick={() => setCustomerPopup(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Section */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">ID</label>
              <input
                type="text"
                placeholder="Enter ID"
                className="w-full outline-none mt-1 border border-gray-300  rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm">Role</label>

              {/* Relative wrapper for custom icon */}
              <div className="relative mt-1">
                <select className="appearance-none w-full text-gray-400 border border-gray-300 rounded-md px-3 py-2 text-sm pr-10 focus:outline-0">
                  <option>Select role</option>
                  <option>Admin</option>
                  <option>Editor</option>
                </select>

                {/* Custom dropdown SVG icon */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm">Full name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full mt-1 outline-none border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <input
                type="text"
                placeholder="Enter phone"
                className="w-full mt-1 outline-none border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full mt-1 outline-none border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm">Nationality</label>

              <div className="relative mt-1">
                <select className="appearance-none w-full text-gray-400 border border-gray-300 rounded-md px-3 py-2 text-sm pr-10 focus:outline-0">
                  <option>Select</option>
                  <option>Pakistani</option>
                  <option>American</option>
                  <option>Canadian</option>
                </select>

                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm">Language</label>
              <select className="w-full outline-none text-gray-400 mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="text-sm">Tags customer</label>
              <input
                type="text"
                placeholder="Enter"
                className="w-full mt-1 outline-none border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-between gap-4 mt-6">
            <button
              className="flex-1 py-2 rounded-md border border-gray-300 bg-[#dadada] text-black"
              onClick={() => setCustomerPopup(false)}
            >
              Cancel
            </button>
            <button className="flex-1 py-2 rounded-md bg-black text-white">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomersPopup;
