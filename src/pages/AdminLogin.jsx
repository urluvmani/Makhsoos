import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/admin/login", { email, password }, { withCredentials: true });
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#1a1a1a] text-white">
      <form onSubmit={handleSubmit} className="bg-[#2a2a2a] p-8 rounded-lg w-[400px]">
        <h1 className="text-2xl mb-6 text-[#a67c52]">Admin Login</h1>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-[#1a1a1a] border border-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 rounded bg-[#1a1a1a] border border-gray-600"
        />
        <button className="w-full bg-[#a67c52] py-2 rounded hover:bg-[#8a6745]">
          Login
        </button>
      </form>
    </main>
  );
};

export default AdminLogin;
