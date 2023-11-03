import React from "react";
import OrdersTable from "../components/Table/OrdersTable";
import { BsFilterRight } from "react-icons/bs";
const Orders = () => {
  return (
    <div>
      <div className="px-2 flex items-center justify-between">
        <h2 className="text-lg font-bold">#Orders</h2>
        <div className="py-2 px-2 rounded-md bg-slate-200 cursor-pointer text-xs flex items-center gap-2 font-bold">
          <select
            name=""
            id=""
            className="bg-transparent outline-none focus:bg-none px-2 rounded-md bg-slate-200 cursor-pointer text-xs"
          >
            <option>All</option>
            <option>New</option>
            <option>Pending</option>
            <option>InProgress</option>
            <option>Completed</option>
          </select>
          <BsFilterRight className=" text-btnColor font-extrabold text-sm " />
        </div>
      </div>
      <OrdersTable />
    </div>
  );
};

export default Orders;
