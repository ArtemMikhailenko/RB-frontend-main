"use client";
import Image from "next/image";
import React from "react";

const PartnerCompanyDetail = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white  shadow p-4 md:mt-7">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full relative">
            {" "}
            <Image
              src="/images/Partners/company/Ellipse 2.png"
              width={48}
              height={48}
              alt="SolMar Estates Logo"
            />
            <span className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <h1 className="text-sm font-semibold max-sm:text-xs">
            SolMar Estates
          </h1>
        </div>
        <button className="flex items-center gap-1 text-[13px] text-gray-600 bg-white cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-4xl border border-gray-300 max-sm:text-xs">
          <Image
            src="/icons/Partners/company/companycard/Vector (1).svg"
            alt="to website"
            width={16}
            height={16}
          />
          Go to website
        </button>
      </div>

      {/* Banner */}
      <div className="relative mb-3">
        <Image
          src="/images/Partners/company/Card-Poster-1.png"
          alt="Rekodon Banner"
          width={200}
          height={200}
          className="w-full "
        />
      </div>

      {/* Facts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
        <div className="bg-white p-2 border-r border-[#C4C4C4] ">
          <h3 className="font-semibold text-sm mb-1">Fact1</h3>
          <p className="text-[11px] text-[#666666]">
            Company with a 12-year history of successful work
          </p>
        </div>
        <div className="bg-white p-2 border-r border-[#C4C4C4]">
          <h3 className="font-semibold text-sm mb-1">Fact2</h3>
          <p className="text-[11px] text-[#666666]">
            is part of the Greek holding Mouzenidis Group
          </p>
        </div>
        <div className="bg-white p-2 ">
          <h3 className="font-semibold text-sm mb-1">Fact3</h3>
          <p className="text-[11px] text-[#666666]">
            a wide choice from small apartments to exclusive villas on the coast
          </p>
        </div>
      </div>

      {/* Video */}
      <div className="mb-4">
        <h3 className="font-semibold text-sm mb-2">Meet John Doe</h3>
        <div className="relative w-full h-[170px] overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              src="/images/Partners/company/home.png"
              alt="Video thumbnail"
              fill
              className="object-cover"
            />
          </div>

          <button className="absolute inset-0 flex justify-center items-center">
            <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="25"
                fill="black"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* History */}
      <div className="mb-4">
        <h4 className="font-semibold text-[14px] text-[#343434] mb-1">
          History GREKODOM DEVELOPMENT A.E
        </h4>
        <div className="text-xs text-gray-700">
          <p className="mb-2 font-light">
            Grekodom Development Company: services and projects in the field of
            construction, real estate sales and development in Greece and
            Cyprus. Grekodom Development is part of the Greek holding Mouzenidis
            Group.
          </p>
          <p className="mb-2 font-light">
            Our offices in Greece operate in Thessaloniki and Athens, on the
            Chalkidiki peninsula (Kalithea, Hanioti, Nikiti, Nea Moudania),
          </p>
          <p className="mb-1 font-light"> Areas of work and services:</p>
          Real estate selection
          <br />
          Full legal support and consultations on obtaining a residence permit
          <br />
          Design, construction and finishing on a turnkey basis
          <br />
          Organizing real estate tours
          <br />
          Investment projects
          <br />
          Property management.
        </div>
      </div>

      {/* Office Contacts */}
      <h4 className="font-semibold text-[#343434] text-[13px] mb-1">
        Offices and contact details
      </h4>
      <div className="mb-4 flex  border-b border-[#C4C4C4]">
        <div>
          <Image width={480} height={280} src="/images/Partners/company/DIV-Poster.png" alt="" />
        </div>
        <div className="text-xs text-[#333333]">
          <p className="text-[11px]">
            Greece, Thessaloniki, 14th km Thessaloniki-Michaniona <br />
            <span className="underline decoration-dashed">
              Show phone number
            </span>
          </p>
          <br />
          <br />
          <p className="text-[11px]">
            Greece, Athens, Nikis street, 43
            <br />
            <span className="underline decoration-dashed">
              Show phone number
            </span>
          </p>
          <br />
          <br />
          <p className="text-[11px]">
            Cyprus, Limassol, Cyprus, Limassol, Amathus Avenue, 100
            <br />
            <span className="underline decoration-dashed">
              Show phone number
            </span>
          </p>
          <br />
          <br />
          <a
            href="https://www.grekodom.com"
            className="text-[#333333] text-[14px] underline mt-1 inline-block"
          >
            https://www.grekodom.com
          </a>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="relative mb-10">
        <Image
          src="/images/Partners/company/Card-Poster-3.png"
          alt="Footer Banner"
          width={200}
          height={200}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PartnerCompanyDetail;
