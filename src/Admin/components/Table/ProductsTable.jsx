import Pd from "../../../assets/images/a.jpg";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
const ProductsTable = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light cursor-pointer">
              <thead className="border-b font-medium dark:border-neutral-500  hover:bg-neutral-800 hover:text-white">
                <tr>
                  <th
                    scope="col"
                    // colSpan="2"
                    className="whitespace-nowrap px-6 py-4"
                  >
                    Product Name
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Product Owner
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Category
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Price
                  </th>{" "}
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Created On
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b  transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <div className="flex items-center gap-4">
                      <img src={Pd} alt="" className="h-8" />
                      <div>
                        <h2>Milk shake</h2>
                        <span>#dinners</span>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Zxus</td>
                  <td className="whitespace-nowrap px-6 py-4">Dinner</td>
                  <td className="whitespace-nowrap px-6 py-4">$20</td>
                  <td className="whitespace-nowrap px-6 py-4">01/ 02 /2023</td>
                  <td className="whitespace-nowrap px-6 py-4">Available</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-1">
                      <div
                        className="rounded-sm py-2 px-2 bg-blue-600 text-white w-fit"
                        onClick={handleModal}
                      >
                        <FiEdit />
                      </div>
                      <div className="rounded-sm py-2 px-2 bg-btnColor text-white w-fit">
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
      {modal && (
        <div className="bg-slate-900/70 fixed backdrop-blur-sm left-0 top-0 w-screen h-screen z-[200] flex justify-center items-center">
          <form className="bg-white w-[90%] md:w-[60%] p-6 rounded-xl flex flex-col md:flex-row gap-6">
            <div className="w-full py-2 px-2 md:w-1/2 flex justify-center items-center border border-solid border-gray-500 rounded-sm">
              <input
                type="file"
                className=" w-full h-full "
                id="imageInput"
                accept="image/*"
              />
              <p className="lg:block hidden absolute">Upload Product Image</p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-2">
              <input
                type="text"
                placeholder="Title"
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              />
              <div className="flex flex-col lg:flex-row items-center gap-4 justify-between ">
                <input
                  type="text"
                  placeholder="Price"
                  className=" w-full lg:w-1/2  py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
                />
                <select
                  name=""
                  id=""
                  className="w-full lg:w-1/2 py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
                >
                  <option value="">--- Category ---</option>
                  <option>Breakfast</option>
                  <option>Launch</option>
                  <option>Desserts</option>
                  <option>Dinner</option>
                  <option>Beverages</option>
                </select>
              </div>

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Description"
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              ></textarea>
              <input
                type="submit"
                className="w-full bg-blue-600 p-3 text-white rounded-lg cursor-pointer"
                value={`Add New Product`}
              />
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

export default ProductsTable;
