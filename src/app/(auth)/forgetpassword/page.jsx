"use client";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import Image from "next/image";
import { forgotPasswordApi } from "@/libs/forgetpassword.api"; // adjust path

export default function ForgotPassword() {
  const [step, setStep] = React.useState(1); // 1 = email input, 2 = code input
  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [notification, setNotification] = React.useState({
    message: "",
    type: "", // success or error
  });

  const router = useRouter();

  const handleCodeChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleRequestReset = async (e) => {
    e.preventDefault();
    try {
      await forgotPasswordApi.requestReset(email);
      setNotification({ message: "Reset code sent!", type: "success" });
      setStep(2);
    } catch (err) {
      setNotification({
        message: err.message || "Failed to send reset code",
        type: "error",
      });
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    const otp = code.join("");
    try {
      await forgotPasswordApi.verifyCode(email, otp);
      setNotification({ message: "OTP verified!", type: "success" });
      setStep(3);
    } catch (err) {
      setNotification({
        message: err.message || "Invalid or expired OTP",
        type: "error",
      });
    }
  };

  const handleSubmitNewPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError(true);
      setNotification({
        message: "Passwords do not match",
        type: "error",
      });
      return;
    }
    const otp = code.join("");
    try {
      await forgotPasswordApi.resetPassword(newPassword);
      setNotification({ message: "Password reset successful!", type: "success" });
      setStep(4);
    } catch (err) {
      setNotification({
        message: err.message || "Failed to reset password",
        type: "error",
      });
    }
  };

  return (
    <>
      <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white shadow-md rounded-[10px] sm:p-[54px_40px] px-6 py-8 w-full max-w-lg">
          {step === 1 && (
            <>
              <h2 className="sm:text-[28px] text-xl font-semibold text-center mb-2">
                Forgot password
              </h2>
              <p className="text-center text-gray-500 mb-8 text-sm">
                Enter your email to receive
                <br />
                the 6 digit reset code
              </p>

              <form onSubmit={handleRequestReset} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@gmail.com"
                    className="w-full px-4 py-2 sm:p-[17px_16px] border border-gray-300 rounded-md focus:outline-none focus:border-black text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white p-[13px_22px] text-[14px] rounded-[8px] hover:bg-gray-900 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  Continue
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-2">
                Reset code
              </h2>
              <p className="text-center text-gray-500 mb-6">
                We’ve sent a 6 digit code to{" "}
                <span className="font-medium">{email}</span>.<br />
                Please enter it below.
              </p>

              <form onSubmit={handleVerifyCode} className="space-y-6">
                <div className="flex justify-between gap-2">
                  {code.map((digit, i) => (
                    <input
                      key={i}
                      id={`code-${i}`}
                      type="text"
                      value={digit}
                      onChange={(e) => handleCodeChange(e.target.value, i)}
                      maxLength={1}
                      className="w-1/6 mr-3 sm:mr-0 sm:w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:border-black"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  Continue
                </button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-4">
                Didn’t receive the code?{" "}
                <button
                  type="button"
                  onClick={() => handleRequestReset(new Event("submit"))}
                  className="text-[#ED8F03] cursor-pointer hover:underline"
                >
                  Resend
                </button>
              </p>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-2">
                Set new password
              </h2>
              <p className="text-center text-gray-500 mb-6">
                Enter your new password for <br />{" "}
                <span className="font-medium">{email}</span>.
              </p>
              <form onSubmit={handleSubmitNewPassword} className="space-y-4">
                <div>
                  <label className="block sm:text-[16px] text-[14px] font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="********"
                      className="w-full border rounded-[10px] p-[10px_13px] pr-10 outline-none border-[#E4E4E4]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-3.5 text-gray-500 cursor-pointer"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block sm:text-[16px] text-[14px] font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setError(false);
                      }}
                      placeholder="********"
                      className={`w-full border rounded-[10px] p-[10px_13px] pr-10 outline-none ${
                        error
                          ? "border-red-500 bg-red-50 placeholder-red-400"
                          : "border-[#E4E4E4]"
                      }`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-2 top-3.5 text-gray-500 cursor-pointer"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white p-[13px_22px] text-[14px] rounded-[8px] hover:bg-gray-900 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  Change Password
                </button>
              </form>
            </>
          )}

          {step === 4 && (
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="rounded-full relative w-15 h-15 flex items-center justify-center shadow">
                <Image
                  src="/icons/Auth/Forgetpassword/tick.svg"
                  alt="feature"
                  fill
                />
              </div>
              <h2 className="text-2xl font-semibold">Congrats!</h2>
              <p className="text-gray-500 text-sm">
                Your password has been updated successfully.
              </p>
              <button
                onClick={() => router.push("/login")}
                className="w-full bg-black text-white p-[13px_22px] text-[14px] rounded-[8px] hover:bg-gray-900 transition cursor-pointer flex items-center justify-center gap-2 mt-2.5"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>

      {notification.message && (
        <div
          className={`fixed bottom-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white text-sm transition-opacity duration-500 ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}
    </>
  );
}
