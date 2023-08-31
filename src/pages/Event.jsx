import PART from "../assets/images/b.jpg";
import PART1 from "../assets/images/chiefb.jpg";
import PART2 from "../assets/images/chiefa.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Events = () => {
  return (
    <section>
      <div className="container text-center flex flex-col gap-1">
        <h4 className=" text-gray-500 text-lg font-semibold ">EVENTS</h4>
        <h2 className="text-2xl font-bold">
          Enjoy <span className="text-btnColor">Our Events</span>
        </h2>
        <p className="lg:w-1/2 w-full mx-auto font-semibold ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
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
            <SwiperSlide>
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" rounded-xl h-[400px] overflow-hidden ">
                  <img src={PART2} alt="" className="rounded-xl " />
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
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
            <SwiperSlide>
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" rounded-xl h-[400px] overflow-hidden">
                  <img src={PART} alt="" className="rounded-xl" />
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
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
            <SwiperSlide>
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" rounded-xl h-[400px] overflow-hidden">
                  <img src={PART} alt="" className="rounded-xl" />
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
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
            <SwiperSlide>
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" rounded-xl h-[400px] overflow-hidden ">
                  <img src={PART1} alt="" className="rounded-xl" />
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
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Events;
