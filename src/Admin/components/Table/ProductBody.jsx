import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import formatDate from "../../../components/date/Date";
import PulseLoader from "react-spinners/PulseLoader";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
const ProductBody = ({ pitem, index }) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const [loading, setIsloading] = useState(false);
  // Delete Data
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("Token", token);
  const deleteData = async (id) => {
    try {
      setIsloading(true);
      const removeData = await axios.delete(
        `https://blissmothies.onrender.com/blissmothies/menu/delete/${id}`,
        config
      );
      if (removeData.status === 200) {
        notiffy();
        setIsloading(false);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      eror();
      setIsloading(false);
      console.log("Failed To Delete Data", error);
    }
  };
  const [single, setSingle] = useState({});
  const [title, setTitle] = useState();
  const [Subtitle, setSubtitle] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const singleProduct = async (id) => {
    handleModal();
    try {
      const singlePost = await axios.get(
        `https://blissmothies.onrender.com/blissmothies/menu/read/${id}`
      );
      const result = await singlePost.data.data;

      if (result) {
        setSingle(result);
        setPrice(result.price);
        setTitle(result.title);
        setSubtitle(result.Subtitle);
        setCategory(result.category);
        setContent(result.content);
        setImage(result.image);
      }
    } catch (error) {
      console.log("Error while getin Single blog", error);
    }
  };
  // update Data
  const updateMenus = async (id) => {
    const imageInput = document.getElementById("imageInput");
    const galleryImage = imageInput.files[0]; // Get the selected image file
    const formData = new FormData();
    formData.append("title", title);
    formData.append("Subtitle", Subtitle);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("image", galleryImage);
    console.log("FormData", formData);
    try {
      setIsloading(true);
      const upData = await axios.put(
        `https://blissmothies.onrender.com/blissmothies/menu/update/${id}`,
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
  // tosty
  const notiffy = () => {
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
      <tr className="border-b  transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
        <td>{index + 1}</td>
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          <div className="flex items-center gap-2">
            <img src={pitem.image} alt="" className="w-8 rounded-md h-8" />

            <div className=" text-xs font-medium ">
              <h2>{pitem.title}</h2>
              <span>#{pitem.Subtitle}</span>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-6 py-4">{pitem.owner}</td>
        <td className="whitespace-nowrap px-6 py-4">{pitem.category}</td>
        <td className="whitespace-nowrap px-6 py-4">{pitem.price} Frw</td>
        <td className="whitespace-nowrap px-6 py-4">
          {formatDate(pitem.createdAt)}
        </td>
        <td className="whitespace-nowrap px-6 py-4">Available</td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className="flex items-center gap-1">
            <div
              className="rounded-sm py-2 px-2 bg-blue-600 text-white w-fit"
              onClick={(e) => {
                singleProduct(pitem._id);
              }}
            >
              <FiEdit />
            </div>
            <div
              className="rounded-sm py-2 px-2 bg-btnColor text-white w-fit"
              onClick={(e) => {
                deleteData(pitem._id);
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
                value={title ? title : single.title}
                onChange={(e) => setTitle(e.target.value)}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              />
              <input
                type="text"
                placeholder="SubTitle"
                value={Subtitle ? Subtitle : single.Subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              />
              <div className="flex flex-col lg:flex-row items-center gap-4 justify-between ">
                <input
                  type="text"
                  placeholder="Price"
                  value={price ? price : single.price}
                  onChange={(e) => setPrice(e.target.value)}
                  className=" w-full lg:w-1/2  py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
                />
                <select
                  name=""
                  id=""
                  value={category ? category : single.category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full lg:w-1/2 py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
                >
                  <option>{category ? category : single.category}</option>
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
                value={content ? content : single.content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Description"
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              ></textarea>

              <button
                className="w-full bg-blue-600 p-3 text-white rounded-lg cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("single cliked");
                  updateMenus(single._id);
                }}
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <PulseLoader size={5} color={"#ffffff"} loading={loading} />
                ) : (
                  "Update Menu"
                )}
              </button>
            </div>
          </form>
          <button
            className="bg-black lg:bg-white text-gray-900 px-5 py-3 rounded-md fixed top-0 right-0 m-10 z-[300]"
            onClick={handleModal}
          >
            <FaTimes className=" lg:text-black text-btnColor " />
          </button>
        </div>
      )}
    </>
  );
};

export default ProductBody;
