import axios from "axios";
import { useEffect, useState } from "react";
import OrdersTable from "../components/Table/OrdersTable";
import PulseLoader from "react-spinners/PulseLoader";
import { BsFilterRight } from "react-icons/bs";
import { Navigate } from "react-router-dom";
const Orders = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  const [cart, SetCart] = useState([]);
  console.log("Carts", cart);
  const [loading, isLoading] = useState(false);
  const [amout, setTotalAmount] = useState();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const getCart = async () => {
      try {
        isLoading(true);
        const getAllCart = await axios.get(
          `https://blissmothies.onrender.com/blissmothies/cart/Readcart`,
          config
        );
        const response = await getAllCart.data.data;
        if (response) {
          SetCart(response);
          let amount = 0;
          response.forEach((item) => {
            amount += parseFloat(item.totalPrice);
          });
          setTotalAmount(amount);
          isLoading(false);
        }
      } catch (error) {
        console.log("Failed to Get Data", error);
        isLoading(false);
      }
    };
    getCart();
  }, []);

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
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light cursor-pointer">
                <thead className="border-b font-medium dark:border-neutral-500  hover:bg-neutral-800 hover:text-white">
                  <tr>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      #PID
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Customer
                    </th>
                  
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Total Items
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Delivery Date
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Delivery Time
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Created On
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Amount
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Status
                    </th>
                  </tr>
                </thead>
                {cart.length ? (
                  cart.map((item, index) => (
                    <OrdersTable key={index} orderItem={item} index={index} />
                  ))
                ) : (
                  <div className=" mt-5 flex justify-center items-center w-full text-center  ">
                    <PulseLoader color="#F06C05" loading={loading} size={10} />
                  </div>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
