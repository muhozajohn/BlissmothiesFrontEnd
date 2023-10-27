import React from "react";
import WelcomCard from "./WelcomCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
      <div className="w-full">
        <WelcomCard />
      </div>
      <div className="w-full lg:w-[500px]  bg-black">w</div>
    </div>
  );
};

export default Dashboard;
