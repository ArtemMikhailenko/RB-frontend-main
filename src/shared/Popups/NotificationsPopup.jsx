"use client";
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";


const NotificationsPopup = () => {
  return (
    <div className=" w-[420px] max-h-[300px] rounded-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] bg-white border border-[#E5E7EB] overflow-y-auto custom-scrollbar">
      <div className="px-4 py-3 space-y-1 divide-y-1 divide-[#E4E4E4]">
        {/* Notification 1 */}
        <div className="text-[14px] text-[#111827] py-3">
          New request for partnership from <span className="font-semibold">Ruben Bothman</span>
          <div className="flex gap-2 mt-2">
            <button className="w-[80px] h-[34px] bg-black text-white rounded-[6px] text-[14px] font-medium hover:bg-gray-900">
              Accept
            </button>
            <button className="w-[80px] h-[34px] bg-[#F3F4F6] border border-[#D1D5DB] text-black rounded-[6px] text-[14px] font-medium hover:bg-[#E5E7EB]">
              Decline
            </button>
          </div>
        </div>

        {/* Notification 2 */}
        <div className="text-[14px] text-[#111827] py-3">
          New request for a demo from <span className="font-semibold">Ruben Bothman</span>
          <div className="flex gap-2 mt-2">
            <button className="w-[80px] h-[34px] bg-black text-white rounded-[6px] text-[14px] font-medium hover:bg-gray-900">
              Accept
            </button>
            <button className="w-[80px] h-[34px] bg-[#F3F4F6] border border-[#D1D5DB] text-black rounded-[6px] text-[14px] font-medium hover:bg-[#E5E7EB]">
              Decline
            </button>
          </div>
        </div>

        {/* Notification 3 */}
        <div className="text-[14px] text-[#111827] py-3">
          New request of viewing REF 1520 from <span className="font-semibold">Ruben Bothman</span>
          <div className="flex gap-2 mt-2">
            <button className="w-[80px] h-[34px] bg-black text-white rounded-[6px] text-[14px] font-medium hover:bg-gray-900">
              Accept
            </button>
            <button className="w-[80px] h-[34px] bg-[#F3F4F6] border border-[#D1D5DB] text-black rounded-[6px] text-[14px] font-medium hover:bg-[#E5E7EB]">
              Decline
            </button>
          </div>
        </div>

        {/* Notification 4 */}
        <div className="flex items-center space-x-2 py-3">
          <CheckCircle className="text-[#22C55E] w-[18px] h-[18px]" />
          <p className="text-[14px] text-[#111827]">
            Accepted partnership from <span className="font-semibold">Ruben Bothman</span>
          </p>
        </div>

        {/* Notification 5 */}
        <div className="flex items-center space-x-2 py-3">
          <XCircle className="text-[#EF4444] w-[18px] h-[18px]" />
          <p className="text-[14px] text-[#111827]">
            Declined partnership from <span className="font-semibold">Ruben Bothman</span>
          </p>
        </div>

        {/* Notification 6 */}
        <div className="flex items-center space-x-2 py-3">
          <XCircle className="text-[#EF4444] w-[18px] h-[18px]" />
          <p className="text-[14px] text-[#111827]">
            Your subscription <span className="font-semibold">is going to expire in 5 days</span> on the market
          </p>
        </div>

        {/* Notification 7 */}
        <div className="flex items-center space-x-2 py-3">
          <XCircle className="text-[#EF4444] w-[18px] h-[18px]" />
          <p className="text-[14px] text-[#111827]">
            Payment has been failed of your monthly bill
          </p>
        </div>

        {/* Notification 8 */}
        <div className="flex items-center space-x-2 py-3">
          <CheckCircle className="text-[#22C55E] w-[18px] h-[18px]" />
          <p className="text-[14px] text-[#111827]">
            Payment successfully of your monthly bill
          </p>
        </div>

        {/* Notification 9 */}
        <div className="flex items-center space-x-2 py-3">
          <XCircle className="text-[#EF4444] w-[18px] h-[18px]" />
          <p className="text-[14px] text-[#111827]">
            Price alert: your competitor <span className="font-semibold">Olivier</span> dropped the price
          </p>
        </div>

        {/* Notification 10 */}
        <div className="text-[14px] text-[#111827] py-3">
          You have documents for signature expiring by <span className="font-semibold">15 Jan 2025</span>
          <div className="flex justify-start mt-2">
            <button className="w-[80px] h-[34px] bg-black text-white rounded-[6px] text-[14px] font-medium hover:bg-gray-900">
              View
            </button>
          </div>
        </div>

        {/* Notification 11 */}
        <div className="flex items-center space-x-2 py-3">
          <CheckCircle className="text-[#22C55E] w-[18px] h-[18px]" />
          <p className="text-[14px] text-[#111827]">
            The viewing is confirmed by <span className="font-semibold">Ruben Bothman</span>
          </p>
        </div>

        {/* Notification 12 */}
        <div className="flex items-center space-x-2 ">
          <CheckCircle className="text-[#22C55E] w-[18px] h-[18px]" />
          <p className="text-[14px] text-[#111827]">
            The online viewing has been successfully created by <span className="font-semibold">Ruben Bothman</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPopup;
