import axios from "axios";
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
const Gallery = () => {
  const [album, setAlbum] = useState([]);
  const [loading, setIsloading] = useState(false);
  console.log("Album", album);
  useEffect(() => {
    const getAlbum = async () => {
      try {
        setIsloading(true);
        const geetIt = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/album/read"
        );
        const response = await geetIt.data.data;
        if (response) setIsloading(false);
        setAlbum(response);
      } catch (error) {
        setIsloading(false);
        console.log("Failed to get Data", error);
      }
    };
    getAlbum();
  }, []);
  return (
    <div>
      <div className=" w-full bgg bg-cover bg-no-repeat bg-center h-[40vh]   top-0 z-[-10] rounded-b-xl">
        <div className=" w-full h-full rounded-b-3xl flex justify-center items-center">
          <h1 className="text-white font-semibold text-5xl">Gallery</h1>
        </div>
      </div>
      <div className="container">
        <div className="w-full gap-5 p-5 columns-1 md:columns-2 lg:columns-3 xl:columns-5 space-y-5 ">
          {album.length ? (
            album.map((item, index) => (
              <img key={index} src={item.galleryImage} alt="" />
            ))
          ) : (
            <section className="flex justify-center items-center w-full text-center  ">
              <PulseLoader color="#F06C05" loading={loading} size={10} />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
