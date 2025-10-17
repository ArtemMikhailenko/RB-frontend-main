import React from "react";
import { Download } from "lucide-react";
import Image from "next/image";
const ManageLeadDocumentDownload = () => {
  const documents = Array(3).fill({
    title: "Catalog of apartments in NYC",
    size: "PDF file, 342kb",
  });
  return (
    <div className="">
      <h2 className="text-[16px] font-bold text-black my-2">Documents</h2>

      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#E4E4E4] shadow-sm rounded-xl overflow-hidden"
          >
            {/* Left icon + text */}
            <div className="flex items-center gap-4 px-4 py-1">
              <div className="bg-gray-100 p-4 rounded-md">
                <Image src="/icons/ManageLeads/Customer/doc.svg" alt="doclogo" width={16} height={16} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{doc.title}</p>
                <p className="text-sm text-gray-500">{doc.size}</p>
              </div>
            </div>

            {/* Right download button */}
            <div className="bg-gray-900 h-full hover:bg-gray-800 transition-colors p-6 text-white flex items-center justify-center rounded-l-none ">
              <Image src="/icons/ManageLeads/Customer/download.svg" alt="downloadicocn" width={20} height={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageLeadDocumentDownload;
