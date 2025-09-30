import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom"; // ✅ for navigation
import { FiArrowLeft } from "react-icons/fi"; // ✅ back icon

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ navigation hook

  // ✅ Fetch orders on mount
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

  // ✅ Form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Place new order
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;

    setLoading(true);
    try {
      const orderData = {
        ...form,
        items: items.map((i) => ({
          productId: i.id || i._id,
          name: i.name,
          qty: i.qty,
          price: i.price,
        })),
        total,
      };

      const { data } = await API.post("/orders", orderData);

      setOrders([data, ...orders]); // add new order on top
      dispatch(clearCart()); // ✅ empty cart
      setMessage("✅ Thanks! Your order has been placed.");
      setForm({ name: "", email: "", phone: "", address: "" }); // reset form
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("❌ Error placing order:", error);
      setMessage("❌ Failed to place order.");
    }
    setLoading(false);
  };

  // ✅ Cancel order
const handleCancelOrder = async (id) => {
  const confirmCancel = window.confirm("⚠️ Are you sure you want to cancel this order?");
  if (!confirmCancel) return; // ❌ agar user 'Cancel' kare to kuch na ho

  try {
    await API.delete(`/orders/${id}`);
    setOrders(orders.filter((o) => o._id !== id));
  } catch (error) {
    console.error("❌ Error cancelling order:", error);
  }
};


  return (
    <main className="bg-[#1a1a1a] text-white min-h-screen py-5 px-[5%]">
      {/* ✅ Back to Home button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-[#a67c52] mb-6 hover:text-[#8a6745] transition"
      >
        <FiArrowLeft className="text-xl" />
        <span>Back to Home</span>
      </button>

      <h1 className="text-3xl text-[#a67c52] mb-8">Your Cart</h1>

      {message && (
        <div className="mb-6 text-center text-green-400 font-medium">
          {message}
        </div>
      )}

      {/* Local Cart */}
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul className="mb-6 space-y-3">
            {items.map((item, index) => (
              <li
                key={item.id || index}
                className="flex flex-col gap-5 justify-between items-center bg-[#2a2a2a] p-4 rounded-lg"
              >
                <div className="flex gap-10">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-400">Rs. {item.price}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded"
                    >
                      –
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#a67c52]">
                    Rs. {item.price * item.qty}
                  </span>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-400 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="mb-6 text-lg text-center font-medium">
            Total: <span className="text-[#a67c52]">Rs. {total}</span>
          </p>

          {/* ✅ Checkout Form */}
          <form
            onSubmit={handlePlaceOrder}
            className="max-w-lg space-y-4 mx-auto bg-[#2a2a2a] p-6 rounded-lg"
          >
            <h2 className="text-xl mb-4 text-[#a67c52]">Checkout Form</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#a67c52] py-3 rounded-lg hover:bg-[#8a6745] transition"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </>
      )}

      {/* Orders History */}
      <h2 className="text-2xl text-[#a67c52] mt-12 mb-6">Your Orders</h2>
      {orders.length === 0 ? (
        <p>No past orders</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="bg-[#2a2a2a] p-4 rounded-lg">
              <p>
                <strong>{order.name}</strong> - Rs. {order.total} ({order.status})
              </p>
              <p className="text-sm text-gray-400">
                {order.email} | {order.phone}
              </p>
              <button
                onClick={() => handleCancelOrder(order._id)}
                className="mt-2 bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Cancel Order
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Cart;
