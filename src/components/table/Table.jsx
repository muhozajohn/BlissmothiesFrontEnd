import React, { useState } from "react";
import Blog from "../blog/Blog";
const Table = () => {
  const [DateArrival, seTDateArrival] = useState("");
  const [DateDeparture, seTDateDeparture] = useState("");
  const [peaple, seTpeaple] = useState("");
  const formData = {
    DateArrival,
    DateDeparture,
    peaple,
  };

  return (
    <div>
      <div className="bgt py-5">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white lg:px-5 py-5 px-5 flex flex-col gap-5 items-center justify-center">
            <h2 className="text-2xl font-bold">Make Reservation</h2>
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Firstname
                </label>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Lastname
                </label>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Date
                </label>
                <input
                  type="date"
                  placeholder="phone"
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Time
                </label>
                <select
                  name=""
                  id=""
                  placeholder="phone"
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  w-full"
                >
                  <option className="text-sm font-bold">Time</option>
                  <option>12:00 am</option>
                  <option>12:30 am</option>
                  <option>1:00 am</option>
                  <option>2:00 am</option>
                  <option>3:30 am</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Person
                </label>
                <select
                  name=""
                  id=""
                  placeholder="phone"
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  w-full"
                >
                  <option className="text-sm font-bold">Person</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>
            </form>
            <div className="btn w-full text-center py-3 cursor-pointer rounded-sm">
              Make Reservation
            </div>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
};

export default Table;
