import { useState, useEffect } from "react";
import { FaBirthdayCake, FaBusinessTime } from "react-icons/fa";
// import { GiPartyPopper } from "react-icons/gi";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
const Services = () => {
  const [loading, setIsloading] = useState(false);
  // const icon = {
  //   iconz: <GiPartyPopper className="text-3xl font-[800] text-btnColor" />,
  //   iconz: <FaBusinessTime className="text-3xl font-[800] text-btnColor" />,
  //   iconz: <FaBirthdayCake className="text-3xl font-[800] text-btnColor" />,
  // };
  const [service, setServices] = useState([]);
  console.log("Services", service);
  useEffect(() => {
    const getAll = async () => {
      try {
        setIsloading(true);
        const getEvent = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/services/read"
        );
        const response = await getEvent.data.data;
        setServices(response);
        setIsloading(false);
      } catch (error) {
        console.log("Failed to Get Services", error);
        setIsloading(false);
      }
    };
    getAll();
  }, []);
  return (
    <section>
      <div className="container flex flex-col">
        <h2 className="text-2xl font-bold text-center">Catering Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {service.length ? (
            service.map((item, index) => (
              <div
                className="flex flex-col items-center text-center gap-6"
                key={index}
              >
                <FaBirthdayCake className="text-3xl font-[800] text-btnColor" />
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p>{item.content}</p>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center w-full text-center mx-auto  ">
              <PulseLoader color="#F06C05" loading={loading} size={10} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
