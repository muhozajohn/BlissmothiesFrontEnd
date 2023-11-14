import React from "react";
import { Navigate } from "react-router-dom";
const Emails = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return <div>Emails</div>;
};

export default Emails;
