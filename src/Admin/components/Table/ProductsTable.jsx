import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import { useEffect, useState } from "react";
const ProductsTable = () => {
  // getProduct
  const [product, setProduct] = useState([]);
  const [loading, setIsloading] = useState(false);
  console.log("Product items", product);
  useEffect(() => {
    const getMenu = async () => {
      try {
        setIsloading(true);
        const getMenuData = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/menu/read"
        );
        const response = await getMenuData.data.data;
        if (response) {
          setIsloading(false);
        }
        setProduct(response);
      } catch (error) {
        setIsloading(false);
        console.log("Failed to fetch Data", error);
      }
    };
    getMenu();
  }, []);

  // modal
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

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
      const removeData = await axios.delete(
        `https://blissmothies.onrender.com/blissmothies/menu/delete/${id}`,
        config
      );
      if (removeData.status === 200) {
        alert(removeData.data.message);
      }
    } catch (error) {
      console.log("Failed To Delete Data", error);
    }
  };
  const [single, setSingle] = useState({});
  console.log("Singlezz", single);
  const singleProduct = async () => {
    try {
      const singlePost = await axios.get(
        `https://blissmothies.onrender.com/blissmothies/menu/read/${id}`
      );
      const result = await singlePost.data.data;
      setSingle(result);
    } catch (error) {
      console.log("Error while getin Single blog", error);
    }
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
                {product.length ? (
                  product.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b  transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        <div className="flex items-center gap-2">
                          <img src={item.image} alt="" className="w-12" />
                          <div className=" text-xs font-medium ">
                            <h2>{item.title}</h2>
                            <span>#{item.category}s</span>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Zxus</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.category}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        ${item.price}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.createdAt}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Available</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-1">
                          <div
                            className="rounded-sm py-2 px-2 bg-blue-600 text-white w-fit"
                            onClick={handleModal}
                          >
                            <FiEdit />
                          </div>
                          <div
                            className="rounded-sm py-2 px-2 bg-btnColor text-white w-fit"
                            onClick={(e) => {
                              console.log("hello Stu");
                              deleteData(item._id);
                            }}
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className=" mt-5 flex justify-center items-center w-full text-center  ">
                    <PulseLoader color="#F06C05" loading={loading} size={10} />
                  </div>
                )}
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
                value={single.image}
              />
              <p className="lg:block hidden absolute">Upload Product Image</p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-2">
              <input
                type="text"
                placeholder="Title"
                value={single.title}
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
