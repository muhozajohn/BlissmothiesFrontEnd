import { FaBirthdayCake, FaBusinessTime } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const Services = () => {
  return (
    <section>
      <div className="container flex flex-col">
        <h2 className="text-2xl font-bold text-center">Catering Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          <div className="flex flex-col items-center text-center gap-6">
            <FaBirthdayCake  className="text-3xl font-[800] text-btnColor"/>
            <h2 className="font-semibold text-xl">Birthday Party</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              qui dolore reiciendis odio error cumque cum saepe, sint dolorem
              quia?
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-6">
            <FaBusinessTime  className="text-3xl font-[800] text-btnColor"/>
            <h2 className="font-semibold text-xl">Meeting Business</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              qui dolore reiciendis odio error cumque cum saepe, sint dolorem
              quia?
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-6">
           <GiPartyPopper className="text-3xl font-[800] text-btnColor"/>
            <h2 className="font-semibold text-xl">Weeding Party</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              qui dolore reiciendis odio error cumque cum saepe, sint dolorem
              quia?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
