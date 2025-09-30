import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../utils/api";

const ProtectedAdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await API.get("/admin/check", { withCredentials: true });
        setIsAdmin(true);
      } catch {
        setIsAdmin(false);
      }
    };
    checkAuth();
  }, []);

  if (isAdmin === null) return <p className="text-center mt-20">Loading...</p>;

  return isAdmin ? children : <Navigate to="/admin/login" />;
};

export default ProtectedAdminRoute;
