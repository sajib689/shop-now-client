'use client';

import Link from "next/link";
import { FcManager } from "react-icons/fc";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F7F7F7]">
      <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign up</h2>

        <form className="space-y-5">
          {/* Row 1 */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex gap-4">
            <div className="w-1/2">
            {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2.5 text-gray-400 hover:text-black"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
              
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="photo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded"
          >
            SIGN UP
          </button>

          <div className="text-right text-sm text-gray-600 mt-2">
            <a href="#" className="hover:underline text-pink-600">
              Lost your password?
            </a>
          </div>
        </form>

        <div className="text-center mt-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-gray-200 mb-2 overflow-hidden">
            <FcManager className="w-12 h-12" />
          </div>
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link
            href="/login"
            className="text-sm font-semibold text-gray-800 hover:text-pink-600 underline"
          >
            HAVE AN ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
