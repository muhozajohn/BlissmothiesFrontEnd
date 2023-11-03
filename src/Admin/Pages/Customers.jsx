import React, { useState } from "react";
import Member from "../components/Table/Member";
import Admin from "../components/Table/Admin";

const Customers = () => {
 const [activeTab, setActiveTab] = useState("customer");
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between px-2 py-2 ">
        <h2>#Members</h2>
        <ul className="flex  gap-2 items-center">
          <li
            className="px-2 py-2 bg-slate-300 cursor-pointer text-white"
            onClick={() => setActiveTab("customer")}
          >
            Customer
          </li>
          <li
            className="px-2 py-2 bg-slate-300 cursor-pointer text-white"
            onClick={() => setActiveTab("Admin")}
          >
            Admin
          </li>
        </ul>
      </div>

      {activeTab === "customer" && <Member />}
      {activeTab === "Admin" && <Admin />}
    </div>
  );
};

export default Customers;
