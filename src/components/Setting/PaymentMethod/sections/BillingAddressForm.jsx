import React from 'react'

const BillingAddressForm = () => {
  return (
           <div className="p-4 bg-white rounded-md shadow-sm mb-4">
          <h2 className="text-sm font-semibold text-black mb-4">
            ONLINE OFFICE NAME
          </h2>

          <div className="mb-4 ">
            <label className="block text-sm font-medium text-black mb-2">
              Billing name
            </label>
            <input
              type="text"
              placeholder="Realtor Buiro"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-2">
              Billing email
            </label>
            <input
              type="email"
              placeholder="Realtorbuiro@mail.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-2">
              Billing address
            </label>
            <input
              type="text"
              placeholder="Enter"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                State
              </label>
              <input
                type="text"
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Country
              </label>
              <input
                type="text"
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
        </div>
  )
}

export default BillingAddressForm