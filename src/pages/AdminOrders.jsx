import React, { useEffect, useState } from "react";
import API, { updateOrderStatus } from "../utils/api";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await API.get("/orders");
        setOrders(data);
      } catch (error) {
        console.error("❌ Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateOrderStatus(id, newStatus);
      setOrders((prev) =>
        prev.map((order) =>
          order._id === id ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("❌ Error updating status:", error);
    }
  };

  return (
    <main className="bg-[#1a1a1a] text-white min-h-screen py-16 px-[5%]">
      <h1 className="text-3xl text-[#a67c52] mb-8">All Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="overflow-x-auto"> {/* ✅ Scrollable on small screens */}
          <table className="w-full border border-gray-600 text-sm rounded-lg shadow-lg"
            style={{ boxShadow: "0 4px 20px #a67c52" }} // ✅ Gold shadow
          >
            <thead>
              <tr className="bg-[#2a2a2a]">
                <th className="p-2 border">Customer</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-t border-gray-600 hover:bg-[#252525]">
                  <td className="p-2">{order.name}</td>
                  <td className="p-2">{order.email}</td>
                  <td className="p-2">{order.phone}</td>
                  <td className="p-2 text-[#a67c52]">Rs. {order.total}</td>
                  <td className="p-2">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="bg-[#2a2a2a] border border-gray-600 px-2 py-1 rounded"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default AdminOrders;
