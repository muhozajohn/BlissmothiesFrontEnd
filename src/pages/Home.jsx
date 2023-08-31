import { NavLink, Link } from "react-router-dom";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import menuLiks from "../assets/menuLinks";
import MenuCards from "./MenuCards";
import Chief from "./Chief";
import Deserts from "./Deserts";
import Testimonial from "../components/testmonials/Testimonial";
import Events from "./Event";
import Book from "./Book";
const Home = () => {
  return (
    <>
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
            <div className="  rounded-xl lg:mt-[10rem] md:mt-[10rem] mt-[5rem] mb-8 w-full lg:w-[80%] mx-auto bg-white flex flex-col lg:flex-row items-center lg:flex gap-8 lg:justify-between px-5 py-7">
              <div className="grid grid-cols-1 w-full lg:w-auto  lg:grid-cols-3 gap-5">
                <div className=" bg-textColor px-4 py-4 w-full lg:w-[13vw] rounded-xl flex items-center justify-between">
                  <p className="text-sm">Date Arrival </p>
                  <p className="flex">
                    <input
                      type="date"
                      className="w-full lg:w-5 bg-transparent "
                    />
                  </p>
                </div>
                <div className=" bg-textColor px-4 py-4 w-full lg:w-[13vw] rounded-xl flex items-center justify-between">
                  <p className="text-sm">Date Departure </p>
                  <p className="flex">
                    <input
                      type="date"
                      className="w-full lg:w-5 bg-transparent "
                    />
                  </p>
                </div>
                <div className=" bg-textColor px-4 py-4 w-full lg:w-[13vw] rounded-xl flex items-center justify-between">
                  <select
                    name=""
                    id=""
                    className=" bg-transparent border-collapse focus:border-none w-full "
                  >
                    <option># of Person</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                  <p>
                    <FaUser />
                  </p>
                </div>
              </div>

              <div className=" bg-btnColor flex items-center w-full justify-center cursor-pointer text-white py-4  lg:w-[13vw] rounded-xl font-[600] ">
                Send Request
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
          <div className="w-full lg:w-[70%] grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6 ">
            {menuLiks.map((link, index) => {
              return (
                <NavLink
                  to={link.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive
                      ? " rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center"
                      : " rounded-xl bg-transparent border border-btnColor text-black px-[30px] py-[10px] font-[600] flex items-center justify-center "
                  }
                  // className="rounded-xl bg-btnColor px-[30px] py-[10px] font-[600] text-white flex items-center justify-center"
                >
                  {link.display}
                </NavLink>
              );
            })}
          </div>
          <MenuCards />
        </div>
      </section>
      <Chief />
      <Deserts />
      <Testimonial />
      <Events />
      <Book />
    </>
  );
};

export default Home;
