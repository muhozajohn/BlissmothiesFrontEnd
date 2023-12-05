import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Deserts from "./Deserts";
import Testimonial from "../components/testmonials/Testimonial";
import Events from "./Event";
import Book from "./Book";
import MenuContainer from "../components/menu/MenuContainer";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

const Home = () => {
  const [loading, IsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const sendReq = async () => {
    const formData = {
      DateArrival: formik.values.DateArrival,
      DateDeparture: formik.values.DateDeparture,
      peaple: formik.values.peaple,
    };
    try {
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

  const initialValues = {
    DateArrival: "",
    DateDeparture: "",
    peaple: "",
  };

  const validate = (values) => {
    let errors = {};

    if (!values.DateArrival) {
      errors.DateArrival = "Date Arrival is required";
    }

    if (!values.DateDeparture) {
      errors.DateDeparture = "Date Departure is required";
    }

    if (!values.peaple || values.peaple === "# of Person") {
      errors.peaple = "Please select the number of people";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: sendReq, // Assuming sendReq is the function to handle form submission
  });
  return (
    <>
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
      <nav className="header h-screen ">
        <div className=" h-screen w-full bg-[rgba(0,0,0,0.8)]">
          <div className="container text-white">
            <div className="h-[10vh] lg:h-[25vh]"></div>
            <div className=" text-center">
              <h1 className=" font-bold lg:text-2xl md:text-[18px] md:leading-8 leading-8 text-btnColor lg:text-white">
                Treat Yourself
              </h1>
              <h2 className=" leading-5 mt-3 text-[18px] lg:text-2xl md:text-sm">
                Enjoy your health delicious meal
              </h2>
              <h3 className=" leading-9 mt-2 text-[18px] lg:text-4xl">
                We don’t cook just we threat you to delicacies....{" "}
              </h3>
              <p className="lg:w-[70%] w-full mx-auto leading-8 lg:text-lg mt-5 text-[12px]">
                Together creeping heaven upon third dominion be upon won't
                darkness rule land behold it created good saw after she'd Our
                set living. Signs midst dominion creepeth morning
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center">
              <Link to="/about">
                <button className="btn">Explore More</button>
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="rounded-xl lg:mt-[11rem] md:mt-[10rem] mt-[5rem] mb-8 w-full lg:w-[80%] mx-auto bg-white flex flex-col lg:flex-row items-center lg:flex gap-8 lg:justify-between px-5 py-5">
              <div className="grid grid-cols-1 w-full lg:w-auto  lg:grid-cols-3 gap-5">
                <div className="bg-textColor px-4 py-1 w-full lg:w-[13vw] rounded-xl flex flex-col items-left justify-between">
                  <p className="text-sm font-semibold">Date Arrival </p>
                  <input
                    name="DateArrival"
                    value={formik.values.DateArrival}
                    onChange={formik.handleChange}
                    type="date"
                    className="w-full h-full bg-transparent outline-none active:outline-none text-xs"
                  />
                  {formik.errors.DateArrival && (
                    <div className="text-red-800 font-extralight text-sm">
                      {formik.errors.DateArrival}
                    </div>
                  )}
                </div>

                <div className="bg-textColor px-4 py-1 w-full lg:w-[13vw] rounded-xl flex flex-col items-left justify-between">
                  <p className="text-sm font-semibold">Date Departure </p>
                  <input
                    name="DateDeparture"
                    value={formik.values.DateDeparture}
                    onChange={formik.handleChange}
                    type="date"
                    className="w-full h-full bg-transparent outline-none active:outline-none text-xs"
                  />
                  {formik.errors.DateDeparture && (
                    <div className="text-red-800 font-extralight text-sm">
                      {formik.errors.DateDeparture}
                    </div>
                  )}
                </div>

                <div className="bg-textColor px-4 py-1 w-full lg:w-[13vw] rounded-xl flex flex-col items-left justify-between">
                  <p className="flex gap-1 text-sm font-semibold">
                    <FaUser /> #People
                  </p>
                  <select
                    name="peaple"
                    value={formik.values.peaple}
                    onChange={formik.handleChange}
                    className="w-full h-full bg-transparent outline-none active:outline-none text-xs"
                  >
                    <option># of Person</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                  {formik.errors.peaple && (
                    <div className="text-red-800 font-extralight text-sm">
                      {formik.errors.peaple}
                    </div>
                  )}
                </div>
              </div>

              <div
                className="bg-btnColor flex items-center w-full justify-center cursor-pointer text-white py-3  lg:w-[13vw] rounded-xl font-[600] "
                onClick={formik.handleSubmit}
              >
                {formik.isSubmitting ? (
                  <PulseLoader
                    size={5}
                    color={"#ffffff"}
                    loading={formik.isSubmitting}
                  />
                ) : (
                  "Send Request"
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="mt-[4rem] lg:mt-3">
        <div className="container flex flex-col gap-5">
          <div className="mt-16">
            <h2 className="text-lg font-[800] text-center ">
              Blissfull Smoothies
            </h2>
          </div>
          <div className=" flex flex-col gap-3 lg:w-[70%] w-full">
            <h1 className="text-lg font-[700]">Our Popular Menu</h1>
            <p>
              Indulge in a delightful culinary experience at
              Keller’sblissmothies, where every dish and beverage is crafted
              with passion and precision. Our menu is thoughtfully designed to
              cater to a range of tastes and preferences, ensuring there's
              something for everyone to enjoy. Here's a glimpse into our popular
              offerings:
            </p>
          </div>
        </div>
        <MenuContainer />
      </section>
      <Deserts />
      <Testimonial />
      <Events />
      <Book />
    </>
  );
};

export default Home;
