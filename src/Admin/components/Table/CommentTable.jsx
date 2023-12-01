import { AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";
import { useState } from "react";
import axios from "axios";
const CommentTable = ({ commentItem }) => {
  const [loading, Setloading] = useState(false);
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
  />;

  // delete
  const deleteData = async (id) => {
    try {
      Setloading(true);
      const delteId = await axios.delete(
        `https://blissmothies.onrender.com/blissmothies/blog/deleteComment/${id}`
      );
      if (delteId.status === 200) {
        notify();
        Setloading(false);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log("failed", error);
      eror();
      Setloading(false);
    }
  };
  return (
    <tbody>
      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{1}</td>
        <td className="whitespace-nowrap px-6 py-4">
          {commentItem?.author.fullName}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {commentItem?.postComment}
        </td>
        <td className="whitespace-nowrap px-6 py-4">01/ 02 /2023</td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className="flex items-center gap-1">
            <div
              className="rounded-sm py-2 px-2 bg-btnColor text-white w-fit"
              onClick={(e) => {
                deleteData(commentItem._id);
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
  );
};

export default CommentTable;
