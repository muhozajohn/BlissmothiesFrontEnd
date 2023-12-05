import MenuCards from "../../pages/MenuCards";
import BreakFast from "../../pages/BreakFast";
import { Link } from "react-router-dom";
import { GiSettingsKnobs } from "react-icons/gi";
import { useState } from "react";
import Starter from "../../pages/Starter";
import Beverages from "../../pages/Beverages";
import Slad from "../../pages/Slad";
import Pasta from "../../pages/Pasta";
import Snacks from "../../pages/Snacks";
import Accompagne from "../../pages/Accompagne";
import MainCourse from "../../pages/MainCourse";
import Chiken from "../../pages/Chiken";
import Beef from "../../pages/Beef";
import Pork from "../../pages/Pork";
import Goat from "../../pages/Goat";
import Fish from "../../pages/Fish";
import Vegetarian from "../../pages/Vegetarian";
const MenuContainer = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpeni, setIsOpeni] = useState(false);
  const toggleDropdowni = () => {
    setIsOpeni(!isOpeni);
  };

  return (
    <>
      <div className="container flex flex-col gap-6 mt-10">
        <ul className=" w-full gap-[0.4rem] items-center cursor-pointer hidden lg:flex">
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
            onClick={toggleDropdown}
            className={
              activeTab === "MainCourse"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link className=" whitespace-nowrap ">Main Course</Link>
            {isOpen && (
              <div className="origin-top-right absolute z-10  mt-[17rem] w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Link
                    onClick={() => setActiveTab("Chiken")}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>Chiken</span>
                  </Link>
                  <Link
                    onClick={() => setActiveTab("Beef")}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>Beef</span>
                  </Link>
                  <Link
                    onClick={() => setActiveTab("Pork")}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>Pork</span>
                  </Link>
                  <Link
                    onClick={() => setActiveTab("Goat")}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>Goat</span>
                  </Link>
                  <Link
                    onClick={() => setActiveTab("Fish")}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>Fish</span>
                  </Link>
                  <Link
                    onClick={() => setActiveTab("Vegetarian")}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>Vegetarian</span>
                  </Link>
                </div>
              </div>
            )}
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
            onClick={() => setActiveTab("starter")}
            className={
              activeTab === "starter"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Starter</Link>
          </li>
          <li
            onClick={() => setActiveTab("Salad")}
            className={
              activeTab === "Salad"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Salad</Link>
          </li>
          <li
            onClick={() => setActiveTab("Pasta")}
            className={
              activeTab === "Pasta"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Pasta</Link>
          </li>
          <li
            onClick={() => setActiveTab("Snacks")}
            className={
              activeTab === "Snacks"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Snacks</Link>
          </li>
          <li
            onClick={() => setActiveTab("Accompagne")}
            className={
              activeTab === "Accompagne"
                ? `rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center`
                : "rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
            }
          >
            <Link>Accompagne</Link>
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
                    toggleDropdowni();
                    // setIsOpen(false);
                  }}
                  className={
                    activeTab === "MainCourse"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link className=" whitespace-nowrap ">Main Course</Link>
                  {isOpeni && (
                    <div className="origin-top-right absolute right-0 z-10  mt-[17rem] w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Link
                          onClick={() => setActiveTab("Chiken")}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <span>Chiken</span>
                        </Link>
                        <Link
                          onClick={() => setActiveTab("Beef")}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <span>Beef</span>
                        </Link>
                        <Link
                          onClick={() => setActiveTab("Pork")}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <span>Pork</span>
                        </Link>
                        <Link
                          onClick={() => setActiveTab("Goat")}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <span>Goat</span>
                        </Link>
                        <Link
                          onClick={() => setActiveTab("Fish")}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <span>Fish</span>
                        </Link>
                        <Link
                          onClick={() => setActiveTab("Vegetarian")}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <span>Vegetarian</span>
                        </Link>
                      </div>
                    </div>
                  )}
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
                    setActiveTab("starter");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "starter"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link>Starter</Link>
                </li>
                <li
                  onClick={() => {
                    setActiveTab("Salad");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "Salad"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link>Salad</Link>
                </li>
                <li
                  onClick={() => {
                    setActiveTab("Pasta");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "Pasta"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link>Pasta</Link>
                </li>
                <li
                  onClick={() => {
                    setActiveTab("Snacks");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "Snacks"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link>Snacks</Link>
                </li>
                <li
                  onClick={() => {
                    setActiveTab("Accompagne");
                    setIsOpen(false);
                  }}
                  className={
                    activeTab === "Accompagne"
                      ? ` font-[600] text-btnColor flex items-center `
                      : " text-black font-[600] flex items-center hover:text-btnColor"
                  }
                >
                  <Link>Accompagne</Link>
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
        {activeTab === "starter" && <Starter />}
        {activeTab === "MainCourse" && <MainCourse />}
        {activeTab === "Salad" && <Slad />}
        {activeTab === "Pasta" && <Pasta />}
        {activeTab === "Snacks" && <Snacks />}
        {activeTab === "Accompagne" && <Accompagne />}
        {activeTab === "Beverages" && <Beverages />}
        {activeTab === "Chiken" && <Chiken />}
        {activeTab === "Beef" && <Beef />}
        {activeTab === "Pork" && <Pork />}
        {activeTab === "Goat" && <Goat />}
        {activeTab === "Fish" && <Fish />}
        {activeTab === "Vegetarian" && <Vegetarian />}
      </div>
    </>
  );
};

export default MenuContainer;
