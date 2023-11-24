import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
const Beverages = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    const getAll = async () => {
      try {
        setIsloading(true);
        const getMenu = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/menu/read"
        );
        const response = await getMenu.data.data;
        const Beverages = response.filter(
          (menu) => menu.category === "Beverages"
        );
        setMenu(Beverages);
        setIsloading(false);
      } catch (error) {
        console.log("Failed to Get Menu", error);
        setIsloading(false);
      }
    };
    getAll();
  }, []);
  return (
    <section>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {menu.length ? (
          menu.map((item, index) => (
            <div
              className="px-4 py-4 relative bg-white rounded-lg flex flex-col gap-5"
              key={index}
            >
              <div className="flex justify-between items-center relative">
                <div>
                  <h5 className="text-[14px] font-[600]">{item.title}</h5>
                  <div className="flex gap-3 items-center cursor-pointer text-[12px]">
                    <span className="flex flex-col">
                      <AiOutlineHeart />
                    </span>
                    <p className="flex items-center  gap-1">
                      <AiFillStar className="text-btnColor" /> 4.5
                    </p>
                  </div>
                </div>
                <img
                  src={item.image}
                  alt=""
                  className="w-20 h-20 absolute rounded-2xl right-0 top-[-1.7rem]"
                />
              </div>
              <p className="mt-3 leading-6">
                {item.content.length > 100
                  ? `${item.content.substring(0, 100)}.....`
                  : item.content}
              </p>
              <div className="flex justify-between items-center">
                <p>${item.price}</p>
                <div className="flex items-center justify-center border border-black px-2 rounded-xl py-1 cursor-pointer hover:bg-btnColor hover:border-btnColor hover:text-white">
                  Add to Cart
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full text-center  ">
            <PulseLoader color="#F06C05" loading={loading} size={10} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Beverages;
