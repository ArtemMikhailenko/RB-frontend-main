'use client';
import PartnerNetworkCard from '@/components/partners/partnerNetwork/PartnerNetworkCard';
import React, { useEffect, useState } from 'react';
import { partnersService } from '@/services/partnersService';

const Page = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      try {
        const data = await partnersService.getMyPartners();
        setPartners(data.data); // backend returns { data, meta }
      } catch (err) {
        console.error('Error fetching partners:', err.message);
        setPartners([]); // fallback to empty array
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);
  console.log('Fetched partners:', partners);

  const totalItems = partners.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = partners.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePageClick = (page) => setCurrentPage(page);

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
    <div className="relative">
      {/* Top Info */}
      {!loading && totalItems > 0 && (
        <div className="flex justify-between flex-wrap">
          <div className="text-gray-600 font-medium px-5 mb-2">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex pr-6 gap-10">
            <p><b>{partners.length}</b> Partners</p>
            <p><b>{partners.filter(p => p.status === 'ACTIVE').length}</b> Online</p>
          </div>
        </div>
      )}

      {/* Partners Grid */}
      <div className="sm:grid flex flex-col px-5 gap-4 grid-cols-[repeat(auto-fit,minmax(235px,1fr))] mb-4">
        {loading ? (
          <p>Loading partners...</p>
        ) : currentItems.length > 0 ? (
          currentItems.map((user) => (
            <PartnerNetworkCard
            name={user.name}
            profileImage={user.profileImage}
            partnerId={user.id}
              key={user.id}
              user={user}
              isActive={user.status === 'ACTIVE'}
              messageText={"Message"}
              removeText={"Remove"}
            />
          ))
        ) : (
          <p className="text-gray-500">No partners found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {!loading && totalItems > 0 && totalPages > 1 && (
        <div className="flex justify-evenly items-center gap-2 my-6 max-sm:mb-16">
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

          <div>
            {getPageNumbers().map((page, idx) =>
              page === '...' ? (
                <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">...</span>
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
      )}
    </div>
  );
};

export default Page;
