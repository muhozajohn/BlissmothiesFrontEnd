import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";
import { Navigate } from "react-router-dom";
import axios from "axios";
const UserCustomer = () => {
  const userP = localStorage.getItem("userP");
  const userName = localStorage.getItem("userName");
  const userGender = localStorage.getItem("userGender");
  const userEmail = localStorage.getItem("userEmail");
  const [loading, isLoading] = useState(false);
  const value = 1;
  const [itemCount, setItemCount] = useState(value);
  const [comment, SetComment] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const formData = {
    comment,
  };

  const TestMonial = async () => {
    try {
      isLoading(true);
      const commenting = await axios.post(
        "https://blissmothies.onrender.com/blissmothies/Testmoniols/create",
        formData,
        config
      );
      if (commenting.status === 201) {
        notify();
        SetComment("");
        isLoading(false);
      }
    } catch (error) {
      console.log("failed", error);
      eror();
      isLoading(false);
    }
  };
  const notify = () => {
    toast.success("Testimonial Added Well!", {
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

  // getCart
  const [cart, SetCart] = useState([]);
  console.log("Alll Cart", cart);
  useEffect(() => {
    const getCart = async () => {
      try {
        isLoading(true);
        const getAllCart = await axios.get(
          // `https://blissmothies.onrender.com/blissmothies/cart/Readcart`
          `http://localhost:4300/blissmothies/cart/Readcart`,
          config
        );
        const response = await getAllCart.data.data;
        if (response) {
          SetCart(response);
          let amount = 0;
          response.forEach((item) => {
            amount += parseFloat(item.productId[0].price);
          });
          setTotalAmount(amount);
          isLoading(false);
        }
      } catch (error) {
        console.log("Failed to Get Data", error);
        isLoading(false);
      }
    };
    getCart();
  }, []);
  // delete
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
  const shiping = 3.5;

  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <section>
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
      <div className="container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="px-5 py-5 flex flex-col gap-6 lg:flex-row  bg-white rounded-lg">
            <img src={userP} alt="" className="rounded-xl w-full lg:w-32" />

            <div className="mt-4">
              <p className=" text-sm font-[600] ">{userName}</p>
              <p className=" text-sm ">{userEmail}</p>
              <p className="text-sm ">{userGender}</p>
            </div>
          </div>

          <div className="px-5 py-5 bg-white rounded-lg mt-4 mb-4">
            <p className="text-sm font-[500]">
              Leave Your Feedback About Our Products
            </p>
            <div>
              <form action="" className="flex flex-col gap-3">
                <label className="mt-4 text-sm  font-[400]">Feedback</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={comment}
                  onChange={(e) => SetComment(e.target.value)}
                  className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  "
                ></textarea>
                <button
                  className="btn bg-black cursor-pointer"
                  onClick={TestMonial}
                  disabled={loading}
                  type="submit"
                >
                  {loading ? (
                    <PulseLoader size={5} color={"#ffffff"} loading={loading} />
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="px-5 py-5 flex flex-col gap-6  justify-between  bg-white rounded-lg h-full ">
          <div className="text-lg font-[800] ">CART Items</div>
          {cart.length
            ? cart.map((cartItem, index) => (
                <div className="flex  lg:flex-row justify-between " key={index}>
                  <div className="flex items-start gap-6">
                    <img
                      src={cartItem.productId[0]?.image}
                      alt=""
                      className="rounded-xl  w-1/5"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm font-[600]">
                        {cartItem.productId[0]?.title}
                      </p>
                      <small className=" mt-[-1] text-xs">Add More Items</small>
                      <div className="flex gap-2 mt-2 items-start ">
                        <button
                          onClick={() => setItemCount((prev) => prev - 1)}
                          className="bg-black text-white font-sm px-2"
                        >
                          -
                        </button>
                        <h1 className="text-lg font-[600]">{itemCount}</h1>
                        <button
                          onClick={() => setItemCount((prev) => prev + 1)}
                          className="bg-orange-600 text-white font-sm px-2"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-ld font-[600]">
                      ${cartItem.productId[0]?.price}
                    </h1>
                    <span
                      className="text-sm font-bold text-red-700 cursor-pointer "
                      onClick={(e) => {
                        removeCart(cartItem._id);
                      }}
                    >
                      {loading ? <p>wait.....</p> : "Remove"}
                    </span>
                  </div>
                </div>
              ))
            : null}

          <hr />
          <div className="flex  lg:flex-row justify-between ">
            <div>
              <p className=" text-gray-600 ">SubTotal: </p>
              <p className=" text-gray-600 ">Shiping: </p>
              <p className=" text-gray-600 ">Total: </p>
            </div>
            <div>
              <p>${totalAmount} </p>
              <p>${totalAmount + shiping}</p>
              <p>${totalAmount ? totalAmount + shiping : 0}</p>
            </div>
          </div>
          <div className="btn bg-black text-center cursor-pointer">ChekOut</div>
        </div>
      </div>
    </section>
  );
};

export default UserCustomer;
