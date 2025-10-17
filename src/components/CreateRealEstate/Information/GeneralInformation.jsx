"use client";

import React, { useState, useEffect } from "react";
import Premises from "./GeneralInformation/Premises";
import { GeneralInformationHeadings } from "./InformationHeading/InformationHeading";
import HomeDetails from "./GeneralInformation/HomeDetails";
import PromotionDeals from "./GeneralInformation/PromotionDeals";
import BuildingInputs from "./GeneralInformation/BuildingInputs";
import PakingInputs from "./GeneralInformation/PakingInputs";
import StorageInputs from "./GeneralInformation/StorageInputs";
import LandInputs from "./GeneralInformation/LandInputs";
import HouseFeatures from "./GeneralInformation/RentformDetails";

// service
import { submitGeneralInformation } from "@/services/Property/propertyInformation";

export default function GeneralInformation({
  handleNext,
  purpose,
  purposeOption,
  propertyType,
  propertyId,
}) {
  const [formData, setFormData] = useState({
    // meta
    propertyId,
    purpose,
    purposeOption,
    propertyType,

    // new-building
    reference: "",
    price: "",
    deliveryDate: "",
    stage: "",

    // rent details
    persons: "",
    bedrooms: "",
    beds: "",
    bathrooms: "",
    floors: "",
    builtArea: "",
    usableArea: "",
    plotArea: "",
    features: [],
    orientation: [],
    houseFeatures: [],
    buildingFeatures: [],
    childrenAllowed: false,
    petsAllowed: false,
    disabledAccess: false,
    disabledInterior: false,
    monthlyRent: "",
    deposit: "",
    descriptionEs: "",

    // resale details
    resalePrice: "",
    resaleReference: "",
    resaleBedrooms: "",
    resaleBathrooms: "",
    previousBusiness: "",
    totalUnits: "",
    totalLifts: "",
    nParking: "",
    numberOfParking: "",
    parkingSize: "",
    numberOfStorage: "",
    storageSize: "",
    classification: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData((p) => ({ ...p, purpose, purposeOption, propertyType }));
  }, [purpose, purposeOption, propertyType]);

  const updateFormData = (patch) => {
    setFormData((prev) => ({ ...prev, ...patch }));
  };

 const handleSaveAndNext = async () => {
  try {
    // 🔹 New Building
    if (purposeOption === "new") {
      if (!formData.propertyId) {
        alert("propertyId is required.");
        return;
      }
      if (!formData.reference) {
        alert("Please add a reference.");
        return;
      }
      setLoading(true);

      const payload = {
        propertyId: formData.propertyId,
        reference: formData.reference,
        price: Number(formData.price) || 0,
        deliveryDate: String(formData.deliveryDate || ""),
        stage: formData.stage || "",
      };

      await submitGeneralInformation(payload, "new-building-details");
      if (typeof handleNext === "function") handleNext();
      setLoading(false);
      return;
    }

    // 🔹 Rent
    if (purpose === "rent") {
      setLoading(true);

      const rentPayload = {
        propertyId: formData.propertyId,
        persons: formData.persons ? Number(formData.persons) : undefined,
        bedrooms: formData.bedrooms ? Number(formData.bedrooms) : undefined,
        beds: formData.beds ? Number(formData.beds) : undefined,
        bathrooms: formData.bathrooms
          ? Number(formData.bathrooms)
          : undefined,
        floors: formData.floors ? Number(formData.floors) : undefined,
        builtArea: formData.builtArea || undefined,
        usableArea: formData.usableArea || undefined,
        plotArea: formData.plotArea || undefined,
        features: formData.features?.length ? formData.features : undefined,
        orientation: formData.orientation?.length
          ? formData.orientation
          : undefined,
        houseFeatures: formData.houseFeatures?.length
          ? formData.houseFeatures
          : undefined,
        buildingFeatures: formData.buildingFeatures?.length
          ? formData.buildingFeatures
          : undefined,
        childrenAllowed:
          formData.childrenAllowed !== "" ? formData.childrenAllowed : undefined,
        petsAllowed:
          formData.petsAllowed !== "" ? formData.petsAllowed : undefined,
        disabledAccess:
          formData.disabledAccess !== "" ? formData.disabledAccess : undefined,
        disabledInterior:
          formData.disabledInterior !== ""
            ? formData.disabledInterior
            : undefined,
        monthlyRent: formData.monthlyRent
          ? Number(formData.monthlyRent)
          : undefined,
        deposit: formData.deposit ? Number(formData.deposit) : undefined,
        descriptionEs: formData.descriptionEs || undefined,
      };

      const saved = await submitGeneralInformation(
        rentPayload,
        "property-rent-details"
      );
      if (typeof handleNext === "function") handleNext(saved);
      setLoading(false);
      return;
    }

    // 🔹 Resale (Sale)
    if (purpose === "sale") {
      if (!formData.propertyId) {
        alert("propertyId is required.");
        return;
      }
      if (!formData.reference) {
        alert("Please add a reference.");
        return;
      }

      setLoading(true);

      const resalePayload = {
        propertyId: formData.propertyId,
        reference: formData.reference,
        price: formData.price ? Number(formData.price) : undefined,
        bedrooms: formData.bedrooms ? Number(formData.bedrooms) : undefined,
        bathrooms: formData.bathrooms ? Number(formData.bathrooms) : undefined,
        previousBusiness: formData.previousBusiness || undefined,
        totalUnits: formData.totalUnits ? Number(formData.totalUnits) : undefined,
        totalLifts: formData.totalLifts ? Number(formData.totalLifts) : undefined,
        nParking: formData.nParking ? Number(formData.nParking) : undefined,
        numberOfParking: formData.numberOfParking
          ? Number(formData.numberOfParking)
          : undefined,
        parkingSize: formData.parkingSize
          ? formData.parkingSize
          : undefined,
        numberOfStorage: formData.numberOfStorage
          ? Number(formData.numberOfStorage)
          : undefined,
        storageSize: formData.storageSize
          ? formData.storageSize
          : undefined,
        classification: formData.classification || undefined,
      };

      const saved = await submitGeneralInformation(
        resalePayload,
        "property-sale-details"
      );
      if (typeof handleNext === "function") handleNext();
      setLoading(false);
      return;
    }

    // 🔹 Default fallback
    setLoading(true);
    const saved = await submitGeneralInformation(formData);
    if (typeof handleNext === "function") handleNext(saved);
    setLoading(false);
  } catch (err) {
    setLoading(false);
    console.error("Error saving GeneralInformation:", err);
    alert(err?.message || "Failed to save. Check console.");
  }
};


  // 🔹 Decide content
  let content = null;

  if (purpose === "rent") {
    content = <HouseFeatures formData={formData} onChange={updateFormData} />;
  } else if (purposeOption === "new") {
    content = <PromotionDeals formData={formData} onChange={updateFormData} />;
  } else {
    switch (propertyType) {
      case "building":
        content = (
          <BuildingInputs formData={formData} onChange={updateFormData} />
        );
        break;
      case "parking":
        content = (
          <PakingInputs formData={formData} onChange={updateFormData} />
        );
        break;
      case "storage":
        content = (
          <StorageInputs formData={formData} onChange={updateFormData} />
        );
        break;
      case "lands":
        content = <LandInputs formData={formData} onChange={updateFormData} />;
        break;
      case "premises":
      case "warehouse":
        content = <Premises formData={formData} onChange={updateFormData} />;
        break;
      default:
        content = <HomeDetails formData={formData} onChange={updateFormData} />;
        break;
    }
  }

  return (
    <div className="flex p-4 bg-white max-md:flex-col max-md:gap-5">
      <div className="md:w-[35%] md:pr-6 relative md:border-r border-gray-200 ">
        <h2 className="text-lg font-semibold mb-2">Did you know ?</h2>
        <p className="text-sm text-gray-500">
          The internet is the preferred medium for home buyers in India!
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

      <div className="flex-1 md:px-6 space-y-4 ">
        <GeneralInformationHeadings purpose={purpose} />
        {content}
        <div>
          <button
            onClick={handleSaveAndNext}
            disabled={loading}
            className="w-[100px] px-5 py-1.5 bg-black text-white rounded-md disabled:opacity-60"
          >
            {loading ? "Saving..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
