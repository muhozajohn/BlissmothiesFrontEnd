import { Navigate } from "react-router-dom";

const GetHelp = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return <div>GetHelp</div>;
};

export default GetHelp;
