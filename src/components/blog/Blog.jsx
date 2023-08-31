import A from "../../assets/images/a.jpg";
import B from "../../assets/images/chiefa.jpg";
import C from "../../assets/images/chiefb.jpg";
import D from "../../assets/images/chiefc.jpg";
import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <section>
      <div className="container flex flex-col gap-6">
        <h1 className="font-bold text-center text-2xl">Blogs</h1>
        <div className="border border-orange-500 w-8 mt-[-1rem]  mx-auto"></div>
        <h2 className="font-extrabold text-center text-3xl">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <Link to="/blog">
            <div className="flex flex-col gap-6 bg-white rounded-xl">
              <div className=" h-[200px] overflow-hidden">
                <img src={A} alt="" className="w-full h-full rounded-t-xl" />
              </div>
              <div className="px-3">
                <p className="text-gray-500 flex justify-between items-center text-xs font-semibold">
                  {" "}
                  <span>sept. 06 , 2019</span> <span>admin</span>{" "}
                </p>
                <h2 className="text-sm font-extrabold">
                  Best Food in East Africa
                </h2>
              </div>
              <div className="px-3 pb-5 flex items-center justify-between">
                <h4 className="text-sm font-semibold ">Read More</h4>
                <span className="flex items-center gap-3">
                  {/* <FaCommentDollar /> */}
                  <FaComments className="text-gray-500" />
                  <p className="text-xs">20+</p>
                </span>
              </div>
            </div>
          </Link>
          <Link to="/blog">
            <div className="flex flex-col gap-6 bg-white rounded-xl">
              <div className=" h-[200px] overflow-hidden">
                <img src={B} alt="" className="w-full h-full rounded-t-xl" />
              </div>
              <div className="px-3">
                <p className="text-gray-500 flex justify-between items-center text-xs font-semibold">
                  {" "}
                  <span>sept. 06 , 2019</span> <span>admin</span>{" "}
                </p>
                <h2 className="text-sm font-extrabold">
                  Best Food in East Africa
                </h2>
              </div>
              <div className="px-3 pb-5 flex items-center justify-between">
                <h4 className="text-sm font-semibold ">Read More</h4>
                <span className="flex items-center gap-3">
                  {/* <FaCommentDollar /> */}
                  <FaComments className="text-gray-500" />
                  <p className="text-xs">20+</p>
                </span>
              </div>
            </div>
          </Link>
          <Link to="/blog">
            <div className="flex flex-col gap-6 bg-white rounded-xl">
              <div className=" h-[200px] overflow-hidden">
                <img src={C} alt="" className="w-full h-full rounded-t-xl" />
              </div>
              <div className="px-3">
                <p className="text-gray-500 flex justify-between items-center text-xs font-semibold">
                  {" "}
                  <span>sept. 06 , 2019</span> <span>admin</span>{" "}
                </p>
                <h2 className="text-sm font-extrabold">
                  Best Food in East Africa
                </h2>
              </div>
              <div className="px-3 pb-5 flex items-center justify-between">
                <h4 className="text-sm font-semibold ">Read More</h4>
                <span className="flex items-center gap-3">
                  {/* <FaCommentDollar /> */}
                  <FaComments className="text-gray-500" />
                  <p className="text-xs">20+</p>
                </span>
              </div>
            </div>
          </Link>
          <Link to="/blog">
            <div className="flex flex-col gap-6 bg-white rounded-xl">
              <div className=" h-[200px] overflow-hidden">
                <img src={D} alt="" className="w-full h-full rounded-t-xl" />
              </div>
              <div className="px-3">
                <p className="text-gray-500 flex justify-between items-center text-xs font-semibold">
                  {" "}
                  <span>sept. 06 , 2019</span> <span>admin</span>{" "}
                </p>
                <h2 className="text-sm font-extrabold">
                  Best Food in East Africa
                </h2>
              </div>
              <div className="px-3 pb-5 flex items-center justify-between">
                <h4 className="text-sm font-semibold ">Read More</h4>
                <span className="flex items-center gap-3">
                  {/* <FaCommentDollar /> */}
                  <FaComments className="text-gray-500" />
                  <p className="text-xs">20+</p>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="border border-orange-700 rounded-xl px-4 py-1 w-full lg:w-1/2 mx-auto flex justify-center items-center gap-1">
          <div className=" bg-white border border-orange-500 cursor-pointer font-medium py-1 px-3 rounded-lg text-btnColor hover:bg-btnColor hover:text-white hover:border-white">
            1
          </div>
          <div className=" bg-white border border-orange-500 cursor-pointer font-medium py-1 px-3 rounded-lg text-btnColor hover:bg-btnColor hover:text-white hover:border-white">
            2
          </div>
          <div className=" bg-white border border-orange-500 cursor-pointer font-medium py-1 px-3 rounded-lg text-btnColor hover:bg-btnColor hover:text-white hover:border-white">
            3
          </div>
          <div className=" bg-white border border-orange-500 cursor-pointer font-medium py-1 px-3 rounded-lg text-btnColor hover:bg-btnColor hover:text-white hover:border-white">
            4
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
