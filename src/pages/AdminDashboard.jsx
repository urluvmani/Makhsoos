import React, { useEffect, useState } from "react";
import API from "../utils/api";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [form, setForm] = useState({ name: "", description: "", price: "", image: "" });
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", image: "" });

  // 🔄 Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await API.get("/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // 🗑 Delete product
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await API.delete(`/products/${id}`, { withCredentials: true });
      setProducts(products.filter((p) => p._id !== id));
    }
  };

  // ✏️ Start editing
  const handleEdit = (product) => {
    setEditProduct(product._id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    });
  };

  // 💾 Save update
  const handleUpdate = async (id) => {
    const { data } = await API.put(`/products/${id}`, form, { withCredentials: true });
    setProducts(products.map((p) => (p._id === id ? data : p)));
    setEditProduct(null);
  };

  // ➕ Add new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/products", newProduct, { withCredentials: true });
      setProducts([data, ...products]); // prepend new product
      setNewProduct({ name: "", description: "", price: "", image: "" }); // clear form
      alert("✅ Product added successfully!");
    } catch (error) {
      alert("❌ Failed to add product");
    }
  };

  return (
    <main className="bg-[#1a1a1a] text-white min-h-screen py-16 px-[5%]">
      <h1 className="text-3xl sm:text-4xl font-light mb-10 text-center text-[#a67c52]">
        Admin Dashboard - Products
      </h1>

      {/* ➕ Add Product Form */}
      <div className="bg-[#2a2a2a] p-6 rounded-lg shadow mb-10">
        <h2 className="text-xl mb-4">Add New Product</h2>
        <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="p-2 rounded bg-[#1a1a1a] border border-gray-600"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="p-2 rounded bg-[#1a1a1a] border border-gray-600"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="p-2 rounded bg-[#1a1a1a] border border-gray-600"
            required
          />
          <textarea
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="p-2 rounded bg-[#1a1a1a] border border-gray-600 col-span-1 md:col-span-2"
            required
          />
          <button className="bg-green-500 py-2 rounded hover:bg-green-600 col-span-1 md:col-span-2">
            Add Product
          </button>
        </form>
      </div>

      {/* 📦 Existing Products */}
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product._id} className="bg-[#2a2a2a] p-6 rounded-lg shadow flex justify-between items-center">
            {editProduct === product._id ? (
              <div className="w-full space-y-2">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
                />
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
                />
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
                />
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600"
                />
                <button
                  onClick={() => handleUpdate(product._id)}
                  className="bg-green-500 px-4 py-2 rounded mt-2"
                >
                  Save
                </button>
                <button onClick={() => setEditProduct(null)} className="ml-2 bg-gray-500 px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="text-xl">{product.name}</h2>
                  <p className="text-gray-400">Rs. {product.price}</p>
                </div>
                <div className="space-x-2">
                  <button onClick={() => handleEdit(product)} className="bg-blue-500 px-3 py-1 rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(product._id)} className="bg-red-500 px-3 py-1 rounded">
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminDashboard;
