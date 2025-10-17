"use client";
import React from "react";
import ExportPopup from "../PopUps/ExportPopup";
import Link from "next/link";

const ManageLeadsActions = ({ selectedRows }) => {
  if (selectedRows.length === 0) return null;
   
  const [editPopup, setEditPopup] = React.useState(false)
  return (
<>
    <div className="flex gap-3 text-[#636363] ">
      <Link
       href="/managelisting/edit"
        className="px-3 py-2 text-[12px] font-bold bg-white border border-gray-300 rounded-md shadow-sm"
      >
        Edit
      </Link>
      <button
        className="px-3 py-2 text-[12px] font-bold bg-white border border-gray-300 rounded-md shadow-sm"
      >
        Delete
      </button>
      <button
        className="px-3 py-2 text-[12px] font-bold bg-white border border-gray-300 rounded-md shadow-sm"
        onClick={()=>setEditPopup(true)}
      >
        Export
      </button>
    </div>
    {editPopup && (
        <ExportPopup setEditPopup={setEditPopup}/>
    )}
</>
  );
};

export default ManageLeadsActions;
