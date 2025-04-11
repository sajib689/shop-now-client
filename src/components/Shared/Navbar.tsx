"use client";
import { RootState } from "@/store/store";
import { logoutUser } from "@/store/userSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaBars,
  FaBalanceScale,
  FaRegHeart,
  FaShoppingBag,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const links = (
    <>
      <Link href='/' className="cursor-pointer hover:text-blue-500">Home</Link>
      <Link href='/about' className="cursor-pointer hover:text-blue-500">About</Link>
      <Link href='/contact' className="cursor-pointer hover:text-blue-500">Contact</Link>
    </>
  );
  return (
    <div className="bg-[#F7F7F7]">
      <div className="relative container mx-auto">
        {/* Menu Button */}
        <div
          onClick={handleOpen}
          className="cursor-pointer p-2 block md:hidden lg:hidden"
        >
          <FaBars size={24} />
        </div>

        {/* Navbar */}
        <div
          className={`flex flex-col md:flex-row lg:flex-row justify-between items-center p-4 
                    transition-all duration-300 ease-in-out 
                    ${
                      isOpen
                        ? "mt-0 opacity-100"
                        : "mt-[-400px] md:mt-0 lg:mt-0 opacity-0 md:opacity-100"
                    }`}
        >
          {/* Logo */}
          <Link href='/' className="text-xl font-bold">
            <Image src="/logo.png" width={100} height={100} alt="Logo" />
          </Link>

          {/* Navigation Links */}
          <div>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              {links}
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="space-x-2">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 bg-[#FF1C55] text-white rounded-md hover:bg-blue-600"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-[#FF1C55] text-white rounded-md hover:bg-gray-800"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-6 text-gray-700 text-sm">
                  {/* User avatar + name + dropdown */}
                  <div className="relative group inline-block">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={user?.photo || "/default-user.png"}
                        alt="User"
                        width={24}
                        height={24}
                        loading="lazy"
                        className="rounded-full border border-gray-300"
                      />
                      <span>Hello, {user?.name || "Guest"}</span>
                    </div>

                    {/* Dropdown menu */}
                    <div
                      className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md z-50
                        opacity-0 group-hover:opacity-100 invisible group-hover:visible 
                        transition-opacity duration-200 ease-in-out"
                    >
                      <ul className="flex flex-col">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <Link href="/profile">Profile</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <Link href="/history">Orders</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <button onClick={handleLogout}>Logout</button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Compare icon */}
                  <div className="relative">
                    <FaBalanceScale className="text-lg" />
                    <span
                      className="absolute -top-2 -right-2 bg-white border border-gray-300 text-xs w-5 h-5 
                         flex items-center justify-center rounded-full"
                    >
                      0
                    </span>
                  </div>

                  {/* Wishlist icon */}
                  <div className="relative">
                    <FaRegHeart className="text-lg" />
                    <span
                      className="absolute -top-2 -right-2 bg-white border border-gray-300 text-xs w-5 h-5 
                         flex items-center justify-center rounded-full"
                    >
                      0
                    </span>
                  </div>

                  {/* Cart icon with amount */}
                  <div className="relative">
                    <Link href="/cart">
                      <div className="bg-[#01204E] text-white flex items-center gap-2 px-3 py-1 rounded-full">
                        <FaShoppingBag className="text-lg" />
                        <span className="text-sm">0.00৳</span>
                      </div>
                    </Link>
                    <span
                      className="absolute -top-2 -right-2 bg-white border border-gray-300 text-xs w-5 h-5 
                         flex items-center justify-center rounded-full"
                    >
                      0
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
