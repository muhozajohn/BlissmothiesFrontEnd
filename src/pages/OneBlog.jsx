import A from "../assets/images/e.jpg";
import B from "../assets/images/log1.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const OneBlog = () => {
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
          <div className="lg:h-[80vh] overflow-hidden ">
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
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full">
                <img src={B} alt="" className=" rounded-full h-full w-full " />
              </div>
              <div>
                <h4 className="text-lg">keller</h4>
                <p className="text-[10px]">Ceo,Admin</p>
              </div>
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

            <div className="bg-white  w-full lg:w-[40vw]">
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <div className=" bg-black w-full"> 1</div>
                <div className=" bg-green-500 w-full">2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneBlog;
