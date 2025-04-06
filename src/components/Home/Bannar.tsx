import Image from "next/image";
import { IoShirtSharp } from "react-icons/io5";
import { RiShirtFill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";


const Bannar = () => {
    return (
        <div className="bg-[#F7F7F7] rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section - Model */}
        <div className="relative w-full md:w-1/3 flex justify-center">
          <Image
            src="https://i.ibb.co/7dzKfN8L/BLACK-SHIRT-scaled-1.jpg"
            alt="Model"
            width={460}
            height={450}
            className="rounded-md object-cover"
          />
          {/* <div className="absolute left-0 bottom-6 rotate-[-90deg] text-pink-600 font-bold text-xl tracking-widest">
            PREMIUM SHIRT
          </div>
          <div className="absolute left-[-40px] top-10 text-5xl font-extrabold text-pink-100 opacity-30 rotate-[-90deg]">
            FASHION
          </div> */}
        </div>
  
        {/* Middle Section - Text */}
        <div className="text-center md:text-left w-full md:w-1/3">
          <h2 className="text-4xl font-bold text-[#01204E] mb-3">
            Premium Indian Shirt
          </h2>
          <p className="text-gray-600 mb-4">
            Our product quality and fabric are fully comfortable and stylish,
            taking you to the next level.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button className="bg-gray-100 text-sm px-4 py-2 rounded-md shadow">
            <IoShirtSharp />
            POLO T-SHIRT
            </button>
            <button className="bg-gray-100 text-sm px-4 py-2 rounded-md shadow">
            <RiShirtFill />
            SHIRT
            </button>
            <button className="bg-gray-100 text-sm px-4 py-2 rounded-md shadow">
            <BiSolidOffer />
            DHAMAKA OFFER
            </button>
          </div>
        </div>
  
        {/* Right Section - T-Shirts Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="https://i.ibb.co/sptY1MxC/1.webp"
            alt="Polo T-Shirts"
            width={460}
            height={450}
            className="rounded-md object-contain"
          />
        </div>
      </div>
    );
};

export default Bannar;