import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import EmailCard from "./EmailCard";
const Email = () => {
  const [loading, setIsloading] = useState(false);
  const [contact, seTcontact] = useState([]);
  console.log("all contact", contact);
  useEffect(() => {
    const getAllEmail = async () => {
      try {
        setIsloading(true);
        const getAll = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/contact/read/"
        );
        const response = await getAll.data.data;
        if (response) {
          seTcontact(response);
          setIsloading(false);
        }
      } catch (error) {
        console.log("Failed", error);
        setIsloading(false);
      }
    };
    getAllEmail();
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
                    #EID
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Owner
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Email
                  </th>

                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Message
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
                {contact.length ? (
                  contact.map((item, index) => (
                   <EmailCard  key={index} item={item} index={index} />
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

export default Email;
