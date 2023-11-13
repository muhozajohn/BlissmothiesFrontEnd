import A from "../../assets/images/chiefa.jpg";
import B from "../../assets/images/chiefb.jpg";
import C from "../../assets/images/chiefc.jpg";
import D from "../../assets/images/overlay.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Testimonial = () => {
  const [testimonials, Settestimonials] = useState([]);
  console.log("All test", testimonials);
  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const getAll = await axios.get(
          "http://localhost:4300/blissmothies/Testmoniols/read"
        );
        const reaponse = await getAll.data.data;
        Settestimonials(reaponse);
      } catch (error) {
        console.log("Failed to Getin ", error);
      }
    };
    getTestimonials();
  }, []);
  return (
    <section className="w-full bg bg-cover bg-no-repeat bg-center ">
      <div className="container mt-0">
        <div className="text-center lg:mb-20 mb-10">
          <p className="text-sm font-bold">Testimanials</p>
          <h2 className="font-[800] text-xl">
            Our Lovely Customers{" "}
            <span className="text-white">Testimonials</span>
          </h2>
          <div className="w-[20vw] mt-3 p-[2.5px] bg-btnColor mx-auto"></div>
        </div>
        <div className="grid grid-cols-1  gap-6 lg:grid-cols-2">
          <div className="py-3 flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium">Testimonials</p>
              <h2 className="text-2xl font-bold">
                Satisfied <span className="text-white">Customers</span>{" "}
              </h2>
            </div>

            <div>
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  780: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                }}
                className="swiper"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className=" w-full bg-bgColor py-5 px-5 rounded-xl">
                      <div className="w-[4rem] h-[4rem] bg-white rounded-full px-1 py-1 flex items-center justify-center">
                        <img
                          src={item.profile}
                          alt=""
                          className=" rounded-full w-full h-full"
                        />
                      </div>
                      <div>
                        <h2 className="font-[800] text-2xl">{item.name}</h2>
                        <small className="text-sm font-medium">
                          {item.title}
                        </small>
                      </div>
                      <div className="text-[4rem] font-[800] ">“</div>
                      <div className="mt-[-1rem]">
                        <p className=" leading-8 font-[500]">
                          “ {item.comment}”
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className=" flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium">Galleries</p>
              <h2 className="text-2xl font-bold">
                Foods,Chef <span className="text-white">Photo Galleries</span>{" "}
              </h2>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mt-3">
              <div className="h-48 w-full overflow-hidden flex justify-center items-center rounded-xl">
                <img src={B} alt="" className=" rounded-xl w-full" />
              </div>
              <div className="h-48 w-full overflow-hidden flex justify-center items-center rounded-xl">
                <img src={D} alt="" className=" rounded-xl w-full " />
              </div>
              <div className="h-48 w-full overflow-hidden flex justify-center items-center rounded-xl">
                <img src={C} alt="" className=" rounded-xl w-full" />
              </div>
              <div className="h-48 w-full overflow-hidden flex justify-center items-center rounded-xl">
                <img src={A} alt="" className=" rounded-xl w-full" />
              </div>
            </div>
            <Link to="/gallery">
              <div className="btn w-fit mt-2">More Galleries</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
