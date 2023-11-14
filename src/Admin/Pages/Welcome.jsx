import { Navigate } from "react-router-dom";
const Welcome = ({ id, number, icon, content, iconP }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="flex  gap-1 shadow-md px-2 py-3 rounded-md items-center justify-between ">
      <div>
        <h2 className="text-xl text-btnColor font-medium">{icon}</h2>
        <h4 className="text-lg font-semibold">{number}</h4>
        <p className="text-sm font-medium text-gray-400">{content}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl text-btnColor font-medium">{iconP}</h2>
        <p className="text-sm font-medium"> +2%</p>
      </div>
    </div>
  );
};

export default Welcome;
