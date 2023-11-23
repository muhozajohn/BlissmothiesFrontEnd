import { useEffect, useState } from "react";
import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import formatDate from "../date/Date";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setIsloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

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

  // pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = Array.from(
    { length: Math.ceil(blog.length / postsPerPage) },
    (_, i) => i + 1
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <div className="container flex flex-col gap-6">
        <h1 className="font-bold text-center text-2xl">Blogs</h1>
        <div className="border border-orange-500 w-8 mt-[-1rem] mx-auto"></div>
        <h2 className="font-extrabold text-center text-3xl">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {currentPosts.length ? (
            currentPosts.map((item, index) => (
              <Link
                key={index}
                to="/blog"
                onClick={(e) => {
                  localStorage.setItem("blogId", item._id);
                }}
              >
                <div className="flex flex-col gap-6 bg-white rounded-xl">
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full rounded-t-xl"
                    />
                  </div>
                  <div className="px-3">
                    <p className="text-gray-500 flex justify-between items-center text-xs font-semibold">
                      <span> {formatDate(item.createdAt)} </span>
                      <span>{item.author.fullName}</span>
                    </p>
                    <h2 className="text-sm font-extrabold">{item.title}</h2>
                  </div>
                  <div className="px-3 pb-5 flex items-center justify-between">
                    <h4 className="text-sm font-semibold ">Read More</h4>
                    <span className="flex items-center gap-3">
                      <FaComments className="text-gray-500" />
                      <p className="text-xs">20+</p>
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="mt-5 flex justify-center items-center w-full text-center">
              <PulseLoader color="#F06C05" loading={loading} size={10} />
            </div>
          )}
        </div>
        <div className="border border-orange-700 rounded-xl px-4 py-1 w-full lg:w-1/2 mx-auto flex justify-center items-center gap-1">
          {pageNumbers.map((number) => (
            <div
              key={number}
              className={`bg-white  border border-orange-500 cursor-pointer font-medium py-1 px-3 rounded-lg text-btnColor ${
                currentPage === number
                  ? "bg-orange-800 text-white"
                  : "hover:bg-btnColor hover:text-white hover:border-white"
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
