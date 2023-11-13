import logo from "../../../assets/images/logok.png";
import { SiMinutemailer } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdNotificationsActive } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import DashLink from "../../../assets/dashLinks";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpeni, setIsOpeni] = useState(false);
  const IPICA = localStorage.getItem("image");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdowni = () => {
    setIsOpeni(!isOpeni);
  };
  return (
    <div>
      <nav className="flex justify-between items-center gap-2 lg:gap-6 px-2 py-3  bg-white fixed w-screen z-40 shadow-lg ">
        <div className="lg:hidden relative inline-block text-left">
          <div>
            <button
              onClick={toggleDropdowni}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-300 rounded-md focus:none"
            >
              <GiHamburgerMenu className="font-[700] text-lg" />
            </button>
          </div>
          {isOpeni && (
            <div className="origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <ul className="mt-3 flex flex-col">
                  {DashLink.map((link, index) => (
                    <li key={index} className="hover:bg-slate-100 px-2 py-2">
                      <NavLink
                        onClick={(prev) => !prev(isOpeni)}
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? " text-[16px] font-[600]  leading-7 text-btnColor flex gap-3 items-center "
                            : " text-[16px] font-[500]  leading-7 text-black hover:text-btnColor flex gap-3 items-center "
                        }
                      >
                        {link.icon} {link.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="hidden lg:flex  items-center w-[200px]">
          <Link to="/Dashboard">
            <img src={logo} alt="" className=" h-[50px] " />
          </Link>
          <p className=" text-sm font-[700] ">Blissmothies</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="hidden md:block lg:block text-sm font-[700] ">
            Dashboard
          </p>
          <p className="block lg:hidden md:hidden "></p>
          <div className="flex gap-[5px] lg:gap-2 items-center">
            <div className="flex items-center">
              <span className=" cursor-pointer inline-flex justify-center w-fit px-2 lg:px-4 py-2 text-sm font-medium text-black hover:text-white hover:bg-btnColor rounded-md focus:none">
                <FiSearch className=" cursor-pointer text-lg font-extrabold " />
              </span>
              <input
                type="text"
                placeholder="Search here......"
                className="focus:none px-2 py-2 w-full outline-none "
              />
            </div>
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="inline-flex justify-center w-fit px-2 lg:px-4 py-2 text-sm font-medium text-white bg-btnColor rounded-md focus:none"
                >
                  <MdNotificationsActive className="font-[700] text-lg" />
                </button>
              </div>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link
                      to="Emails"
                      onClick={(prev) => !prev(isOpen)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <SiMinutemailer />
                      <span>Emails</span>
                    </Link>
                    <Link
                      to="Orders"
                      onClick={(prev) => !prev(isOpen)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaCartPlus />
                      <span>Orders</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/Settings">
              <img src={IPICA} alt="" className=" h-9 w-9 rounded-full " />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
