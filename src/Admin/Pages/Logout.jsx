import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { Navigate } from "react-router-dom";
const Logout = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }

  const [loading, setIsloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (signout === " ") {
      navigate("/home");
    }
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center h-screen w-full text-center  ">
        <PulseLoader color="#F06C05" loading={loading} size={20} />
      </div>
    </div>
  );
};

export default Logout;
