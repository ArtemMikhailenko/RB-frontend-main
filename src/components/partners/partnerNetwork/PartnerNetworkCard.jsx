'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { acceptPartnerRequest, rejectPartnerRequest,removePartner } from "@/services/partnersService";

const PartnerNetworkCard = ({ isActive, messageText, removeText, name, profileImage, mutualFriends, requestId,partnerId }) => {
  
  const [status, setStatus] = useState('pending'); // pending | accepted | rejected
  const [loading, setLoading] = useState(false);

  const handleAccept = async () => {
    setLoading(true);
    try {
      await acceptPartnerRequest(requestId);
      setStatus('accepted');
      console.log("Request accepted ✅");
    } catch (err) {
      console.error(err.message);
    }
    setLoading(false);
  };

  const handleRemove = async () => {
    setLoading(true);
    try {
      await rejectPartnerRequest(requestId);
      setStatus('rejected');
      console.log("Request removed ❌");
    } catch (err) {
      console.error(err.message);
    }
    setLoading(false);
  };

  const handleRemovePartner = async () => {
        setLoading(true);
    try {
      await removePartner(partnerId);
      setStatus('rejected');
      console.log("Request removed ❌");
    } catch (err) {
      console.error(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="sm:max-w-xs bg-white rounded-xl shadow-md px-2 py-3 flex flex-col gap-3 w-full border border-[#E4E4E4] max-sm:w-full">
      {/* Profile Info */}
      <div className="flex flex-col gap-3">
        <div className="relative flex items-center gap-2">
          <Image
            src={profileImage || "/images/Partners/network/avatar.png"}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          {isActive && (
            <span className="absolute top-0 left-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )}
          <h2 className="font-semibold text-gray-800">{name}</h2>
        </div>
        
        {mutualFriends > 0 && (
          <div className="flex items-center gap-1">
            <Image
              src="/images/Partners/network/Avatar wrap.png"
              alt="mutual friend"
              width={20}
              height={20}
              className="rounded-full border border-white -ml-2 first:ml-0"
            />
            <Image
              src="/images/Partners/network/Avatar.png"
              alt="mutual friend"
              width={20}
              height={20}
              className="w-5 h-5 rounded-full border border-white -ml-2"
            />
            <span className="text-sm text-gray-500">{mutualFriends} Mutual friends</span>
          </div>
        )}
      </div>

      {/* Buttons */}
{messageText==="Accept" &&
<div className="flex gap-2">
  {/* Accept Button */}
  {status !== 'rejected' && (
    <button
      className={`flex-1 py-[10px] text-sm rounded-md font-medium w-full transition-colors cursor-pointer 
        ${status === 'accepted' ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-900'}
      `}
      onClick={handleAccept}
      disabled={status !== 'pending' || loading}
    >
      {status === 'accepted' ? 'Accepted ' : messageText}
    </button>
  )}

  {/* Reject/Remove Button */}
  {status !== 'accepted' && (
    <button
      className={`flex-1 py-[10px] text-sm rounded-md font-medium w-full transition-colors cursor-pointer 
        ${status === 'rejected' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}
      `}
      onClick={handleRemove}
      disabled={status !== 'pending' || loading}
    >
      {status === 'rejected' ? 'Removed ' : removeText}
    </button>
  )}
</div>
}
{messageText==="Message" &&
<div className="flex gap-2">
  {/* Accept Button */}
  {status !== 'rejected' && (
    <button
      className={`flex-1 py-[10px] text-sm rounded-md font-medium w-full transition-colors cursor-pointer 
        ${status === 'accepted' ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-900'}
      `}
      disabled={status !== 'pending' || loading}
    >
      {status === 'accepted' ? 'Accepted ' : messageText}
    </button>
  )}

  {/* Reject/Remove Button */}
  {status !== 'accepted' && (
    <button
      className={`flex-1 py-[10px] text-sm rounded-md font-medium w-full transition-colors cursor-pointer 
        ${status === 'rejected' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}
      `}
      onClick={handleRemovePartner}
      disabled={status !== 'pending' || loading}
    >
      {status === 'rejected' ? 'Removed ' : removeText}
    </button>
  )}
</div>
}
    </div>
  );
};

export default PartnerNetworkCard;
