import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../../assets/navLinks";
import { useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/images/logo-no-background.png";
import user from "../../assets/images/d.jpg";
const Header = () => {
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
      <header className="text-white bg-[rgba(0,0,0,0.8)]  " ref={headerRef}>
        {/* <div className="bg-[rgba(0,0,0,0.8)] "> */}
        <div className="container flex justify-between items-center h-[100px]">
          <div className="w-16 h-16">
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
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="md:hidden hidden lg:flex w-12 h-12 rounded-full bg-overLayColor cursor-pointer  items-center justify-center">
              {/* <FaUser className="text-btnColor" /> */}
              <img src={user} alt="" className="w-12 h-12 rounded-full" />
            </div>

            <Link to="/book-table">
              <span className="btn">Book table</span>
              {/* <button className="btn">Book Table</button> */}
            </Link>

            <span
              className="md:hidden px-2 py-2 bg-btnColor rounded-xl"
              onClick={toggleMenu}
            >
              <BiMenu className="h-8 w-8 cursor-pointer text-white" />
            </span>
          </div>
        </div>
        {/* </div> */}
      </header>
    </>
  );
};

export default Header;
