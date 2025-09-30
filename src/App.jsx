import React, { useLayoutEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard"; // ✅ naya admin page
import AdminOrders from "./pages/AdminOrders";
import AdminLogin from "./pages/AdminLogin";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";

import Home from "../src/pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      scrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        multiplier: 1,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      // Update after initial render to fix content shift
      setTimeout(() => {
        scrollRef.current?.update();
      }, 500);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* ✅ Direct access without ProtectedRoute */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

  {/* Admin */}
  <Route path="/admin/login" element={<AdminLogin />} />
  <Route
    path="/admin/dashboard"
    element={
      <ProtectedAdminRoute>
        <AdminDashboard />
      </ProtectedAdminRoute>
    }
  />
  <Route
    path="/admin/orders"
    element={
      <ProtectedAdminRoute>
        <AdminOrders />
      </ProtectedAdminRoute>
    }/>
      </Routes>
    </div>
  );
};

export default App;
