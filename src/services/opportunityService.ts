const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
import { apiClient } from "@/libs/apiClient";

/** 🔹 Create new opportunity */
export async function createOpportunity(data) {
  const token = localStorage.getItem("access_token");
  if (!token) throw new Error("No token found");

  const resp = await apiClient.post(`/opportunities`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return resp.data;
}
// ✅ Get opportunities with pagination
export async function getOpportunities(page = 1, limit = 10) {
  const token = localStorage.getItem("access_token");
  if (!token) throw new Error("No token found");

  const { data } = await apiClient.get(`/opportunities`, {
    params: { page, limit },
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}
