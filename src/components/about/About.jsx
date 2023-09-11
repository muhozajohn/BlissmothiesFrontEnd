import Chief from "../../pages/Chief";
import Services from "../../pages/Services";

const About = () => {
  return (
    <div>
      <div className=" w-full bgg bg-cover bg-no-repeat bg-center h-[40vh]   top-0 z-[-10] rounded-b-xl">
        <div className=" w-full h-full rounded-b-3xl flex justify-center items-center">
          <h1 className="text-white font-semibold text-5xl">About Us</h1>
        </div>
      </div>
      <section>
        <Chief />
        <Services />
      </section>
    </div>
  );
};

export default About;
