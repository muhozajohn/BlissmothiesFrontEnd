import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../../assets/navLinks";
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header className="text-black ">
        <div className="container flex justify-between items-center h-[100px]">
          <div>
            {" "}
            <h1 className="text-[4rem] font-[800]">
              Meals<span className=" text-btnColor  rounded-full">.</span>
            </h1>{" "}
          </div>
          <ul className="flex gap-8 items-center">
            {navLinks.map((link, index) => {
              return (
                <li>
                  {" "}
                  <Link to={link.path} key={index}>
                    {link.display}
                  </Link>{" "}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-overLayColor cursor-pointer flex items-center justify-center">
              <FaUser className="text-btnColor" />
            </div>
            <div>
              <Link to="/book-table">
                <button className="bg-btnColor text-white py-2 px-5 rounded-full cursor-pointer">
                  Book Table
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
