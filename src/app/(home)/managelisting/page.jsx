"use client";
import ActiveListing from "@/components/ManagListing/ActiveListing";
import ManageLeadsActions from "@/components/ManagListing/Buttons/ManageLeadsActions";
import ManageLeadsMainContainer from "@/components/ManagListing/MainContainer/ManageLeadsMainContainer";
import ManageListingDropDown from "@/components/ManagListing/Buttons/ManageListingDropDown";
import ManageNeedAttention from "@/components/ManagListing/ManageNeedAttention";
import React from "react";

const page = () => {
  const listings = Array(7).fill({
    picture: "/images/ManageListing/managehome.png", // Replace with actual image path
    ref: "M-182",
    address: "Torrevieja Noruega II 4D",
    type: "Detached house",
    date: "2 December 2024",
    postedAgo: "1 month ago",
    beds: 3,
    baths: 2,
    size: "80m2",
    price: "240.990€",
    live: "Portal 1",
    Action: "/icons/ManageListing/threedot.svg",
  });
  const [selectAll, setSelectAll] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);

  // Toggle all rows
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(listings.map((_, idx) => idx));
    }
    setSelectAll(!selectAll);
  };

  const handleRowSelect = (index) => {
    let updatedSelectedRows = [...selectedRows];
    if (updatedSelectedRows.includes(index)) {
      updatedSelectedRows = updatedSelectedRows.filter((i) => i !== index);
    } else {
      updatedSelectedRows.push(index);
    }
    setSelectedRows(updatedSelectedRows);

    if (updatedSelectedRows.length === listings.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  };
  return (
    <>
      <div className="p-5">
        <div className="flex flex-col sm:flex-row gap-3">
          <ActiveListing />
          <ManageNeedAttention />
        </div>
        <div>
          <div
            className={`flex w-full items-center mt-3 flex-wrap max-sm:gap-4 ${
              selectedRows.length > 0
                ? "justify-between max-sm:flex-col-reverse "
                : "justify-end"
            }`}
          >
            {selectedRows.length > 0 && (
              <ManageLeadsActions selectedRows={selectedRows} />
            )}
            <ManageListingDropDown />
          </div>
          <ManageLeadsMainContainer
            selectAll={selectAll}
            handleSelectAll={handleSelectAll}
            selectedRows={selectedRows}
            handleRowSelect={handleRowSelect}
            listings={listings}
          />
        </div>
      </div>
    </>
  );
};

export default page;
