import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log("email", email, "password", password);
  const signIn = async () => {
    try {
      const formData = {
        email,
        password,
      };
      const loginData = await axios.post(
        "https://blissmothies.onrender.com/blissmothies/users/login/",
        formData
      );
      if (loginData.status === 200) {
        localStorage.setItem("token", loginData.data.token);
        localStorage.setItem("logedInProfile", loginData.data.userProfile);
        alert("login success");
        navigate("/Dashboard");
      }
    } catch (error) {
      // alert("nope");
      console.log("Failed To Login", error);
    }
  };
  return (
    <section>
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
            <Link onClick={signIn}>
              <input
                type="button"
                value="Login"
                className="btn cursor-pointer py-3 px-3 rounded-sm w-full"
              />
            </Link>
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
