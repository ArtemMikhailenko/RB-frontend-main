"use client";

import React, { useState } from "react";
import Apartments from "./featureInputs/Apartments";
import Parking from "./featureInputs/Parking";
import Land from "./featureInputs/Land";
import NewBuildingInputs from "./featureInputs/NewBuildingInputs";
import ContactPreferencesForm from "./featureInputs/ContactPreferencesForm";
import {
  sectionOptions,
  premisesOptions,
  parkingOptions,
  storageOptions,
  landsOptions,
} from "./data/featureOptions";
import FeatureLeft from "./StaticComponents/FeatureLeft";
import DescriptionSection from "./StaticComponents/DescriptionSection";

// Service
import { submitFeatureAndContact } from "@/services/Property/propertyFeatureService";

// Generic Feature Section
const FeatureSection = ({ title, options, selected, onToggle }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full py-3 gap-2 md:text-md text-sm font-bold text-black cursor-pointer"
      >
        <img
          src="/icons/CreateRealEstate/feature/arrow.svg"
          className={`md:h-4 md:w-4 h-3 w-3 text-black transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
        {title}
      </button>
      {open && (
        <div className="flex flex-wrap gap-2 pt-2 pb-4 px-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onToggle(option)}
              className={`px-3 py-1 text-sm rounded-md border ${
                selected.includes(option)
                  ? "bg-[#F2F4F9] text-black border-none font-bold"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function FeaturesForm({
  handleNext,
  purpose,
  purposeOption,
  propertyType,
  propertyId,
}) {
  // Selected features
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ New Building Inputs state
  const [newBuildingData, setNewBuildingData] = useState({
    typeOfComplex: "",
    totalUnits: "",
    blockNumber: "",
    forSale: "",
    yearOfConstruction: "",
    promotion: "",
    hoa: "",
    taxes: "",
    commission: "",
    priceFrom: "",
    priceTo: "",
    bedroom: "",
    bathroom: "",
    internalArea: "",
    landArea: "",
    floor: "",
    category: "",
    description: "",
    language: "",
  });

  // ✅ Rent Contact Inputs state
  const [rentContact, setRentContact] = useState({
    name: "", // required
    countryCode1: "+32", // optional
    phone1: "", // optional
    countryCode2: "+32", // optional
    phone2: "", // optional
    contactPreference: "", // required → must be one of "PHONE1" | "PHONE2" | "EMAIL"
  });

  //Resale Features state
  const [resaleFeatures, setResaleFeatures] = useState({
    propertyId: "", // required → UUID
    internalArea: "", // number, optional
    landArea: "", // number, optional
    numberOfFloor: "", // int, optional
    totalFloor: "", // int, optional
    yearOfConstruction: "", // int, optional
    hoa: "", // int, optional
    taxes: "", // int, optional
    commission: "", // int, optional
    features: [], // array of strings, optional
    language: "", // string, optional
    description: "", // string, optional
  });

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };

  const updateNewBuildingData = (patch) => {
    setNewBuildingData((prev) => ({ ...prev, ...patch }));
  };
  const updateResaleFeatures = (patch) => {
    setResaleFeatures((prev) => ({ ...prev, ...patch }));
  };

  const handleSaveAndNext = async () => {
    if (!propertyId) {
      alert("Property ID is required.");
      return;
    }
    // New Building property type
    if (purposeOption === "new") {
      // ✅ Check required fields before preparing payload
      for (const key of [
        "typeOfComplex",
        "totalUnits",
        "blockNumber",
        "forSale", // note: use the correct key
        "yearOfConstruction",
        "hoa",
        "taxes",
        "commission",
      ]) {
        if (!newBuildingData[key]) {
          alert(`Please fill ${key}`);
          return; // stop submission
        }
      }

      setLoading(true);

      try {
        // Prepare payload matching CreatePropertyNewBuildingFeaturesDto
        const payload = {
          propertyId,
          typeOfComplex: newBuildingData.typeOfComplex || "", // required
          totalUnits: newBuildingData.totalUnits
            ? Number(newBuildingData.totalUnits)
            : 0,
          blockNumber: newBuildingData.blockNumber
            ? Number(newBuildingData.blockNumber)
            : 0,
          forSale: newBuildingData.forSale
            ? Number(newBuildingData.forSale)
            : 0,
          yearOfConstruction: newBuildingData.yearOfConstruction
            ? Number(newBuildingData.yearOfConstruction)
            : 0,
          promotion: newBuildingData.promotion || undefined,
          hoa: newBuildingData.hoa ? Number(newBuildingData.hoa) : 0,
          taxes: newBuildingData.taxes ? Number(newBuildingData.taxes) : 0,
          commission: newBuildingData.commission
            ? Number(newBuildingData.commission)
            : 0,
          priceFrom: newBuildingData.priceFrom
            ? Number(newBuildingData.priceFrom)
            : 0,
          priceTo: newBuildingData.priceTo
            ? Number(newBuildingData.priceTo)
            : 0,
          bedroom: newBuildingData.bedroom
            ? Number(newBuildingData.bedroom)
            : 0,
          bathroom: newBuildingData.bathroom
            ? Number(newBuildingData.bathroom)
            : 0,
          internalArea: newBuildingData.internalArea
            ? Number(newBuildingData.internalArea)
            : 0,
          landArea: newBuildingData.landArea
            ? Number(newBuildingData.landArea)
            : undefined,
          floor: newBuildingData.floor
            ? Number(newBuildingData.floor)
            : undefined,
          category: newBuildingData.category || undefined,
          features:
            Array.isArray(selectedFeatures) && selectedFeatures.length > 0
              ? selectedFeatures
              : undefined,
          description: newBuildingData.description || "",
          language: newBuildingData.language || "english",
        };
        await submitFeatureAndContact(
          payload,
          "property-new-building-features"
        );
        if (typeof handleNext === "function") handleNext();
      } catch (err) {
        console.error("Error submitting New Building features:", err);
        alert(err?.message || "Failed to submit features.");
      }

      setLoading(false);
      return;
    }
    // Rent property type
    if (purpose === "rent") {
      if (!rentContact.name) {
        alert("Please fill name");
        return;
      }
      if (!rentContact.contactPreference) {
        alert("Please select a contact preference");
        return;
      }

      setLoading(true);
      try {
        const payload = {
          name: rentContact.name || "",
          countryCode1: rentContact.countryCode1 || undefined,
          phone1: rentContact.phone1 || undefined,
          countryCode2: rentContact.countryCode2 || undefined,
          phone2: rentContact.phone2 || undefined,
          contactPreference: rentContact.contactPreference,
          propertyId,
        };
        console.log("rent payload sent :", payload);
        await submitFeatureAndContact(payload, "rent-contact");
        if (typeof handleNext === "function") handleNext();
      } catch (err) {
        console.error("Error submitting Rent Contact:", err);
        alert(err?.message || "Failed to submit rent contact.");
      }
      setLoading(false);
      return;
    }
    // Resale property type
    if (purposeOption === "resale") {
      setLoading(true);
      try {
        const payload = {
          propertyId: propertyId,
          internalArea: resaleFeatures.internalArea
            ? Number(resaleFeatures.internalArea)
            : undefined,
          landArea: resaleFeatures.landArea
            ? Number(resaleFeatures.landArea)
            : undefined,
          numberOfFloor: resaleFeatures.numberOfFloor
            ? Number(resaleFeatures.numberOfFloor)
            : undefined,
          totalFloor: resaleFeatures.totalFloor
            ? Number(resaleFeatures.totalFloor)
            : undefined,
          yearOfConstruction: resaleFeatures.yearOfConstruction
            ? Number(resaleFeatures.yearOfConstruction)
            : undefined,
          hoa: resaleFeatures.hoa ? Number(resaleFeatures.hoa) : undefined,
          taxes: resaleFeatures.taxes
            ? Number(resaleFeatures.taxes)
            : undefined,
          commission: resaleFeatures.commission
            ? Number(resaleFeatures.commission)
            : undefined,
          features: selectedFeatures.length ? selectedFeatures : [],
          language: resaleFeatures.language || undefined,
          description: resaleFeatures.description || undefined,
        };
        console.log("resale payload sent :", payload);
        await submitFeatureAndContact(payload, "property-resale-features");
        if (typeof handleNext === "function") handleNext();
      } catch (err) {
        console.error("Error submitting Resale features:", err);
        alert(err?.message || "Failed to submit resale features.");
      }
      setLoading(false);
      return;
    }

    // For other property types, just proceed
    if (typeof handleNext === "function") handleNext();
  };

  const renderRightSide = () => {
    if (purpose === "rent") {
      return (
        <ContactPreferencesForm
          setFormData={setRentContact}
          formData={rentContact}
          handleNext={handleSaveAndNext}
        />
      );
    }

    const newBuildingInput =
      purposeOption === "new" ? (
        <NewBuildingInputs
          formData={newBuildingData}
          onChange={updateNewBuildingData}
        />
      ) : null;

    let OptionalComponent = null;
    let sections = [];

    switch (propertyType) {
      case "lands":
        OptionalComponent =
          purposeOption !== "new" ? (
            <Land
              formData={purposeOption === "resale" ? resaleFeatures : undefined}
              onChange={
                purposeOption === "resale" ? updateResaleFeatures : undefined
              }
            />
          ) : null;
        sections = Object.keys(landsOptions);
        break;

      case "storage":
        OptionalComponent =
          purposeOption !== "new" ? (
            <Parking
              formData={purposeOption === "resale" ? resaleFeatures : undefined}
              onChange={
                purposeOption === "resale" ? updateResaleFeatures : undefined
              }
            />
          ) : null;
        sections = Object.keys(storageOptions);
        break;

      case "parking":
        OptionalComponent =
          purposeOption !== "new" ? (
            <Parking
              formData={purposeOption === "resale" ? resaleFeatures : undefined}
              onChange={
                purposeOption === "resale" ? updateResaleFeatures : undefined
              }
            />
          ) : null;
        sections = Object.keys(parkingOptions);
        break;

      case "premises":
      case "warehouse":
        OptionalComponent =
          purposeOption !== "new" ? (
            <Apartments
              formData={purposeOption === "resale" ? resaleFeatures : undefined}
              onChange={
                purposeOption === "resale" ? updateResaleFeatures : undefined
              }
            />
          ) : null;
        sections = Object.keys(premisesOptions);
        break;

      default:
        OptionalComponent =
          purposeOption !== "new" ? (
            <Apartments
              formData={purposeOption === "resale" ? resaleFeatures : undefined}
              onChange={
                purposeOption === "resale" ? updateResaleFeatures : undefined
              }
            />
          ) : null;
        sections = Object.keys(sectionOptions);
    }

    return (
      <div className="flex-1 md:px-6">
        <label className="block mb-2 text-lg font-bold">
          What are included?
        </label>
        <div className="space-y-2">
          {newBuildingInput}
          {OptionalComponent}
          {sections.map((section) => (
            <FeatureSection
              key={section}
              title={section}
              options={
                propertyType === "lands"
                  ? landsOptions[section]
                  : propertyType === "storage"
                  ? storageOptions[section]
                  : propertyType === "parking"
                  ? parkingOptions[section]
                  : propertyType === "premises" || propertyType === "warehouse"
                  ? premisesOptions[section]
                  : sectionOptions[section]
              }
              selected={selectedFeatures}
              onToggle={toggleFeature}
            />
          ))}
        </div>

        <DescriptionSection
          formData={purposeOption === "new" ? newBuildingData : resaleFeatures}
          onChange={
            purposeOption === "new"
              ? updateNewBuildingData
              : updateResaleFeatures
          }
        />

        <div className="mt-3">
          <button
            className="bg-black text-white px-10 py-1.5 resize-none rounded-md text-sm"
            onClick={handleSaveAndNext}
            disabled={loading}
          >
            {loading ? "Saving..." : "Next"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex p-4 bg-white max-md:flex-col max-md:gap-5">
      <FeatureLeft />
      {renderRightSide()}
    </div>
  );
}
