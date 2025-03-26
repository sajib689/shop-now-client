"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const DhamakaOffer = () => {
  // Set initial countdown time (adjust as needed)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-04-01T00:00:00").getTime(); // Set your offer end date
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-10 py-12 px-6 bg-gray-100">
      {/* Left Image */}
      <div className="w-1/3">
        <Image src="/offer-left.jpg" alt="Dhamaka Offer Left" width={620} height={620} className="rounded-lg shadow-lg w-full" />
      </div>

      {/* Offer Content */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#01204E]">Dhamaka Offer</h2>
        <p className="text-lg text-gray-600 mt-2">Hurry and get discounts up to 45%</p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-1 md:gap-3 lg:gap-3 mt-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white shadow-md px-4 py-2 rounded-lg text-center">
              <p className="text-2xl font-semibold">{value}</p>
              <span className="text-sm text-gray-500">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
            </div>
          ))}
        </div>

        {/* Go Shopping Button */}
        <button className="mt-6 px-6 py-3 bg-[#01204E] text-white font-semibold rounded-lg shadow-md hover:bg-[#011a3a] transition">
          GO SHOPPING →
        </button>
      </div>

      {/* Right Image */}
      <div className="w-1/3">
        <img src="/offer-right.jpg" alt="Dhamaka Offer Right" className="rounded-lg shadow-lg w-full" />
      </div>
    </div>
  );
};

export default DhamakaOffer;
