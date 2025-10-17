"use client";
import React from "react";
import PartnerInvitePeople from "./PartnerInvitePeople";
import Image from "next/image";

const PartnerInviationEmpty = () => {
  const [partnerInvitation, setPartnerInvitaion] = React.useState(false);
  return (
    <div>
          <PartnerInvitePeople />
    </div>
  );
};

export default PartnerInviationEmpty;
