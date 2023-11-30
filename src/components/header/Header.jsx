import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../../assets/navLinks";
import { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import logo from "../../assets/images/logok.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
const Header = () => {
  const storedImage = localStorage.getItem("userP");
  const name = localStorage.getItem("userName");
  const imageUrl = storedImage
    ? storedImage
    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  const toggleMenu = () => menuRef.current.classList.toggle("show-menu");
  const isAuthenticated = localStorage.getItem("token") !== null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userP");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userGender");
    window.location.reload();
  };
  const [open, isOpen] = useState(false);
  const handleToggle = () => {
    isOpen(!open);
  };
  return (
    <>
      <header className="text-white bg-footerColor  " ref={headerRef}>
        <div className="container flex justify-between items-center h-[100px]">
          <div className="lg:w-28 lg:h-28 w-24 h-24">
            <Link to="/home">
              <img src={logo} alt="" className="" />
            </Link>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex gap-8 items-center menu">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? " text-[16px] font-[600]  leading-7 text-btnColor "
                        : " text-[16px] font-[500]  leading-7 text-textColor hover:text-btnColor "
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
              {isAuthenticated ? (
                <Link onClick={handleLogout} className="lg:hidden">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="lg:hidden">
                  Login
                </Link>
              )}

              {isAuthenticated ? (
                <Link
                  to="/carts-items"
                  className="bg-btnColor rounded-lg px-2 py-2  lg:hidden "
                >
                  <FaCartPlus className="text-lg font-bold" />
                </Link>
              ) : null}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Link
                onClick={handleToggle}
                className="text-[16px] font-[600]  leading-7 text-white hover:text-btnColor  gap-4 items-center hidden lg:flex relative "
              >
                <div className=" hidden lg:flex w-10 h-10 rounded-full bg-white cursor-pointer  items-center justify-center">
                  <img src={imageUrl} alt="" className="w-9 h-9 rounded-full" />
                </div>
                {open && (
                  <div className=" absolute right-0 px-2 py-2 bg-white rounded-md mt-32 text-black flex flex-col items-start gap-2 shadow-md ">
                    <p className=" whitespace-nowrap text-sm ">{name}</p>
                    <p
                      className=" flex items-center gap-1 text-red-500 text  "
                      onClick={handleLogout}
                    >
                      <RiLogoutCircleRLine className=" text-2xl font-extrabold " />
                      Logout
                    </p>
                  </div>
                )}
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-[16px] font-[600]  leading-7 text-white hover:text-btnColor hidden lg:block "
              >
                Login
              </Link>
            )}
            {isAuthenticated ? (
              <Link
                to="/carts-items"
                className="bg-btnColor rounded-lg px-2 py-2 hidden lg:block "
              >
                <FaCartPlus className="text-lg font-bold" />
              </Link>
            ) : null}

            <Link to="/book-table">
              <span className="btn">Book table</span>
            </Link>

            <span
              className="lg:hidden px-1 py-1 bg-btnColor rounded-xl"
              onClick={toggleMenu}
            >
              <BiMenu className="h-8 w-8 cursor-pointer text-white" />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
