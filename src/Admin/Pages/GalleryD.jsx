import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import PulseLoader from "react-spinners/PulseLoader";
import GalleryModal from "../components/modals/GalleryModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GalleryD = () => {
  const [album, setAlbum] = useState([]);
  const [loading, setIsloading] = useState(false);
  console.log("Album", album);
  useEffect(() => {
    const getAlbum = async () => {
      try {
        setIsloading(true);
        const geetIt = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/album/read"
        );
        const response = await geetIt.data.data;
        if (response) setIsloading(false);
        setAlbum(response);
      } catch (error) {
        setIsloading(false);
        console.log("Failed to get Data", error);
      }
    };
    getAlbum();
  }, []);

  // tosty
  const notify = () => {
    toast.success("Image Deleted Succesfully!", {
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
  // Delete
  const removeImage = async (id) => {
    try {
      const remove = await axios.delete(
        `https://blissmothies.onrender.com/blissmothies/album/delete/${id}`
      );

      if (remove.status === 200) {
        notify();
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      }
    } catch (error) {
      eror();
      console.log("Try Again", error);
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
      <div className="w-full gap-5 p-5 columns-1 md:columns-2 lg:columns-3 xl:columns-5 space-y-5 ">
        {album.length ? (
          album.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center items-center group"
            >
              <img src={item.galleryImage} alt="" />
              <div
                className="bg-red-700 absolute p-4 rounded-full scale-0 group-hover:scale-100 duration-300 group-hover:cursor-pointer"
                onClick={(e) => {
                  console.log("cliked");
                  removeImage(item._id);
                }}
              >
                <AiFillDelete />
              </div>
            </div>
          ))
        ) : (
          <div className=" mt-5 flex justify-center items-center w-full text-center  ">
            <PulseLoader color="#F06C05" loading={loading} size={10} />
          </div>
        )}
      </div>
      <GalleryModal />
    </div>
  );
};

export default GalleryD;
