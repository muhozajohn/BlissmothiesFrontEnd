import BlogModal from "../modals/BlogModal";
import { useEffect, useState } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import BlogBody from "./BlogBody";
const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    const getBlog = async () => {
      try {
        setIsloading(true);
        const getAll = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/blog/read"
        );
        const response = await getAll.data.blog;
        setBlog(response);
        setIsloading(false);
      } catch (error) {
        console.log("Failed to Retrieve Blog", error);
        setIsloading(false);
      }
    };
    getBlog();
  }, []);

  return (
    <div className="flex flex-col gap-5 h-screen ">
      <div className="flex flex-col h-screen ">
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
                      Category
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
                      Action
                    </th>
                  </tr>
                </thead>
                {blog.length ? (
                  blog.map((item, index) => (
                    <BlogBody index={index} blogItem={item} key={index} />
                  ))
                ) : (
                  <div className="mt-5 flex justify-center items-center w-full text-center">
                    <PulseLoader color="#F06C05" loading={loading} size={10} />
                  </div>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
      <BlogModal />
    </div>
  );
};

export default Blog;
