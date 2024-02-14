import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Menu from "../components/Card/Menu";
const MenuCards = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setIsloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  useEffect(() => {
    const getAll = async () => {
      try {
        setIsloading(true);
        const getMenu = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/menu/read"
        );
        const response = await getMenu.data.data;
        setMenu(response);
        setIsloading(false);
      } catch (error) {
        console.log("Failed to Get Menu", error);
        setIsloading(false);
      }
    };
    getAll();
  }, []);

  // pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = menu.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = Array.from(
    { length: Math.ceil(menu.length / postsPerPage) },
    (_, i) => i + 1
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="flex flex-col gap-6">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {currentPosts.length ? (
          currentPosts.map((item, index) => <Menu key={index} item={item} />)
        ) : (
          <div className="flex justify-center items-center w-full text-center  ">
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
                ? "!bg-btnColor text-white border-white"
                : "hover:bg-btnColor hover:text-white hover:border-white"
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuCards;
