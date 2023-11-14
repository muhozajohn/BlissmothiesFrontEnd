import { Navigate } from "react-router-dom";

const Settings = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return <div>Settings</div>;
};

export default Settings;
