import axios from "axios";
import { useState } from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
const Menu = ({ item }) => {
  const [loading, setIsloading] = useState(false);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const AddToCart = async (id) => {
    try {
      setIsloading(true);
      const add = await axios.post(
        `https://blissmothies.onrender.com/blissmothies/cart/add/${id}`,
        {},
        config
      );
      if (add.status === 201) {
        notify();
        setIsloading(false);
      } else if (add.status === 200) {
        notify();
        setIsloading(false);
      }
    } catch (error) {
      console.log("Failed to Add it", error);
      eror();
      setIsloading(false);
    }
  };
  const notify = () => {
    toast.success("Well Cart Added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const eror = () => {
    toast.error("Please! First Login", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="px-4 py-4 relative bg-white rounded-lg flex flex-col justify-between gap-5">
        <div className="flex justify-between items-center relative">
          <div>
            <h2 className="text-sm font-[600]">{item?.title}</h2>
            <h5 className="text-xs font-[500]">{item?.Subtitle}</h5>
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
          {item.content?.length > 100
            ? `${item.content?.substring(0, 100)}.....`
            : item.content}
        </p>
        <div className="flex justify-between items-center">
          <p>{item.price} Frw</p>
          <div
            className="flex items-center justify-center border border-black px-2 rounded-xl py-1 cursor-pointer hover:bg-btnColor hover:border-btnColor hover:text-white"
            onClick={(e) => {
              AddToCart(item._id);
            }}
          >
            {loading ? (
              <div className="flex items-center h-[1.5rem] w-fit hover:text-white">
                <PulseLoader color="#000000" loading={loading} size={10} />
              </div>
            ) : (
              "Add to Cart"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
