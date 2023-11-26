import MenuCards from "../../pages/MenuCards";
import BreakFast from "../../pages/BreakFast";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Launch from "../../pages/Launch";
import Dinner from "../../pages/Dinner";
import Desserts from "../../pages/Desserts";
import Beverages from "../../pages/Beverages";
import Supper from "../../pages/Supper";
import { BiMenu } from "react-icons/bi";
const MenuContainer = () => {
  const [activeTab, setActiveTab] = useState("all");
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show-menu");
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
            onClick={() => setActiveTab("lunch")}
            className={
              activeTab === "lunch"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Lunch</Link>
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
            onClick={() => setActiveTab("Deserts")}
            className={
              activeTab === "Deserts"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Deserts</Link>
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
        <div
          className="navMenu hidden flex justify-between "
          ref={menuRef}
          // onClick={toggleMenu}
        >
          <ul className="menuNav bg-white shadow-md rounded-md py-3 px-3 cursor-pointer ">
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
              onClick={() => setActiveTab("lunch")}
              className={
                activeTab === "lunch"
                  ? ` font-[600] text-btnColor flex items-center `
                  : " text-black font-[600] flex items-center "
              }
            >
              <Link>Lunch</Link>
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
          <span
            className="md:hidden px-1 py-1 bg-btnColor rounded-xl"
            onClick={toggleMenu}
          >
            <BiMenu className="h-8 w-8 cursor-pointer text-white" />
          </span>
        </div>
      </div>

      <div className="container">
        {activeTab === "all" && <MenuCards />}
        {activeTab === "breakfast" && <BreakFast />}
        {activeTab === "lunch" && <Launch />}
        {activeTab === "Dinner" && <Dinner />}
        {activeTab === "Deserts" && <Desserts />}
        {activeTab === "Beverages" && <Beverages />}
        {activeTab === "Supper" && <Supper />}
      </div>
    </>
  );
};

export default MenuContainer;
