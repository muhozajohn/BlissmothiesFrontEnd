import { BsFillImageFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
const GalleryModal = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [galleryImage, setgalleryImage] = useState("");
  console.log("Image path", galleryImage);
  const handleModal = () => {
    setModal(!modal);
  };

  // tosty
  const notify = () => {
    toast.success("Image Added Succesfully!", {
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
  // createPost
  const makeImage = async (e) => {
    e.preventDefault();
    console.log("Clicked");
    try {
      const imageInput = document.getElementById("imageInput");
      const galleryImage = imageInput.files[0]; // Get the selected image file
      const formData = new FormData();
      formData.append("galleryImage", galleryImage);
      setLoading(true);
      const request = await axios.post(
        "https://blissmothies.onrender.com/blissmothies/album/create",
        formData
      );
      if (request.status === 201) {
        notify();
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      eror();
      console.log("Failed to Create", error);
      setLoading(false);
    }
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
        <BsFillImageFill className=" text-white font-extrabold text-lg " />
        New Gallery
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
                value={galleryImage}
                onChange={(e) => setgalleryImage(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-2">
           
              <button
                className="btn w-full flex justify-center items-center lg:w-fit cursor-pointer rounded-sm"
                onClick={makeImage}
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <PulseLoader size={5} color={"#ffffff"} loading={loading} />
                ) : (
                  "Add New Gallery"
                  
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

export default GalleryModal;
