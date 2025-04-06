import Image from "next/image";


const Shoes = () => {
    const products = [
        {
          id: 1,
          image: "https://i.ibb.co/239wXJwf/7-20250119-194238-0006-300x300.png",
          title: "Men's Running Shoes",
          price: "2,199.00৳",
          oldPrice: "3,000.00৳",
          discount: "-27%",
          stockStatus: "In stock"
        },
        {
          id: 2,
          image: "https://i.ibb.co/RpZHr4HB/6-20250119-194238-0005-300x300.png",
          title: "Casual Sneakers",
          price: "1,899.00৳",
          oldPrice: "2,500.00৳",
          discount: "-24%",
          stockStatus: "In stock"
        },
        {
          id: 3,
          image: "https://i.ibb.co/BVJrLpR9/49-20250119-194240-0048-300x300.png",
          title: "Sports Shoes for Men",
          price: "2,499.00৳",
          oldPrice: "3,200.00৳",
          discount: "-22%",
          stockStatus: "In stock"
        },
        {
          id: 4,
          image: "https://i.ibb.co/PRWLtTf/54-20250119-194240-0053-300x300.webp",
          title: "High-Top Sneakers",
          price: "2,799.00৳",
          oldPrice: "3,600.00৳",
          discount: "-22%",
          stockStatus: "In stock"
        }
      ];
      
    return (
       <section className="py-12 px-6 bg-[#F7F7F7]">
             <div className="container mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-[#01204E] text-center mb-8">
                 New Shoes
               </h2>
       
               <div className="flex gap-6 overflow-x-auto">
                 {products.map((product) => (
                   <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 min-w-[250px]">
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
                     <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.title}</h3>
                     <p className="text-green-600 flex items-center gap-2">
                       ✔ {product.stockStatus}
                     </p>
                     <p className="text-gray-500 line-through">{product.oldPrice}</p>
                     <p className="text-[#01204E] font-bold">{product.price}</p>
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

export default Shoes;