import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "../utils/api";
import { clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false); // ✅ toggle for form

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/orders", {
        ...form,
        items,
        total,
      });
      dispatch(clearCart()); // ✅ cart empty
      setMessage("✅ Thanks! Your order has been placed.");
      setShowForm(false); // ✅ hide form after success
      setTimeout(() => {
        navigate("/cart"); // ✅ cart par redirect
      }, 2000);
    } catch (error) {
      setMessage("❌ Failed to place order.");
    }
    setLoading(false);
  };

  if (items.length === 0) {
    return <p className="text-center text-gray-400 mt-20">Your cart is empty</p>;
  }

  return (
    <main className="bg-[#1a1a1a] text-white min-h-screen py-16 px-[5%]">
      <h1 className="text-3xl text-[#a67c52] mb-8">Checkout</h1>

      {message && <div className="mb-6 text-center text-lg">{message}</div>}

      {!showForm ? (
        // ✅ Order summary first
        <div className="max-w-lg bg-[#2a2a2a] p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <ul className="space-y-2">
            {items.map((item) => {
                return (<>
              <li key={item.id}>
                {item.name} x {item.qty} = Rs. {item.price * item.qty}
              </li>
              </>
            )
            })}
          </ul>
          <p className="font-medium text-lg">
            Total: <span className="text-[#a67c52]">Rs. {total}</span>
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-[#a67c52] py-3 rounded-lg hover:bg-[#8a6745] transition"
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        // ✅ Show form only after "Proceed" click
        <form onSubmit={handlePlaceOrder} className="max-w-lg space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#2a2a2a]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#2a2a2a]"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#2a2a2a]"
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#2a2a2a]"
            required
          ></textarea>

          <p className="font-medium text-lg">
            Total: <span className="text-[#a67c52]">Rs. {total}</span>
          </p>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#a67c52] py-3 rounded-lg hover:bg-[#8a6745] transition"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </form>
      )}
    </main>
  );
};

export default Checkout;
