import React from "react";
import Event from "../../pages/Event";
const Events = () => {
  return (
    <div>
      <div className=" w-full bgg bg-cover bg-no-repeat bg-center h-[40vh]   top-0 z-[-10] rounded-b-xl">
        <div className=" w-full h-full rounded-b-3xl flex justify-center items-center">
          <h1 className="text-white font-semibold text-5xl">Events</h1>
        </div>
      </div>
      <Event />
    </div>
  );
};

export default Events;
