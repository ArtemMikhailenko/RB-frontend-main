"use client";
import TopNavbar from "@/shared/components/navbar/Header";
import { useAuth } from "@/Context/AuthContext";
import Navbar from "@/shared/components/navbar/Navbar";

export default function NavbarWrapper() {
  const ctx = useAuth();
  // Safety guard: if provider не смонтирован, показываем гостевой Navbar
  if (!ctx) return <Navbar />;
  const { user, loading } = ctx;
  if (loading) return null;
  return user ? <TopNavbar /> : <Navbar />;
}
