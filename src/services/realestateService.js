// services/propertyService.js
import { apiClient } from "@/libs/apiClient";

export const getProperties = async (page = 1, limit = 10) => {
  try {
    const { data: result } = await apiClient.get(`/properties`, {
      params: { page, limit },
    });
    return {
      items: result?.data || [],
      totalPages: result?.meta?.totalPages || 1,
      totalItems: result?.meta?.total || 0,
    };
  } catch (error) {
    console.error("getProperties error:", error);
    return { items: [], totalPages: 1, totalItems: 0 };
  }
};
