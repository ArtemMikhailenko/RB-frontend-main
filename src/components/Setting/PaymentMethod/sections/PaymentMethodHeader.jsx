import React from "react";

const PaymentMethodHeader = () => (
  <div className="flex justify-between items-center mb-4 gap-5">
    <div className="text-xl font-semibold text-gray-800">
      Payment Method
      <p className="text-sm text-gray-500 font-light">
        Manage your payment methods and billing preferences.
      </p>
    </div>
    <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800">
      Save
    </button>
  </div>
);

export default PaymentMethodHeader;
