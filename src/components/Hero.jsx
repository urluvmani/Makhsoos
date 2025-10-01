import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import API from "../utils/api";
import { motion } from "framer-motion";

const Hero = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHeroProduct = async () => {
      try {
        const { data } = await API.get("/products");
        const hoodie = data.find((p) => p.name.includes("Hoodie"));
        if (hoodie) setProduct(hoodie);
      } catch (error) {
        console.error("❌ Error fetching hero product:", error);
      }
    };
    fetchHeroProduct();
  }, []);

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: count,
      })
    );
  };

  if (!product) {
    return (
      <p className="text-center text-gray-400 mt-20 animate-pulse">
        Loading Hero Product...
      </p>
    );
  }

  return (
    <main>
      <section
        className="
          flex flex-col md:flex-row 
          bg-gradient-to-r from-gray-100 via-white to-gray-50 
          text-black 
          dark:from-[#1a1a1a] dark:via-[#222] dark:to-[#1a1a1a] dark:text-white
          min-h-[90vh] items-center pt-[100px] px-[5%] py-[8%] overflow-hidden
          transition-colors duration-500
        "
      >
        {/* Text Section */}
        <motion.div
          className="flex-1 md:pr-[5%]"
        >
          <h1 className="text-3xl sm:text-[3.5rem] font-light mb-6 leading-tight">
            {product.name} <br />
          
            <span className="bg-gradient-to-r from-[#a67c52] to-yellow-400 text-transparent bg-clip-text">
              Bold Style, Premium Comfort
            </span>
          </h1>

          <motion.p
            className="text-base sm:text-lg opacity-80 mb-10 max-w-[600px]"
          >
            {product.description}
          </motion.p>

          <motion.div
          >
            {/* Quantity Controls */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => count > 1 && setCount(count - 1)}
                className="
                  w-10 h-10 flex items-center justify-center 
                  border border-gray-500 rounded-full 
                  hover:bg-[#a67c52] hover:text-black transition
                  dark:border-gray-400
                "
              >
                –
              </button>
              <span className="text-lg font-semibold">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="
                  w-10 h-10 flex items-center justify-center 
                  border border-gray-500 rounded-full 
                  hover:bg-[#a67c52] hover:text-black transition
                  dark:border-gray-400
                "
              >
                +
              </button>
            </div>

            {/* Price */}
            <div className="text-2xl font-semibold text-[#a67c52] mb-6">
              Rs. {product.price}
            </div>

            {/* Add to Cart */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="
                bg-[#a67c52] px-6 py-3 rounded-lg shadow-lg 
                hover:bg-yellow-500 transition text-white
              "
            >
              🛒 Add to Cart
            </motion.button>

            <Link
              to="/cart"
              className="ml-8 text-[#a67c52] underline hover:text-yellow-400 transition"
            >
              Go to Cart →
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center mt-10 md:mt-0"
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-[300px] h-[360px] img object-cover rounded-xl shadow-xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              filter: `
                drop-shadow(0 0 6px #a67c52)
                drop-shadow(0 0 15px #a67c52)
              `,
            }}
          />
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
