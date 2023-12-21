import { AiFillDelete } from "react-icons/ai";
import formatDate from "../../../components/date/Date";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
const EmailCard = ({item,index}) => {
  const [loading, setIsloading] = useState(false);
  const deleteData = async (id) => {
    try {
      setIsloading(true);
      const removeMesage = await axios.delete(
        `https://blissmothies.onrender.com/blissmothies/contact/delete/${id}`
      );
      if (removeMesage.status === 200) {
        notify();
        setIsloading(false);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log("failed", error);
      eror();
      setIsloading(false);
    }
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
      <tr
        key={index}
        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
      >
        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
        <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
        <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
        <td className="whitespace-nowrap px-6 py-4">
          {item.message.length > 50
            ? `${item.message.substring(0, 50)}.....`
            : item.message}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {formatDate(item.createdAt)}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className="flex items-center gap-1">
            <div
              className="rounded-sm py-2 px-2 bg-btnColor text-white w-fit"
              onClick={(e) => {
                deleteData(item._id);
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
    </>
  );
};

export default EmailCard;
