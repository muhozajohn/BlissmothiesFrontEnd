import React from "react";
import Blog from "../blog/Blog";
const Table = () => {
  return (
    <div>
      <div className="bgt py-5">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white lg:px-5 py-5 px-5 flex flex-col gap-5 items-center justify-center">
            <h2 className="text-2xl font-bold">Make Reservation</h2>
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Firstname
                </label>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="rounded-xl border border-black px-3 py-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Lastname
                </label>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="rounded-xl border border-black px-3 py-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="phone"
                  className="rounded-xl border border-black px-3 py-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Date
                </label>
                <input
                  type="date"
                  placeholder="phone"
                  className="rounded-xl border border-black px-3 py-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Time
                </label>
                <select
                  name=""
                  id=""
                  placeholder="phone"
                  className="rounded-xl border border-black px-3 py-3 w-full"
                >
                  <option className="text-xl font-bold">Time</option>
                  <option>12:00 am</option>
                  <option>12:30 am</option>
                  <option>1:00 am</option>
                  <option>2:00 am</option>
                  <option>3:30 am</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Person
                </label>
                {/* <input type="date" placeholder="phone" className="rounded-xl border border-black px-3 py-3 w-full" /> */}
                <select
                  name=""
                  id=""
                  placeholder="phone"
                  className="rounded-xl border border-black px-3 py-3 w-full"
                >
                  <option className="text-xl font-bold">Person</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>
            </form>
            <div className="btn py-4 cursor-pointer">Make Reservation</div>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
};

export default Table;
