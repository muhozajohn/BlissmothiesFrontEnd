import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import formatDate from "../../../components/date/Date";
import PulseLoader from "react-spinners/PulseLoader";
const Testimonioals = () => {
  const [testimonials, Settestimonials] = useState([]);
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    const getTestimonials = async () => {
      try {
        setIsloading(true);
        const getAll = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/Testmoniols/read"
        );
        const reaponse = await getAll.data.data;
        Settestimonials(reaponse);
        setIsloading(false);
      } catch (error) {
        console.log("Failed to Getin ", error);
        setIsloading(false);
      }
    };
    getTestimonials();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light cursor-pointer">
              <thead className="border-b font-medium dark:border-neutral-500  hover:bg-neutral-800 hover:text-white">
                <tr>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    #TID
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Testimonials Owner
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Testimonials
                  </th>

                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Created On
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {testimonials.length ? (
                  testimonials.map((test, index) => (
                    <tr
                      key={index}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {test.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {test.comment.length > 50
                          ? `${test.comment.substring(0, 50)}...`
                          : test.comment}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {formatDate(test.createdAt)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-1">
                          <div
                            className="rounded-sm py-2 px-2 bg-btnColor text-white w-fit"
                            onClick={(e) => {
                              //   deleteData(item._id);
                            }}
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="mt-5 flex justify-center items-center w-full text-center">
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

export default Testimonioals;
