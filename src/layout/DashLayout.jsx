import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import Nav from "../Admin/components/Nav/Nav";
import DashLink from "../assets/dashLinks";
const DashLayout = () => {
  return (
    <div>
      <Nav />
      <div className=" py-3 bg-white flex h-screen">
        <div className=" bg-white px-4 py-2 lg:w-[200px] h-full fixed mt-[60px] shadow-lg hidden lg:block ">
          <ul className="mt-3 flex flex-col">
            {DashLink.map((link, index) => (
              <li key={index} className="hover:bg-slate-100 px-2 py-2">
                <NavLink
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
        <div className="w-screen lg:ml-[202px] mt-[60px] px-2 py-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
