"use client";
import useGetData from "@/hooks/useGetData";
import Image from "next/image";
import Link from "next/link"
import {useEffect} from 'react'
const products = [
  {
    id: 1,
    image: "https://i.ibb.co/sptY1MxC/1.webp",
    title: "Premium Combo Polo T-Shirt",
    price: "1,399.00৳",
    oldPrice: "2,400.00৳",
    discount: "-42%",
    stockStatus: "In stock",
  },
  {
    id: 2,
    image: "https://i.ibb.co/sptY1MxC/1.webp",
    title: "Premium Combo Polo T-Shirt",
    price: "1,399.00৳",
    oldPrice: "2,400.00৳",
    discount: "-42%",
    stockStatus: "In stock",
  },
  {
    id: 3,
    image: "https://i.ibb.co/zTbBRnWw/2.webp",
    title: "Premium Combo Polo T-Shirt",
    price: "1,399.00৳",
    oldPrice: "2,400.00৳",
    discount: "-42%",
    stockStatus: "In stock",
  },
  {
    id: 4,
    image: "https://i.ibb.co/zTbBRnWw/2.webp",
    title: "Premium Combo Polo T-Shirt",
    price: "1,399.00৳",
    oldPrice: "2,400.00৳",
    discount: "-42%",
    stockStatus: "In stock",
  },
];

const NewPoloTShirt = () => {
  const { getData, loading, error, data } = useGetData()
  
  
  useEffect(() => {
    const fetchProducts = async () => {
      await getData("/api/v1/getproducts");
    };
    fetchProducts();
  },[getData])
  const filterPoloShirts = data?.data?.filter(d => d.productCategory === "T-Shirt") || [];

  console.log(filterPoloShirts)
  return (
    <section className="py-12 px-6 bg-[#F7F7F7]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#01204E] text-center mb-8">
          New Polo T-shirt
        </h2>

        <div className="flex gap-6 overflow-x-auto">
          {filterPoloShirts?.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 min-w-[250px] flex flex-col justify-between"
            >
              <div>
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-gray-600 text-white px-2 py-1 text-sm rounded">
                    {product.discount}
                  </span>
                  <Image
                    src={product.productImage}
                    alt={product.productName}
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {product.productName}
                </h3>
                <p className="text-green-600 flex items-center gap-2">
                  ✔ {product.productInStock === true ? 'In Stock' : 'Not available'}
                </p>
                <p className="text-gray-500 line-through">{product.oldPrice}</p>
                <p className="text-[#01204E] font-bold">{product.productPrice}</p>
              </div>

              <div className="mt-4 flex gap-2">
  <Link
    href=""
    className="w-full text-center px-4 py-2 font-medium text-white rounded-xl bg-gradient-to-r from-[#01204E] to-[#023067] hover:from-[#011c42] hover:to-[#01204E] shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 ease-in-out"
  >
    Add to Cart
  </Link>
  <Link
    href="/order"
    className="w-full text-center px-4 py-2 font-medium text-white rounded-xl bg-gradient-to-r from-[#FF1C55] to-[#FF4E78] hover:from-[#E6003D] hover:to-[#ff2f5c] shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 ease-in-out"
  >
    Buy Now
  </Link>
</div>

            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
        <button className="px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-[#FF1C55] to-[#FF4E78] hover:from-[#E6003D] hover:to-[#ff2f5c] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
  MORE PRODUCTS →
</button>

        </div>
      </div>
    </section>
  );
};

export default NewPoloTShirt;
