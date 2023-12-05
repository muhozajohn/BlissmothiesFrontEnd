import Menu from "../components/Card/Menu";
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
const Snacks = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    const getAll = async () => {
      try {
        setIsloading(true);
        const getMenu = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/menu/read"
        );
        const response = await getMenu.data.data;
        const Launch = response.filter((menu) => menu.category === "Snacks");
        setMenu(Launch);
        setIsloading(false);
      } catch (error) {
        console.log("Failed to Get Menu", error);
        setIsloading(false);
      }
    };
    getAll();
  }, []);
  return (
    <section>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {menu.length ? (
          menu.map((item, index) => <Menu key={index} item={item} />)
        ) : (
          <div className="flex justify-center items-center w-full text-center  ">
            <PulseLoader color="#F06C05" loading={loading} size={10} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Snacks;
