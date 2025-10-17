"use client";
import React, { useState } from "react";
import { partnersService } from "@/services/partnersService";

export default function ConnectButton({ receiverId }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // "idle" | "sent"

  const handleConnect = async () => {
    if (loading || status === "sent") return;

    setLoading(true);
    try {
      await partnersService.sendRequest(receiverId);
      setStatus("sent");
    } catch (err) {
      console.error("Error sending request:", err);
      alert(err.message || "Failed to send request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleConnect}
      disabled={loading || status === "sent"}
      className={`sm:flex-1 max-sm:w-full py-2 text-[13px] rounded-md cursor-pointer ${
        status === "sent"
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : "bg-black text-white hover:bg-gray-900"
      }`}
    >
      {loading ? "Sending..." : status === "sent" ? "Request Sent" : "Connect"}
    </button>
  );
}
