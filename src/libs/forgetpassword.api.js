import { apiClient } from "@/libs/apiClient";

export const forgotPasswordApi = {
  requestReset: async (email) => {
    const { data } = await apiClient.post("/auth/request-password-reset", { email });
    return data;
  },

  verifyCode: async (email, otp) => {
    const { data } = await apiClient.post("/auth/verify-otp", { email, otp });

    // ✅ Save resetToken in localStorage
    if (data.resetToken) {
      localStorage.setItem("reset_token", data.resetToken);
    }

    return data;
  },

resetPassword: async (newPassword) => {
  const resetToken = localStorage.getItem("reset_token");
  if (!resetToken) throw new Error("Reset token not found");
  const { data } = await apiClient.post(
    "/auth/change-password",
    { newPassword },
    { headers: { Authorization: `Bearer ${resetToken}` } }
  );

  localStorage.removeItem("reset_token"); // cleanup
  return data;
},

};
