"use client";
import ManageLeadMain from "@/components/ManageLeads/ManageLeadsMain/ManageLeadMain";
import ManageLeadsRightDetails from "@/components/ManageLeads/ManageLeadsRightDetails";
import UserProfileInfo from "@/shared/components/UserProfile/UserProfileInfo";
import UserSocialLinks from "@/shared/components/UserProfile/UserSocialLinks";

import React, { useState } from "react";
import MobileNavbarToHome from "@/shared/components/navbar/mobilenavbar/MobileNavbarToHome";
// import Layout from "@/layouts/Layout";
// import NewCustomersPopup from "@/components/ManageLeads/NewCustomersPopup";
const agents = [
  {
    agentImage: "/images/ManageLeads/photo.png",
    agentName: "Sophia Smith",
    location: "New York",
    email: "sophia.smith@example.com",
    phone: "+1 (555) 123-4567",
    interests: "wants to",
    offerPrice: "$250,000",
  },
  {
    agentImage: "/images/ManageLeads/photo.png",
    agentName: "John Doe",
    location: "Los Angeles",
    email: "john.doe@example.com",
    phone: "+1 (555) 987-6543",
    interests: "interested in",
    offerPrice: "$300,000",
  },
  {
    agentImage: "/images/ManageLeads/photo.png",
    agentName: "Emily Johnson",
    location: "Chicago",
    email: "emily.johnson@example.com",
    phone: "+1 (555) 654-3210",
    interests: "looking to",
    offerPrice: "$220,000",
  },
  {
    agentImage: "/images/ManageLeads/photo.png",
    agentName: "Michael Brown",
    location: "Houston",
    email: "michael.brown@example.com",
    phone: "+1 (555) 321-6548",
    interests: "plans to",
    offerPrice: "$280,000",
  },
  {
    agentImage: "/images/ManageLeads/photo.png",
    agentName: "Olivia Davis",
    location: "Miami",
    email: "olivia.davis@example.com",
    phone: "+1 (555) 987-1234",
    interests: "considering to",
    offerPrice: "$350,000",
  },
  {
    agentImage: "/images/ManageLeads/photo.png",
    agentName: "William Wilson",
    location: "Seattle",
    email: "william.wilson@example.com",
    phone: "+1 (555) 456-7890",
    interests: "thinking to",
    offerPrice: "$275,000",
  },
  {
    agentImage: "/images/ManageLeads/photo.png",
    agentName: "Isabella Martinez",
    location: "Boston",
    email: "isabella.martinez@example.com",
    phone: "+1 (555) 654-9870",
    interests: "wants to",
    offerPrice: "$400,000",
  },
  {
    agentImage: "/images/ManageLeads/photo.png",
    agentName: "James Taylor",
    location: "Denver",
    email: "james.taylor@example.com",
    phone: "+1 (555) 789-0123",
    interests: "planning to",
    offerPrice: "$310,000",
  },
  {
    agentImage: "/images/ManageLeads/photo.png",
    agentName: "Ava Thomas",
    location: "San Francisco",
    email: "ava.thomas@example.com",
    phone: "+1 (555) 987-6540",
    interests: "interested to",
    offerPrice: "$500,000",
  },
  {
    agentImage: "/images/ManageLeads/photo.png",
    agentName: "Lucas White",
    location: "Atlanta",
    email: "lucas.white@example.com",
    phone: "+1 (555) 321-9876",
    interests: "looking to",
    offerPrice: "$295,000",
  },
];

const page = () => {
  const [selectedAgent, setSelectedAgent] = React.useState(agents[0]);
  const [mainToggle, setMainToggle] = React.useState("Manage leads");
  const [showPopUp, setShowPopUp] = React.useState(false);
  const [customerPopup, setCustomerPopup] = useState(false)
  return (
    // <Layout opportunities={mainToggle === "Customers" ? "New Customer" : null} setCustomerPopup={setCustomerPopup}>
      <div className="grid lg:grid-cols-[1fr_1.7fr_2fr] md:grid-cols-[1.5fr_2fr] gap-4 sm:pl-5 max-sm:px-2">
    <div className="lg:block hidden mt-2">
          <UserProfileInfo manageleadpage="active" />
          {mainToggle === "Manage leads" && <UserSocialLinks />}
        </div>
        <div>
          <div className="flex gap-6 mb-3 pt-4 border-b border-[#E4E4E4] max-sm:text-xs">
            <span
              className={`cursor-pointer pb-2 ${
                mainToggle == "Manage leads"
                  ? "border-b-3 border-amber-500"
                  : ""
              }`}
              onClick={() => setMainToggle("Manage leads")}
            >
              Manage leads
            </span>
            <span
              className={`cursor-pointer pb-2 ${
                mainToggle == "Customers" ? "border-b-3 border-amber-500" : ""
              }`}
              onClick={() => setMainToggle("Customers")}
            >
              Customers
            </span>
          </div>
          <ManageLeadMain
            onAgentClick={setSelectedAgent}
            selectedAgent={selectedAgent}
            agents={agents}
            setShowPopUp={setShowPopUp}
          />
        </div>
        <div>
          <div className="sm:block hidden">
            <ManageLeadsRightDetails
              agent={selectedAgent}
              mainToggle={mainToggle}
            />
          </div>
          {showPopUp && (
            <div className="fixed h-full inset-0 bg-black/50 flex items-center justify-center z-50 sm:hidden scrollbar-hidden">
              <div className="bg-white w-full h-full overflow-auto shadow-lg text-center relative">
                {/* Close Button */}
                <button className="w-full pl-2">
                  <MobileNavbarToHome setShowPopUp={setShowPopUp} />
                </button>
                {/* Popup Content */}
                <ManageLeadsRightDetails
                  agent={selectedAgent}
                  mainToggle={mainToggle}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      // {customerPopup && (
      //   <NewCustomersPopup setCustomerPopup={setCustomerPopup}/>
      // )}
    // </Layout>
  );
};

export default page;
