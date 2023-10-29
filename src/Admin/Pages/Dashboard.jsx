import React from "react";
import WelcomCard from "./WelcomCard";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
const Dashboard = () => {
  return (
    <div className="flex flex-col justify-between gap-2">
      <div className="w-full">
        <WelcomCard />
      </div>
      <div className="flex flex-col lg:flex-row  justify-between gap-2 ">
        <div className="px-2 py-2 w-full shadow-md rounded-md flex flex-col gap-2 ">
          <div className="flex justify-between  ">
            <div>
              <p className="text-sm font-medium ">Revenue Generated</p>
              <span>$ 304040</span>
            </div>
            <p className=" cursor-pointer text-btnColor ">
              {" "}
              <BsFillArrowDownSquareFill />{" "}
            </p>
          </div>
          <div>Charts Here .........</div>
        </div>
        <div className="w-full lg:w-1/2  flex flex-col gap-1 lg:h-[50vh] lg:overflow-hidden lg:overflow-y-scroll ">
          <div className="shadow-md px-2 py-2 rounded-md ">
            <p className="text-sm font-medium ">Recent Transaction</p>
          </div>
          <div className="shadow-md px-2 py-2 rounded-md flex items-center justify-between w-full ">
            <div>
              <small>001</small>
              <p>John Doe</p>
            </div>
            <p> 20 / 10 / 2023 </p>
            <div className="w-fit bg-slate-600 rounded-md cursor-pointer text-white py-1 px-1">
              {" "}
              $600{" "}
            </div>
          </div>
          <div className="shadow-md px-2 py-2 rounded-md flex items-center justify-between w-full ">
            <div>
              <small>001</small>
              <p>John Doe</p>
            </div>
            <p> 20 / 10 / 2023 </p>
            <div className="w-fit bg-slate-600 rounded-md cursor-pointer text-white py-1 px-1">
              {" "}
              $600{" "}
            </div>
          </div>
          <div className="shadow-md px-2 py-2 rounded-md flex items-center justify-between w-full ">
            <div>
              <small>001</small>
              <p>John Doe</p>
            </div>
            <p> 20 / 10 / 2023 </p>
            <div className="w-fit bg-slate-600 rounded-md cursor-pointer text-white py-1 px-1">
              {" "}
              $600{" "}
            </div>
          </div>
          <div className="shadow-md px-2 py-2 rounded-md flex items-center justify-between w-full ">
            <div>
              <small>001</small>
              <p>John Doe</p>
            </div>
            <p> 20 / 10 / 2023 </p>
            <div className="w-fit bg-slate-600 rounded-md cursor-pointer text-white py-1 px-1">
              {" "}
              $600{" "}
            </div>
          </div>
          <div className="shadow-md px-2 py-2 rounded-md flex items-center justify-between w-full ">
            <div>
              <small>001</small>
              <p>John Doe</p>
            </div>
            <p> 20 / 10 / 2023 </p>
            <div className="w-fit bg-slate-600 rounded-md cursor-pointer text-white py-1 px-1">
              {" "}
              $600{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="shadow-md px-2 py-2 rounded-md h-40 ">q</div>
        <div className="shadow-md px-2 py-2 rounded-md ">q</div>
        <div className="shadow-md px-2 py-2 rounded-md ">q</div>
      </div>
    </div>
  );
};

export default Dashboard;
