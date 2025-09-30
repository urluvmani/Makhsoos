import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice"; // ✅ local cart action
import { Link } from "react-router-dom";
import API from "../utils/api";

const Hero = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null); // ✅ hoodie product from DB
  const dispatch = useDispatch();

  // ✅ Fetch hoodie product from backend
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
      <p className="text-center text-gray-400 mt-20">
        Loading Hero Product...
      </p>
    );
  }

  return (
    <main>
      <section className="flex flex-col md:flex-row bg-[#1a1a1a] text-white min-h-[90vh] items-center pt-[100px] px-[5%] py-[8%]">
        <div className="flex-1 md:pr-[5%]">
          <h1
            data-scroll
            data-scroll-speed="-2"
            className="text-3xl sm:text-[3.5rem] font-light mb-6"
          >
            {product.name} – Bold Style, Premium Comfort Always
          </h1>

       

       <p
            data-scroll
            data-scroll-speed="-1"
            className="text-base sm:text-lg mt-20 md:mt-20 opacity-80 mb-20 md:mb-15 max-w-[600px]"
          >
            {product.description}
          </p>


<div data-scroll 
         data-scroll-speed={window.innerWidth < 768 ? "2" : "-2"}

className="">
              {/* Quantity Controls */}
          <div  className="flex items-center gap-3 mb-6">
            <button onClick={() => count > 1 && setCount(count - 1)}>–</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>

          {/* Price */}
          <div className="text-2xl text-[#a67c52] mb-6">
            Rs. {product.price}
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-[#a67c52] px-4 py-2 rounded"
          >
            Add to Cart
          </button>

          <Link to="/cart" className="mt-6 ml-10 underline text-[#a67c52]">
            Go to Cart →
          </Link>
</div>
        </div>

        {/* Image */}
        <div data-scroll 
        
         data-scroll-speed={window.innerWidth < 768 ? "1" : "-4"}
        
        className="flex-1 flex justify-center items-center mt-8 md:mt-0">
         <img
  src={product.image}
  alt={product.name}
  className="w-[300px] img h-[350px] object-cover rounded-lg"
  style={{
    filter: `
      drop-shadow(0 0 2px #a67c52)
      drop-shadow(0 0 1px #a67c52)
      drop-shadow(0 0 10px #a67c52)
    `,
  }}
/>

        </div>
      </section>
    </main>
  );
};

export default Hero;
