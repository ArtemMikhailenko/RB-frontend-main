"use client";

import React, { useState } from "react";
import GettingStarted from "@/components/CreateRealEstate/GettingStarted/GettingStarted";
import PropertyOptions from "@/components/CreateRealEstate/PropertyOptions/PropertyOptions";
import LocationForm from "@/components/CreateRealEstate/LocationForm/LocationForm";

import GeneralInformation from "@/components/CreateRealEstate/Information/GeneralInformation";
import FeaturesForm from "@/components/CreateRealEstate/FeatureAndContact/FeatureForm";
import MultimediaUpload from "@/components/CreateRealEstate/Media/Media";

import Stepper from "@/components/CreateRealEstate/Stepper/Stepper";

const steps = [
  "Getting Started",
  "Property Options",
  "Location",
  "General Information",
  "Features",
  "Price",
  "Media",
  "Review & Submit",
];

const Page = () => {
  const [step, setStep] = useState(1);
  // Store all property data across steps
  const [propertyData, setPropertyData] = useState({});

  const handleNext = (data) => {
    if (data) {
      setPropertyData((prev) => ({ ...prev, ...data }));
      console.log("Accumulated Property Data:", { ...propertyData, ...data });
    }
    setStep((prev) => prev + 1);
  };
  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <GettingStarted handleNext={handleNext} />;
      case 2:
        return (
          <PropertyOptions
            handleNext={handleNext}
            handleBack={handleBack}
            propertyid={propertyData?.id}
          />
        );
      case 3:
        return (
          <LocationForm
            handleNext={handleNext}
            handleBack={handleBack}
            propertyid={propertyData?.id}
          />
        );
        case 4:
          return (
            <GeneralInformation
              handleNext={handleNext}
              handleBack={handleBack}
              propertyId={propertyData?.id}
              purpose={propertyData?.purpose}
              purposeOption={propertyData?.purposeOption}
              propertyType={propertyData?.propertyType}
            />
          );
         case 5:
           return (
             <FeaturesForm
              handleNext={handleNext}
              handleBack={handleBack}
              propertyId={propertyData?.id}
              purpose={propertyData?.purpose}
              purposeOption={propertyData?.purposeOption}
              propertyType={propertyData?.propertyType}
             />
          );
        case 6:
          return (
            <MultimediaUpload
              handleNext={handleNext}
              handleBack={handleBack}
              propertyId={propertyData?.id}
            />
          );

      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <section className="w-full bg-white min-h-[93vh]">
      {step !== 1 && <Stepper currentStep={step} setCurrentStep={setStep} />}
      {renderStep()}
    </section>
  );
};

export default Page;