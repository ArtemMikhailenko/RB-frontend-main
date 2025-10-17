import { authHeader } from "@/libs/auth.api";
import { apiClient } from "@/libs/apiClient";

// 🔹 Get received partner requests (paginated)
export async function getReceivedRequests(page = 1, limit = 7) {
  const token = localStorage.getItem("access_token");
  const { data } = await apiClient.get(`/partners/requests/received`, {
    params: { page, limit },
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

export const partnersService = {
  async getSuggestions() {
    const { data } = await apiClient.get(`/partners/suggestions`, {
      headers: { ...authHeader() },
    });
    return data;
  },

  // services/partnersService.ts

  getMyPartners: async () => {
    const token = localStorage.getItem("access_token");
    if (!token) throw new Error("Not authenticated");
    const { data } = await apiClient.get(`/partners`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data; // { data, meta }
  },

  async sendRequest(receiverId: number, note?: string) {
  const { data } = await apiClient.post(`/partners/requests/${receiverId}`, { note }, {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  });
  return data;
}

};

// Accept partner request
export async function acceptPartnerRequest(requestId) {
  console.log("Accepting request with ID:", requestId);
  const token = localStorage.getItem("access_token");
  const { data } = await apiClient.post(`/partners/requests/${requestId}/accept`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}
// Reject partner request
export async function rejectPartnerRequest(requestId) {
  console.log("Rejecting request with ID:", requestId);
  const token = localStorage.getItem("access_token");
  const { data } = await apiClient.post(`/partners/requests/${requestId}/reject`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

// Remove partner
export async function removePartner(partnerId) {
  const token = localStorage.getItem("access_token");
  const { data } = await apiClient.delete(`/partners/${partnerId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}