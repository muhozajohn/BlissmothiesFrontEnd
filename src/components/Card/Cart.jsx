import axios from "axios";
import { useState } from "react";

const Cart = ({ cartItem }) => {
  const [loading, isLoading] = useState(false);
  // delete
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const removeCart = async (id) => {
    try {
      isLoading(true);
      const deleteCart = await axios.delete(
        `https://blissmothies.onrender.com/blissmothies/cart/delete/${id}`,
        config
      );
      if (deleteCart.status === 200) {
        isLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log("Failed to Delete", error);
    }
  };
  return (
    <div className="flex  lg:flex-row justify-between ">
      <div className="flex items-start gap-6">
        <img
          src={cartItem.productId[0]?.image}
          alt=""
          className="rounded-xl  w-1/5"
        />
        <div className="flex flex-col">
          <p className="text-sm font-[600] whitespace-nowrap ">
            {cartItem.productId[0]?.title}
          </p>
          <small className=" mt-[-1] text-xs whitespace-nowrap">
            Add More Items
          </small>
          <div className="flex gap-2 mt-2 items-start ">
            <button
              onClick={() => setItemCount((prev) => prev - quantity)}
              className="bg-black text-white font-sm px-2"
            >
              -
            </button>
            <h1 className="text-lg font-[600]">{cartItem?.quantity}</h1>
            <button
              onClick={() => setItemCount((prev) => prev + quantity)}
              className="bg-orange-600 text-white font-sm px-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-ld font-[600]">${cartItem?.totalPrice}</h1>
        <span
          className="text-sm font-bold text-red-700 cursor-pointer "
          onClick={(e) => {
            removeCart(cartItem?._id);
          }}
        >
          {loading ? <p>wait.....</p> : "Remove"}
        </span>
      </div>
    </div>
  );
};

export default Cart;
