import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import formatDate from "../../../components/date/Date";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Email = () => {
  const [loading, setIsloading] = useState(false);
  const [contact, seTcontact] = useState([]);
  console.log("all contact", contact);
  useEffect(() => {
    const getAllEmail = async () => {
      try {
        setIsloading(true);
        const getAll = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/contact/read/"
        );
        const response = await getAll.data.data;
        if (response) {
          seTcontact(response);
          setIsloading(false);
        }
      } catch (error) {
        console.log("Failed", error);
        setIsloading(false);
      }
    };
    getAllEmail();
  }, []);
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
    <div className="flex flex-col">
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
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light cursor-pointer">
              <thead className="border-b font-medium dark:border-neutral-500  hover:bg-neutral-800 hover:text-white">
                <tr>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    #EID
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Owner
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Email
                  </th>

                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Message
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Created On
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {contact.length ? (
                  contact.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.email}
                      </td>
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
                              <PulseLoader
                                color="#FFF"
                                loading={loading}
                                size={3}
                              />
                            ) : (
                              <AiFillDelete />
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="mt-5 flex justify-center items-center w-full text-center">
                    <PulseLoader color="#F06C05" loading={loading} size={10} />
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
