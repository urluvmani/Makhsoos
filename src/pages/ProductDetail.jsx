import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import API from "../utils/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice"; // ✅ local cart action
import { FiArrowLeft } from "react-icons/fi"; // ✅ back icon


const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1); // ✅ user can select quantity

    const Navigate = useNavigate(); // ✅ navigation hook


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("❌ Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center text-gray-400 mt-20">Loading...</p>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty,
      })
    );
  };

  return (
    <main className="bg-[#1a1a1a] text-white min-h-screen flex flex-col md:items-center  justify-center md:gap-20 py-5 px-[5%]">
         <button
                onClick={() => Navigate("/")}
                className="flex items-center md:absolute md:top-10 md:left-10 gap-2 text-[#a67c52] mb-6 hover:text-[#8a6745] transition"
              >
                <FiArrowLeft className="text-xl" />
                <span>Back to Home</span>
              </button>
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-96 object-cover rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl font-light mb-4">{product.name}</h1>
          <p className="text-lg opacity-80 mb-6">{product.description}</p>
          <div className="text-2xl text-[#a67c52] mb-6">Rs. {product.price}</div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-3 mb-6">
            <button onClick={() => qty > 1 && setQty(qty - 1)}>–</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-[#a67c52] text-white px-6 py-3 rounded-full hover:bg-[#8a6745] transition"
          >
            Add to Cart
          </button>
          <Link
            to="/cart"
            className="mt-6 ml-10 inline-block underline text-[#a67c52]"
          >
            Go to Cart →
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
