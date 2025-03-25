import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] p-3">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 p-4">
        <div>
          <Image src="/logo.png" width={130} height={130} alt="Logo" />
          <div className='mt-5'>
            <p>
              We aim to restore faith in people by offering a platform with
              high-quality products that provide greater value than their price
            </p>
            <div className="flex items-center space-x-2 mt-3">
              <FaTelegramPlane />
              <p>Dhaka Bangladesh</p>
            </div>
            <div className="flex items-center space-x-2">
              <CiMobile4 />
              <p>+8801234567890</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail />
              <p>shopnowbd@outlook.com</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className='uppercase text-[14px] font-[600] text-[#333]'>Categories</h1>
          <div className='flex flex-col mt-4 gap-1'>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Dhamaka Offer
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Combo Offer
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Polo T-shirt
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            T-shirt
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Shirt
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Winter Collection
            </Link>
          </div>
        </div>
        <div>
          <h1 className='uppercase text-[14px] font-[600] text-[#333]'>Menu</h1>
          <div className='flex flex-col mt-4 gap-1'>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Home
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Mens Clothing
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            women's clothing
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            About Us
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Contact Us
            </Link>
            
          </div>
        </div>
        <div>
          <h1 className='uppercase text-[14px] font-[600] text-[#333]'>Footer Menu</h1>
          <div className='flex flex-col mt-4 gap-1'>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Home
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            About Us
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            women's clothing
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Mens Clothing
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Contact Us
            </Link>
            
          </div>
        </div>
        <div>
          <h1 className='uppercase text-[14px] font-[600] text-[#333]'>Condition</h1>
          <div className='flex flex-col mt-4 gap-1'>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            About Us
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Delivery Information
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Privacy Policy
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Terms & Conditions
            </Link>
            <Link href='' className="cursor-pointer hover:text-[#ADBDC5]">
            Returns
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
