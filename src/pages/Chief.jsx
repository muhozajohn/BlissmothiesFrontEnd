import chiefa from "../assets/images/chiefa.jpg";
import chiefb from "../assets/images/chiefb.jpg";
import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const Chief = () => {
  return (
    // <section>
      <div className="container flex flex-col gap-6">
        <h2 className="font-[700] text-sm">
          Our chef cooks the most delicious food for you
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-1 mt-10">
          <div>
            <h2 className="text-lg font-bold md:text-xl md:font-extrabold">
              Chief Food Master{" "}
            </h2>
            <small className="text-btnColor text-[20px] md:text-sm font-[500]">
              @kwizera Emmy
            </small>
            <div className="flex gap-2 items-center relative">
              <img
                src={chiefb}
                alt=""
                className="lg:w-[20vw] w-1/2 rounded-xl  lg:mt-0 mt-20 "
              />
              <img
                src={chiefa}
                alt=""
                className=" lg:mt-20 lg:w-[20vw] w-1/2  rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="text-sm font-[600]">
              Our chef cooks the most delicious food for you
            </h5>
            <p className="leading-7 font-[400]">
              Join us for a farm-to-table adventure, where fresh, organic
              ingredients elevate every bite. Discover homemade comfort with a
              touch of artisanal flair. Get ready to savor homemade goodness
              with a zesty twist, all in a welcoming ambiance. Your taste buds
              are in for a delightful ride!
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[20px] font-[400] ">Opening Days: </span>
              Mon - San 8 AM - 12 PM
            </div>
            <div className="flex px-5 py-3 w-full rounded-xl bg-bgColor flex-col gap-5 text-black">
              <h1 className="font-[600] text-xl text-btnColor md:text-3xl md:font-extrabold">
                Getin Touch
              </h1>
              <p className="flex flex-col lg:flex-row  lg:justify-between md:flex-row md:justify-between">
                <span className="font-[300] text-xl lg:text-lg md:text-2xl md:font-bold">
                  Tel:{" "}
                </span>
                <span className="font-[200] text-sm lg:text-sm leading-8 md:text-xl">
                  +250 785 161 508
                </span>
              </p>
              <p className="flex flex-col lg:flex-row  lg:justify-between md:flex-row md:justify-between">
                <span className="font-[300] text-xl lg:text-lg md:text-2xl md:font-bold">
                  Email:{" "}
                </span>
                <span className="font-[200] text-[17px] lg:text-sm leading-8 md:text-xl">
                  kellerblissfullsmoothies@outlook.com
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-lg font-[800]">Chef Media</h2>
              <div className="flex items-center lg:gap-6 gap-2">
                <div className="flex items-center justify-center  text-btnColor px-1 py-2 bg-overLayColor h-12 w-12 rounded-full cursor-pointer hover:bg-btnColor hover:text-white">
                  <FaInstagram className="font-[800] text-2xl " />
                </div>
                <div className="flex items-center justify-center text-btnColor  px-1 py-2 bg-overLayColor h-12 w-12 rounded-full cursor-pointer hover:bg-btnColor hover:text-white">
                  <FaTwitter className="font-[800] text-2xl " />
                </div>
                <div className="flex items-center justify-center text-btnColor  px-1 py-2 bg-overLayColor h-12 w-12 rounded-full cursor-pointer hover:bg-btnColor hover:text-white">
                  <FaFacebook className="font-[800] text-2xl " />
                </div>
                <div className="flex items-center justify-center text-btnColor px-1 py-2 bg-overLayColor h-12 w-12 rounded-full cursor-pointer hover:bg-btnColor hover:text-white">
                  <FaYoutube className="font-[800] text-2xl " />
                </div>
                <div className="flex items-center justify-center text-btnColor  px-1 py-2 bg-overLayColor h-12 w-12 rounded-full cursor-pointer hover:bg-btnColor hover:text-white">
                  <FaLinkedin className="font-[800] text-2xl " />
                </div>
                <div className="flex items-center justify-center text-btnColor  px-1 py-2 bg-overLayColor h-12 w-12 rounded-full cursor-pointer hover:bg-btnColor hover:text-white">
                  <FaWhatsapp className="font-[800] text-2xl " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </section>
  );
};

export default Chief;
