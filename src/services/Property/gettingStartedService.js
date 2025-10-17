import { apiClient } from "@/libs/apiClient";

/** 🔹 Send user’s purpose selection to backend */
export async function savePurposeSelection(data) {
  try {
    const token = localStorage.getItem("access_token");

    const { data: resp } = await apiClient.post(`/properties`, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return resp;
  } catch (error) {
    console.error("❌ Error saving purpose selection:", error);
    throw error;
  }
}

