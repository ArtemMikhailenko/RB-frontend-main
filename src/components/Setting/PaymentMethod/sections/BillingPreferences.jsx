import React from 'react'

const BillingPreferences = () => {
  return (
           <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white mb-4">
          <h2 className="text-sm font-semibold text-gray-800 mb-4">
            Billing PREFERNCES
          </h2>

          <div className="mb-3">
            <label className="block text-sm font-medium text-[#343434] mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="emailcontactemil"
              placeholder="RB@mail.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Here you will receive the leads and generic contacts to your
            company.
          </p>

          <button className="py-2 text-[#ED8F03]">
            Change contact email for the ads
          </button>
        </div>
  )
}

export default BillingPreferences