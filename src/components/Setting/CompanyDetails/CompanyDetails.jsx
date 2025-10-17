"use client";
import Image from "next/image";
import React, { useState } from "react";

const CompanyDetails = () => {
  const [logoPreview, setLogoPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [companyLogo, setCompanyLogo] = useState("/images/AuthNavlogo.png");

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileUpload = (e, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" flex justify-center sm:-mt-8 mt-3">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 gap-5">
          <div className="text-xl font-semibold text-gray-800">
            Company Details
            <p className="text-sm text-gray-500 font-light">
              Manage your company profile.
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800">
            Save
          </button>
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-sm font-medium text-gray-700 mb-3">
            COMPANY DETAILS
          </h2>

          {/* Company Name & Industry */}
          <div className="">
            {/* Company Name & Industry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <label>Company name</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Industry</label>
                <div className="relative w-full">
                  <select className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none">
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>

                  {/* Custom SVG Arrow */}
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="-mb-3">Company logo</p>
            </div>
            {/* Company Logo Upload */}
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/icons/Setting/Company/logo.svg"
                alt="Company Logo"
                width={64}
                height={64}
                className=" rounded-full object-contain border border-gray-300"
              />
              <div>
                <label
                  htmlFor="companyLogoInput"
                  className="px-3 py-2 text-sm border border-gray-300 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Change Logo
                </label>
                <input
                  type="file"
                  id="companyLogoInput"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoUpload}
                />
              </div>
            </div>

            {/* Company Website */}
            <div className="flex flex-col gap-1">
              <label>Website</label>
              <input
                type="text"
                placeholder="http://RB.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Tax Info */}
        <div className=" space-y-4 mb-4">
          <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
            <h2 className="text-sm font-semibold text-gray-800 mb-4">
              ONLINE OFFICE NAME
            </h2>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1.5">
                Office URL Name
              </label>
              <input
                type="text"
                name="oficeUrl"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                placeholder="john@mail.com"
              />
            </div>

            <p className="text-sm text-gray-600 mb-2">
              It will look like this:
              <span className="text-blue-600 max-sm:break-words">
                https://www.reditorubica.com/pro/example
              </span>
            </p>

            <div>
              <p className="text-gray-600 ">
                If you change the name of your company office, you will lose
                your website's ranking in Google.
              </p>
            </div>

            <div className="py-2 text-[#ED8F03]">
              Change the name of your company office
            </div>
          </div>

          {/* Contact Email Section */}
          <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
            <h2 className="text-sm font-semibold text-gray-800 mb-4">
              CONTACT EMAIL FOR ADS
            </h2>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-500 mb-1">
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
        </div>

        {/* Address */}
        <div className="p-4 bg-white rounded-md shadow-sm mb-4">
          <h2 className="text-sm font-semibold text-black mb-4">ADDRESS</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">
              Address Line 1
            </label>
            <input
              type="text"
              placeholder="Enter"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">
              Address Line 2
            </label>
            <input
              type="text"
              placeholder="Enter"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                City
              </label>
              <input
                type="text"
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
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
              <label className="block text-sm font-medium text-black mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
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

        <div className="space-y-6 mb-4">
          {/* Company Size & Structure */}
          <div className="p-4 bg-white rounded-md shadow-sm">
            <h2 className="text-sm font-semibold text-black mb-4">
              COMPANY SIZE & STRUCTURE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Company Size */}
              <div className="relative">
                <label className="block text-sm font-medium text-black mb-1">
                  Company Size
                </label>
                <select className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none appearance-none bg-white">
                  <option>Select</option>
                </select>
                <div className="pointer-events-none absolute inset-y-9 right-3 flex items-center text-gray-500 top-12">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Year Founded */}
              <div className="relative">
                <label className="block text-sm font-medium text-black mb-1">
                  Year Founded
                </label>
                <select className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none appearance-none bg-white">
                  <option>Select</option>
                </select>
                <div className="pointer-events-none absolute inset-y-9 right-3 flex items-center text-gray-500 top-12">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Company History */}
          <div className="p-4 bg-white rounded-md shadow-sm">
            <h2 className="text-sm font-semibold text-black mb-4">
              COMPANY HISTORY
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-1">
                History of the company
              </label>
              <textarea
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none min-h-[120px] resize-none"
              />
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Give an overview of your company history and highlight your most
              relevant experiences that align with the job.
            </p>

            {[1, 2, 3].map((fact, idx) => (
              <div key={idx} className="mb-4">
                <label className="block text-sm font-medium text-black mb-1">
                  Facts {fact}
                </label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            ))}

            <p className="text-sm text-orange-500 cursor-pointer">
              Change history of the company and facts
            </p>
          </div>
        </div>

        {/* Upload Logo */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-sm font-medium mb-3">PRESENTATION VIDEO</h2>
          <label className="cursor-pointer flex justify-center items-center border-2 border-dashed border-[#C4C4C4] rounded-lg text-center sm:w-1/3 h-52">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setLogoPreview)}
            />

            {logoPreview ? (
              <div className="flex flex-col items-center gap-1 w-full h-full">
                <img
                  src={logoPreview}
                  alt="Logo Preview"
                  className="object-contain w-16 h-full rounded-lg"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/icons/Setting/Details/upload.svg"
                  alt="Upload"
                  width={40}
                  height={32}
                  className=" mb-1"
                />
                <p className="text-sm">
                  Upload The Media{" "}
                  <span className="text-orange-400">browse</span>
                </p>
              </div>
            )}
          </label>
        </div>

        {/* Upload Cover */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-sm font-medium mb-3">Upload Banner</h2>
          <label className="cursor-pointer flex justify-center items-center border-2 border-dashed border-[#C4C4C4] rounded-lg text-center sm:w-1/3 h-52">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setCoverPreview)}
            />

            {coverPreview ? (
              <div className="flex flex-col items-center gap-1 w-full h-full">
                <img
                  src={coverPreview}
                  alt="Logo Preview"
                  className="object-contain w-16 h-full rounded-lg"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Image
                  width={40}
                  height={32}
                  src="/icons/Setting/Details/upload.svg"
                  alt="Upload"
                  className="mb-1"
                />
                <p className="text-sm">
                  Upload The Media{" "}
                  <span className="text-orange-400">browse</span>
                </p>
              </div>
            )}
          </label>
          <p className="text-sm mt-3 text-gray-700">
            To make your brand visible in your ads. Recommended size: 125x60
            pixels.
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg border border-gray-200 font-sans mb-4">
          {/* Visibility Settings Section */}
          <div className="">
            <h2 className="text-base font-semibold text-gray-900 mb-4 tracking-wide">
              VISIBILITY SETTINGS
            </h2>

            <div className="space-y-3">
              {[
                "Show office address",
                "Show posts in the feed to other partners",
                "Hide this company from partners",
              ].map((item) => (
                <div key={item} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                  </div>
                  <label className="ml-3 text-sm text-gray-700">{item}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg border border-gray-200 font-sans">
          {/* Languages Section */}
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-2 tracking-wide">
              LANGUAGES YOU SPEAK
            </h2>
            <p className="text-xs text-gray-500 mb-4 leading-5">
              Facilitate contacts with national and international clients by
              learning what languages you speak in your office.
            </p>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Language
              </label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white">
                  <option>Select</option>
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
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
