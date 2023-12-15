import { IoMdAddCircle } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
const BlogModal = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const [loading, setIsloading] = useState(false);
  const [title, setTitle] = useState("");
  const [ingridents, setingridents] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const upLoadBlog = async () => {
    const imageInput = document.getElementById("imageInput");
    const galleryImage = imageInput.files[0]; // Get the selected image file
    const formData = new FormData();
    formData.append("title", title);
    formData.append("ingridents", ingridents);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("image", galleryImage);
    console.log("FormData", formData);
    try {
      setIsloading(true);
      const upData = await axios.post(
        `https://blissmothies.onrender.com/blissmothies/blog/create`,
        formData,
        config
      );

      if (upData.status === 201) {
        notify();
        setIsloading(false);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      eror();
      setIsloading(false);
      console.log("Failed to Update Data", error);
    }
  };

  const notify = () => {
    toast.success("Blog Added Well!", {
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
      <button
        className="bg-blue-600 text-white px-5 py-3 rounded-md fixed bottom-0 right-0 m-6 flex gap-2 items-center"
        onClick={handleModal}
      >
        <HiTemplate />
        Add New Blog
        <IoMdAddCircle className=" text-btnColor font-extrabold text-lg " />
      </button>
      {modal && (
        <div className="bg-slate-900/70 fixed backdrop-blur-sm left-0 top-0 w-screen h-screen z-[200] flex justify-center items-center">
          <form className="bg-white w-[90%] md:w-[60%] p-6 rounded-xl flex flex-col md:flex-row gap-6">
            <div className="w-full py-2 px-2 md:w-1/2 flex justify-center items-center border border-solid border-gray-500 rounded-sm">
              <input
                type="file"
                className=" w-full h-full "
                id="imageInput"
                accept="image/*"
                onChange={(e) => setImage(e.target.value)}
              />
              <p className="hidden lg:block absolute">Upload Product Image</p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-2">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Ingridents"
                value={ingridents}
                onChange={(e) => setingridents(e.target.value)}
                className=" w-full   py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              />
              <div className="flex flex-col lg:flex-row items-center gap-4 justify-between ">
        

                <select
                  name=""
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  id=""
                  className="w-full  py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
                >
                  <option value="">--- Category ---</option>
                  <option>Breakfast</option>
                  <option>MainCourse</option>
                  <option>Salad</option>
                  <option>Pasta</option>
                  <option>Snacks</option>
                  <option>Accompagne</option>
                  <option>Beverages</option>
                </select>
              </div>

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Description"
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              ></textarea>
              <button
                className="w-full bg-blue-600 p-3 text-white rounded-lg cursor-pointer"
                onClick={upLoadBlog}
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <PulseLoader size={5} color={"#ffffff"} loading={loading} />
                ) : (
                  "New Blog"
                )}
              </button>
            </div>
          </form>
          <button
            className="bg-white text-gray-900 px-5 py-3 rounded-md fixed top-0 right-0 m-10 z-[300]"
            onClick={handleModal}
          >
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogModal;
