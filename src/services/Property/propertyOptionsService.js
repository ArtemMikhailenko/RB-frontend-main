import { apiClient } from "@/libs/apiClient";

export async function savePropertyType(data) {
  try {
    const token = localStorage.getItem("access_token");

    const { data: resp } = await apiClient.post(`/property-types`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return resp;
  } catch (error) {
    console.error("❌ Error saving property type:", error);
    throw error;
  }
}
