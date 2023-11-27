import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../../assets/navLinks";
import { useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import logo from "../../assets/images/logok.png";
const Header = () => {
  const storedImage = localStorage.getItem("userP");
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
              <Link to="/login" className="lg:hidden">
                Login
              </Link>
              <Link
                to="/carts-items"
                className="bg-btnColor rounded-lg px-2 py-2  lg:hidden "
              >
                <FaCartPlus className="text-lg font-bold" />
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <div className="md:hidden hidden lg:flex w-10 h-10 rounded-full bg-white cursor-pointer  items-center justify-center">
                <img src={imageUrl} alt="" className="w-9 h-9 rounded-full" />
              </div>
            </Link>
            <Link
              to="/carts-items"
              className="bg-btnColor rounded-lg px-2 py-2 hidden lg:block "
            >
              <FaCartPlus className="text-lg font-bold" />
            </Link>

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
