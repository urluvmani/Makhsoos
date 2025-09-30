import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // ✅ back icon


const Shop = () => {
  const Navigate = useNavigate(); // ✅ navigation hook

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
    <main className="bg-[#1a1a1a] text-white min-h-screen py-5 px-[5%]">

        {/* ✅ Back to Home button */}
              <button
                onClick={() => Navigate("/")}
                className="flex items-center gap-2 text-[#a67c52] mb-6 hover:text-[#8a6745] transition"
              >
                <FiArrowLeft className="text-xl" />
                <span>Back to Home</span>
              </button>
      <h1 className="text-3xl sm:text-4xl font-light mb-10 text-center text-[#a67c52]">
        Shop Collection
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-400">No products available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            // Scroll speed assign karo index ke hisaab se
            let scrollSpeed = 0;
            if (index === 0) scrollSpeed = 2;
            if (index === 1) scrollSpeed = -2;
            if (index === 2) scrollSpeed = 2;

            // ✅ agar index === 1 hai to marginTop -20px laga do
 const extraStyle =
  index === 1
    ? {
        marginTop: window.innerWidth < 768 ? "80px" : "0px",
        marginBottom: window.innerWidth < 768 ? "60px" : "100px",
      }
    : {};


            return (
              <div 
                style={extraStyle} // 👈 yahan apply kiya

                key={product._id}
                data-scroll
                data-scroll-speed={scrollSpeed}
                className="bg-[#2a2a2a] md:h-[35vw]  p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-medium mb-2">{product.name}</h2>
                <p className="text-[#a67c52] mb-4">Rs. {product.price}</p>
                <Link
                  to={`/product/${product._id}`}
                  className="bg-[#a67c52] text-white px-4 py-2 rounded-full text-sm tracking-wide hover:bg-[#8a6745] transition"
                >
                  View Details
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Shop;
