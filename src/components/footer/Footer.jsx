import Logo1 from "../../assets/images/dessert_1.png.webp";

const Footer = () => {
  return (
    <footer className=" bg-slate-300 flex flex-col gap-8">
      <div className="container  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
        <div className="mt-[30px] flex flex-col gap-6">
          <div>
            <h1 className=" text-sm font-[800] ">Logo</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              quibusdam error nulla voluptatum,
            </p>
          </div>
          <div className="flex gap-4">
            <p>Icon1</p>
            <p>Icon2</p>
            <p>Icon3</p>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-6">
          <div>
            <h1 className=" text-sm font-[800] ">Support</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 cursor-pointer">
              <li>Account</li>
              <li>Support Center</li>
              <li>Feedback</li>
              <li>Accebility</li>
            </ul>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-6">
          <div>
            <h1 className=" text-sm font-[800] ">Our Menu</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-3 cursor-pointer">
              <li>Coffee</li>
              <li>Detot</li>
              <li>Cooktail Juice</li>
              <li>Smoothies</li>
              <li>Milk Shakes</li>
              <li>Protein Shakes</li>
            </ul>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-6">
          <div>
            <h1 className=" text-sm font-[800] ">Useful Links</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-3 cursor-pointer">
              <li>Payment & Tax</li>
              <li>Terms od Service</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-6">
          <div>
            <h1 className=" text-sm font-[800] ">Get In Touch</h1>
          </div>
          <div>
            <p>kellerblissmothies@outlook.com</p>
            <p>+250 788 671 767</p>
          </div>
        </div>
      </div>
      <div className=" bg-white ">
        <div className="container h-[60px] lg:flex lg:items-center lg:justify-between md:flex items-center md:justify-between ">
          <div>
            <p>Copyright &copy; 2023 Blissmothies</p>
          </div>

          <div className="flex items-center gap-4 sm:mt-4">
            <p>
              <img src={Logo1} alt="" className="h-10" />
            </p>
            <p>
              <img src={Logo1} alt="" className="h-10" />
            </p>
            <p>
              <img src={Logo1} alt="" className="h-10" />
            </p>
            <p>
              <img src={Logo1} alt="" className="h-10" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
