import MenuCards from "../../pages/MenuCards";
import BreakFast from "../../pages/BreakFast";
import { useState } from "react";
import { Link } from "react-router-dom";
import Launch from "../../pages/Launch";
import Dinner from "../../pages/Dinner";
import Desserts from "../../pages/Desserts";
import Beverages from "../../pages/Beverages";
import Supper from "../../pages/Supper";
const MenuContainer = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="container flex flex-col gap-6 mt-10">
        <ul className=" w-full gap-6 items-center cursor-pointer hidden lg:flex">
          <li
            onClick={() => setActiveTab("all")}
            className={
              activeTab === "all"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>All</Link>
          </li>
          <li
            onClick={() => setActiveTab("breakfast")}
            className={
              activeTab === "breakfast"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Breakfast</Link>
          </li>
          <li
            onClick={() => setActiveTab("launch")}
            className={
              activeTab === "launch"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Launch</Link>
          </li>
          <li
            onClick={() => setActiveTab("Dinner")}
            className={
              activeTab === "Dinner"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Dinner</Link>
          </li>
          <li
            onClick={() => setActiveTab("Desserts")}
            className={
              activeTab === "Desserts"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Desserts</Link>
          </li>
          <li
            onClick={() => setActiveTab("Supper")}
            className={
              activeTab === "Supper"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Supper</Link>
          </li>
          <li
            onClick={() => setActiveTab("Beverages")}
            className={
              activeTab === "Beverages"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Beverages</Link>
          </li>
        </ul>
        <ul className="flex flex-col lg:hidden">
          <li
            onClick={() => setActiveTab("all")}
            className={
              activeTab === "all"
                ? ` font-[600] text-btnColor flex items-center `
                : " text-black font-[600] flex items-center "
            }
          >
            <Link>All</Link>
          </li>
          <li
            onClick={() => setActiveTab("breakfast")}
            className={
              activeTab === "breakfast"
                ? ` font-[600] text-btnColor flex items-center `
                : " text-black font-[600] flex items-center "
            }
          >
            <Link>Breakfast</Link>
          </li>
          <li
            onClick={() => setActiveTab("launch")}
            className={
              activeTab === "launch"
                ? ` font-[600] text-btnColor flex items-center `
                : " text-black font-[600] flex items-center "
            }
          >
            <Link>Launch</Link>
          </li>
          <li
            onClick={() => setActiveTab("Dinner")}
            className={
              activeTab === "Dinner"
                ? ` font-[600] text-btnColor flex items-center `
                : " text-black font-[600] flex items-center "
            }
          >
            <Link>Dinner</Link>
          </li>
          <li
            onClick={() => setActiveTab("Desserts")}
            className={
              activeTab === "Desserts"
                ? ` font-[600] text-btnColor flex items-center `
                : " text-black font-[600] flex items-center "
            }
          >
            <Link>Desserts</Link>
          </li>
          <li
            onClick={() => setActiveTab("Beverages")}
            className={
              activeTab === "Beverages"
                ? ` font-[600] text-btnColor flex items-center `
                : " text-black font-[600] flex items-center "
            }
          >
            <Link>Beverages</Link>
          </li>
        </ul>
      </div>

      <div className="container">
        {activeTab === "all" && <MenuCards />}
        {activeTab === "breakfast" && <BreakFast />}
        {activeTab === "launch" && <Launch />}
        {activeTab === "Dinner" && <Dinner />}
        {activeTab === "Desserts" && <Desserts />}
        {activeTab === "Beverages" && <Beverages />}
        {activeTab === "Supper" &&  <Supper /> }
      </div>
    </>
  );
};

export default MenuContainer;
