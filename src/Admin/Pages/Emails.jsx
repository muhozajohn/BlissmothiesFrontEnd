import React from "react";
import { Navigate } from "react-router-dom";
import Email from "../components/Table/Email";
const Emails = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return <div>
    <Email />
  </div>;
};

export default Emails;
