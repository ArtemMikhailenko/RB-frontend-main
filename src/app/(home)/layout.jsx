// app/layout.jsx
"use client";
import { AuthProvider } from "@/Context/AuthContext";
import NavbarWrapper from "@/layouts/NavbarWrapper";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <NavbarWrapper />
      {children}
    </AuthProvider>
  );
}
