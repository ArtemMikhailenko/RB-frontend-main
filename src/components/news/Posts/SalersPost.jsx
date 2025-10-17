import Image from "next/image";
import React from "react";
import { FaBed } from "react-icons/fa";
const SalersPost = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        <div>
          <Image src="/images/News/Maincontainer/carter.png" alt="carter" width={52} height={52} />
        </div>
        <div>
          <h4 className="font-semibold">Michael Carter</h4>
          <p className="text-sm text-gray-500">Luxury Real Estate Specialist</p>
          <p className="text-[12px] text-gray-500">1 hour ago</p>
        </div>
      </div>

      <p className="mt-4 pl-0.5 sm:text-[16px] text-[14px]">
        Check out this stunning modern home in the heart of Los Angeles! ✨
      </p>

      <div className="mt-4">
        <Image
          src="/images/News/Maincontainer/home.png"
          alt="Property"
          width={700}
          height={700}
          className="  object-cover w-full"
        />
      </div>

      <div className=" sm:px-4 px-[6px] py-3 bg-gray-100 rounded-[0px_0px_8px_8px]">
        <div>
          <div className="flex justify-between  sm:flex-nowrap flex-wrap">
            <div className="font-semibold sm::text-lg text-[14px]">
              Modern City Retreat
            </div>
            <div className=" font-semibold sm:text-lg text-[14px]">
              3.500.000€
            </div>
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-2 mt-1.5 sm:flex-nowrap flex-wrap ">
            <div className="flex items-center gap-2">
              <FaBed /> 4 bed &nbsp; | &nbsp;
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/News/Maincontainer/bath.svg" alt="bath" width={20} height={20} />3 bath &nbsp; |
              &nbsp;
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/News/Maincontainer/square.svg" alt="square" width={20} height={20} /> 128m²
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-1 flex items-center gap-2">
            <Image src="/icons/News/Maincontainer/location.svg" alt="location" width={12} height={12} /> Los Angeles, CA
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-6 text-gray-500 text-sm pl-0.5">
        <button className="flex items-center gap-1 cursor-pointer max-[350px]:text-[13px]">
          <Image
            src="/icons/News/Maincontainer/like.svg"
            alt="like"
            width={24}
            height={24}
            className="max-[350px]:w-[15px]"
          />{" "}
          Like
        </button>
        <button className="flex items-center gap-1 cursor-pointer max-[350px]:text-[13px]">
          <Image
            src="/icons/News/Maincontainer/msg.svg"
            alt="comment"
            width={24}
            height={24}
            className="max-[350px]:w-[15px]"
          />{" "}
          Comment
        </button>
        <button className="flex items-center gap-1 cursor-pointer max-[350px]:text-[13px]">
          <Image
            src="/icons/News/Maincontainer/share.svg"
            alt="share"
            width={24}
            height={24}
            className="max-[350px]:w-[15px]"
          />{" "}
          Share
        </button>
      </div>
    </div>
  );
};

export default SalersPost;
