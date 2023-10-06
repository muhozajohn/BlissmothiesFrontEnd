  import logo from "../../assets/images/logok.png";
import { FaWhatsapp, FaTwitter, FaInstagram,FaFacebook,FaYoutube,FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" bg-footerColor flex flex-col gap-8">
      <div className="container  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
        <div className="mt-[30px] flex flex-col gap-6">
          <div className="flex flex-col">
            <h1 className=" text-sm font-[800] text-white">
              Blissfull Smoothies
            </h1>
            <div className="mt-4">
              <img src={logo} alt="" className="lg:w-1/2 ml-7 w-20 " />
            </div>
          </div>
          <div>
            <h4 className=" text-btnColor text-sm">Payless expect More</h4>
            <p className="mt-4 text-white text-sm">
              Food may be essential as fuel for the soul.
            </p>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-6">
          <div>
            <h1 className=" text-sm font-[800] text-white">Adress</h1>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-sm">Via Gisiment Street,</p>
            <p className="text-white text-sm">KG 18 Ave, </p>
            <p className="text-white text-sm">Call +250 788 671 767 </p>
            <p className="text-white text-[13px]">
              kellerblissfullsmoothies@outlook.com{" "}
            </p>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-6 text-white">
          <div>
            <h1 className=" text-sm font-[800] ">CONTACT US</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <span className="text-btnColor text-[1.7rem] font-[800]">
                <FaWhatsapp />
              </span>
              <p className=" text-sm">+250 788 671 767</p>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-btnColor text-[1.7rem] font-[800]">
                <FaTwitter />
              </span>
              <p className=" text-sm">blissfullsmoot1</p>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-btnColor text-[1.7rem] font-[800]">
                <FaInstagram />
              </span>
              <p className=" text-[13px]">kellerblissfulls</p>
            </div>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-6 text-white">
          <div>
            <h1 className=" text-sm font-[800] text-white ">
              Useful Links
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-3 cursor-pointer">
              <li className="text-sm">
                <Link to="/payment">Payment & Tax</Link>
              </li>
              <li className="text-sm">
                <Link to="/about">Terms and Service</Link>
              </li>
              <li className="text-sm">
                <Link to="/carts-items">Privacy Policy</Link>
              </li>
              <li className="text-sm">
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-6 text-white">
          <div>
            <h1 className=" text-sm font-[800] ">Get In Touch</h1>
          </div>
          <div>
            <h5 className="mb-4">Working Hours </h5>
            <div className="flex flex-col gap-3">
              <p className="text-sm">Monday – Friday:09:00 – 23:30</p>
              <p className="text-sm">Saturday:09:00 – 00:30</p>
              <p className="text-sm">Sunday:11:00 – 00:00 </p>
              <p className="text-sm">*We are closed on holidays.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white ">
        <div className="container py-5  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1  gap-3">
          <div>
            <p>Copyright &copy; {year} Blissmothies</p>
          </div>
          <div className="flex justify-center"><p>Special Thanks To &copy; <Link to="muhoza.vercel.app" target="_blanck">Muhoza John</Link> </p></div>

          <div className="flex items-center gap-4 justify-end">
            <span className="text-[1.6rem] bg-btnColor text-white px-1 py-1 rounded cursor-pointer hover:text-footerColor">
              <Link to="muhoza" target="_blanck"><FaInstagram /></Link>
            </span>
            <span className="text-[1.6rem] bg-btnColor text-white px-1 py-1 rounded cursor-pointer hover:text-footerColor">
              <Link to="" target="_blanck"><FaTwitter /></Link>
            </span>
            <span className="text-[1.6rem] bg-btnColor text-white px-1 py-1 rounded cursor-pointer hover:text-footerColor">
              <Link to="" target="_blanck"><FaFacebook /></Link>
            </span>
            <span className="text-[1.6rem] bg-btnColor text-white px-1 py-1 rounded cursor-pointer hover:text-footerColor">
              <Link to="" target="_blanck"><FaYoutube /></Link>
            </span>
            <span className="text-[1.6rem] bg-btnColor text-white px-1 py-1 rounded cursor-pointer hover:text-footerColor">
              <Link to="" target="_blanck"><FaLinkedin /></Link>
            </span>
          </div>
        </div>
        {/* <div className="w-1/2 mx-auto text-center mt-4 mb-4"> <p>coded by &copy; <Link to="muhoza.vercel.app" target="_blanck">Muhoza John</Link> </p> </div> */}
      </div>
    </footer>
  );
};

export default Footer;
