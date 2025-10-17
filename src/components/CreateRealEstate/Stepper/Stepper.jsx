import React from "react";

const Stepper = ({ currentStep, setCurrentStep }) => {
  // 🔹 Static steps, same for all purposes now
  const steps = [
    "Type",
    "Location",
    "Information",
    "Details",
    "Media"
  ];

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-6 py-4">
      {/* Small Screen View */}
      <div className="flex md:hidden items-center justify-between w-full mb-4">
        {/* Left - Previous Steps */}
        <div className="flex gap-2">
          {steps.slice(0, currentStep - 2).map((_, index) => (
            <div
              key={index}
              onClick={() => handleStepClick(index + 2)}
              className="flex items-center gap-1 cursor-pointer text-gray-400"
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm bg-gray-200 text-gray-500">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Center - Active Step with Label */}
        <div
          className="flex items-center gap-1 cursor-pointer text-orange-500 font-medium"
          onClick={() => handleStepClick(currentStep)}
        >
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm bg-orange-500 text-white">
            {currentStep - 1}
          </div>
          <span className="text-sm text-black font-medium">
            {steps[currentStep - 2]}
          </span>
        </div>

        {/* Right - Upcoming Steps */}
        <div className="flex gap-2">
          {steps.slice(currentStep - 1).map((_, index) => (
            <div
              key={index}
              onClick={() => handleStepClick(currentStep + index + 1)}
              className="flex items-center gap-1 cursor-pointer text-gray-400"
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm bg-gray-200 text-gray-500">
                {currentStep + index}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-wrap md:flex-nowrap items-center justify-between gap-y-4 md:gap-0 mb-2 relative">
        {steps.map((label, index) => {
          const stepNumber = index + 2;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <div
              key={index}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleStepClick(stepNumber)}
            >
              <div className="flex justify-center gap-2 items-center text-xs min-w-[50px]">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-medium ${
                    isActive || isCompleted
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {stepNumber - 1}
                </div>
                <span
                  className={`text-[14px] ${
                    isActive
                      ? "text-gray-900 font-bold"
                      : isCompleted
                      ? "text-black"
                      : "text-gray-400"
                  }`}
                >
                  {label}
                </span>
              </div>
              <div className="hidden md:block">
                {index !== steps.length - 1 && (
                  <div className="h-4 border-l border-gray-300 opacity-50"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="relative h-1 bg-gray-100 w-full rounded">
        <div
          className="absolute left-0 top-0 h-1 bg-orange-500 rounded transition-all duration-300"
          style={{ width: `${((currentStep - 1) / 7) * 110}%` }}
        />
      </div>
    </div>
  );
};

export default Stepper;
