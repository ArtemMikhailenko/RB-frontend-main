"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setAuthToken } from "@/libs/apiClient";

export default function GoogleCallback() {
  const router = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");
    if (token) {
      localStorage.setItem("access_token", token);
      setAuthToken(token);
      router.replace("/");
    } else {
      router.replace("/");
    }
  }, [router]);

  return (
    <div className="p-6">
      <p>Завершаем вход через Google…</p>
    </div>
  );
}
