import { useState, useEffect } from "react";
import MenuContainer from "./MenuContainer";
import PulseLoader from "react-spinners/PulseLoader";

const Menu = () => {
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 5000);
  }, []);
  return (
    <div>
      <div className=" w-full bgg bg-cover bg-no-repeat bg-center h-[40vh]   top-0 z-[-10] rounded-b-xl">
        <div className=" w-full h-full rounded-b-3xl flex flex-col gap-3 justify-center items-center">
          <h1 className="text-white font-semibold text-5xl">Specialities</h1>
          <h6 className="text-white text-center font-bold">Menu</h6>
        </div>
      </div>

      {loading ? (
        <section className="flex justify-center items-center w-full text-center  ">
          <PulseLoader color="#F06C05" loading={loading} size={20} />
        </section>
      ) : (
        <MenuContainer />
      )}
    </div>
  );
};

export default Menu;
