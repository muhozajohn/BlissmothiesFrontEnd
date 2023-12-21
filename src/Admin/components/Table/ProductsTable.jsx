
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductBody from "./ProductBody";
const ProductsTable = () => {
  // getProduct
  const [product, setProduct] = useState([]);
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    const getMenu = async () => {
      try {
        setIsloading(true);
        const getMenuData = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/menu/read"
        );
        const response = await getMenuData.data.data;
        if (response) {
          setIsloading(false);
        }
        setProduct(response);
      } catch (error) {
        setIsloading(false);
        console.log("Failed to fetch Data", error);
      }
    };
    getMenu();
  }, []);

  // modal
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };


  

  return (
    <div className="flex flex-col">
      
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light cursor-pointer">
              <thead className="border-b font-medium dark:border-neutral-500  hover:bg-neutral-800 hover:text-white">
                <tr>
                  <th>#PID</th>
                  <th
                    scope="col"
                    // colSpan="2"
                    className="whitespace-nowrap px-6 py-4"
                  >
                    Product Name
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Product Owner
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Category
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Price
                  </th>{" "}
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Created On
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.length ? (
                  product.map((item, index) => (
                    <ProductBody pitem={item} index={index} key={index} />
                  ))
                ) : (
                  <div className=" mt-5 flex justify-center items-center w-full text-center  ">
                    <PulseLoader color="#F06C05" loading={loading} size={10} />
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default ProductsTable;
