import A from "../../assets/images/chiefa.jpg";
import B from "../../assets/images/chiefb.jpg";
import C from "../../assets/images/chiefc.jpg";
import D from "../../assets/images/overlay.png";
import E from "../../assets/images/e.jpg";
import F from "../../assets/images/hd-bg.png";

const Testimonial = () => {
  return (
    <section className="lg:h-screen w-full h-screen bg-[url(./assets/images/overlay.png)] bg-cover  bg-no-repeat relative">
      <div className="absolute w-full h-full bg-[#E7C584] bg-opacity-75 top-0">
        <div className="container mt-20">
          <div className="grid grid-cols-1  gap-6 lg:grid-cols-2">
            <div className="w-[40vw] px-5 py-3 flex flex-col gap-6 ">
              <div>
                <p className="text-xl font-medium">Testimonials zxus</p>
                <h2 className="text-2xl font-bold">
                  Satisfied <span className="text-white">Customers</span>{" "}
                </h2>
              </div>
              <div className="w-[4rem] h-[4rem] bg-textColor rounded-full px-1 py-1 flex items-center justify-center">
                <img src={C} alt="" className=" rounded-full w-full h-full" />
              </div>
              <div>
                <h2 className="font-[800] text-2xl">Keller Fencer</h2>
                <small className="text-sm font-medium">Ceo,Founder</small>
              </div>
              <div className="text-[4rem] font-[800] ">“</div>
              <div className="mt-[-3rem]">
                <p className=" leading-8 ">
                  “ As CEO of a coffee shop, I prioritize staying current with
                  industry trends and fostering a positive work environment for
                  my staff to ensure our continued success.”
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xl font-medium">Galleries</p>
                <h2 className="text-2xl font-bold">
                  Satisfied <span className="text-white">Photo Galleries</span>{" "}
                </h2>
              </div>
              {/* <div className="w-full gap-1 columns-1 md:columns-2 lg:columns-3 xl:columns-5 space-y-1"> */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                <img src={B} alt="" className=" rounded-xl " />
                <img src={D} alt="" className=" rounded-xl " />
                {/* <img src={C} alt="" className=" rounded-xl " /> */}
                {/* <img src={A} alt="" className=" rounded-xl " />
                <img src={B} alt="" className=" rounded-xl " />
                <img src={D} alt="" className=" rounded-xl " />
                <img src={C} alt="" className=" rounded-xl " />
                <img src={A} alt="" className=" rounded-xl " />
                <img src={E} alt="" className=" rounded-xl " />
                <img src={F} alt="" className=" rounded-xl " /> */}
              </div>
              <div className="btn w-fit mt-2">More Galleries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
