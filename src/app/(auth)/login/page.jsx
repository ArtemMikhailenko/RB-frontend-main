"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { api } from "@/libs/auth.api"; // make sure path matches your api.js
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await api.login(form.email, form.password); // ✅ match api.js
      console.log("Login success:", res);
      router.push("/news");
    } catch (err) {
      console.error("Login failed:", err.message);
      alert(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh]">
      <div className="flex items-center justify-center px-4 mt-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-center mb-1">Login</h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Welcome back! Please enter your details.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-[14px] font-[500] text-[#343434] mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-[#E4E4E4] rounded-[10px] text-[12px] p-[14px_13px] outline-none "
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
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

            {/* Remember and Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center text-[14px]">
                <input
                  type="checkbox"
                  name="remember"
                  className="mr-2 w-[15px] h-[15px] border-2 rounded-[6px]"
                />
                Remember me
              </label>

              <Link
                href="/forgetpassword"
                className="text-orange-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            {/* Continue Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-[13px_22px] text-[14px] rounded-[8px] hover:bg-gray-900 transition cursor-pointer flex items-center justify-center gap-2"
            >
              {loading ? "Logging in..." : "Continue"}
            </button>
          </form>

          {/* Or Divider */}
          <div className="my-4 flex items-center">
            <hr className="flex-grow border-t border-[#E4E4E4]" />
            <span className="mx-2 text-sm text-gray-500">Or</span>
            <hr className="flex-grow border-t border-[#E4E4E4]" />
          </div>

          {/* Google Login */}
          <button
            className="w-full border border-[#E4E4E4] rounded-[10px] flex items-center justify-center gap-2 text-[14px] p-[13px_16px] hover:bg-black hover:text-white transition cursor-pointer"
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
            }}
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-orange-500 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
