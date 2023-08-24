import A from "../../assets/images/a.jpg";
import B from "../../assets/images/b.jpg";
import C from "../../assets/images/c.jpg";
import D from "../../assets/images/d.jpg";
import E from "../../assets/images/e.jpg";
import chiefa from "../../assets/images/chiefa.jpg";
import chiefb from "../../assets/images/chiefb.jpg";
import chiefc from "../../assets/images/chiefc.jpg";
import F from "../../assets/images/overlay.png";

const Gallery = () => {
  return (
    <div>
      <div className=" w-full bgg bg-cover bg-no-repeat bg-center h-[40vh]   top-0 z-[-10] rounded-b-xl">
        <div className=" w-full h-full rounded-b-3xl flex justify-center items-center">
          <h1 className="text-white font-semibold text-5xl">Gallery</h1>
        </div>
      </div>
      <div className="container">
        <div className="w-full gap-5 p-5 columns-1 md:columns-2 lg:columns-3 xl:columns-5 space-y-5 ">
          <img src={A} alt="" />
          <img src={B} alt="" />
          <img src={C} alt="" />
          <img src={C} alt="" />
          <img src={D} alt="" />
          <img src={D} alt="" />
          <img src={chiefc} alt="" />
          <img src={chiefa} alt="" />
          <img src={chiefa} alt="" />
          <img src={chiefc} alt="" />
          <img src={chiefb} alt="" />
          <img src={E} alt="" />
          <img src={F} alt="" />
          <img src={F} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
