import React from "react";
import Welcome from "./Welcome";

const WelcomCard = () => {
  const dataz = [
    {
      title: "Mugabo",
      content: "Umugabo Wimishinga",
    },
    {
      title: "Gahembe",
      content: "Umugabo Wimishinga",
    },
    {
      title: "Gahembe",
      content: "Umugabo Wimishinga",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {dataz.map((item, index) => (
        <Welcome key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default WelcomCard;
