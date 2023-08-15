import React from "react";

const Header = () => {
  return (
    <>
      <header className=" bg-slate-500 ">
        <div className="container flex justify-between items-center h-[100px]">
          <div className="w-1/3"> Logo</div>
          <ul className="flex gap-8 items-center">
            <li>Home</li>
            <li>Service</li>
            <li>About </li>
            <li>Login</li>
          </ul>
          <div>Login</div>
        </div>
      </header>
    </>
  );
};

export default Header;
