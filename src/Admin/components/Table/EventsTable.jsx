import { useState } from "react";
import formatDate from "../../../components/date/Date";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
const EventsTable = ({ EventItem, index }) => {
  const [loading, Isloading] = useState(false);
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
      Isloading(true);
      const removeData = await axios.delete(
        `https://blissmothies.onrender.com/blissmothies/event/delete/${id}`,
        config
      );
      if (removeData.status === 200) {
        notiffy();
        Isloading(false);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      eror();
      Isloading(false);
      console.log("Failed To Delete Data", error);
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
  // modal
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  // updateMenu
  const [single, setSingle] = useState({});

  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [content, setContent] = useState();

  const singleProduct = async (id) => {
    handleModal();
    try {
      const singlePost = await axios.get(
        `https://blissmothies.onrender.com/blissmothies/event/read/${id}`
      );
      const result = await singlePost.data.data;

      if (result) {
        setSingle(result);
        setPrice(result.price);
        setTitle(result.title);
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
    formData.append("price", price);
    formData.append("content", content);
    formData.append("image", galleryImage);
    console.log("FormData", formData);
    try {
      Isloading(true);
      const upData = await axios.put(
        `https://blissmothies.onrender.com/blissmothies/event/update/${id}`,
        formData,
        config
      );

      if (upData.status === 200) {
        notify();
        Isloading(false);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      eror();
      Isloading(false);
      console.log("Failed to Update Data", error);
    }
  };
  return (
    <tbody>
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
      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <img src={EventItem?.image} alt="" />
        </td>
        <td className="whitespace-nowrap px-6 py-4">{EventItem?.title}</td>
        <td className="whitespace-nowrap px-6 py-4">
          {EventItem.content?.length > 60
            ? `${EventItem.content?.substring(0, 60)}.....`
            : EventItem?.content}
        </td>
        <td className="whitespace-nowrap px-6 py-4">{EventItem?.price} Frw</td>
        <td className="whitespace-nowrap px-6 py-4">
          {formatDate(EventItem?.updatedAt)}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className="flex items-center gap-1">
            <div
              className="rounded-sm py-2 px-2 bg-blue-600 text-white w-fit"
              onClick={(e) => {
                singleProduct(EventItem._id);
              }}
            >
              <FiEdit />
            </div>
            <div
              className="rounded-sm py-2 px-2 bg-btnColor text-white w-fit"
              onClick={(e) => {
                deleteData(EventItem._id);
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

              <div className="flex flex-col lg:flex-row items-center gap-4 justify-between ">
                <input
                  type="text"
                  placeholder="Price"
                  value={price ? price : single.price}
                  onChange={(e) => setPrice(e.target.value)}
                  className=" w-full   py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
                />
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
                  "Update Event"
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
    </tbody>
  );
};

export default EventsTable;
