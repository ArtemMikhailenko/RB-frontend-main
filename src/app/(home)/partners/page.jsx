"use client";
import React, { useEffect, useState } from "react";
import PartnerPeopleCard from "@/components/partners/PartnerPeopleCard";
import { partnersService } from "@/services/partnersService";

const PeopleGrid = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setLoading(true);
        const data = await partnersService.getSuggestions();
        setSuggestions(data); // API already returns array
      } catch (err) {
        console.error("Error fetching suggestions:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSuggestions();
  }, []);

  const totalItems = suggestions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate current page slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = suggestions.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePageClick = (page) => setCurrentPage(page);

  // Helper: Generate pagination numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxPageButtons = 3;

    if (totalPages <= maxPageButtons + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= maxPageButtons) {
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
    return pages;
  };

  return (
    <div>
      <div className="text-gray-600 font-medium px-5 mb-2">
        {loading
          ? "Loading suggestions..."
          : `Page ${currentPage} of ${totalPages || 1}`}
      </div>

      <div className="flex">
        {/* Left: Grid */}
        <div
          className={` ${
            selectedUser !== null ? "md:w-[calc(100%-350px)]" : "w-full"
          } px-5 overflow-y-auto scrollbar-none`}
        >
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(245px,1fr))] overflow-y-auto scrollbar-none pb-3">
            {loading ? (
              <div className="text-gray-500">Loading...</div>
            ) : currentItems.length > 0 ? (
              currentItems.map((user) => (
                <div key={user.id}>
                  <PartnerPeopleCard
                    key={user.id} // use user.id as key
                    user={user}
                    index={user.id} // use user.id instead of index
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                  />
                </div>
              ))
            ) : (
              <div className="text-gray-500">No suggestions found.</div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-evenly items-center gap-2 my-6 max-sm:mb-16">
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

              <div>
                {getPageNumbers().map((page, idx) =>
                  page === "..." ? (
                    <span
                      key={`ellipsis-${idx}`}
                      className="px-2 text-gray-500"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={`page-${page}`}
                      onClick={() => handlePageClick(page)}
                      className={`px-3 py-1 border rounded-md text-sm ${
                        currentPage === page
                          ? "bg-gray-200 border-gray-300 text-gray-800 font-medium"
                          : "text-gray-700  hover:bg-gray-100 border-0 cursor-pointer"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleGrid;
