// import TopNavbar from "@/shared/navbar/Header";
import React from "react";
import Link from "next/link";
import MethodSelection from "@/components/AddOpportunities/MethodSelection";
import Image from "next/image";
// import Layout from "@/layouts/Layout";

const page = () => {
  return (
    // <Layout opportunities="Add Opportunity">
    <>
      <div className="flex flex-col px-6 pt-2 items-start gap-3 mt-4">
        <Link href="/opportunities">
          <Image src="/icons/AddOpportunities/backarrow.svg" alt="backarrow" width={16} height={16} className="cursor-pointer" />
        </Link>
      </div>
      <MethodSelection />
    </>
    // </Layout>
  );
};

export default page;
