import BlogModal from "../modals/BlogModal";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
const Blog = () => {
  // modal
  const [modal, setModal] = useState(false);
  const [loading, setIsloading] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light cursor-pointer">
                <thead className="border-b font-medium dark:border-neutral-500  hover:bg-neutral-800 hover:text-white">
                  <tr>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      #PID
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Image
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Ingridents
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Content
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Comments
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Created On
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Owner
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Muhoza</td>
                    <td className="whitespace-nowrap px-6 py-4">keller</td>
                    <td className="whitespace-nowrap px-6 py-4">20</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      01/ 02 /2023
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {" "}
                      14:300 pm{" "}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      01/ 02 /2023
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Kigali</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <div className="flex items-center gap-1">
                        <div
                          className="rounded-sm py-2 px-2 bg-blue-600 text-white w-fit"
                          //   onClick={(e) => {
                          //     // singleProduct(item._id);
                          //     handleModal;
                          //   }}
                          onClick={handleModal}
                        >
                          <FiEdit />
                        </div>
                        <div
                          className="rounded-sm py-2 px-2 bg-btnColor text-white w-fit"
                          onClick={(e) => {
                            // deleteData(item._id);
                          }}
                        >
                          <AiFillDelete />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <BlogModal />
      {modal && (
        <div className="bg-slate-900/70 fixed backdrop-blur-sm left-0 top-0 w-screen h-screen z-[200] flex justify-center items-center">
          <form className="bg-white w-[90%] md:w-[60%] p-6 rounded-xl flex flex-col md:flex-row gap-6">
            <div className="w-full py-2 px-2 md:w-1/2 flex justify-center flex-col gap-3 items-center border border-solid border-gray-500 rounded-sm">
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                // onChange={(e) => setImage(e.target.value)}
                className=" ml-10 "
              />

              <img
                // src={image ? image : single.image}
                alt=""
                className="lg:w-full w-1/2"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-2">
              <input
                type="text"
                placeholder="Title"
                // value={title ? title : single.title}
                // onChange={(e) => setTitle(e.target.value)}
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              />
              <div className="flex flex-col lg:flex-row items-center gap-4 justify-between ">
                <input
                  type="text"
                  placeholder="Price"
                  //   value={price ? price : single.price}
                  //   onChange={(e) => setPrice(e.target.value)}
                  className=" w-full lg:w-1/2  py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
                />
                <select
                  name=""
                  id=""
                  //   onChange={(e) => setCategory(e.target.value)}
                  className="w-full lg:w-1/2 py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
                >
                  {/* <option value={category ? category : single.category}>
                    {category ? category : single.category}
                  </option>
                  <option value={category ? category : single.category}>
                    Breakfast
                  </option>
                  <option value={category ? category : single.category}>
                    Launch
                  </option>
                  <option value={category ? category : single.category}>
                    Desserts
                  </option>
                  <option value={category ? category : single.category}>
                    Dinner
                  </option>
                  <option value={category ? category : single.category}>
                    Beverages
                  </option> */}
                  <option value="">Salt</option>
                </select>
              </div>

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                // value={content ? content : single.content}
                // onChange={(e) => setContent(e.target.value)}
                placeholder="Description"
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              ></textarea>

              <button
                className="w-full bg-blue-600 p-3 text-white rounded-lg cursor-pointer"
                onClick={(e) => {
                  //   e.preventDefault();
                  //   console.log("single cliked");
                  //   updateMenus(single._id);
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
    </div>
  );
};

export default Blog;
