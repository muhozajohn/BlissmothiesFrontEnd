import { useEffect, useState } from "react";
import EventsTable from "../components/Table/EventsTable";
import axios from "axios";
import EventModal from "../components/modals/EventModal";
import PulseLoader from "react-spinners/PulseLoader";
const DashEvents = () => {
  const [event, setEvent] = useState([]);
  const [loading, setIsloading] = useState(false);
  console.log("Events", event);
  useEffect(() => {
    const getAll = async () => {
      try {
        setIsloading(true);
        const getEvent = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/event/read"
        );
        const response = await getEvent.data.data;
        setEvent(response);
        setIsloading(false);
      } catch (error) {
        console.log("Failed to Get Event", error);
      }
    };
    getAll();
  }, []);
  return (
    <>
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
                      Banner
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Content
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Created On
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                {event.length ? (
                  event.map((item, index) => (
                    <EventsTable EventItem={item} index={index} />
                  ))
                ) : (
                  <div className=" mt-5 flex justify-center items-center w-full text-center  ">
                    <PulseLoader color="#F06C05" loading={loading} size={10} />
                  </div>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
      <EventModal />
    </>
  );
};

export default DashEvents;
