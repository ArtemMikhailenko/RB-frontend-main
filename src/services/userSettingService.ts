import { apiClient } from "@/libs/apiClient";
export async function getProfile() {
  const token = localStorage.getItem("access_token");
  if (!token) throw new Error("No token found");

  const { data } = await apiClient.get(`/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

