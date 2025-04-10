'use client'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
interface OrderProps {
  id: string;  
}

const Order = ({ id }: OrderProps) => {
  const { user } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [productData, setProductData] = useState<any>(null); // Local state for data
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('');

  const pricePerProduct = 1399;

  // Fetch data when the component mounts or when the 'id' changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/getproducts/${id}`);
        setProductData(response.data.data);
      } catch (err: any) {
        setError('Something went wrong while fetching the product data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleQuantityChange = (type: 'inc' | 'dec') => {
    setQuantity((prev) => Math.max(1, prev + (type === 'inc' ? 1 : -1)));
  };

  const totalPrice = quantity * productData.price;

  // Handle loading, error, and no data states
  if (loading) return <p>Loader.......</p>
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!productData) return <p className="text-center text-gray-500">No product found or data is unavailable.</p>;

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-[#01204E] mb-8 text-center">Order Summary</h1>

        <div className="mb-8 border-b pb-6">
          <p className="text-lg font-medium text-gray-700">Order ID:</p>
          <p className="text-2xl font-semibold text-[#FF1C55]">{id}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-[#01204E] mb-4">Customer Info</h2>
            <p className="text-gray-700"><span className="font-semibold">Name:</span> {user?.name || 'N/A'}</p>
            <p className="text-gray-700"><span className="font-semibold">Email:</span> {user?.email || 'N/A'}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#01204E] mb-4">Shipping Details</h2>
            <input
              type="text"
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01204E] text-gray-800"
              placeholder="Enter shipping address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#01204E] mb-4">Product Ordered</h2>
          <div className="border rounded-xl p-6 bg-gray-50 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <img
                  src={productData.productImage}
                  alt={productData.productName}
                  className="w-40 h-40 object-cover rounded-md"
                />
                <p className="font-medium text-gray-800 mt-4 text-lg">{productData.productName}</p>
                <p className="text-sm text-gray-600 mt-2">{productData.productDescription}</p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    className="px-4 py-2 bg-[#FF1C55] text-white rounded-full hover:bg-[#FF1C55] transition-all"
                    onClick={() => handleQuantityChange('dec')}
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    className="px-4 py-2 bg-[#FF1C55] text-white rounded-full hover:bg-[#FF1C55] transition-all"
                    onClick={() => handleQuantityChange('inc')}
                  >
                    +
                  </button>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Select Size:</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg mt-2"
                  >
                    <option value="">Choose a size</option>
                    {productData.sizes && productData.sizes.length > 0 ? (
                      productData.sizes.map((size: string) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))
                    ) : (
                      <option value="">No sizes available</option>
                    )}
                  </select>
                </div>

                <p className="text-sm text-gray-600 mt-2">{productData.discount}</p>
                <p className="text-sm text-gray-600 line-through">{productData.oldPrice}</p>
              </div>

              <p className="text-[#01204E] font-semibold text-2xl">
                ৳{totalPrice}.00
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-6">
          <p className="text-lg font-semibold text-gray-800">Total:</p>
          <p className="text-3xl font-bold text-[#FF1C55]">৳{totalPrice}.00</p>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-[#01204E] text-white py-3 px-8 rounded-full hover:bg-[#011c42] transition-all">
            Track Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Order;
