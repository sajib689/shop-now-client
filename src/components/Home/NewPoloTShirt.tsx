"use client";
import Image from "next/image";
import Link from "next/link"
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
  return (
    <section className="py-12 px-6 bg-[#F7F7F7]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#01204E] text-center mb-8">
          New Polo T-shirt
        </h2>

        <div className="flex gap-6 overflow-x-auto">
          {products.map((product) => (
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
                    src={product.image}
                    alt={product.title}
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-green-600 flex items-center gap-2">
                  ✔ {product.stockStatus}
                </p>
                <p className="text-gray-500 line-through">{product.oldPrice}</p>
                <p className="text-[#01204E] font-bold">{product.price}</p>
              </div>

              <div className="mt-4 flex gap-2">
                <Link href='' className="cursor-pointer text-center w-full bg-[#01204E] text-white px-4 py-2 rounded hover:bg-[#011c42] transition">
                  Add to Cart
                </Link>
                <Link href='/order' className="cursor-pointer w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded text-center">
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
            MORE PRODUCTS →
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewPoloTShirt;
