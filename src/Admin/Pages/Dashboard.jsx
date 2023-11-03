import React from "react";
import WelcomCard from "./WelcomCard";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import LineChartData from "../components/Charts/LineChart";
import PieCharts from "../components/Charts/PieCharts";
import BarCharts from "../components/Charts/BarCharts";
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
          <div className="h-full">
            <LineChartData />
          </div>
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
        <div className="shadow-lg bg-orange-100 px-2 py-2 rounded-md  flex flex-col gap-6 ">
          <h2 className="text-sm font-bold">Campain</h2>
          <div className="flex items-center justify-center gap-6 flex-col ">
            <div className="h-28  w-full">
              <PieCharts />
            </div>
            <div>
              <h2 className=" text-blue-500 text-center ">
                $5050 revenue Generated
              </h2>
              <h2>Includeed extra misc expenditures and costs</h2>
            </div>
          </div>
        </div>
        <div className="shadow-lg bg-orange-200 px-2 py-2 rounded-md  flex flex-col gap-6 justify-between ">
          <h2 className="text-sm font-bold">Sales Quantity</h2>

          <div className="h-32  w-full">
            <BarCharts />
          </div>
        </div>
        <div className="shadow-lg bg-orange-100 px-2 py-2 rounded-md  flex flex-col gap-2 justify-between ">
          <h2 className="text-sm font-bold">Geographic Based Traffic</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2041615.6317652569!2d28.560627062552978!3d-1.9403937215968883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29654e73840e3%3A0x7490b026cbcca103!2sRuanda!5e0!3m2!1ses!2srw!4v1698873512626!5m2!1ses!2srw"
            // width="600"
            // height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
