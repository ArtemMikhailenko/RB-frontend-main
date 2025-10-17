"use client";

import OpportunitiesCard from "@/components/Opportunities/OpportunitiesCard";
import React, { useState, useEffect } from "react";
import { getOpportunities } from "@/services/opportunityService";

const OpportunitiesPage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(9); // how many per page
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await getOpportunities(page, limit);
        setOpportunities(res.data);  // ✅ only the array
        setTotal(res.total);         // ✅ save total count
      } catch (err) {
        console.error("Error fetching opportunities:", err);
      }
    })();
  }, [page, limit]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="px-5 py-6">
      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((item, index) => (
          <OpportunitiesCard key={index} opportunities={item} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages || 1}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OpportunitiesPage;
