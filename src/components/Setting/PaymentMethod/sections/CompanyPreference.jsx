import React from 'react'

const CompanyPreference = () => {
  return (
           <div className="p-4 bg-white rounded-lg border border-gray-200 font-sans mb-4">
          <div className="">
            <h2 className="text-base font-semibold text-gray-900 mb-3 tracking-wide">
              Company Size & Structure
            </h2>

            <div className="space-y-3">
              {["Auto new subscription", "Email receipt"].map((item) => (
                <div key={item} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="
      w-4 h-4 rounded-lg border border-[#E0E0E0] 
      accent-[#ED8F03] 
      transition-all duration-200 
      focus:scale-95
      checked:border
    "
                    />
                  </div>

                  <label className="ml-3 text-sm text-[#343434]">{item}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block max-sm:text-sm font-medium  mt-3 mb-2">
              Billing cycle
            </label>
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2.5 text-base border text-[#636363] border-gray-300 rounded-md focus:outline-none  appearance-none bg-white">
                <option>Select</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CompanyPreference