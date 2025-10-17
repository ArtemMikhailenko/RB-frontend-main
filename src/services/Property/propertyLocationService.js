// services/propertyLocationService.js
import { apiClient } from "@/libs/apiClient";

/** Save property location */
export async function savePropertyLocation(propertyId, locationData) {
  try {
    const token = localStorage.getItem("access_token");
    const body = {
      propertyId,
      street: locationData.street,
      number: locationData.number,
      floor: locationData.floor || undefined,
      door: locationData.door || undefined,
      zipcode: locationData.zipcode, // ✅ match DTO
      city: locationData.city,
      latitude: locationData.latitude ?? null, 
      longitude: locationData.longitude ?? null,
      showExactLocation: locationData.showExactLocation || false, // ✅ match DTO
    };

    const { data } = await apiClient.post(`/property-locations`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    console.error("❌ Error saving property location:", error);
    throw error;
  }
}
