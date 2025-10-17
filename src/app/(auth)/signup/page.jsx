"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { api } from "@/libs/auth.api";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    terms: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.terms) {
      alert("You must agree to the terms and conditions");
      return;
    }

    try {
      await api.signup(form);
      router.push("/news");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <div className=" flex items-center justify-center  px-4 mt-8 bg-gray-100">
        <div className="w-full max-w-md bg-white p-5 px-8 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-center mb-6">Register</h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex gap-3 text-[14px]">
              <div className="w-1/2">First Name</div>
              <div>Last Name</div>
            </div>
            <div className="flex gap-3 mt-[-10px]">
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="w-1/2 border border-[#E4E4E4] rounded-[10px] text-[12px] p-[12px_13px] outline-none"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="w-1/2 border border-[#E4E4E4] rounded-[10px] text-[12px] p-[12px_13px] outline-none"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <label className="text-[14px]">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full border border-[#E4E4E4] rounded-[10px] text-[12px] p-[12px_13px] outline-none mt-2"
              value={form.email}
              onChange={handleChange}
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  className="w-full border rounded-[10px] p-[8px_13px]  pr-10 outline-none border-[#E4E4E4]"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2.5 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <label htmlFor="" className="text-[14px]">
              Country
            </label>
            <div className="relative w-full">
              <select
                name="country"
                className="w-full border border-[#E4E4E4] rounded-[10px] text-[12px] pr-10 pl-4 py-[12px] outline-none appearance-none mt-2 cursor-pointer"
                value={form.country}
                onChange={handleChange}
                required
              >
                <option value="">Select country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>

              {/* Custom arrow */}
              <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 ">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <label className="flex items-center text-[14px]">
              <input
                type="checkbox"
                name="terms"
                className="mr-2 w-[15px] h-[15px] border-2 rounded-[6px]"
                checked={form.terms}
                onChange={handleChange}
              />
              I agree to the terms and conditions
            </label>
            <button
              type="submit"
              className="w-full bg-black text-white p-[13px_22px] text-[14px] rounded-[8px] hover:bg-gray-900 transition cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
            </button>
          </form>

          <div className="my-4 flex items-center">
            <hr className="flex-grow border-t border-[#E4E4E4]" />
            <span className="mx-2 text-sm text-gray-500">Or</span>
            <hr className="flex-grow border-t border-[#E4E4E4]" />
          </div>

          <button
            className="w-full border border-[#E4E4E4] rounded-[10px] flex items-center justify-center gap-2 text-[14px] p-[13px_16px] hover:bg-black hover:text-white transition cursor-pointer"
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
            }}
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
