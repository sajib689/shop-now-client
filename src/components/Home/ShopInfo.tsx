"use client";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
import { AiFillSafetyCertificate } from "react-icons/ai";

const ShopInfo = () => {
  const delivery = [
    {
      icon: <TbTruckDelivery className="text-4xl text-blue-600" />,
      title: "Home Delivery",
      description: "Whole Bangladesh",
    },
    {
      icon: <MdOutlinePayments className="text-4xl text-green-600" />,
      title: "BKASH PAYMENT",
      description: "Cash on Delivery & Online Payment",
    },
    {
      icon: <FcCustomerSupport className="text-4xl" />,
      title: "24/7 SUPPORT",
      description: "Unlimited help desk",
    },
    {
      icon: <AiFillSafetyCertificate className="text-4xl text-yellow-500" />,
      title: "100% SAFE",
      description: "High-quality Products",
    },
    {
      icon: <TbTruckReturn className="text-4xl text-red-600" />,
      title: "FREE RETURNS",
      description: "Easy return & order tracking",
    },
  ];

  return (
    <div className='bg-[#F7F7F7] pt-10 pb-10'>
      <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold text-center mb-10">Why Shop With Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {delivery.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-lg transition">
            <div>{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    
  );
};

export default ShopInfo;
