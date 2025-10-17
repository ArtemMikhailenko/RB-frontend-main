import { apiClient } from "@/libs/apiClient";

// services/profileSetting.js
export async function updateProfile(payload: any, isFormData = false) {
  const token = localStorage.getItem("access_token");
  const headers: any = { Authorization: `Bearer ${token}` };
  if (!isFormData) headers["Content-Type"] = "application/json";
  const body = isFormData ? payload : JSON.stringify(payload);
  const response = await apiClient.patch(`/userprofile`, body, { headers });
  return response.data;
}

export async function getUserInformation() {
  const token = localStorage.getItem("access_token");
  if (!token) throw new Error("No token found");

  const { data } = await apiClient.get(`/userprofile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

export async function updatePassword(currentPassword, newPassword) {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return { success: false, message: "You must be logged in." };
    }

    const resp = await apiClient.post(`/auth/update-password`, { currentPassword, newPassword }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return resp.data;
  } catch (err) {
    return { success: false, message: err.message || "Something went wrong" };
  }
}