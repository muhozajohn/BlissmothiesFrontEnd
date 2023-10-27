import React from "react";
import Welcome from "./Welcome";

const WelcomCard = () => {
  const dataz = [
    {
      title: "Revenue",
      content: "+7,4% Since last Month",
      number: 200,
    },
    {
      title: "Orders",
      content: "+10.4% Since last Month",
      number: 20800,
    },
    {
      title: "Customers",
      content: "+4.7% Since last Month",
      number: 370,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
      {dataz.map((item, index) => (
        <Welcome
          key={index}
          title={item.title}
          content={item.content}
          number={item.number}
        />
      ))}
    </div>
  );
};

export default WelcomCard;
