import { Navigate } from "react-router-dom";
const Reports = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return <div>Reports</div>;
};

export default Reports;
