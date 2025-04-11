'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loader from '@/lib/Loader';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface IOrder {
  _id: string;
  email: string;
  address: string;
  phone: string;
  deliveryLocation: string;
  paymentType: boolean;
  productName: string;
  price: string;
  quantity: string;
  trxId: string;
  status: string;
  createAt: Date;
}

const OrderHistory = () => {
  
  const { user } = useSelector((state: RootState) => state.user);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchOrderHistory = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/v1/orderhistory/${user?.email}`);
      setOrders(response.data.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch order history.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const handleCancelOrder = async (_id: string) => {
    try {
      // Correct the status to 'cancelled'
      await axios.patch(`http://localhost:5000/api/v1/orderupdate/${_id}`, {
        status: 'cancelled',
      });
      fetchOrderHistory(); // Refresh data after cancellation
    } catch (err) {
      console.error('Cancel failed:', err);
      alert('Failed to cancel the order.');
    }
  };

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-xl rounded-2xl">
        <h2 className="text-4xl font-bold text-center text-[#01204E] mb-10">Order History</h2>

        {orders?.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-[#01204E] text-white text-sm uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Qty</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Array.isArray(orders) && orders?.map((order) => {
                  return (
                    <tr key={order._id} className="hover:bg-gray-100 transition-all duration-150">
                      <td className="px-6 py-4 font-medium text-gray-900">{order._id}</td>
                      <td className="px-6 py-4">{order.productName}</td>
                      <td className="px-6 py-4">{order.quantity}</td>
                      <td className="px-6 py-4">৳{order.price}</td>
                      <td className="px-6 py-4">{order.deliveryLocation}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                            order.status === 'cancelled'
                              ? 'bg-red-100 text-red-800'
                              : order.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {order.status === 'cancelled'
                            ? 'Cancelled'
                            : order.status === 'completed'
                            ? 'Completed'
                            : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(order.createAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {/* Only show the cancel button for orders that are not cancelled or completed */}
                        {!order.status || order.status === 'pending' ? (
                          <button
                            onClick={() => handleCancelOrder(order._id)}
                            className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 rounded-full transition-all"
                          >
                            Cancel
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderHistory;
