import D1 from "../assets/images/dessert_1.png";
import D2 from "../assets/images/dessert_2.png";
import D3 from "../assets/images/dessert_4.png";
import D4 from "../assets/images/dessert_5.png";

const Deserts = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <p className="text-sm font-bold">Choose Deserts</p>
          <h2 className="font-[800] text-xl">
            Popular <span className="text-btnColor">Deserts</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
          <div className="px-5 py-3 bg-transparent border border-black rounded-xl hover:bg-white cursor-pointer flex items-center gap-2 justify-center">
            <img src={D1} alt="" />
            <div>
              <p className=" font-semibold ">Cherry Muffin</p>
              <small className=" font-medium ">
                Price : <span className="text-btnColor">$50</span>
              </small>
            </div>
          </div>
          <div className="px-5 py-3 bg-transparent border border-black rounded-xl hover:bg-white cursor-pointer flex items-center gap-2 justify-center">
            <img src={D2} alt="" />
            <div>
              <p className=" font-semibold ">Rosse Muffin</p>
              <small className=" font-medium ">
                Price : <span className="text-btnColor">$50</span>
              </small>
            </div>
          </div>
          <div className="px-5 py-3 bg-transparent border border-black rounded-xl hover:bg-white cursor-pointer flex items-center gap-2 justify-center">
            <img src={D3} alt="" />
            <div>
              <p className=" font-semibold ">Choko Cake</p>
              <small className=" font-medium ">
                Price : <span className="text-btnColor">$50</span>
              </small>
            </div>
          </div>
          <div className="px-5 py-3 bg-transparent border border-black rounded-xl hover:bg-white cursor-pointer flex items-center gap-2 justify-center">
            <img src={D4} alt="" />
            <div>
              <p className=" font-semibold ">Sweet Donut</p>
              <small className=" font-medium ">
                Price : <span className="text-btnColor">$50</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deserts;
