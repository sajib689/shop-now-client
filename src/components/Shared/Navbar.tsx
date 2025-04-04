'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className="bg-gray-100">
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
                    <Link href='/login' className="px-4 py-2 bg-[#FF1C55] text-white rounded-md hover:bg-blue-600">
                        Sign In
                    </Link>
                    <Link href='/register' className="px-4 py-2 bg-[#FF1C55] text-white rounded-md hover:bg-gray-800">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
        </div>
      
    );
};

export default Navbar;
