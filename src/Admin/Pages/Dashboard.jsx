import React from "react";
import WelcomCard from "./WelcomCard";
const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-between gap-2">
      <div className="w-full">
        <WelcomCard />
      </div>
      <div className="w-full flex flex-col gap-3 lg:w-[500px] shadow-md py-3 px-2">
        <div className="flex items-center justify-between">
          <h2>Sales by District</h2>
          <p>See more</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2041615.6317652569!2d28.560627062552978!3d-1.9403937215968883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29654e73840e3%3A0x7490b026cbcca103!2sRwanda!5e0!3m2!1sen!2srw!4v1698423134037!5m2!1sen!2srw"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col gap-3">
          <article className="flex items-center justify-between">
            <div className="flex  gap-2 items-center">
              <p className=" py-1 px-1 bg-btnColor "></p>
              <span className="text-sm text-gray-700">Kicukiro</span>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-400">2470 people</p>
              <span className="text-sm text-gray-800 font-extrabold">
                13.5k
              </span>
            </div>
          </article>
          <article className="flex items-center justify-between">
            <div className="flex  gap-2 items-center">
              <p className=" py-1 px-1 bg-green-500 "></p>
              <span className="text-sm text-gray-700">Gasabo</span>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-400">2370 people</p>
              <span className="text-sm text-gray-800 font-extrabold">
                9.5k
              </span>
            </div>
          </article>
          <article className="flex items-center justify-between">
            <div className="flex  gap-2 items-center">
              <p className=" py-1 px-1 bg-blue-500 "></p>
              <span className="text-sm text-gray-700">Nyarugenge</span>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-400">270 people</p>
              <span className="text-sm text-gray-800 font-extrabold">
                8.5k
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
