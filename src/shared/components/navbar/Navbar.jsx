"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center sm:px-[36px] px-4 py-[12px] bg-white shadow-sm sticky top-0 z-10">
      <Link href={"/"}>
        <div className="text-xl font-bold">
          <Image
            src="/icons/Navbar/logoblack.png"
            alt="logo"
            width={60}
            height={28}
            className="h-[28px] w-[60px]"
          />
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <Link href="/login">
          <span className="text-sm text-[#333333] font-semibold flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-[80px]">
            Login
          </span>
        </Link>
        <Link href="/signup">
          <span className="bg-black text-white px-6 py-2 rounded-[80px] text-[16px] hover:bg-gray-900 cursor-pointer ">
            Register
          </span>
        </Link>
      </div>
    </nav>
  );
}
