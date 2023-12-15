import { Navigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { FiCamera } from "react-icons/fi"; // Assuming you have an icon library like react-icons installed
import axios from "axios";
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Settings = () => {
  const AdminID = localStorage.getItem("AdminID");
  const [loading, isLoading] = useState(false);

  const [single, SetSingle] = useState({});
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [gender, setGender] = useState();
  const [fullName, setName] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const getSingle = async () => {
      try {
        const getData = await axios.get(
          `https://blissmothies.onrender.com/blissmothies/users/read/${AdminID}`
        );
        const response = await getData.data.data;
        if (response) {
          SetSingle(response);
          setEmail(response.email);
          setpassword(response.password);
          setGender(response.gender);
          setName(response.fullName);
          setImage(response.userProfile);
        }
      } catch (error) {
        console.log("Failed to fetch");
      }
    };
    getSingle();
  }, []);

  const updateUser = () => {
    const formData = {
      email,
      password,
      fullName,
      gender,
      userProfile,
    };
    try {
      isLoading(true);
      const upData = axios.put(
        `https://blissmothies.onrender.com/blissmothies/users/update/${AdminID}`,
        formData
      );
      if (upData) {
        notify();
        isLoading(false);
      }
    } catch (error) {
      eror();
      isLoading(false);
      console.log("Failed to Update", error);
    }
  };
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  const notify = () => {
    toast.success("Updated Succesfully!", {
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

  return (
    <form className="w-full mt-10 lg:w-1/2 mx-auto flex flex-col gap-3">
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
      <h2 className="text-xl font-extrabold h-6">Account Settings</h2>
      <p className="text-lg font-medium">Basic Info</p>
      <div className="flex flex-col  border-b-2 py-2">
        <div className="flex items-center  ">
          <p className=" whitespace-nowrap ">Profile Picture</p>

          <div class="flex items-center justify-center w-full relative gap-4">
            <label for="dropzone-file">
              <FiCamera
                className=" text-btnColor cursor-pointer absolute font-bold   ml-4 mt-1 h-full "
                size={20}
              />
              <img
                src={single?.userProfile}
                alt=""
                className="h-14 w-14 rounded-full "
              />
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
            <div>
              <p className=" whitespace-nowrap text-sm font-medium capitalize">
                upload profile picture
              </p>
              <p className="whitespace-nowrap text-sm font-medium capitalize text-red-500 cursor-pointer ">
                remove
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-2 border-b-2">
        <p className=" text-sm font-bold ">Name:</p>
        <input
          type="text"
          className="text-xs font-medium outline-none bg-transparent"
          value={fullName ? fullName : single.fullName}
          onChange={(e) => setName(e.target.value)}
        />
        <FaAngleRight />
      </div>

      <div className="flex items-center justify-between py-2 border-b-2">
        <p className=" text-sm font-bold ">Gender:</p>
        <input
          type="text"
          className="text-xs font-medium outline-none bg-transparent"
          value={gender ? gender : single?.gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <FaAngleRight />
      </div>
      <div className="flex items-center justify-between py-2 border-b-2">
        <p className=" text-sm font-bold ">Email:</p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="text-xs font-medium outline-none bg-transparent"
          value={email ? email : single?.email}
        />
        <FaAngleRight />
      </div>
      <p className="text-lg font-medium mt-10">Account Info</p>
      <div className="flex items-center justify-between py-2 border-b-2">
        <p className=" text-sm font-bold ">Username:</p>
        <input
          type="text"
          className="text-xs font-medium outline-none bg-transparent"
          value={email ? email : single?.email}
        />
        <FaAngleRight />
      </div>
      <div className="flex items-center justify-between py-2 border-b-2">
        <p className=" text-sm font-bold ">Password:</p>
        <input
          type="password"
          placeholder="*******************"
          value={password ? password : single?.password}
          onChange={(e) => setpassword(e.target.value)}
          className=" outline-none focus:bg-none  "
        />
        <FaAngleRight />
      </div>

      <button
        className="btn cursor-pointer py-3 px-3 rounded-sm w-full"
        onClick={(e) => {
          updateUser(single._id);
        }}
        disabled={loading}
        type="submit"
      >
        {loading ? (
          <PulseLoader size={5} color={"#ffffff"} loading={loading} />
        ) : (
          "Edit Profile"
        )}
      </button>
    </form>
  );
};

export default Settings;
