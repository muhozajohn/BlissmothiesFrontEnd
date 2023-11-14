import PART2 from "../assets/images/chiefa.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import Services from "./Services";
const Events = () => {
  const [event, setEvent] = useState([]);
  console.log("Events", event);
  useEffect(() => {
    const getAll = async () => {
      try {
        const getEvent = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/event/read"
        );
        const response = await getEvent.data.data;
        setEvent(response);
      } catch (error) {
        console.log("Failed to Get Event", error);
      }
    };
    getAll();
  }, []);
  return (
    <section>
      <div className="container text-center flex flex-col gap-1">
        <h4 className=" text-gray-500 text-lg font-semibold ">EVENTS</h4>
        <h2 className="text-2xl font-bold">
          Enjoy <span className="text-btnColor">Our Events</span>
        </h2>
        <p className="lg:w-1/2 w-full mx-auto font-semibold ">
          Step into our coffee haven where we invite you to sip, savor, and
          celebrate. With each carefully crafted cup, we transform ordinary
          moments into extraordinary events
        </p>
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
          >
            {event.length ? (
              event.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className=" rounded-xl h-[400px] overflow-hidden ">
                      <img
                        src={item.image}
                        alt=""
                        className="rounded-xl h-full w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-6 text-left">
                      <div>
                        <h5 className="text-btnColor ">${item.price}</h5>
                        <h2 className="text-lg font-bold">{item.title}</h2>
                      </div>
                      <div>
                        <p>{item.content}</p>
                      </div>
                      <div className=" ml-4 ">
                        <ul className=" list-disc ">
                          <li>Away behind the word</li>
                          <li>Bookmarksgrove right at the coast</li>
                          <li>Separated they live</li>
                          <li>Live the life You Want</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className=" rounded-xl h-[400px] overflow-hidden ">
                    <img
                      src={PART2}
                      alt=""
                      className="rounded-xl h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-6 text-left">
                    <div>
                      <h5 className="text-btnColor ">$200.99</h5>
                      <h2 className="text-lg font-bold">Birthday Party</h2>
                    </div>
                    <div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                    <div className=" ml-4 ">
                      <ul className=" list-disc ">
                        <li>Away behind the word</li>
                        <li>Bookmarksgrove right at the coast</li>
                        <li>Separated they live</li>
                        <li>Live the life You Want</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
      <Services />
    </section>
  );
};

export default Events;
