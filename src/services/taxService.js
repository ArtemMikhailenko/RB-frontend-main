import { apiClient } from "@/libs/apiClient";

export async function getTaxInformation(userId) {
  const token = localStorage.getItem("access_token");
  if (!token) throw new Error("No token found");

  const { data } = await apiClient.get(`/tax-information`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

export async function updateTaxInformation(data) {
  const token = localStorage.getItem("access_token");
  if (!token) throw new Error("No token found");

  const resp = await apiClient.patch(`/tax-information`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return resp.data;
}
