'use client';
import PartnerCompanyCard from '@/components/partners/partnerCompany/PartnerCompanyCard';
import React from 'react';

const CompanyPage = () => {
  const [selectedCompany, setSelectedCompany] = React.useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10; // Number of cards per page
  const totalItems = 15; // Total dummy items
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Slice items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Array.from({ length: totalItems }).slice(
    startIndex,
    endIndex
  );

  // Pagination Handlers
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    setSelectedCompany(null)
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    setSelectedCompany(null)
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    setSelectedCompany(null)
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
        pages.push('...', totalPages);
      } else if (currentPage > totalPages - maxPageButtons) {
        pages.push(1, '...');
        for (let i = totalPages - maxPageButtons + 1; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1, '...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className='min-h-full'>
      {/* Top: Current Page Info */}
      <div className="text-gray-600 font-medium px-5 mb-2">
        Page {currentPage} of {totalPages}
      </div>

      <div className="flex min-h-full">
        {/* Left: Grid */}
        <div
          className={`${
            selectedCompany !== null ? 'w-[62%]' : 'w-full'
          } px-5 overflow-y-auto scrollbar-none min-h-screen`}
        >
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(245px,1fr))] overflow-y-auto scrollbar-none pb-3">
            {currentItems.map((_, index) => (
              <PartnerCompanyCard
                key={startIndex + index}
                index={startIndex + index}
                selectedCompany={selectedCompany}
                setSelectedCompany={setSelectedCompany}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-evenly items-center gap-2 my-6 max-sm:mb-16">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`flex items-center px-3 py-1 border rounded-md text-sm ${
                currentPage === 1
                  ? 'text-gray-400 border-gray-300 cursor-not-allowed'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              &lt; Previous
            </button>

            {/* Page Numbers */}
            <div>
              {getPageNumbers().map((page, idx) =>
                page === '...' ? (
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
                        ? 'bg-gray-200 border-gray-300 text-gray-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-100 border-0 cursor-pointer'
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
                  ? 'text-gray-400 border-gray-300 cursor-not-allowed'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
