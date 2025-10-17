import React from "react";
// import TopNavbar from "@/shared/navbar/Header";
import Link from "next/link";
import Image from "next/image";
import SimpleOpportunityForm from "@/components/AddOpportunities/SimpleOpportunityUpload/SimpleOpportunityUpload";
// import Layout from '@/components/layout';
const page = () => {
  return (
    // <Layout opportunities="Add Opportunity">
    <>
      <div className="flex flex-col px-6 pt-2 items-start gap-3 mt-4">
        <Link href="/add-opportunities">
          <Image src="/icons/AddOpportunities/backarrow.svg" alt="backarrow" width={16} height={16} className="cursor-pointer" />
        </Link>
      </div>
      <SimpleOpportunityForm />
    </>
    // </Layout>
  );
};

export default page;
