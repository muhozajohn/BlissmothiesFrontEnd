import { useEffect, useState } from "react";
import maap from "../../assets/images/map.jpg";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [subject, SetSubject] = useState("");
  const [message, SetMessage] = useState("");
  console.log(name);

  const isTenDigitNumber = (value) => /^\d{9}$/.test(value);
  const notify = () => {
    toast.success("Message Sent Succesfully!", {
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
    toast.error("🦄 Try Agian Plealse!", {
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
  // const [notifyme, SetNotifyMe] = useState(false);

  const handleButtonClick = async () => {
    const formData = {
      name,
      email,
      subject,
      message,
    };
    try {
      console.log("helllo mada fucker");
      setLoading(true);
      const response = await axios.post(
        "https://blissmothies.onrender.com/blissmothies/contact/send",
        formData
      );
      if (response.status === 200) {
        const responsedata = response.data.message;
        console.log(responsedata);
        notify();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      const errordata = error.message;
      console.log(errordata);
      eror();
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {" "}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className=" w-full bgg bg-cover bg-no-repeat bg-center h-[40vh]   top-0 z-[-10] rounded-b-xl">
        <div className=" w-full h-full rounded-b-3xl flex justify-center items-center">
          <h1 className="text-white font-semibold text-5xl">Contact</h1>
        </div>
      </div>
      <section>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-1/2 lg:h-[80vh] overflow-hidden ">
            <img src={maap} alt="" className="rounded-xl w-full h-full " />
          </div>
          <div className="flex flex-col gap-6 md:mt-[-28rem] lg:mt-0  mt-[-13rem]">
            <p className="text-xl font-bold">Contact Us</p>

            <form action="" className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                onChange={(e) => SetName(e.target.value)}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  "
              />
              <input
                type="text"
                placeholder="Your Email"
                onChange={(e) => SetEmail(e.target.value)}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm "
              />
              <input
                type="text"
                placeholder="SubJect"
                onChange={(e) => SetSubject(e.target.value)}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm "
              />
              <textarea
                name=""
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
                onChange={(e) => SetMessage(e.target.value)}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              ></textarea>
              <div className="btn w-full flex justify-center items-center lg:w-fit cursor-pointer rounded-sm">
                <button
                  type="button"
                  onClick={handleButtonClick}
                  disabled={loading}
                >
                  {loading ? (
                    <PulseLoader size={5} color={"#ffffff"} loading={loading} />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
