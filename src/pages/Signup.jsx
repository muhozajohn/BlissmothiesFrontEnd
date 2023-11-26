import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Avatar from "../assets/images/a.jpg";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // tosty
  const notify = () => {
    toast.success("Account Created Succesfully!", {
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
  const confirg = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const signUp = async () => {
    try {
      const formData = new FormData();
      formData.append("fullName", formik.values.fullName);
      formData.append("email", formik.values.email);
      formData.append("password", formik.values.password);
      formData.append("gender", formik.values.gender);
      formData.append("userProfile", formik.values.userProfile);
      setLoading(true);
      const signUpData = await axios.post(
        "https://blissmothies.onrender.com/blissmothies/users/create",
        formData,
        confirg
      );

      if (signUpData.status === 201) {
        setLoading(false);
        notify();
        formik.resetForm();
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setLoading(false);
      eror();
      console.log("Failed To Sign up", error);
    }
  };

  const initialValues = {
    email: "",
    fullName: "",
    password: "",
    userProfile: "",
    gender: "",
  };
  const validate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = "Password Required";
    }
    if (!values.fullName) {
      errors.fullName = "Fullname Required";
    }
    if (!values.userProfile) {
      errors.userProfile = "Image Required";
    }
    if (!values.gender) {
      errors.userProfile = "Image Required";
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
    signUp,
  });

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
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-xl">
        <div>
          <img src={Avatar} alt="" />
        </div>
        <div className="px-4">
          <p className="font-semibold text-sm ">
            !Create! <span className="text-btnColor">Acount</span>
          </p>
          <form
            action=""
            encType="multipart/form-data" // Add this line for file uploads
            className="flex flex-col gap-6 mt-4"
            onSubmit={(e) => {
              formik.handleSubmit;
            }}
          >
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className=" text-sm text-red-800 font-extralight ">
                {formik.errors.fullName}
              </div>
            ) : null}
            <input
              type="text"
              id="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              onBlur={formik.handleBlur}
              placeholder="Full name"
              className="py-3 px-3 border border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
            />
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
              placeholder="Email"
              className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
            />
            {/* <div className="flex justify-between items-center py-2 px-2"> */}
            {formik.touched.userProfile && formik.errors.userProfile ? (
              <div className=" text-sm text-red-800 font-extralight ">
                {formik.errors.userProfile}
              </div>
            ) : null}
            {formik.touched.gender && formik.errors.gender ? (
              <div className=" text-sm text-red-800 font-extralight ">
                {formik.errors.gender}
              </div>
            ) : null}
            {/* </div> */}
            <div className="flex justify-between items-center py-2 px-2 border border-solid border-gray-500 rounded-sm outline-none active:outline-none text-sm">
              <input
                className="w-1/2"
                type="file"
                id="userProfile"
                onChange={
                  (e) => formik.setFieldValue("userProfile", e.target.files[0])
                  // e.preventDefault()
                }
                onBlur={formik.handleBlur}
                accept="image/*"
              />
              <div className="flex gap-6">
                <label htmlFor="">Gender</label>
                <select
                  id="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                  className="w-full bg-transparent placeholder-black outline-none active:outline-none text-sm"
                >
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
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
              placeholder="Password"
              className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
            />
            <button
              className="btn cursor-pointer py-3 px-3 rounded-sm w-full"
              onClick={signUp}
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <PulseLoader size={5} color={"#ffffff"} loading={loading} />
              ) : (
                "SignUp"
              )}
            </button>
            <p className="text-center font-semibold text-sm">
              Already have an account?
              <Link to="/login" className="text-blue-800">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
