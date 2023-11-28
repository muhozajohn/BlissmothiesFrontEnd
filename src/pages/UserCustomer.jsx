import { useEffect, useState } from "react";
import Profile from "../assets/images/a.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
const UserCustomer = () => {
  const userP = localStorage.getItem("userP");
  const [loading, isLoading] = useState(false);
  const value = 1;
  const [itemCount, setItemCount] = useState(value);
  const [comment, SetComment] = useState("");
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
    toast.error("Try Again Please!", {
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
        const getAllCart = await axios.get(
          `https://blissmothies.onrender.com/blissmothies/cart/Readcart`
        );
        const response = await getAllCart.data.data;
        if (response) {
          SetCart(response);
        }
      } catch (error) {
        console.log("Failed to Get Data", eror);
        isLoading(false);
      }
    };
    getCart();
  }, []);

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
          {/* {cart.map((cartP, index) => ( */}
          <div
            // key={index}
            className="px-5 py-5 flex flex-col gap-6 lg:flex-row  bg-white rounded-lg"
          >
            <img src={userP} alt="" className="rounded-xl w-full lg:w-1/2" />

            <div className="mt-4">
              <p className=" text-sm font-[600] ">
                {/* {result.cartOwner.fullName} */}
                They Call Me Zxus
              </p>
              <p className=" text-sm ">
                {/* {result.cartOwner.email} */}
                zxus@gmail.com
                </p>
              <p className="text-sm ">
                {/* {result.cartOwner.gender} */}
                male
                </p>
            </div>
          </div>
          {/* ))} */}

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
        <div className="px-5 py-5 flex flex-col gap-6  bg-white rounded-lg h-full ">
          <div className="text-lg font-[800] ">CART Items</div>
          {cart.map((cartItem, index) => (
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
                  ${cartItem.productId[0].price}
                </h1>
                <span className="text-sm font-bold text-red-700 cursor-pointer">
                  Remove
                </span>
              </div>
            </div>
          ))}

          <hr />
          <div className="flex  lg:flex-row justify-between ">
            <div>
              <p className=" text-gray-600 ">SubTotal: </p>
              <p className=" text-gray-600 ">Shiping: </p>
              <p className=" text-gray-600 ">Total: </p>
            </div>
            <div>
              <p>$600 </p>
              <p>%0 </p>
              <p>$600 </p>
            </div>
          </div>
          <div className="btn bg-black text-center cursor-pointer">ChekOut</div>
        </div>
      </div>
    </section>
  );
};

export default UserCustomer;
