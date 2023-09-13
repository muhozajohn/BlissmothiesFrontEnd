import maap from "../../assets/images/map.jpg";

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
       
          <div className="h-1/2 lg:h-[80vh] overflow-hidden ">
            <img src={maap} alt="" className="rounded-xl w-full h-full " />
          </div>
          <div className="flex flex-col gap-6 md:mt-[-28rem] lg:mt-0  mt-[-13rem]">
            <p className="text-xl font-bold">Contact Us</p>
            <form action="" className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm  "
              />
              <input
                type="text"
                placeholder="Your Email"
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm "
              />
              <input
                type="text"
                placeholder="SubJect"
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm "
              />
              <textarea
                name=""
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
                className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
              ></textarea>
              <div className="btn w-fit cursor-pointer rounded-sm">
                Send Message
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
