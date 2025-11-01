"use client";
import TopNavbar from "@/shared/components/navbar/Header";
import { useAuth } from "@/Context/AuthContext";
import Navbar from "@/shared/components/navbar/Navbar";

export default function NavbarWrapper() {
  const ctx = useAuth();
  // Safety guard in case provider is not mounted for some reason
  if (!ctx) return null;
  const { user, loading } = ctx;
  if (loading) return null;
  return user ? <TopNavbar /> : <Navbar />;
}
