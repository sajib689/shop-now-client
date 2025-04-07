'use client';
import { RootState } from "@/store/store";
import { logoutUser } from "@/store/userSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const handleOpen = () => {
        setIsOpen(!isOpen); 
    };
    const handleLogout = () => {
        dispatch(logoutUser())
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }
    return (
        <div className="bg-[#F7F7F7]">
            <div className="relative container mx-auto">
                {/* Menu Button */}
                <div onClick={handleOpen} className="cursor-pointer p-2 block md:hidden lg:hidden">
                    <FaBars size={24} />
                </div>

                {/* Navbar */}
                <div className={`flex flex-col md:flex-row lg:flex-row justify-between items-center p-4 
                    transition-all duration-300 ease-in-out 
                    ${isOpen ? "mt-0 opacity-100" : "mt-[-400px] md:mt-0 lg:mt-0 opacity-0 md:opacity-100"}`}>

                    {/* Logo */}
                    <div className="text-xl font-bold">
                        <Image src="/logo.png" width={100} height={100} alt="Logo" />
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                            <li className="cursor-pointer hover:text-blue-500">Home</li>
                            <li className="cursor-pointer hover:text-blue-500">About</li>
                            <li className="cursor-pointer hover:text-blue-500">Contact</li>
                        </ul>
                    </div>

                    {/* Auth Buttons */}
                    <div className="space-x-2">
                        {
                            !user ? (
                                <>
                                    <Link href='/login' className="px-4 py-2 bg-[#FF1C55] text-white rounded-md hover:bg-blue-600">
                                        Login
                                    </Link>
                                    <Link href='/register' className="px-4 py-2 bg-[#FF1C55] text-white rounded-md hover:bg-gray-800">
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <button onClick={handleLogout}  className="px-4 py-2 bg-[#FF1C55] text-white rounded-md hover:bg-gray-800">
                                        Logout
                                    </button>
                                    <span className="text-sm text-gray-700">{user?.name}</span>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
