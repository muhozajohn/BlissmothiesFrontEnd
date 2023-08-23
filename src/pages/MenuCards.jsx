import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import A from "../assets/images/a.jpg";
import B from "../assets/images/b.jpg";
import C from "../assets/images/c.jpg";
import D from "../assets/images/d.jpg";
import E from "../assets/images/e.jpg";
const MenuCards = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mt-10">
      <div className="px-4 py-4 relative bg-white rounded-lg flex flex-col gap-5">
        <div className="flex justify-between items-center relative">
          <div>
            <h5 className="text-[14px] font-[600]">Milk Shakes</h5>
            <div className="flex gap-3 items-center cursor-pointer text-[12px]">
              <span className="flex flex-col">
                <AiOutlineHeart />
              </span>
              <p className="flex items-center  gap-1">
                <AiFillStar className="text-btnColor" /> 4.5
              </p>
            </div>
          </div>
          <img
            src={A}
            alt=""
            className="w-20 h-20 absolute rounded-2xl right-0 top-[-1.7rem]"
          />
        </div>
        <p className="mt-3 leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ab
          corporis nulla accusamus dignissimos nesciunt.
        </p>
        <div className="flex justify-between items-center">
          <p>$85.00</p>
          <div className="flex items-center justify-center border border-black px-2 rounded-xl py-1 cursor-pointer hover:bg-btnColor hover:border-btnColor hover:text-white">
            Add to Cart
          </div>
        </div>
      </div>
      <div className="px-4 py-4 relative bg-white rounded-lg flex flex-col gap-5">
        <div className="flex justify-between items-center relative">
          <div>
            <h5 className="text-[14px] font-[600]">Milk Shakes</h5>
            <div className="flex gap-3 items-center cursor-pointer text-[12px]">
              <span className="flex flex-col">
                <AiOutlineHeart />
              </span>
              <p className="flex items-center  gap-1">
                <AiFillStar className="text-btnColor" /> 4.5
              </p>
            </div>
          </div>
          <img
            src={B}
            alt=""
            className="w-20 h-20 absolute rounded-2xl right-0 top-[-1.7rem]"
          />
        </div>
        <p className="mt-3 leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ab
          corporis nulla accusamus dignissimos nesciunt.
        </p>
        <div className="flex justify-between items-center">
          <p>$85.00</p>
          <div className="flex items-center justify-center border border-black px-2 rounded-xl py-1 cursor-pointer hover:bg-btnColor hover:border-btnColor hover:text-white">
            Add to Cart
          </div>
        </div>
      </div>
      <div className="px-4 py-4 relative bg-white rounded-lg flex flex-col gap-5">
        <div className="flex justify-between items-center relative">
          <div>
            <h5 className="text-[14px] font-[600]">Milk Shakes</h5>
            <div className="flex gap-3 items-center cursor-pointer text-[12px]">
              <span className="flex flex-col">
                <AiOutlineHeart />
              </span>
              <p className="flex items-center  gap-1">
                <AiFillStar className="text-btnColor" /> 4.5
              </p>
            </div>
          </div>
          <img
            src={C}
            alt=""
            className="w-20 h-20 absolute rounded-2xl right-0 top-[-1.7rem]"
          />
        </div>
        <p className="mt-3 leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ab
          corporis nulla accusamus dignissimos nesciunt.
        </p>
        <div className="flex justify-between items-center">
          <p>$85.00</p>
          <div className="flex items-center justify-center border border-black px-2 rounded-xl py-1 cursor-pointer hover:bg-btnColor hover:border-btnColor hover:text-white">
            Add to Cart
          </div>
        </div>
      </div>
      <div className="px-4 py-4 relative bg-white rounded-lg flex flex-col gap-5">
        <div className="flex justify-between items-center relative">
          <div>
            <h5 className="text-[14px] font-[600]">Milk Shakes</h5>
            <div className="flex gap-3 items-center cursor-pointer text-[12px]">
              <span className="flex flex-col">
                <AiOutlineHeart />
              </span>
              <p className="flex items-center  gap-1">
                <AiFillStar className="text-btnColor" /> 4.5
              </p>
            </div>
          </div>
          <img
            src={D}
            alt=""
            className="w-20 h-20 absolute rounded-2xl right-0 top-[-1.7rem]"
          />
        </div>
        <p className="mt-3 leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ab
          corporis nulla accusamus dignissimos nesciunt.
        </p>
        <div className="flex justify-between items-center">
          <p>$85.00</p>
          <div className="flex items-center justify-center border border-black px-2 rounded-xl py-1 cursor-pointer hover:bg-btnColor hover:border-btnColor hover:text-white">
            Add to Cart
          </div>
        </div>
      </div>
      <div className="px-4 py-4 relative bg-white rounded-lg flex flex-col gap-5">
        <div className="flex justify-between items-center relative">
          <div>
            <h5 className="text-[14px] font-[600]">Milk Shakes</h5>
            <div className="flex gap-3 items-center cursor-pointer text-[12px]">
              <span className="flex flex-col">
                <AiOutlineHeart />
              </span>
              <p className="flex items-center  gap-1">
                <AiFillStar className="text-btnColor" /> 4.5
              </p>
            </div>
          </div>
          <img
            src={E}
            alt=""
            className="w-20 h-20 absolute rounded-2xl right-0 top-[-1.7rem]"
          />
        </div>
        <p className="mt-3 leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ab
          corporis nulla accusamus dignissimos nesciunt.
        </p>
        <div className="flex justify-between items-center">
          <p>$85.00</p>
          <div className="flex items-center justify-center border border-black px-2 rounded-xl py-1 cursor-pointer hover:bg-btnColor hover:border-btnColor hover:text-white">
            Add to Cart
          </div>
        </div>
      </div>
      <div className="px-4 py-4 relative bg-white rounded-lg flex flex-col gap-5">
        <div className="flex justify-between items-center relative">
          <div>
            <h5 className="text-[14px] font-[600]">Milk Shakes</h5>
            <div className="flex gap-3 items-center cursor-pointer text-[12px]">
              <span className="flex flex-col">
                <AiOutlineHeart />
              </span>
              <p className="flex items-center  gap-1">
                <AiFillStar className="text-btnColor" /> 4.5
              </p>
            </div>
          </div>
          <img
            src={D}
            alt=""
            className="w-20 h-20 absolute rounded-2xl right-0 top-[-1.7rem]"
          />
        </div>
        <p className="mt-3 leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ab
          corporis nulla accusamus dignissimos nesciunt.
        </p>
        <div className="flex justify-between items-center">
          <p>$85.00</p>
          <div className="flex items-center justify-center border border-black px-2 rounded-xl py-1 cursor-pointer hover:bg-btnColor hover:border-btnColor hover:text-white">
            Add to Cart
          </div>
        </div>
      </div>
      <div className="px-4 py-4 relative bg-white rounded-lg flex flex-col gap-5">
        <div className="flex justify-between items-center relative">
          <div>
            <h5 className="text-[14px] font-[600]">Milk Shakes</h5>
            <div className="flex gap-3 items-center cursor-pointer text-[12px]">
              <span className="flex flex-col">
                <AiOutlineHeart />
              </span>
              <p className="flex items-center  gap-1">
                <AiFillStar className="text-btnColor" /> 4.5
              </p>
            </div>
          </div>
          <img
            src={B}
            alt=""
            className="w-20 h-20 absolute rounded-2xl right-0 top-[-1.7rem]"
          />
        </div>
        <p className="mt-3 leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ab
          corporis nulla accusamus dignissimos nesciunt.
        </p>
        <div className="flex justify-between items-center">
          <p>$85.00</p>
          <div className="flex items-center justify-center border border-black px-2 rounded-xl py-1 cursor-pointer hover:bg-btnColor hover:border-btnColor hover:text-white">
            Add to Cart
          </div>
        </div>
      </div>
      <div className="px-4 py-4 relative bg-white rounded-lg flex flex-col gap-5">
        <div className="flex justify-between items-center relative">
          <div>
            <h5 className="text-[14px] font-[600]">Milk Shakes</h5>
            <div className="flex gap-3 items-center cursor-pointer text-[12px]">
              <span className="flex flex-col">
                <AiOutlineHeart />
              </span>
              <p className="flex items-center  gap-1">
                <AiFillStar className="text-btnColor" /> 4.5
              </p>
            </div>
          </div>
          <img
            src={A}
            alt=""
            className="w-20 h-20 absolute rounded-2xl right-0 top-[-1.7rem]"
          />
        </div>
        <p className="mt-3 leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ab
          corporis nulla accusamus dignissimos nesciunt.
        </p>
        <div className="flex justify-between items-center">
          <p>$85.00</p>
          <div className="flex items-center justify-center border border-black px-2 rounded-xl py-1 cursor-pointer hover:bg-btnColor hover:border-btnColor hover:text-white">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCards;
