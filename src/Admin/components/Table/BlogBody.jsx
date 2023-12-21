import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import formatDate from "../../../components/date/Date";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
const BlogBody = ({ blogItem, index }) => {
  const [loading, setIsloading] = useState(false);
  const [single, setSingle] = useState({});
  const [title, setTitle] = useState();
  const [ingridents, setingridents] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();
  // modal
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // Delete Blog
  const notify = () => {
    toast.success("Deleted Succesfully!", {
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
  const notif = () => {
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
  const removeProduct = async (id) => {
    try {
      setIsloading(true);
      const deleted = await axios.delete(
        `https://blissmothies.onrender.com/blissmothies/blog/delete/${id}`
      );
      if (deleted.status === 200) {
        notify();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        setIsloading(false);
      }
    } catch (error) {
      console.log("Failed to Delete", error);
      eror();
      setIsloading(false);
    }
  };
  const singleBlog = async (id) => {
    handleModal();
    try {
      const singlePost = await axios.get(
        `https://blissmothies.onrender.com/blissmothies/blog/read/${id}`
      );
      const result = await singlePost.data.data;

      if (result) {
        setSingle(result);
        setTitle(result.title);
        setContent(result.content);
        setImage(result.image);
        setCategory(result.category);
        setingridents(result.ingridents);
      }
    } catch (error) {
      console.log("Error while getin Single blog", error);
    }
  };
  const updateBlog = async (id) => {
    const imageInput = document.getElementById("imageInput");
    const galleryImage = imageInput.files[0]; // Get the selected image file
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("ingridents", ingridents);
    formData.append("image", galleryImage);
    console.log("FormData", formData);
    try {
      setIsloading(true);
      const upData = await axios.put(
        `https://blissmothies.onrender.com/blissmothies/blog/update/${id}`,
        formData,
        config
      );

      if (upData.status === 201) {
        notif();
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
  return (
    <>
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
      <tbody>
        {" "}
        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
          <td className="whitespace-nowrap px-6 py-4 font-medium">
            {index + 1}
          </td>
          <td className="whitespace-nowrap px-6 py-4">
            <img src={blogItem.image} alt="" className="w-8 rounded-md h-8" />
          </td>
          <td className="whitespace-nowrap px-6 py-4">{blogItem.title}</td>
          <td className="whitespace-nowrap px-6 py-4">
            {blogItem.category.length > 20
              ? `${blogItem.category.substring(0, 20)}...`
              : blogItem.category}
          </td>
          <td className="whitespace-nowrap px-6 py-4">
            {blogItem.content.length > 20
              ? `${blogItem.content.substring(0, 20)}...`
              : blogItem.content}
          </td>
          <td className="whitespace-nowrap px-6 py-4 font-medium">
            {blogItem.comments.length}
          </td>
          <td className="whitespace-nowrap px-6 py-4">
            {formatDate(blogItem.createdAt)}
          </td>

          <td className="whitespace-nowrap px-6 py-4">
            {" "}
            <div className="flex items-center gap-1">
              <div
                className="rounded-sm py-2 px-2 bg-blue-600 text-white w-fit"
                onClick={(e) => {
                  singleBlog(blogItem._id);
                  handleModal;
                }}
              >
                <FiEdit />
              </div>
              <div
                disabled={loading}
                className="rounded-sm py-2 px-2 bg-btnColor text-white w-fit"
                onClick={(e) => {
                  removeProduct(blogItem._id);
                }}
              >
                {loading ? (
                  <PulseLoader color="#FFF" loading={loading} size={3} />
                ) : (
                  <AiFillDelete />
                )}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      {modal && (
        <div className="bg-slate-900/70 fixed backdrop-blur-sm left-0 top-0 w-screen h-screen z-[200] flex justify-center items-center">
          <form className="bg-white w-[90%] md:w-[60%] p-6 rounded-xl flex flex-col md:flex-row gap-6">
            <div className="w-full py-2 px-2 md:w-1/2 flex justify-center flex-col gap-3 items-center border border-solid border-gray-500 rounded-sm">
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={(e) => setImage(e.target.value)}
                className=" ml-10 "
              />
              <div className="lg:h-1/2 lg:w-1/2 h-10 w-10 overflow-hidden ">
                <img
                  src={image ? image : single.image}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-2">
              <input
                type="text"
                placeholder="Title"
                value={title ? title : single?.title}
                onChange={(e) => setTitle(e.target.value)}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Ingridents"
                value={ingridents ? ingridents : single?.ingridents}
                onChange={(e) => setingridents(e.target.value)}
                className=" w-full   py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              />
              <div className="flex flex-col lg:flex-row items-center gap-4 justify-between ">
                <select
                  name=""
                  value={category ? category : single?.category}
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
                value={content ? content : single?.content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Description"
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              ></textarea>
              <button
                className="w-full bg-blue-600 p-3 text-white rounded-lg cursor-pointer"
                onClick={(e) => {
                  updateBlog(single._id);
                }}
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <PulseLoader size={5} color={"#ffffff"} loading={loading} />
                ) : (
                  "Update Blog"
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
    </>
  );
};

export default BlogBody;
