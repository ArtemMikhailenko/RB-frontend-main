import { apiClient } from "@/libs/apiClient";

/** 🔹 Generic submit based on purpose/purposeOption */
export async function submitFeatureAndContact(data, endpoint) {
  try {
    const token = localStorage.getItem("access_token");

    const { data: resp } = await apiClient.post(`/${endpoint}`, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return resp;
  } catch (error) {
    console.error("❌ Error saving property information:", error);
    throw error;
  }
}