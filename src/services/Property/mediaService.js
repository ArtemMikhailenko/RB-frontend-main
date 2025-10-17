// services/propertyService.js

import { apiClient } from "@/libs/apiClient";

/** 🔹 Upload all multimedia (images, documents, URLs) */
export async function uploadPropertyMultimedia({ images = [], documents = [], videoUrl, virtualTourUrl,propertyId }) {
  try {
    const token = localStorage.getItem("access_token");

    const formData = new FormData();

        // Add propertyId
    formData.append("propertyId", propertyId);

    // Append images
    images.forEach((file) => {
      formData.append("images", file);
    });

    // Append documents
    documents.forEach((file) => {
      formData.append("pdfs", file);
    });

    // Append URLs
    if (videoUrl) formData.append("videoUrl", videoUrl);
    if (virtualTourUrl) formData.append("virtualTour", virtualTourUrl);
    console.log("FormData entries:");
    for (let pair of formData.entries()) {
      console.log(`{${pair[0]}: ${pair[1]}}`);
    }
    const { data } = await apiClient.post(`/property-media`, formData, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return data;
  } catch (error) {
    console.error("❌ Error uploading multimedia:", error);
    throw error;
  }
}
