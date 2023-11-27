import MenuCards from "../../pages/MenuCards";
import BreakFast from "../../pages/BreakFast";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Launch from "../../pages/Launch";
import Dinner from "../../pages/Dinner";
import Desserts from "../../pages/Desserts";
import Beverages from "../../pages/Beverages";
import Supper from "../../pages/Supper";
import { GiSettingsKnobs } from "react-icons/gi";
const MenuContainer = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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

        <div className="relative inline-block text-left lg:hidden ">
          <div>
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex items-center gap-2 justify-center w-fit px-2 lg:px-4 py-2 text-sm font-medium text-white bg-btnColor rounded-md focus:none absolute right-0"
            >
              <GiSettingsKnobs className=" text-black text-lg font-extrabold " />
              {activeTab}
            </button>
          </div>
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-10 z-10 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <ul className="bg-white shadow-md rounded-md py-3 px-3 cursor-pointer  ">
                <li
                  onClick={() => {
                    setActiveTab("all");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "all"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center "
                  }
                >
                  <Link>All</Link>
                </li>
                <li
                  onClick={() => {
                    setActiveTab("breakfast");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "breakfast"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link>Breakfast</Link>
                </li>
                <li
                  onClick={() => {
                    setActiveTab("lunch");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "lunch"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link>Lunch</Link>
                </li>
                <li
                  onClick={() => {
                    setActiveTab("Dinner");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "Dinner"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link>Dinner</Link>
                </li>
                <li
                  onClick={() => {
                    setActiveTab("Deserts");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "Deserts"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link>Desserts</Link>
                </li>
                <li
                  onClick={() => {
                    setActiveTab("Beverages");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "Beverages"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link>Beverages</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="container mt-10">
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
