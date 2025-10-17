import { apiClient } from "@/libs/apiClient";

export const notificationPreferencesService = {
  
  // GET preferences for the current user
  async getPreferences() {
    const token = localStorage.getItem("access_token");
    const { data } = await apiClient.get(`/notification-preferences`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  },

  // PATCH (update) preferences for the current user
  async updatePreferences(preferences) {
    const token = localStorage.getItem("access_token");
    const { data } = await apiClient.patch(`/notification-preferences`, preferences, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  },
};