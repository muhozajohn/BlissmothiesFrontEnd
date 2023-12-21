import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import MenuCards from "./MenuCards";
import { useEffect, useState } from "react";
import axios from "axios";
const SingleCard = () => {
  const param = useParams();
  const [menu, setMenu] = useState({});
  console.log("iz menu", menu);
  const [loading, setIsloading] = useState(false);
  const id = param.id;
  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsloading(true);
        const getMenu = await axios.get(
          `https://blissmothies.onrender.com/blissmothies/menu/read/${id}`
        );
        const response = await getMenu.data.data;
        setMenu(response);
        setIsloading(false);
      } catch (error) {
        console.log("Failed to Get Menu", error);
        setIsloading(false);
      }
    };
    getProduct();
  }, [id]);

  const userP = localStorage.getItem("userP");
  return (
    <section>
      <div className="container flex flex-col gap-2">
        <h1 className=" text-center font-bold text-lg">Product Description</h1>
        <h2 className=" text-lg font-medium mt-8">
          {" "}
          <span className="  font-semibold ">Product  </span>{">"} {menu?.category} {">"} {menu?.title}
        </h2>
        <div className=" flex flex-col lg:flex-row gap-6 items-start ">
          <div className="w-full lg:w-1/2">
            <img
              src={menu?.image}
              alt=""
              className=" rounded-lg w-full h-full "
            />
          </div>
          <div className="w-full lg:w-1/2  rounded-lg flex flex-col gap-2  ">
            <div className="flex items-center gap-3 w-10 ">
              <img
                src={userP}
                alt=""
                className=" rounded-full h-8 w-8 border border-btnColor "
              />
              <p className=" whitespace-nowrap text-sm font-medium ">
                {menu?.owner}
              </p>
            </div>
            <h2 className="text-lg font-medium whitespace-nowrap ">
              {menu?.Subtitle}
            </h2>
            <div className="flex items-center justify-between ">
              <p className="flex items-center  gap-1">
                <AiFillStar className="text-btnColor" />
                <AiFillStar className="text-btnColor" />
                <AiFillStar className="text-btnColor" />
                <AiFillStar className="text-btnColor" />
                <AiFillStar className="text-btnColor" />
              </p>
              <p className="text-sm font-bold ">{menu?.price} Frw</p>
            </div>
            <p>{menu?.content}</p>
            <button className="btn py-2 flex items-center justify-center gap-2 mt-3 ">
              {" "}
              <FaCartPlus className="text-black" /> <span>Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
      <div className=" container mt-10 flex flex-col gap-6 ">
        <h2 className=" text-center text-2xl font-black ">Related Product</h2>
        <MenuCards />
      </div>
    </section>
  );
};

export default SingleCard;
