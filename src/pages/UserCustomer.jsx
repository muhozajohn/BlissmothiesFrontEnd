import { useState } from "react";
import Profile from "../assets/images/a.jpg";

const UserCustomer = () => {
  const value = 1;
  const [itemCount, setItemCount] = useState(value);
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="px-5 py-5 flex flex-col gap-6 lg:flex-row  bg-white rounded-lg">
            <img src={Profile} alt="" className="rounded-xl w-full lg:w-1/2" />

            <div className="mt-4">
              <p className=" text-sm font-[600] ">Keller Emmy</p>
              <p className=" text-sm ">keller@gmail.com</p>
              <p className="text-sm ">Male</p>
            </div>
          </div>
          <div className="px-5 py-5 bg-white rounded-lg mt-4 mb-4">
            <p className="text-sm font-[500]">Leave Your Feedback About Our Products</p>
            <div>
              <form action="" className="flex flex-col gap-3">
                <label className="mt-4 text-sm  font-[400]">Feedback</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  "
                ></textarea>
                <input type="button" value="Submit" className="btn bg-black cursor-pointer"/>
              </form>
            </div>
          </div>
        </div>
        <div className="px-5 py-5 flex flex-col gap-6  bg-white rounded-lg h-full ">
          <div className="text-lg font-[800] ">CART Items</div>
          <div className="flex  lg:flex-row justify-between ">
            <div className="flex gap-6">
              <img src={Profile} alt="" className="rounded-xl  w-1/5" />
              <div className="flex flex-col">
                <p className="text-sm font-[700]">Jinja Tea</p>
                <small className=" mt-[-1] text-[12px]">Add More Items</small>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setItemCount((prev) => prev - 1)}
                    className="bg-black text-white font-extrabold px-2"
                  >
                    -
                  </button>
                  <h1 className="text-lg font-[600]">{itemCount}</h1>
                  <button
                    onClick={() => setItemCount((prev) => prev + 1)}
                    className="bg-orange-600 text-white font-extrabold px-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-ld font-[600]">$200</h1>
              <span className="text-sm font-bold text-red-700 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
          <div className="flex  lg:flex-row justify-between ">
            <div className="flex gap-6">
              <img src={Profile} alt="" className="rounded-xl  w-1/5" />
              <div className="flex flex-col">
                <p className="text-sm font-[700]">Jinja Tea</p>
                <small className=" mt-[-1] text-[12px]">Add More Items</small>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setItemCount((prev) => prev - 1)}
                    className="bg-black text-white font-extrabold px-2"
                  >
                    -
                  </button>
                  <h1 className="text-lg font-[600]">{itemCount}</h1>
                  <button
                    onClick={() => setItemCount((prev) => prev + 1)}
                    className="bg-orange-600 text-white font-extrabold px-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-ld font-[600]">$200</h1>
              <span className="text-sm font-bold text-red-700 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
          <div className="flex  lg:flex-row justify-between ">
            <div className="flex gap-6">
              <img src={Profile} alt="" className="rounded-xl  w-1/5" />
              <div className="flex flex-col">
                <p className="text-sm font-[700]">Jinja Tea</p>
                <small className=" mt-[-1] text-[12px]">Add More Items</small>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setItemCount((prev) => prev - 1)}
                    className="bg-black text-white font-extrabold px-2"
                  >
                    -
                  </button>
                  <h1 className="text-lg font-[600]">{itemCount}</h1>
                  <button
                    onClick={() => setItemCount((prev) => prev + 1)}
                    className="bg-orange-600 text-white font-extrabold px-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-ld font-[600]">$200</h1>
              <span className="text-sm font-bold text-red-700 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
          <div className="flex  lg:flex-row justify-between ">
            <div className="flex gap-6">
              <img src={Profile} alt="" className="rounded-xl  w-1/5" />
              <div className="flex flex-col">
                <p className="text-sm font-[700]">Jinja Tea</p>
                <small className=" mt-[-1] text-[12px]">Add More Items</small>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setItemCount((prev) => prev - 1)}
                    className="bg-black text-white font-extrabold px-2"
                  >
                    -
                  </button>
                  <h1 className="text-lg font-[600]">{itemCount}</h1>
                  <button
                    onClick={() => setItemCount((prev) => prev + 1)}
                    className="bg-orange-600 text-white font-extrabold px-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-ld font-[600]">$200</h1>
              <span className="text-sm font-bold text-red-700 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        
         
          <hr />
          <div className="flex  lg:flex-row justify-between ">
            <div>
              <p className=" text-gray-600 ">SubTotal: </p>
              <p className=" text-gray-600 ">Shiping: </p>
              <p className=" text-gray-600 ">Total: </p>
            </div>
            <div>
              <p>$600 </p>
              <p>%0 </p>
              <p>$600 </p>
            </div>
          </div>
          <div className="btn bg-black text-center cursor-pointer">ChekOut</div>
        </div>
      </div>
    </section>
  );
};

export default UserCustomer;
