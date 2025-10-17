"use client";

import React from "react";
import NewsSidebar from "@/components/news/LeftSideBar/NewsSidebar";
import NewsRightSidebar from "@/components/news/RightSideBar/NewsRightSidebar";
import NewsGreetingCard from "@/components/news/NewsGreetingCard";
import NewsUploadForm from "@/components/news/NewsUploadForm";
import SalersPost from "@/components/news/Posts/SalersPost";
import BuyerPost from "@/components/news/Posts/BuyerPost";
import Footer from "@/shared/components/footer/Footer";

function page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-5 flex gap-4">
        <NewsSidebar />
        {/* Main Content */}
        <main className=" space-y-4">
          <NewsGreetingCard />
          <NewsUploadForm />

          <SalersPost />

          <BuyerPost />
        </main>

        {/* Right Sidebar */}
        <NewsRightSidebar />
      </div>
      <Footer/>
    </>
  );
}

export default page;
