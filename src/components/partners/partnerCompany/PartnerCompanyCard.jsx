"use client";
import React from "react";
import PartnerCompanyDetail from "@/components/partners/partnerCompany/PartnerCompanyDetail";
import MobileNavbarToHome from "@/shared/components/navbar/mobilenavbar/MobileNavbarToHome";
import Image from "next/image";

const PartnerCompanyCard = ({ index, selectedCompany, setSelectedCompany }) => {
  const isActive = selectedCompany === index;
  return (
    <>
      <div className="">
        <div
          className={`bg-white rounded-xl shadow-md p-3 space-y-3 border transition-all duration-300 ${
            isActive ? "border-yellow-500" : "border-transparent"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            {/* Logo and status */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/images/Partners/company/Ellipse 2.png" // Replace this with actual logo path
                  alt="SolMar Estates Logo"
                  width={48}
                  height={48}
                  className=" rounded-full object-cover"
                  onClick={() => setSelectedCompany(index)}
                />
                <span className="absolute top-0 right-9 block w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
              </div>
            </div>

            {/* Go to website button */}
            <button className="flex items-center gap-1 text-[13px] text-gray-600 bg-white cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-4xl border border-gray-300">
              <Image src="/icons/Partners/company/companycard/Vector (1).svg" alt="to website" width={16} height={16} />
              Go to website
            </button>
          </div>

          {/* Company Name */}
          <h2
            onClick={() => setSelectedCompany(index)}
            className="text-lg font-semibold text-gray-900 mt-3"
          >
            SolMar Estates
          </h2>
          {/* Details */}
          <div
            className="mt-1 space-y-1"
            onClick={() => setSelectedCompany(index)}
          >
            <p className="text-sm text-gray-500">
              Activity range:{" "}
              <span className="font-medium text-gray-900">$450k - $2.59M</span>
            </p>
            <p className="text-sm text-gray-500">
              Listings:{" "}
              <span className="font-semibold text-gray-900"> 15 </span> &nbsp; •
              &nbsp; client since:{" "}
              <span className="font-semibold text-gray-900">2019</span>
            </p>
          </div>

          {/* Speak Section */}
          <div className="mt-3">
            <hr className="border-t mb-1 border-[#E4E4E4]" />
            <p className="text-sm font-semibold text-[#343434]">Speak</p>
            <p className="text-sm text-[#636363]">
              Español, English, Svenska, +2
            </p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2 mt-2">
            <button className="sm:flex-1 max-sm:w-full bg-black text-white py-2 text-[13px] cursor-pointer rounded-md">
              Connect
            </button>
            <button className=" bg-gray-100 max-sm:w-full text-black py-2 px-2.5 text-[13px] font-medium cursor-pointer rounded-md">
              Chat
            </button>
          </div>

          {selectedCompany === index && (
            <div className="w-[38%]  fixed top-8 right-0 h-screen overflow-y-auto bg-white pb-4 scrollbar-none scrollbar-hidden">
              <div className="">
                <button
                  className="text-gray-500 cursor-pointer text-lg absolute top-7 right-2 hover:text-red-600"
                  onClick={() => setSelectedCompany(null)}
                >
                  ✖
                </button>
              </div>
              <PartnerCompanyDetail />
            </div>
          )}
        </div>
      </div>
      {selectedCompany === index && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 md:hidden">
          <div className="bg-gray-50 w-full max-h-[100%] overflow-y-auto p-1.5">
            <MobileNavbarToHome
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
            />
            <PartnerCompanyDetail />
          </div>
        </div>
      )}
    </>
  );
};

export default PartnerCompanyCard;
