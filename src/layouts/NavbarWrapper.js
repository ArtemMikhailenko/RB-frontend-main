"use client";
import TopNavbar from "@/shared/components/navbar/Header";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import Navbar from "@/shared/components/navbar/Navbar";

function InnerNavbar() {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? <TopNavbar /> : <Navbar />;
}

export default function NavbarWrapper() {
  return (
    <AuthProvider>
      <InnerNavbar />
    </AuthProvider>
  );
}
