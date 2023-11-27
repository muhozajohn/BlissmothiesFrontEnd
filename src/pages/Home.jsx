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
const Home = () => {
  const [loading, IsLoading] = useState(false);
  const [DateArrival, seTDateArrival] = useState("");
  const [DateDeparture, seTDateDeparture] = useState("");
  const [peaple, seTpeaple] = useState("");
  const formData = {
    DateArrival,
    DateDeparture,
    peaple,
  };

  const sendReq = async () => {
    try {
      IsLoading(true);
      const AddRequest = await axios.post(
        "https://blissmothies.onrender.com/blissmothies/reservation/send",
        formData
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
    toast.error("Try Again Please!", {
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
            <div className="  rounded-xl lg:mt-[11rem] md:mt-[10rem] mt-[5rem] mb-8 w-full lg:w-[80%] mx-auto bg-white flex flex-col lg:flex-row items-center lg:flex gap-8 lg:justify-between px-5 py-5">
              <div className="grid grid-cols-1 w-full lg:w-auto  lg:grid-cols-3 gap-5">
                <div className=" bg-textColor px-4 py-1 w-full lg:w-[13vw] rounded-xl flex flex-col items-left justify-between">
                  <p className="text-sm font-semibold">Date Arrival </p>

                  <input
                    value={DateArrival}
                    onChange={(e) => seTDateArrival(e.target.value)}
                    type="date"
                    className="w-full h-full bg-transparent outline-none active:outline-none text-xs"
                  />
                </div>
                <div className=" bg-textColor px-4 py-1 w-full lg:w-[13vw] rounded-xl flex flex-col items-left justify-between">
                  <p className="text-sm font-semibold">Date Departure </p>

                  <input
                    value={DateDeparture}
                    onChange={(e) => seTDateDeparture(e.target.value)}
                    type="date"
                    className="w-full h-full bg-transparent outline-none active:outline-none text-xs"
                  />
                </div>
                <div className=" bg-textColor px-4 py-1 w-full lg:w-[13vw] rounded-xl flex flex-col items-left justify-between">
                  <p className="flex gap-1 text-sm font-semibold">
                    <FaUser /> #People
                  </p>
                  <select
                    name=""
                    id=""
                    value={peaple}
                    onChange={(e) => seTpeaple(e.target.value)}
                    className=" w-full h-full bg-transparent outline-none active:outline-none text-xs"
                  >
                    <option># of Person</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
              </div>

              <div
                className=" bg-btnColor flex items-center w-full justify-center cursor-pointer text-white py-3  lg:w-[13vw] rounded-xl font-[600] "
                onClick={sendReq}
              >
                {loading ? (
                  <PulseLoader size={5} color={"#ffffff"} loading={loading} />
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
