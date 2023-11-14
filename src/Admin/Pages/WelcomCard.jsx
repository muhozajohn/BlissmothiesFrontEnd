import React from "react";
import Welcome from "./Welcome";
import { MdEmail, MdPointOfSale, MdTaxiAlert } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BsCircle } from "react-icons/bs";
import { Navigate } from "react-router-dom";
const WelcomCard = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  const dataz = [
    {
      number: "200",
      icon: <MdEmail />,
      iconP: <BsCircle />,
      content: "Sent Emails",
    },
    {
      number: 20800,
      icon: <IoIosPeople />,
      iconP: <BsCircle />,
      content: "Clients",
    },
    {
      number: 320,
      icon: <MdPointOfSale />,
      iconP: <BsCircle />,
      content: "Sales Obtained",
    },
    {
      number: 3700,
      icon: <MdTaxiAlert />,
      iconP: <BsCircle />,
      content: "Traffic Recieved",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
      {dataz.map((item, index) => (
        <Welcome
          key={index}
          icon={item.icon}
          number={item.number}
          content={item.content}
          iconP={item.iconP}
        />
      ))}
    </div>
  );
};

export default WelcomCard;
