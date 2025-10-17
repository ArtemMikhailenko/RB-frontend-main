import React from "react";
import ClientPageMainCard from "./ClientPageMainCard"; // adjust path if needed


const ManageLeadMain = ({ agents,onAgentClick,selectedAgent,setShowPopUp}) => {
  return (
    <div className="flex flex-col gap-6 bg-white p-2 border border-[#E4E4E4] rounded-lg">
      <div className="">LIST OF POTENTIAL CLIENT</div>
      <div className="">
        {agents.map((agent, index) => (
        <ClientPageMainCard
          key={index}
          agentImage={agent.agentImage}
          agentName={agent.agentName}
          location={agent.location}
           onClick={() => {onAgentClick(agent),setShowPopUp(true)}}
             isActive={selectedAgent.agentName === agent.agentName} 
        />
      ))}
      </div>
    </div>
  );
};

export default ManageLeadMain;
