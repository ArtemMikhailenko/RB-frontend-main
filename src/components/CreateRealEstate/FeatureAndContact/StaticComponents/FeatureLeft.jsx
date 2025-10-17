import React from 'react'

const FeatureLeft = () => {
  return (
     <div className="md:w-[35%] pr-6 relative  md:border-r border-gray-200">
        <h2 className="text-lg font-bold mb-2">What are the main features?</h2>
        <p className="text-sm text-gray-500">
          What are the key features in real estate are you selling?
        </p>
        <div className="hidden md:block absolute top-0 bottom-0 right-[7.5px] transform z-10">
          {[0].map((pos, idx) => (
            <div
              key={idx}
              className="absolute w-4 h-4 rounded-full bg-white border border-gray-400 flex items-center justify-center"
              style={{ top: pos + "px", left: "0px" }}
            >
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
            </div>
          ))}
        </div>
      </div>
  )
}

export default FeatureLeft