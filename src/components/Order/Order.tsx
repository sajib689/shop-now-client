'use client';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '@/lib/Loader';
import { useRouter } from 'next/navigation'

interface OrderProps {
  id: string;
}

const Order = ({ id }: OrderProps) => {
  const { user } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [productData, setProductData] = useState<any>(null);
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const router = useRouter()

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

  const price = productData?.productPrice;
  const numericPrice = parseFloat(price?.replace(/[^\d.-]/g, '') || '0');
  const totalPrice = quantity * numericPrice;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user?.address || !user?.phone || !user?.email) {
      alert("Missing user information. Please update your profile.");
      return;
    }

    if (!deliveryLocation) {
      alert('Please enter your delivery location.');
      return;
    }

    const orderData = {
      id,
      email: user.email,
      address: user.address,
      phone: user.phone,
      deliveryLocation,
      paymentType: false,
      productName: productData.productName,
      price: totalPrice.toString(),
      quantity: quantity.toString(),
      trxId: 'cash on delivery',
      status: false,
      createAt: new Date(),
    };

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/v1/order', orderData);
      if (response.status === 200 || response.status === 201) {
        toast.success('Order placed successfully with Cash on Delivery!');
        router.push('/history')
      } else {
        setError('Failed to place order. Please try again.');
      }
    } catch (err: any) {
      console.error("Order API error:", err);
      setError('Something went wrong while placing the order.');
    } finally {
      setLoading(false);
    }
  };


  if (error) return <p className="text-center text-red-500">{error}</p>;
  // if (!productData) return <p className="text-center text-gray-500">No product found or data is unavailable.</p>;

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4 md:px-8">
      <ToastContainer position='top-right' />
      {loading && <Loader />}
      <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#01204E] mb-10">
          Order Summary
        </h1>

        <div className="mb-8 border-b pb-4">
          <p className="text-md font-medium text-gray-700">Order ID:</p>
          <p className="text-xl font-semibold text-[#FF1C55] break-words">{id}</p>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div>
              <h2 className="text-lg font-semibold text-[#01204E] mb-2">Customer Info</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Name:</strong> {user?.name || 'N/A'}</li>
                <li><strong>Email:</strong> {user?.email || 'N/A'}</li>
                <li><strong>Phone:</strong> {user?.phone || 'N/A'}</li>
                <li><strong>Address:</strong> {user?.address || 'N/A'}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#01204E] mb-2">Delivery Location</h2>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01204E]"
                placeholder="Enter delivery location"
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-lg font-semibold text-[#01204E] mb-4">Product Ordered</h2>
            <div className="bg-gray-50 border rounded-xl p-4 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <img
                src={productData?.productImage}
                alt={productData?.productName}
                className="w-full max-w-[150px] sm:max-w-[180px] h-auto object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{productData?.productName}</h3>
                <p className="text-sm text-gray-600 mt-1">{productData?.productDescription}</p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    type="button"
                    className="px-3 py-1.5 bg-[#FF1C55] text-white rounded-full text-lg"
                    onClick={() => handleQuantityChange('dec')}
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    type="button"
                    className="px-3 py-1.5 bg-[#FF1C55] text-white rounded-full text-lg"
                    onClick={() => handleQuantityChange('inc')}
                  >
                    +
                  </button>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Select Size</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                  >
                    <option value="">Choose a size</option>
                    {productData?.sizes?.length > 0 ? (
                      productData.sizes.map((size: string) => (
                        <option key={size} value={size}>{size}</option>
                      ))
                    ) : (
                      <option value="">No sizes available</option>
                    )}
                  </select>
                </div>
              </div>

              <p className="text-xl font-bold text-[#01204E] mt-4 lg:mt-0">৳{totalPrice}.00</p>
            </div>
          </div>

          <div className="flex justify-between items-center border-t pt-6">
            <p className="text-lg font-semibold text-gray-800">Total:</p>
            <p className="text-3xl font-bold text-[#FF1C55]">৳{totalPrice}.00</p>
          </div>

          <div className="mt-10 text-center">
            <button
              type="submit"

              className="cursor-pointer bg-[#01204E] text-white py-3 px-10 rounded-full text-lg hover:bg-[#011c42] transition duration-300"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Order;
