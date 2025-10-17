import Image from "next/image";
import React from "react";

const AboutDavid = () => {
  return (
    <div className="">
      <h3 className="sm:text-xl text-base font-semibold mb-3">About David</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-2">
        David Tsen is a Real Estate Agent with EXP Realty and is based out of
        the Fraser Valley & Vancouver, BC. He is also a co-founder of the award
        winning Real Estate team in the Fraser Valley - Oracle Property Group.
        Oracle Property Group currently has 7 agents and full time dedicated
        admin staff. Along with an in-house media team to ensure things are
        always streamlined making this one of...
      </p>
      <p className="text-sm text-[#ED8F03] pb-4 flex items-center gap-1 border-b border-b-gray-300">
        MORE ABOUT ME <span className="text-2xl ">{" > "}</span>
      </p>
      <p className="text-base font-medium mt-4">eXp Realty of Canada, Inc.</p>
      <p className="text-sm text-gray-600 mb-4">14 Years Experience</p>
      <p className="text-sm text-gray-600">Fluent in English, Cantonese</p>
      <p className="text-[#ED8F03] text-sm">
        https://www.oraclepropertygroup.com
      </p>
      {/* Social icons */}
      <div className="flex gap-3 mt-4 text-gray-600">
        {[
          "/icons/NewProfile/facebook.svg",
          "/icons/NewProfile/insta.svg",
          "/icons/NewProfile/twitter.svg",
          "/icons/NewProfile/youtube.svg",
          "/icons/NewProfile/linkedin.svg",
        ].map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={item}
            width={24}
            height={24}
            className=" cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default AboutDavid;
