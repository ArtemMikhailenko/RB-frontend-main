// app/layout.jsx
"use client";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import NavbarWrapper from "@/layouts/NavbarWrapper";

export default function RootLayout({ children }) {
  return (
    <>
      <NavbarWrapper />
      {children}
    </>
  );
}
