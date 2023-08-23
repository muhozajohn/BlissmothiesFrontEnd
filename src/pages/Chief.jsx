import chiefa from "../assets/images/chiefa.jpg";
import chiefb from "../assets/images/chiefb.jpg";

const Chief = () => {
  return (
    <section>
      <div className="container flex flex-col gap-6">
        <h2 className="font-[800] text-xl">
          Our chef cooks the most delicious food for you
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-2 mt-10">
          <div>
            <h2 className="text-lg font-bold">Chief Food Master </h2>
            <small className="text-btnColor text-[13px] font-[500]">
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
            <h5 className="text-xl font-semibold">
              Our chef cooks the most delicious food for you
            </h5>
            <p className="leading-8">
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
            <div className="flex px-5 py-3 w-full rounded-xl bg-white flex-col gap-5 text-black">
              <h1 className="font-[600] text-xl text-btnColor">Getin Touch</h1>
              <p className="flex justify-between items-center">
                <span className="font-[500] text-xl">Tel: </span>
                <span className="font-[200] text-sm">+250 785 161 508</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-[500] text-xl">Email: </span>
                <span className="font-[200] text-sm">
                  kellerblissfullsmoothies@outlook.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chief;
