import { useState } from "react";
import maap from "../../assets/images/map.jpg";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
const Contact = () => {
  const [loading, setLoading] = useState(false);

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

  // const onSubmit = async () => {
  //   const formData = {
  //     name: formik.values.name,
  //     email: formik.values.email,
  //     subject: formik.values.subject,
  //     message: formik.values.message,
  //   };
  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       "https://blissmothies.onrender.com/blissmothies/contact/send",
  //       formData
  //     );
  //     if (response.status === 200) {
  //       const responsedata = response.data.data;
  //       console.log("responsedata", responsedata);
  //       notify();
  //       formik.resetForm();
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     const errordata = error.message;
  //     console.log(errordata);
  //     eror();
  //     setLoading(false);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onSubmit = async (values, { setSubmitting }) => {
    // Check if the form is valid
    if (!formik.isValid) {
      console.error("Form has validation errors. Please fix them.");
      return;
    }

    const formData = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    try {
      setSubmitting(true); // Set submitting to true before the API request
      setLoading(true);
      const response = await axios.post(
        "https://blissmothies.onrender.com/blissmothies/contact/send",
        formData
      );

      if (response.status === 200) {
        const responseData = response.data.data;
        console.log("responseData", responseData);
        notify();
        formik.resetForm();
      }
    } catch (error) {
      console.error("API Request Error:", error);
      eror();
    } finally {
      setSubmitting(false); // Set submitting back to false after API request
      setLoading(false);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validate = (values) => {
    // values.name values.email values.subject values.message
    // erors.name erors.email erors.subject erors.message
    // erors.name  = "This field is required"
    let errors = {};
    if (!values.name) {
      errors.name = "Name Required";
    }
    if (!values.email) {
      errors.email = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.subject) {
      errors.subject = "Subject Required";
    }

    if (!values.message) {
      errors.message = "Message Required";
    }
    return errors;
  };
  const formik = useFormik({
    validate,
    initialValues,
    onSubmit,
  });

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

            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={formik.handleSubmit}
            >
              {formik.touched.name && formik.errors.name ? (
                <div className=" text-sm text-red-800 font-extralight ">
                  {formik.errors.name}
                </div>
              ) : null}
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  "
              />
              {formik.touched.email && formik.errors.email ? (
                <div className=" text-sm text-red-800 font-extralight ">
                  {formik.errors.email}
                </div>
              ) : null}
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm "
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className=" text-sm text-red-800 font-extralight ">
                  {formik.errors.subject}
                </div>
              ) : null}
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="SubJect"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm "
              />
              {formik.touched.message && formik.errors.message ? (
                <div className=" text-sm text-red-800 font-extralight ">
                  {formik.errors.message}
                </div>
              ) : null}
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                cols="30"
                rows="10"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              ></textarea>
              <button
                className="btn w-full flex justify-center items-center lg:w-fit cursor-pointer rounded-sm"
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
      </section>
    </div>
  );
};

export default Contact;
