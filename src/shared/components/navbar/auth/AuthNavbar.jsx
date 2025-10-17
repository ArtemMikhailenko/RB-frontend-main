"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AuthNavbar() {
  return (
    <nav className="w-full flex justify-between items-center px-[36px] py-[10px] bg-white shadow-sm relative z-10">
      <Link href="/home">
      <div className="text-xl font-bold"><Image src="/icons/navbar/logoblack.png" alt="RB" width={60} height={28} /></div>
      </Link>
      <div className="flex items-center border border-[#E4E4E4] rounded-[10px] p-[9px] gap-2.5">
        <Image src="/icons/navbar/globe.svg" alt="" width={20} height={20} />
        <select className="border-none outline-0 cursor-pointer pr-1.5 text-sm">
          <option>English</option>
          <option>Urdu</option>
        </select>
      </div>
    </nav>
  );
}
