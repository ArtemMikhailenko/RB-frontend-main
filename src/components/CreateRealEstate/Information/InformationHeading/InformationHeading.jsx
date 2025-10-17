import React from 'react'

export const GeneralInformationHeadings = () => {
      const [classification, setClassification] = React.useState( "Residential"
      );
  return (
   <>
           {/* General Info */}
          <h2 className="text-lg font-semibold mb-4">Enter basic property information</h2>
            {/* <div className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 bg-white">
              Reference <br />
              <input
                type="text"
                placeholder="150M"
                className="text-black font-bold bg-transparent outline-none w-full"
              />
            </div> */}
</>
    )
}