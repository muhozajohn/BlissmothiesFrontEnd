import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
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
      if (formik.isValid) {
        const formData = {
          email: formik.values.email,
          password: formik.values.password,
        };
        setLoading(true);
        const loginData = await axios.post(
          "https://blissmothies.onrender.com/blissmothies/users/login/",
          formData
        );

        if (loginData.status === 200) {
          localStorage.setItem("token", loginData.data.token);
          setLoading(false);
          notify();
          setTimeout(() => {
            if (loginData.data.users.role === "admin") {
              localStorage.setItem("image", loginData.data.users.userProfile);
              localStorage.setItem("Name", loginData.data.users.fullName);
              localStorage.setItem("Email", loginData.data.users.email);
              localStorage.setItem("Gender", loginData.data.users.gender);
              localStorage.setItem("Pass", loginData.data.users.password);
              localStorage.setItem("AdminID", loginData.data.users._id);
              navigate("/Dashboard");
            } else if (loginData.data.users.role === "user") {
              localStorage.setItem("userP", loginData.data.users.userProfile);
              localStorage.setItem("userName", loginData.data.users.fullName);
              localStorage.setItem("userEmail", loginData.data.users.email);
              localStorage.setItem("userGender", loginData.data.users.gender);
              navigate("/");
              window.location.reload();
            } else {
              // Handle other roles if needed
              console.error("Unknown user role:", loginData.data.users.role);
            }
          }, 3000);
        }
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        if (error.response.status === 401) {
          // Unauthorized - Incorrect password
          formik.setErrors({
            password: "Incorrect password. Try again.",
          });
        } else if (error.response.status === 422) {
          // Unprocessable Entity - Validation error (e.g., incorrect username)
          formik.setErrors({
            email: "Incorrect email address. Check and try again.",
          });
        } else {
          // Other errors
          eror("Failed to login. Please try again.");
          console.log("Failed To Login", error);
        }
      } else {
        // Network error or other unexpected errors
        eror("Failed to login. Please try again.");
        console.log("Failed To Login", error);
      }
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const validate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = "Password Required";
    }
    if (!values.email) {
      errors.email = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const formik = useFormik({
    validate,
    initialValues,
    onSubmit: signIn,
  });
  // console.log("Formik Values", formik.touched);
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
          <form
            action=""
            className="flex flex-col gap-6 mt-6"
            onSubmit={formik.handleSubmit}
          >
            {formik.touched.email && formik.errors.email ? (
              <div className=" text-sm text-red-800 font-extralight ">
                {formik.errors.email}
              </div>
            ) : null}
            <input
              type="text"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="johndoe@gmail.com"
              className="py-3 px-3 border border-solid border-gray-400 rounded-sm outline-none active:outline-none text-sm"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className=" text-sm text-red-800 font-extralight ">
                {formik.errors.password}
              </div>
            ) : null}
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              id="password"
              placeholder="****************"
              className="py-3 px-3 border border-gray-400 rounded-sm outline-none active:outline-none text-sm"
            />

            <button
              className="btn cursor-pointer py-3 px-3 rounded-sm w-full"
              onClick={() => formik.submitForm()}
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
