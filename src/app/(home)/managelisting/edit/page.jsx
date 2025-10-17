import React from "react";
import Link from "next/link";
import AddvanceOpportunityForm from "@/components/AddOpportunities/AdvanceOpportunityUpload/AddvanceOpportunityForm";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col px-6 pt-2 items-start gap-3 mt-4">
        <Link href="/managelisting">
          <Image
            src="/icons/Navbar/backarrow.svg"
            width={18}
            height={14}
            alt="arrow"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <AddvanceOpportunityForm />
    </>
  );
};

export default page;
