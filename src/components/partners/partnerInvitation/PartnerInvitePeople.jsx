"use client";
import React, { useEffect, useState } from "react";
import PartnerNetworkCard from "@/components/partners/partnerNetwork/PartnerNetworkCard";
import { getReceivedRequests } from "@/services/partnersService"; // <-- service call
import Image from "next/image";
import { useRouter } from "next/navigation";

const PartnerInvitePeople = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [requests, setRequests] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 7;

  // Fetch requests from backend whenever page changes
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getReceivedRequests(currentPage, itemsPerPage);
        setRequests(data.data); // array of requests
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error("❌ Failed to fetch requests:", err);
      }
    };

    fetchRequests();
  }, [currentPage]);

  console.log("Requests:", requests);
  // Pagination Handlers
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxPageButtons = 3;

    if (totalPages <= maxPageButtons + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= maxPageButtons) {
        for (let i = 1; i <= maxPageButtons; i++) pages.push(i);
        pages.push("...", totalPages);
      } else if (currentPage > totalPages - maxPageButtons) {
        pages.push(1, "...");
        for (let i = totalPages - maxPageButtons + 1; i <= totalPages; i++)
          pages.push(i);
      } else {
        pages.push(1, "...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div>
      {/* Top: Current Page Info */}
      <div className="text-gray-600 font-medium px-5 mb-2">
        Page {currentPage} of {totalPages}
      </div>

      {/* Grid */}
      <div className=" px-5 gap-4 flex flex-wrap mb-4">
        {requests.length > 0 ? (
          requests.map((req) => (
            <PartnerNetworkCard
              key={req.id}
              isActive={true} // you can map this from req.status
              messageText="Accept"
              removeText="Decline"
              name={req.sender?.name}
              profileImage={req.sender?.profileImage}
              email={req.sender?.email}
              mutualFriends={req.mutualFriends}
              country={req.sender?.country}
              requestId={req.id}
            />
          ))
        ) : (
          <>
            <div className="flex flex-col items-center justify-center h-[65vh] text-center gap-2.5 max-sm:p-2.5 w-full">
              <div>
                <Image
                  src="/images/Partners/invitation/mobile.png"
                  height={100}
                  width={200}
                  alt="mobile"
                />
              </div>
              <h1 className="text-[18px] font-semibold">No new request</h1>
              <h3 className="max-sm:text-xs">
                When you receive partners requests, they will appear here.
              </h3>
              <button
                className="py-[15px] px-[22px] bg-black text-white rounded-[5px] text-[16px] w-full max-w-[474px] cursor-pointer hover:bg-[#1a1a1a] transition-all duration-300 max-sm:text-xs"
                onClick={() => router.push('/partners')}
              >
                View recommended partners
              </button>
            </div>
          </>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
      <div className="flex justify-evenly items-center gap-2 my-6 max-sm:mb-16">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`flex items-center px-3 py-1 border rounded-md text-sm ${
            currentPage === 1
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          &lt; Previous
        </button>

        {/* Page Numbers */}
        <div>
          {getPageNumbers().map((page, idx) =>
            page === "..." ? (
              <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                onClick={() => handlePageClick(page)}
                className={`px-3 py-1 border rounded-md text-sm ${
                  currentPage === page
                    ? "bg-gray-200 border-gray-300 text-gray-800 font-medium"
                    : "text-gray-700 hover:bg-gray-100 border-0 cursor-pointer"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center px-3 py-1 border rounded-md text-sm ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Next &gt;
        </button>
      </div>)}
    </div>
  );
};

export default PartnerInvitePeople;
