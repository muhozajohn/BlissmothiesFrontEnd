import maap from "../../assets/images/map.jpg"

const Contact = () => {
  return (
    <div>
      <div className=" w-full bgg bg-cover bg-no-repeat bg-center h-[40vh]   top-0 z-[-10] rounded-b-xl">
        <div className=" w-full h-full rounded-b-3xl flex justify-center items-center">
          <h1 className="text-white font-semibold text-5xl">Contact</h1>
        </div>
      </div>
      <section>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full h-1/2 lg:h-[90vh] overflow-hidden ">
            <img src={maap} alt="" className="rounded-xl w-full h-full " />
          </div>
          <div className="flex flex-col gap-6 md:mt-[-28rem] lg:mt-0 mt-[-12rem]">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <form action="" className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-3  py-3 bg-transparent border border-solid border-black placeholder-black  "
              />
              <input
                type="text"
                placeholder="Your Email"
                className="px-3  py-3 bg-transparent border border-solid border-black placeholder-black  "
              />
              <input
                type="text"
                placeholder="SubJect"
                className="px-3  py-3 bg-transparent border border-solid border-black placeholder-black  "
              />
              <textarea
                name=""
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
                className="px-3  py-3 bg-transparent border border-solid border-black placeholder-black "
              ></textarea>
              <div className="btn w-fit cursor-pointer">Send Message</div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
