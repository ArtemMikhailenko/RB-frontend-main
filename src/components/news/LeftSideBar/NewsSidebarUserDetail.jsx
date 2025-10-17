import React from "react";
import Image from "next/image";
const NewsSidebarUserDetail = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E4E4E4]">
      <div className="text-center flex gap-2.5">
        <Image
          src="/images/News/Leftsidebar/john.png"
          alt="John"
          width={66}
          height={66}
          className="w-[66px] h-[66px]"
        />
        <div>
          <h2 className="font-bold text-lg mt-2">John Doe</h2>
          <p className="text-sm text-gray-500">id:24962017</p>
        </div>
      </div>
      <div className="mt-6 text-[16px] text-gray-600 space-y-2">
        <p className="flex justify-between">
          Profile visits <strong>229</strong>
        </p>
        <p className="flex justify-between">
          Post impressions <strong>22,975</strong>
        </p>
        <p className="flex justify-between">
          Active listings <strong>16</strong>
        </p>
      </div>
      <button className="mt-4 w-full p-[10px_20px] border rounded-md cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
        <Image src="/icons/News/Leftsidebar/chart.svg" width={25} height={25} alt="analytis" />
        <p>View Analytics</p>
      </button>
    </div>
  );
};

export default NewsSidebarUserDetail;
