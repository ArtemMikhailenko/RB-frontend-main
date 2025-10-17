import React from "react";
import { Trash,Plus } from "lucide-react";
import Image from "next/image";

const PaymentCard = () => (
 <div className=" mb-4 bg-white rounded-lg shadow p-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            PAYMENT METHODS
          </h2>

          {/* Payment Card */}
          <div className="rounded-lg flex items-center justify-between p-4 mb-5 shadow-md">
            <div className="flex items-center space-x-3">
              <div className="bg-[#EEEEEE] py-5 px-2 rounded-full  flex items-center justify-center">
                {/* Visa Logo */}
                <Image
                  src="/icons/Setting/Payment/visa.svg"
                  alt="Visa"
                  width={40}
                  height={40}
                  className=" object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">VISA</p>
                <p className="text-sm text-gray-500">**** **** **** 1234</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button type="button">
                <Image
                  width={20}
                  height={20}
                  alt="share"
                  src="/icons/Setting/Payment/share.svg"
                />
              </button>
              <button
                type="button"
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash size={18} />
              </button>
            </div>
          </div>

          {/* Add Payment Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-3 py-3 rounded-lg bg-gray-100 hover:bg-gray-100 transition-colors"
          >
            <Plus size={18} />
            <span className="text-sm font-medium text-gray-700">
              Add payment methods
            </span>
          </button>
        </div>
);

export default PaymentCard;
