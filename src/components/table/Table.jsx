import React, { useState } from "react";
import Blog from "../blog/Blog";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useFormik } from "formik";
const Table = () => {
  const [loading, IsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const sendReq = async () => {
    try {
      if (formik.isValid) {
        const formData = {
          DateArrival: formik.values.DateArrival,
          peaple: formik.values.people,
          time: formik.values.time,
          tel: formik.values.tel,
        };
        IsLoading(true);
        const AddRequest = await axios.post(
          "https://blissmothies.onrender.com/blissmothies/reservation/send",

          formData,
          config
        );
        if (AddRequest.status === 201) {
          notify();
          formik.resetForm();
          IsLoading(false);
        }
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

  // formValidation
  const initialValues = {
    DateArrival: "",
    people: "",
    time: "",
    tel: "",
  };
  const validate = (values) => {
    let errors = {};
    const currentDate = new Date();
    const selectedDate = new Date(values.DateArrival);
    currentDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    if (!values.DateArrival) {
      errors.DateArrival = "Date Required";
    } else if (selectedDate < currentDate) {
      errors.DateArrival = "Please select a future date";
    }
    if (!values.people || values.people === "Person") {
      errors.people = "Please select the number of people";
    }
    if (!values.time) {
      errors.time = "Time Required";
    }
    if (!values.tel) {
      errors.tel = "Tel Required";
    }
    return errors;
  };
  const formik = useFormik({
    validate,
    initialValues,
    onSubmit: sendReq,
  });
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
            <form
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Phone
                </label>
                {formik.touched.tel && formik.errors.tel ? (
                  <div className=" text-sm text-red-800 font-extralight ">
                    {formik.errors.tel}
                  </div>
                ) : null}
                <input
                  type="text"
                  placeholder="Phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.tel}
                  id="tel"
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Date
                </label>
                {formik.touched.DateArrival && formik.errors.DateArrival ? (
                  <div className=" text-sm text-red-800 font-extralight ">
                    {formik.errors.DateArrival}
                  </div>
                ) : null}
                <input
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.DateArrival}
                  placeholder="phone"
                  id="DateArrival"
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Time
                </label>
                {formik.touched.time && formik.errors.time ? (
                  <div className=" text-sm text-red-800 font-extralight ">
                    {formik.errors.time}
                  </div>
                ) : null}
                <select
                  name=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.time}
                  id="time"
                  placeholder="phone"
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  w-full"
                >
                  <option className="text-sm font-bold">Time</option>

                  <option>12:00 am</option>
                  <option>12:30 am</option>
                  <option>1:00 am</option>
                  <option>1:30 am</option>
                  <option>2:00 am</option>
                  <option>2:30 am</option>
                  <option>3:00 am</option>
                  <option>3:30 am</option>
                  <option>4:00 am</option>
                  <option>4:30 am</option>
                  <option>5:00 am</option>
                  <option>5:30 am</option>
                  <option>6:00 am</option>
                  <option>6:30 am</option>
                  <option>7:00 am</option>
                  <option>7:30 am</option>
                  <option>8:00 am</option>
                  <option>8:30 am</option>
                  <option>9:00 am</option>
                  <option>9:30 am</option>
                  <option>10:00 am</option>
                  <option>10:30 am</option>
                  <option>11:00 am</option>
                  <option>11:30 am</option>
                  <option>12:00 pm</option>
                  <option>12:30 pm</option>
                  <option>1:00 pm</option>
                  <option>1:30 pm</option>
                  <option>2:00 pm</option>
                  <option>2:30 pm</option>
                  <option>3:00 pm</option>
                  <option>3:30 pm</option>
                  <option>4:00 pm</option>
                  <option>4:30 pm</option>
                  <option>5:00 pm</option>
                  <option>5:30 pm</option>
                  <option>6:00 pm</option>
                  <option>6:30 pm</option>
                  <option>7:00 pm</option>
                  <option>7:30 pm</option>
                  <option>8:00 pm</option>
                  <option>8:30 pm</option>
                  <option>9:00 pm</option>
                  <option>9:30 pm</option>
                  <option>10:00 pm</option>
                  <option>10:30 pm</option>
                  <option>11:00 pm</option>
                  <option>11:30 pm</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Person
                </label>
                {formik.touched.people && formik.errors.people ? (
                  <div className=" text-sm text-red-800 font-extralight ">
                    {formik.errors.people}
                  </div>
                ) : null}
                <select
                  name=""
                  id="people"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.people}
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
              onClick={() => formik.submitForm()}
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
