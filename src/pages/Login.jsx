import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // tosty
  const notify = () => {
    toast.success("Login Succesfully!", {
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
  const signIn = async () => {
    try {
      const formData = {
        email,
        password,
      };
      setLoading(true);
      const loginData = await axios.post(
        "https://blissmothies.onrender.com/blissmothies/users/login/",
        formData
      );
      if (loginData.status === 200) {
        localStorage.setItem("token", loginData.data.token);
        localStorage.setItem("image", loginData.data.userProfile);
        setLoading(false);
        notify();
        setTimeout(() => {
          navigate("/Dashboard");
          //  window.location.reload();
        }, 3000);
      }
    } catch (error) {
      setLoading(false);
      eror();
      console.log("Failed To Login", error);
    }
  };
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
      <div className="container">
        <div className="w-full lg:w-1/3 mx-auto py-4 px-4 bg-white rounded-sm">
          <p className="font-bold text-xl">
            !Hello! <span className="text-btnColor">Welcome</span> Back
          </p>
          <form action="" className="flex flex-col gap-6 mt-6">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username"
              className="py-3 px-3 border border-solid border-gray-400 rounded-sm outline-none active:outline-none text-sm"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="py-3 px-3 border border-gray-400 rounded-sm outline-none active:outline-none text-sm"
            />

            <button
              className="btn cursor-pointer py-3 px-3 rounded-sm w-full"
              onClick={signIn}
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <PulseLoader size={5} color={"#ffffff"} loading={loading} />
              ) : (
                "Login"
              )}
            </button>
            <p className="text-center font-semibold text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-800">
                Register
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
