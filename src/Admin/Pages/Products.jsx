import React from "react";
import ProductsTable from "../components/Table/ProductsTable";
import { BsFilterRight } from "react-icons/bs";
import NewProduct from "../components/modals/newProduct";

const Products = () => {
  return (
    <div>
      <div className="px-1 flex items-center justify-between">
        <h2 className="text-lg font-bold">#Products</h2>
        <div className="py-2 px-2 rounded-md bg-slate-200 cursor-pointer text-xs flex items-center gap-2 font-bold">
          <select
            name=""
            id=""
            className="bg-transparent outline-none focus:bg-none px-2 rounded-md bg-slate-200 cursor-pointer text-xs"
          >
            <option>All</option>
            <option>Breakfast</option>
            <option>Launch</option>
            <option>Desserts</option>
            <option>Dinner</option>
            <option>Beverages</option>
          </select>
          <BsFilterRight className=" text-btnColor font-extrabold text-sm " />
        </div>
      </div>
      <ProductsTable />
      <NewProduct />
    </div>
  );
};

export default Products;
