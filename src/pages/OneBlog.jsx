import A from "../assets/images/e.jpg";
import B from "../assets/images/log1.png";
import B1 from "../assets/images/logo-white.png";
import C from "../assets/images/c.jpg";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const OneBlog = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleOpen = () => {
    setisOpen(!isOpen);
  };
  return (
    <section>
      <div className="container flex flex-col gap-10">
        <div>
          <h2 className="text-center lg:text-2xl lg:font-bold mx-auto lg:w-[40vw] w-full text-xl font-semibold">
            Most unhappy customer are our greatest Source of learning
          </h2>
          <div className="lg:py-[3px] lg:w-[10vw] w-[30vw] mx-auto bg-btnColor py-[2px] mt-3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="h-full ">
            <img src={A} alt="" className="h-full w-full rounded-xl" />
          </div>
          <div className="bg-transparent flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <h4 className="text-lg font-bold">Foods, Drinks -</h4>
              <span className="text-sm font-semibold">Jully 2 , 2023</span>
            </div>
            <div className="text-3xl font-bold">
              <h2>Gilled Beef with Eggs</h2>
            </div>
            <div>
              <h2 className="font-bold">Ingridents:</h2>
              <p className="text-sm font-semibold">
                Meats, Eggs, Rice,Tomate....
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam dolorum, sed harum dicta deserunt nobis expedita natus,
                illum non culpa consequuntur architecto fugit deleniti
                dignissimos vitae molestias perspiciatis, quaerat voluptate?
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src={B}
                    alt=""
                    className=" rounded-full h-full w-full "
                  />
                </div>
                <div>
                  <h4 className="text-lg">keller</h4>
                  <p className="text-[10px]">Ceo,Admin</p>
                </div>
              </div>

              {/* <div className="flex flex-col items-center gap-6 "> */}
              <div
                className=" bg-orange-300 rounded-s w-full px-3 py-3 lg:w-[32vw] cursor-pointer"
                onClick={handleOpen}
              >
                <div className="flex items-center justify-between ">
                  <h2 className="text-sm font-bold text-btnColor">Comments</h2>
                  <h2
                    className={` ${
                      isOpen && "border-none bg-btnColor  text-white"
                    } flex h-7 w-7 items-center text-white justify-center rounded border border-solid border-btnColor lg:h-7 lg:w-8`}
                  >
                    {" "}
                    {isOpen ? (
                      <AiOutlineMinus className=" text-2xl font-[800]" />
                    ) : (
                      <AiOutlinePlus className=" text-2xl font-[800]" />
                    )}
                  </h2>
                </div>
                {isOpen ? (
                  <div className="mt-6 px-3 py-3">
                    {" "}
                    <div>
                      <h4 className="text-lg">keller</h4>
                      <p className="text-[10px]">Ceo,Admin</p>
                    </div>
                  </div>
                ) : null}
                {/* </div> */}
              </div>
            </div>
            <div className="flex flex-col">
              <form action="" className="flex flex-col gap-4">
                <label className="text-sm font-medium">
                  Leave Your Comment
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="6"
                  className=" py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm "
                ></textarea>
                <button type="submit" className="btn">
                  {" "}
                  Submit{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Recents Post's</h2>
          <div className="flex flex-col  gap-3 lg:flex-row  ">
            <div className="w-full lg:w-[60vw] flex flex-col gap-3 ">
              <div className="py-5 bg-white lg:h-[300px] overflow-hidden bg bg-cover bg-no-repeat px-5 flex flex-col gap-6 text-white">
                <h2 className=" text-white font-bold text-xl">Drinks</h2>
                <p className="text-lg font-medium">
                  Drinks are beverages that people consume for various reasons,
                  including hydration, enjoyment, socializing, and cultural
                  traditions
                </p>
                <p className="text-sm font-[600]">
                  Drinks play a significant role in human culture, providing
                  nourishment, enjoyment, and social connections. It's important
                  to make informed choices about the beverages you consume to
                  promote your well-being.
                </p>
                <Link to="/book-table">
                  <button className="btn w-fit h-fit">
                    <BsArrowRight className="font-bold text-xl" />
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="py-5 bg-white lg:h-[300px] overflow-hidden bgg bg-cover bg-no-repeat px-5 flex flex-col gap-4">
                  <h2 className=" text-white font-bold text-xl">Foods</h2>
                  <p className="text-white text-sm">
                    Foods are an essential part of our lives, providing
                    sustenance, pleasure, and cultural significance,
                  </p>
                  <p className="text-white text-sm">
                    Food not only nourishes our bodies but also serves as a
                    universal language that connects people from different
                    backgrounds
                  </p>
                  <Link to="/book-table">
                    <button className="btn w-fit h-fit">
                      <BsArrowRight className="font-bold text-xl" />
                    </button>
                  </Link>
                </div>
                <div className="py-5 bg-white lg:h-[300px] overflow-hidden bgg bg-cover bg-no-repeat px-5 flex flex-col gap-4">
                  <h2 className=" text-white font-bold text-xl">Party's</h2>
                  <p className="text-white text-sm">
                    "Parties are vibrant social gatherings that bring people
                    together to celebrate various occasions, from birthdays and
                    weddings to holidays and milestones. "
                  </p>
                  <p className="text-white text-sm">
                    They create a lively atmosphere filled with laughter, music,
                    and delicious food and drinks,dancing, and lively
                    conversations.
                  </p>

                  <Link to="/book-table">
                    <button className="btn w-fit h-fit">
                      <BsArrowRight className="font-bold text-xl" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white  w-full lg:w-[40vw] py-4 px-4 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="w-full flex flex-col gap-3">
                  <h2 className="text-lg font-semibold">Foods, And Drinks</h2>
                  <div className="flex flex-row gap-3 lg:flex-row">
                    <div className="w-[150px] h-[100px]">
                      <img src={C} alt="" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Natus, similique.
                        </p>
                      </div>
                      <div className="flex gap-3 ">
                        <div className="w-[40px] h-[40px] rounded-full">
                          <img
                            src={B1}
                            alt=""
                            className="w-full h-full rounded-full"
                          />
                        </div>
                        <div className="flex flex-col ">
                          <h1 className="text-[13px] font-extrabold">Zxus</h1>
                          <small className="text-[10px] font-bold">
                            Developer
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 lg:flex-row">
                    <div className="w-[150px] h-[100px]">
                      <img src={A} alt="" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Natus, similique.
                        </p>
                      </div>
                      <div className="flex gap-3 ">
                        <div className="w-[40px] h-[40px] rounded-full">
                          <img
                            src={B}
                            alt=""
                            className="w-full h-full rounded-full"
                          />
                        </div>
                        <div className="flex flex-col ">
                          <h1 className="text-[13px] font-extrabold">
                            Keller{" "}
                          </h1>
                          <small className="text-[10px] font-bold">
                            Founder, ceo
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <h2 className="text-lg font-semibold">Party, And Events</h2>
                  <div className="flex flex-row gap-3 lg:flex-row">
                    <div className="w-[150px] h-[100px]">
                      <img src={C} alt="" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Natus, similique.
                        </p>
                      </div>
                      <div className="flex gap-3 ">
                        <div className="w-[40px] h-[40px] rounded-full">
                          <img
                            src={B1}
                            alt=""
                            className="w-full h-full rounded-full"
                          />
                        </div>
                        <div className="flex flex-col ">
                          <h1 className="text-[13px] font-extrabold">Zxus</h1>
                          <small className="text-[10px] font-bold">
                            Developer
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 lg:flex-row">
                    <div className="w-[150px] h-[100px]">
                      <img src={A} alt="" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Natus, similique.
                        </p>
                      </div>
                      <div className="flex gap-3 ">
                        <div className="w-[40px] h-[40px] rounded-full">
                          <img
                            src={B}
                            alt=""
                            className="w-full h-full rounded-full"
                          />
                        </div>
                        <div className="flex flex-col ">
                          <h1 className="text-[13px] font-extrabold">
                            Keller{" "}
                          </h1>
                          <small className="text-[10px] font-bold">
                            Founder, ceo
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="/book-table">
                    <div className="w-[200px] btn flex justify-between items-center">
                      <p>view More</p>{" "}
                      <BsArrowRight className="font-bold text-xl" />{" "}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneBlog;
