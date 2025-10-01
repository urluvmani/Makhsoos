import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");
        setProducts(data);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main
      className="
        min-h-screen py-10 px-[5%] relative overflow-hidden
        bg-gradient-to-b from-gray-100 via-white to-gray-50 text-black
        dark:from-[#111] dark:via-[#1a1a1a] dark:to-[#111] dark:text-white
        transition-colors duration-500
      "
    >
      {/* Floating blurred background shapes */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="bg-gradient-to-r from-[#a67c52] to-yellow-600 w-[500px] h-[500px] rounded-full blur-[180px] absolute top-[-20%] left-[-20%]" />
        <div className="bg-gradient-to-r from-[#ff8c00] to-[#a67c52] w-[400px] h-[400px] rounded-full blur-[150px] absolute bottom-[-20%] right-[-20%]" />
      </div>

      {/* ✅ Back button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-[#a67c52] mb-6 hover:text-yellow-500 transition font-medium"
      >
        <FiArrowLeft className="text-xl" />
        <span>Back to Home</span>
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-light mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#a67c52] to-yellow-400 tracking-wide"
      >
        Shop Collection
      </motion.h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-400">No products available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => {
            return (
              <motion.div
                key={product._id}
                viewport={{ once: true }}
                className="
                  relative rounded-2xl shadow-xl border overflow-hidden group 
                  transition-all duration-500
                  bg-white text-black border-gray-200
                  hover:border-[#a67c52] hover:shadow-[0_0_25px_#a67c52aa]
                  dark:bg-[#1e1e1e]/80 dark:text-white dark:border-[#a67c52]/20
                "
              >
                {/* Product Image */}
                <div className="overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover rounded-t-2xl transform group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-[#ffda89] transition">
                    {product.name}
                  </h2>
                  <p className="text-[#a67c52] font-medium mb-6">
                    Rs. {product.price}
                  </p>

                  <Link
                    to={`/product/${product._id}`}
                    className="inline-block bg-gradient-to-r from-[#a67c52] to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg hover:from-yellow-500 hover:to-[#a67c52] transition"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Shop;
