import React, { useEffect, useState } from "react";
import Dashboard from "../Pages/Dashboard";
import { Navigate } from "react-router-dom";
const Logout = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }

  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("userP");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userGender");
      setTimeout(() => {
        window.location.reload();
      }, 200);
    };
    handleLogout();
  }, [isAuthenticated]);
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Logout;
