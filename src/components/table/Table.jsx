import React, { useState } from "react";
import Blog from "../blog/Blog";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Table = () => {
  const [loading, IsLoading] = useState(false);
  const [DateArrival, seTDateArrival] = useState("");
  const [peaple, seTpeaple] = useState("");
  const [time, seTtime] = useState("");
  const [tel, seTtel] = useState("");
  const formData = {
    DateArrival,
    peaple,
    time,
    tel,
  };
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const sendReq = async () => {
    try {
      IsLoading(true);
      const AddRequest = await axios.post(
        "https://blissmothies.onrender.com/blissmothies/reservation/send",

        formData,
        config
      );
      if (AddRequest.status === 201) {
        notify();
        IsLoading(false);
      }
    } catch (error) {
      console.log("Failed to request", error);
      eror();
      IsLoading(false);
    }
  };

  const notify = () => {
    toast.success("Request Sent Succesfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const eror = () => {
    toast.error("First Login Please!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
                  value={tel}
                  onChange={(e) => seTtel(e.target.value)}
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Date
                </label>
                <input
                  type="date"
                  value={DateArrival}
                  onChange={(e) => seTDateArrival(e.target.value)}
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
                  value={time}
                  onChange={(e) => seTtime(e.target.value)}
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
                  value={peaple}
                  onChange={(e) => seTpeaple(e.target.value)}
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
            <div
              className="btn w-full text-center py-3 cursor-pointer rounded-sm"
              onClick={sendReq}
            >
              {loading ? (
                <PulseLoader size={5} color={"#ffffff"} loading={loading} />
              ) : (
                "Make Reservation"
              )}
            </div>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
};

export default Table;
