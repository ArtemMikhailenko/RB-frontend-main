import CompanyDetails from "@/components/Setting/CompanyDetails/CompanyDetails";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div className="px-5 sm:py-10 py-5">
      <Link href="/setting" className="">
        <Image width={20} height={20} src="/icons/Setting/arrow.svg" alt="Goback" className="cursor-pointer" />
      </Link>
      <CompanyDetails />
    </div>
  );
};

export default page;
