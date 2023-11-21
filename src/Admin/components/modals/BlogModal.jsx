import { IoMdAddCircle } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
const BlogModal = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <button
        className="bg-blue-600 text-white px-5 py-3 rounded-md fixed bottom-0 right-0 m-6 flex gap-2 items-center"
        onClick={handleModal}
      >
        <HiTemplate />
        Add New Blog
        <IoMdAddCircle className=" text-btnColor font-extrabold text-lg " />
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
              />
              <p className="hidden lg:block absolute">Upload Product Image</p>
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
                value={`Create Blog`}
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

export default BlogModal;
